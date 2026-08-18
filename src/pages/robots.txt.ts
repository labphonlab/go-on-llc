import type { APIRoute } from "astro";
import { u } from "../lib/url";

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(u("/sitemap.xml"), site).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
