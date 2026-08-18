#!/usr/bin/env node
/**
 * 公開中のサイトが実際に配信できているかを外から確かめる。
 *
 *   LIVE_URL=https://labphonlab.github.io/go-on-llc/ node scripts/health-check.mjs
 *
 * sitemap.xml を起点に全ページを取得し、200 以外があれば異常終了する。
 * あわせて独自ドメインの A レコードを見て、GitHub Pages に向いているかを報告する。
 * 向き始めた場合、monitor.yml が deploy を起動して独自ドメインへ自動で切り替える。
 */
import { resolve4 } from "node:dns/promises";

const LIVE_URL = process.env.LIVE_URL ?? "https://labphonlab.github.io/go-on-llc/";
const APEX = process.env.APEX_DOMAIN ?? "goonresearch.jp";

/** GitHub Pages の apex 用 A レコード。 */
const PAGES_IPS = ["185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153"];

const failures = [];
const notes = [];

async function get(url) {
  return fetch(url, {
    redirect: "follow",
    headers: { "user-agent": "goonresearch-web health check" },
    signal: AbortSignal.timeout(30000),
  });
}

// --- 1. サイトマップと全ページ ---
const sitemapUrl = new URL("sitemap.xml", LIVE_URL).href;
let pages = [];
try {
  const res = await get(sitemapUrl);
  if (!res.ok) {
    failures.push(`sitemap.xml が ${res.status}: ${sitemapUrl}`);
  } else {
    const xml = await res.text();
    pages = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (pages.length === 0) failures.push(`sitemap.xml に URL がありません: ${sitemapUrl}`);
  }
} catch (err) {
  failures.push(`sitemap.xml を取得できません: ${sitemapUrl} (${err.message})`);
}

for (const page of pages) {
  try {
    const res = await get(page);
    if (!res.ok) failures.push(`${res.status}: ${page}`);
  } catch (err) {
    failures.push(`取得不可: ${page} (${err.message})`);
  }
}
notes.push(`確認したページ: ${pages.length}件（起点 ${LIVE_URL}）`);

// --- 2. 独自ドメインの向き先 ---
try {
  const addresses = await resolve4(APEX);
  const pointsToPages = PAGES_IPS.every((ip) => addresses.includes(ip));
  notes.push(`${APEX} の A レコード: ${addresses.join(", ")}`);
  if (pointsToPages) {
    notes.push(
      `${APEX} は GitHub Pages を向いています。deploy.yml が配信先をDNSから判定するため、次のデプロイで独自ドメインへ切り替わります。`
    );
  } else {
    notes.push(`${APEX} は GitHub Pages 以外を向いています。設定を確認してください。`);
  }
} catch (err) {
  notes.push(
    `${APEX} は名前解決できません（Aレコード未設定）。公開URLは ${LIVE_URL} のままです。Aレコードを追加すれば自動で切り替わります。`
  );
}

console.log(notes.map((n) => `・${n}`).join("\n"));

if (failures.length) {
  console.error(`\n${failures.length}件の異常:`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("\nサイトは正常に配信されています。");
