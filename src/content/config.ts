import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        category: z.string(),
        color: z.string(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
    }),
});

export const collections = { blog };
