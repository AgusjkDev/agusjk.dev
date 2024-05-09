import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SITE_URL: site } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
    site,
    integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
    markdown: { shikiConfig: { theme: "github-dark-default" } },
});
