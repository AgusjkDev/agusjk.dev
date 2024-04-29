import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.astro"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...fontFamily.sans],
            },
            fontSize: {
                title: [
                    "clamp(32px, 10vw, 68px)",
                    {
                        fontWeight: "700",
                        letterSpacing: "-0.025em",
                        lineHeight: "1.2",
                    },
                ],
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
                "fade-in": "fade-in 2s both",
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
                "fade-in": {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
            },
        },
    },
    plugins: [],
};
