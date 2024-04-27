import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.astro"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...fontFamily.sans],
            },
            colors: {
                background: "#07080a",
                foreground: {
                    DEFAULT: "#ffffff",
                    muted: "#e6e6e6",
                },
            },
        },
    },
    plugins: [],
};
