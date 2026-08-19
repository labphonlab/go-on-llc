import type { APIRoute } from "astro";
import { u } from "../lib/url";
import { LANGS } from "../i18n";

/** Hand-kept list — the site is small, so this beats pulling in an integration. */
const paths = [
  { path: "/", priority: "1.0" },
  { path: "/products", priority: "0.9" },
  { path: "/books", priority: "0.9" },
  { path: "/research", priority: "0.8" },
  { path: "/support", priority: "0.8" },
  { path: "/about", priority: "0.7" },
  { path: "/contact", priority: "0.7" },
  { path: "/speechlab", priority: "0.5" },
  { path: "/gotan-ko", priority: "0.5" },
  { path: "/hanbun", priority: "0.5" },
  { path: "/osaat-en", priority: "0.5" },
  { path: "/privacy", priority: "0.4" },
  { path: "/legal", priority: "0.3" },
];

export const GET: APIRoute = ({ site }) => {
  const urls = paths
    .flatMap(({ path, priority }) =>
      LANGS.map((lang) => {
        const loc = new URL(u(path, lang), site).href;
        // 各URLに、対応する別言語版を hreflang で添える。
        const alternates = LANGS.map(
          (other) =>
            `    <xhtml:link rel="alternate" hreflang="${other}" href="${new URL(u(path, other), site).href}"/>`
        ).join("\n");
        return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n    <priority>${priority}</priority>\n  </url>`;
      })
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
