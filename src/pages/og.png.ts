import { siteConfig } from "@/config";
import og from "@/lib/og";

export async function GET() {
    return og({ title: siteConfig.author, subtitle: "Software Developer" });
}
