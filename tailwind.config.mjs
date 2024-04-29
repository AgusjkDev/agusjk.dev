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
                primary: "var(--primary)",
                background: "var(--background)",
                foreground: {
                    DEFAULT: "var(--foreground)",
                    muted: "var(--foreground-muted)",
                },
                border: "var(--border)",
            },
        },
    },
    plugins: [],
};
