import { DEFAULT_LANG, type Lang } from "../i18n";

/**
 * Base-aware, locale-aware internal links.
 *
 * サイトは2通りの配信先（独自ドメイン `/` と プロジェクトパス `/go-on-llc/`）と
 * 2言語（`/` と `/en/`）の組み合わせで出るため、内部リンクは必ずここを通す。
 */
const BASE = import.meta.env.BASE_URL;

const isExternal = (path: string) =>
  /^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith("//") || path.startsWith("#");

export function u(path = "/", lang: Lang = DEFAULT_LANG): string {
  if (isExternal(path)) return path;
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  const locale = lang === DEFAULT_LANG ? "" : `/${lang}`;
  const rest = path.startsWith("/") ? path : `/${path}`;
  // 言語プレフィックスだけの場合は末尾のスラッシュを落とさない（"/en/" ではなく "/en"）
  return `${base}${locale}${rest === "/" && locale ? "" : rest}`;
}

/** 同じページの別言語版へのURL。hreflang と言語切り替えに使う。 */
export function alt(path: string, lang: Lang): string {
  return u(path, lang);
}
