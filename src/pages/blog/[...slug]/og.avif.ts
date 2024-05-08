import { getCollection, type CollectionEntry } from "astro:content";

import og, { COLORS } from "@/lib/og";

export async function GET({
    props,
}: {
    params: { slug: CollectionEntry<"blog">["slug"] };
    props: { post: CollectionEntry<"blog"> };
}) {
    const { title, color } = props.post.data;

    return og({
        title,
        maxWidth: `${100 / 1.5}%`,
        background: `radial-gradient(100% 75% at 50%, rgba(${color}, 0.33), rgb(${COLORS.background}))`,
        fontSize: "150px",
    });
}

export async function getStaticPaths() {
    const posts = await getCollection("blog");

    return posts.map(post => ({
        params: { slug: post.slug },
        props: { post },
    }));
}
