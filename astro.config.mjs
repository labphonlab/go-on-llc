// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

/*
 * Two deploy targets, one codebase:
 *
 *   default            → apex custom domain (https://goonresearch.jp/), base "/"
 *   SITE_BASE=/go-on-llc/ SITE_URL=https://labphonlab.github.io
 *                      → GitHub Pages project path, used while the apex DNS
 *                        is not yet pointing at GitHub Pages.
 *
 * Internal links must go through `u()` in src/lib/url.ts so both work.
 * When changing the custom domain, update public/CNAME to match `site`.
 */
const site = process.env.SITE_URL ?? "https://goonresearch.jp";
const base = process.env.SITE_BASE ?? "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
