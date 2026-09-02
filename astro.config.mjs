// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.best-time-to-visit-china.com",
  // "ignore" serves both /path and /path/ — fixes 404s from no-trailing-slash
  // links (e.g. React island hrefs, dynamic template links) without changing
  // the canonical (folder-based routes still emit /path/ as canonical).
  trailingSlash: "ignore",
  integrations: [react(), sitemap({
    filter: (page) => !page.includes("/404"),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
