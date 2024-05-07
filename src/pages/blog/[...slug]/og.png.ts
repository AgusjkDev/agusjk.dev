import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "@vercel/og";
import { getCollection, type CollectionEntry } from "astro:content";

import { siteConfig } from "@/config";

export async function GET({
    props,
}: {
    params: { slug: CollectionEntry<"blog">["slug"] };
    props: { post: CollectionEntry<"blog"> };
}) {
    const { data } = props.post;

    const html = {
        type: "div",
        props: {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                background: `radial-gradient(100% 75% at 50%, rgba(${data.color}, 0.33), rgb(7, 8, 10))`,
            },
            children: [
                {
                    type: "span",
                    props: {
                        style: {
                            color: "#ffffff",
                            fontWeight: "700",
                            fontSize: "64px",
                            fontFamily: "Inter",
                        },
                        children: data.title,
                    },
                },
                {
                    type: "span",
                    props: {
                        style: {
                            position: "absolute",
                            bottom: "24px",
                            right: "24px",
                            color: "#ffffff",
                            fontWeight: "700",
                            fontSize: "24px",
                            fontFamily: "Inter",
                        },
                        children: `By ${siteConfig.author}`,
                    },
                },
            ],
        },
    };

    return new ImageResponse(html, {
        width: 1500,
        height: 550,
        fonts: [
            {
                name: "Inter",
                data: (await fs.readFile(path.resolve("./public/fonts/Inter-Bold.ttf"))).buffer,
                weight: 700,
                style: "normal",
            },
        ],
    });
}

export async function getStaticPaths() {
    const posts = await getCollection("blog");

    return posts.map(post => ({
        params: { slug: post.slug },
        props: { post },
    }));
}
