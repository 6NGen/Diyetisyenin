import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Vercel preview ve development dağıtımları indekslenmez: aynı içeriğin
  // ikinci bir adreste görünmesi, asıl alan adının sıralamasına zarar verir.
  // VERCEL_ENV tanımsızsa (yerel derleme, başka bir sunucu) indekslemeye
  // BİLEREK dokunulmaz — yanlışlıkla üretimi kapatmamak için.
  const ortam = process.env.VERCEL_ENV;
  const onizleme = ortam === "preview" || ortam === "development";

  if (onizleme) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
