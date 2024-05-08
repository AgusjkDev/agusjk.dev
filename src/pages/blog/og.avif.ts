import { siteConfig } from "@/config";
import og from "@/lib/og";

export async function GET() {
    return og({ title: "Blog", subtitle: siteConfig.author });
}
