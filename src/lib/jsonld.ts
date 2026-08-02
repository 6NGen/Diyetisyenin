import { SITE, SITE_URL, TAM_AD } from "@/content/site";
import type { Paket } from "@/content/paketler";
import type { SSSMaddesi } from "@/content/sss";

type Json = Record<string, unknown>;

const GUN_ESLEMESI: Record<string, string[]> = {
  Pazartesi: ["Monday"],
  Salı: ["Tuesday"],
  Çarşamba: ["Wednesday"],
  Perşembe: ["Thursday"],
  Cuma: ["Friday"],
  Cumartesi: ["Saturday"],
  Pazar: ["Sunday"],
};

const HAFTA = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
] as const;

/** "Pazartesi–Cuma" → ["Monday",…,"Friday"] ; "Cumartesi" → ["Saturday"] */
function gunleriCoz(gun: string): string[] {
  const parcalar = gun.split(/[–-]/).map((p) => p.trim());
  const bas = parcalar[0];
  const son = parcalar[1];

  if (!bas) return [];
  if (!son) return GUN_ESLEMESI[bas] ?? [];

  const i = HAFTA.indexOf(bas as (typeof HAFTA)[number]);
  const j = HAFTA.indexOf(son as (typeof HAFTA)[number]);
  if (i < 0 || j < 0 || j < i) return [];

  return HAFTA.slice(i, j + 1).flatMap((g) => GUN_ESLEMESI[g] ?? []);
}

/** "09:00–18:00" → { acilis: "09:00", kapanis: "18:00" } ; "Kapalı" → null */
function saatleriCoz(saat: string): { acilis: string; kapanis: string } | null {
  const eslesme = saat.match(/(\d{2}:\d{2})\s*[–-]\s*(\d{2}:\d{2})/);
  if (!eslesme) return null;
  const acilis = eslesme[1];
  const kapanis = eslesme[2];
  if (!acilis || !kapanis) return null;
  return { acilis, kapanis };
}

/** schema.org "Dietitian" — MedicalBusiness alt tipi. layout.tsx içinde basılır. */
export function dietitianJsonLd(): Json {
  const saatler = SITE.calismaSaatleri.flatMap((satir) => {
    const cozulmus = saatleriCoz(satir.saat);
    const gunler = gunleriCoz(satir.gun);
    if (!cozulmus || gunler.length === 0) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: gunler,
        opens: cozulmus.acilis,
        closes: cozulmus.kapanis,
      },
    ];
  });

  return {
    "@context": "https://schema.org",
    "@type": "Dietitian",
    "@id": `${SITE_URL}/#dietitian`,
    name: TAM_AD,
    description: `${SITE.sehir} ve online beslenme danışmanlığı. Ölçüme dayalı, sürdürülebilir beslenme planı.`,
    url: SITE_URL,
    telephone: SITE.telefon,
    email: SITE.eposta,
    priceRange: "₺₺",
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.adres,
      addressLocality: SITE.sehir,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.koordinat.lat,
      longitude: SITE.koordinat.lng,
    },
    areaServed: [
      { "@type": "City", name: SITE.sehir },
      { "@type": "Country", name: "Türkiye" },
    ],
    availableLanguage: { "@type": "Language", name: "Turkish" },
    sameAs: [SITE.instagram],
    openingHoursSpecification: saatler,
  };
}

export function faqJsonLd(maddeler: readonly SSSMaddesi[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: maddeler.map((madde) => ({
      "@type": "Question",
      name: madde.soru,
      acceptedAnswer: { "@type": "Answer", text: madde.cevap },
    })),
  };
}

export function serviceJsonLd(paket: Paket): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: paket.ad,
    serviceType: "Beslenme ve diyet danışmanlığı",
    description: paket.kimeGore,
    url: `${SITE_URL}/paketler/${paket.slug}`,
    provider: { "@id": `${SITE_URL}/#dietitian` },
    areaServed: [
      { "@type": "City", name: SITE.sehir },
      { "@type": "Country", name: "Türkiye" },
    ],
    offers: {
      "@type": "Offer",
      price: paket.fiyat,
      priceCurrency: "TRY",
      url: `${SITE_URL}/paketler/${paket.slug}`,
      availability: "https://schema.org/InStock",
      category: paket.fiyatNotu,
    },
  };
}

export function articleJsonLd(yazi: {
  baslik: string;
  aciklama: string;
  tarih: string;
  slug: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: yazi.baslik,
    description: yazi.aciklama,
    datePublished: yazi.tarih,
    dateModified: yazi.tarih,
    inLanguage: "tr-TR",
    mainEntityOfPage: `${SITE_URL}/yazilar/${yazi.slug}`,
    author: { "@type": "Person", name: TAM_AD, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#dietitian` },
  };
}

export function breadcrumbJsonLd(
  basamaklar: readonly { ad: string; href: string }[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: basamaklar.map((basamak, sira) => ({
      "@type": "ListItem",
      position: sira + 1,
      name: basamak.ad,
      item: `${SITE_URL}${basamak.href}`,
    })),
  };
}
