// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Custom apex domain. Change this if your domain differs.
  // (Also update public/CNAME to match.)
  site: "https://goonresearch.jp",
  // Apex/custom domain serves from root, so no `base` is needed.
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
