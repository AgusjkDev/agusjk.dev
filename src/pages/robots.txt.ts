const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE_URL).href}
`.trim();

export async function GET() {
    return new Response(robotsTxt, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
