#!/usr/bin/env node
/**
 * Link checker for the built site.
 *
 *   node scripts/check-links.mjs              内部リンクのみ（ビルド後、依存なし・オフライン）
 *   node scripts/check-links.mjs --external   外部リンクも到達確認する（定期実行用）
 *
 * 内部リンクは dist/ 上に実体があるかを見る。base 付きビルド（/go-on-llc/）でも
 * そのまま通るように、先頭の base を剥がしてから解決する。
 */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const checkExternal = process.argv.includes("--external");

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

/** dist/index.html の <link rel="canonical"> から公開URL（origin と base）を推定する。 */
async function detectSite() {
  const home = path.join(DIST, "index.html");
  if (!existsSync(home)) return { origin: null, base: "/" };
  const html = await readFile(home, "utf8");
  const m = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!m) return { origin: null, base: "/" };
  try {
    const url = new URL(m[1]);
    return { origin: url.origin, base: url.pathname || "/" };
  } catch {
    return { origin: null, base: "/" };
  }
}

function resolveInternal(href, base) {
  const [pathPart] = href.split("#");
  if (!pathPart) return null; // pure fragment
  let rel = pathPart;
  if (base !== "/" && rel.startsWith(base)) rel = rel.slice(base.length - 1);
  rel = rel.replace(/^\//, "").replace(/\/$/, "");
  if (rel === "") rel = "index.html";
  const candidates = [
    path.join(DIST, rel),
    path.join(DIST, rel, "index.html"),
    path.join(DIST, `${rel}.html`),
  ];
  return candidates.some(existsSync) ? null : pathPart;
}

const files = await htmlFiles(DIST);
const { origin, base } = await detectSite();
const problems = [];
const external = new Set();

for (const file of files) {
  const html = await readFile(file, "utf8");
  const where = path.relative(DIST, file);

  // preconnect / dns-prefetch は取得対象のページではなく接続先オリジンなので除く。
  const skip = new Set(
    [...html.matchAll(/<link[^>]*rel="(?:preconnect|dns-prefetch)"[^>]*>/g)]
      .flatMap((tag) => [...tag[0].matchAll(/href="([^"]+)"/g)].map((h) => h[1]))
  );

  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    let href = m[1];
    if (href.startsWith("#") || href.startsWith("data:") || href.startsWith("mailto:")) continue;
    if (skip.has(href)) continue;
    if (href.startsWith("//")) href = `https:${href}`;

    if (/^https?:\/\//.test(href)) {
      // 自サイトへの絶対URL（canonical 等）は dist 上の実体で確かめる。
      // 同一オリジンでも base の外は別サイト（例: labphonlab.github.io/praat_ja/）。
      if (origin && href.startsWith(origin + (base === "/" ? "/" : base))) {
        const missing = resolveInternal(href.slice(origin.length), base);
        if (missing) problems.push(`${where}: 自サイトへのリンク切れ ${missing}`);
      } else {
        external.add(href);
      }
      continue;
    }
    const missing = resolveInternal(href, base);
    if (missing) problems.push(`${where}: 内部リンク切れ ${missing}`);
  }
}

console.log(`site=${origin ?? "(不明)"}${base}  HTMLファイル ${files.length}件  外部リンク ${external.size}件`);

if (checkExternal) {
  for (const url of [...external].sort()) {
    // Google Fonts の CSS は UA 依存で HEAD を返さないことがあるため GET で確かめる。
    try {
      const res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "goonresearch-web link check" },
        signal: AbortSignal.timeout(20000),
      });
      if (!res.ok) problems.push(`外部リンク ${res.status}: ${url}`);
    } catch (err) {
      problems.push(`外部リンク到達不可: ${url} (${err.message})`);
    }
  }
}

if (problems.length) {
  console.error(`\n${problems.length}件の問題:`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log("リンクに問題なし");
