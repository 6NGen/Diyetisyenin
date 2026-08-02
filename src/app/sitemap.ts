import type { MetadataRoute } from "next";
import { PAKETLER } from "@/content/paketler";
import { SITE_URL } from "@/content/site";
import { tumYazilar } from "@/lib/yazilar";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const guncelleme = new Date();

  const sabitSayfalar: {
    yol: string;
    oncelik: number;
    siklik: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { yol: "/", oncelik: 1, siklik: "monthly" },
    { yol: "/randevu", oncelik: 0.9, siklik: "monthly" },
    { yol: "/paketler", oncelik: 0.9, siklik: "monthly" },
    { yol: "/yontem", oncelik: 0.8, siklik: "monthly" },
    { yol: "/sunnet-uzere-sofra", oncelik: 0.8, siklik: "yearly" },
    { yol: "/hakkimda", oncelik: 0.7, siklik: "yearly" },
    { yol: "/sss", oncelik: 0.7, siklik: "monthly" },
    { yol: "/iletisim", oncelik: 0.7, siklik: "yearly" },
    { yol: "/yazilar", oncelik: 0.6, siklik: "weekly" },
    { yol: "/kvkk", oncelik: 0.2, siklik: "yearly" },
    { yol: "/cerez-politikasi", oncelik: 0.2, siklik: "yearly" },
    { yol: "/mesafeli-satis", oncelik: 0.2, siklik: "yearly" },
    { yol: "/iptal-ve-iade", oncelik: 0.2, siklik: "yearly" },
  ];

  return [
    ...sabitSayfalar.map((sayfa) => ({
      url: `${SITE_URL}${sayfa.yol}`,
      lastModified: guncelleme,
      changeFrequency: sayfa.siklik,
      priority: sayfa.oncelik,
    })),
    ...PAKETLER.map((paket) => ({
      url: `${SITE_URL}/paketler/${paket.slug}`,
      lastModified: guncelleme,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...tumYazilar().map((yazi) => ({
      url: `${SITE_URL}/yazilar/${yazi.slug}`,
      lastModified: new Date(`${yazi.date}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
