import type { APIRoute } from "astro";
import { u } from "../lib/url";

/** Hand-kept list — the site is small, so this beats pulling in an integration. */
const paths = [
  { path: "/", priority: "1.0" },
  { path: "/products", priority: "0.9" },
  { path: "/tools", priority: "0.9" },
  { path: "/research", priority: "0.8" },
  { path: "/support", priority: "0.8" },
  { path: "/about", priority: "0.7" },
  { path: "/contact", priority: "0.7" },
  { path: "/legal", priority: "0.3" },
];

export const GET: APIRoute = ({ site }) => {
  const urls = paths
    .map(({ path, priority }) => {
      const loc = new URL(u(path), site).href;
      return `  <url>\n    <loc>${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
