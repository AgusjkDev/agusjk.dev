/** @type {import("prettier").Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
const config = {
    arrowParens: "avoid",
    endOfLine: "crlf",
    printWidth: 100,
    tabWidth: 4,
    importOrder: ["<THIRD_PARTY_MODULES>", "", "^@/(.*)$", "^@/styles/(.*)$", "", "^[./]"],
    importOrderParserPlugins: ["typescript"],
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-astro",
        "prettier-plugin-tailwindcss",
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

export default config;
