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
            animation: {
                "background-shine": "background-shine 2s linear infinite",
            },
            keyframes: {
                "background-shine": {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
            },
        },
    },
    plugins: [],
};
