/**
 * 2言語（日本語・英語）の土台。
 *
 * ルーティングは `src/pages/[...lang]/` の rest param で行う。`lang` が
 * undefined なら日本語（`/products`）、`"en"` なら英語（`/en/products`）。
 * ページは1ファイルで両言語を生成するので、テンプレートが二重にならない。
 */
export const LANGS = ["ja", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "ja";

/** 両言語ぶんの文字列。表示時に `t()` で取り出す。 */
export type L = { ja: string; en: string };

export const t = (value: L, lang: Lang): string => value[lang];

/** ルーティング用。`getStaticPaths` から両言語ぶんを返す。 */
export const localePaths = () => [
  { params: { lang: undefined }, props: { lang: "ja" as Lang } },
  { params: { lang: "en" }, props: { lang: "en" as Lang } },
];

/** URL から言語を判定する（Header など、props を持たない場所用）。 */
export const langFromPath = (pathname: string, base: string): Lang => {
  const rest = pathname.slice(base.replace(/\/$/, "").length);
  return rest === "/en" || rest.startsWith("/en/") ? "en" : "ja";
};

export const htmlLang: Record<Lang, string> = { ja: "ja", en: "en" };

export const ui = {
  siteName: { ja: "合同会社語音", en: "Go-on LLC" },
  siteNameFull: { ja: "合同会社語音", en: "Go-on LLC (合同会社語音)" },
  tagline: {
    ja: "音声・言語・教育を、研究と実践でつなぐ。",
    en: "Connecting speech, language and education through research and practice.",
  },
  skipToContent: { ja: "本文へスキップ", en: "Skip to content" },
  homeAria: { ja: "合同会社語音 ホーム", en: "Go-on LLC home" },
  mainNavAria: { ja: "メインナビゲーション", en: "Main navigation" },
  footerNavAria: { ja: "フッターナビゲーション", en: "Footer navigation" },
  langSwitchAria: { ja: "言語を切り替える", en: "Switch language" },
  readMore: { ja: "詳しく見る", en: "Read more" },
  contactCta: { ja: "お問い合わせフォームへ", en: "Go to the contact form" },
  nav: {
    products: { ja: "プロダクト", en: "Software" },
    books: { ja: "出版", en: "Publishing" },
    research: { ja: "研究", en: "Research" },
    support: { ja: "サポート", en: "Support" },
    about: { ja: "会社概要", en: "About" },
    contact: { ja: "お問い合わせ", en: "Contact" },
  },
  footer: {
    blurb: {
      ja: "音声・言語・教育・情報技術",
      en: "Speech, language, education, technology",
    },
    columns: {
      products: { ja: "プロダクト", en: "Software" },
      research: { ja: "研究", en: "Research" },
      company: { ja: "会社", en: "Company" },
    },
    legalTokusho: {
      ja: "特定商取引法に基づく表記",
      en: "Commercial transactions disclosure",
    },
    legalPrivacy: { ja: "プライバシーポリシー", en: "Privacy policy" },
  },
} satisfies Record<string, unknown>;
