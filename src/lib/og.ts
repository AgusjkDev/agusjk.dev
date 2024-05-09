import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "@vercel/og";
import sharp from "sharp";

export const COLORS = {
    primary: "52, 35, 166",
    background: "7, 8, 10",
    foreground: "255, 255, 255",
};

interface OgProps {
    title: string;
    subtitle?: string;
    maxWidth?: `${number}px` | `${number}%`;
    background?: string;
    fontSize?: `${number}px`;
}

export default async function og({
    title,
    subtitle,
    maxWidth = "75%",
    background = `rgb(${COLORS.background})`,
    fontSize = "196px",
}: OgProps) {
    const html = {
        type: "div",
        props: {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                background,
            },
            children: {
                type: "div",
                props: {
                    style: {
                        maxWidth,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: `rgb(${COLORS.foreground})`,
                        fontSize,
                        textAlign: "center",
                    },
                    children: [
                        {
                            type: "span",
                            props: {
                                children: title,
                            },
                        },
                        ...(subtitle
                            ? [
                                  {
                                      type: "span",
                                      props: {
                                          style: {
                                              background: `linear-gradient(to right, rgb(${COLORS.primary}), rgb(${COLORS.foreground}))`,
                                              backgroundClip: "text",
                                              color: "transparent",
                                          },
                                          children: subtitle,
                                      },
                                  },
                              ]
                            : []),
                    ],
                },
            },
        },
    };

    const image = new ImageResponse(html, {
        width: 2800,
        height: 1600,
        fonts: [
            {
                name: "Inter",
                data: (await fs.readFile(path.resolve("./public/fonts/og/Inter-Bold.ttf"))).buffer,
                weight: 700,
                style: "normal",
            },
        ],
    });

    return new Response(
        await sharp(await image.arrayBuffer())
            .avif()
            .toBuffer(),
        { headers: { "Content-Type": "image/avif" } },
    );
}
