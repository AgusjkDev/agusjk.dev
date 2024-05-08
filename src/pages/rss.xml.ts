import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

import { siteConfig } from "@/config";

export async function GET(context: APIContext) {
    const posts = await getCollection("blog");

    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site!,
        items: posts.map(({ slug, data: { createdAt, ...data } }) => ({
            ...data,
            pubDate: createdAt,
            link: `/blog/${slug}`,
        })),
    });
}
