import { siteConfig } from "@/config";
import og from "@/lib/og";

export async function GET() {
    return og({ title: "About", subtitle: siteConfig.author });
}
