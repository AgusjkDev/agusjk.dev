import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({ applyBaseStyles: false }), mdx()],
    markdown: {
        shikiConfig: {
            theme: "one-dark-pro",
        },
    },
});
