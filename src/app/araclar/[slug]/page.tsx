import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BelAraci } from "@/components/araclar/BelAraci";
import { BkiAraci } from "@/components/araclar/BkiAraci";
import { EnerjiAraci } from "@/components/araclar/EnerjiAraci";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import {
  ARACLAR,
  ARAC_GIZLILIK_NOTU,
  ARAC_UYARISI,
  aracBul,
  type AracSlug,
} from "@/content/araclar";
import { YASAL_IBARE } from "@/content/site";
import { breadcrumbJsonLd, webUygulamasiJsonLd } from "@/lib/jsonld";

export const dynamic = "force-static";
export const dynamicParams = false;

/** Slug → araç bileşeni. Araçlar istemci bileşeni, sayfa sunucu bileşeni. */
const BILESENLER: Record<AracSlug, () => React.JSX.Element> = {
  bki: BkiAraci,
  "bel-olcusu": BelAraci,
  "enerji-ihtiyaci": EnerjiAraci,
};

export function generateStaticParams() {
  return ARACLAR.map((arac) => ({ slug: arac.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const arac = aracBul(slug);
  if (!arac) return {};

  return {
    title: `${arac.ad} hesaplama`,
    description: arac.aciklama,
    alternates: { canonical: `/araclar/${arac.slug}` },
  };
}

export default async function AracSayfasi({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const arac = aracBul(slug);
  if (!arac) notFound();

  const Arac = BILESENLER[arac.slug];
  const digerleri = ARACLAR.filter((a) => a.slug !== arac.slug);

  return (
    <>
      <JsonLd veri={webUygulamasiJsonLd(arac)} />
      <JsonLd
        veri={breadcrumbJsonLd([
          { ad: "Anasayfa", href: "/" },
          { ad: "Araçlar", href: "/araclar" },
          { ad: arac.ad, href: `/araclar/${arac.slug}` },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="konteyner pt-[clamp(28px,4vw,44px)] pb-[clamp(32px,4.5vw,56px)]">
          <nav aria-label="Sayfa yolu">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-label tracking-[0.18em] text-muted uppercase">
              <li>
                <Link href="/" className="hover:text-sea-700">
                  Anasayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/araclar" className="hover:text-sea-700">
                  Araçlar
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-sea-700">
                {arac.ad}
              </li>
            </ol>
          </nav>

          <Eyebrow className="mt-9">Araç {arac.kod}</Eyebrow>
          <Baslik seviye={1} className="mt-5 max-w-[18ch] !text-h2">
            {arac.ad}
          </Baslik>
          <p className="mt-6 max-w-[64ch] text-lede text-muted">{arac.giris}</p>
        </div>
      </div>

      <Section zemin="beyaz">
        <h2 className="sr-only">Hesaplama</h2>
        <Arac />

        <div className="mt-[clamp(28px,4vw,44px)] border border-line bg-paper px-[clamp(20px,3vw,32px)] py-[clamp(20px,2.6vw,28px)]">
          <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
            Kullanılan formül
          </p>
          <div
            tabIndex={0}
            role="region"
            aria-label={`${arac.ad} formülü`}
            className="mt-4 overflow-x-auto border border-line bg-sea-50 px-3 py-2.5"
          >
            <code className="font-mono text-[13px] whitespace-nowrap text-sea-900">
              {arac.formul}
            </code>
          </div>
          <p className="mt-4 text-small text-muted">
            Kaynak: {arac.kaynak}. Denklemin ayrıntısı ve birlikte kullanıldığı
            diğer ölçümler{" "}
            <Link
              href={arac.yontemBagi}
              className="text-sea-700 underline underline-offset-4"
            >
              Yöntem sayfasında
            </Link>
            .
          </p>
          <p className="mt-3 text-small text-muted">{ARAC_GIZLILIK_NOTU}</p>
        </div>
      </Section>

      <Section zemin="tint">
        <div className="izgara-cizgi grid-cols-1 md:grid-cols-2">
          <div className="bg-paper px-[clamp(20px,2.6vw,32px)] py-[clamp(24px,3vw,36px)]">
            <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
              Bu sayı neyi söylemez
            </p>
            <ul className="mt-6 space-y-3.5">
              {arac.neSoylemez.map((madde) => (
                <li key={madde} className="relative pl-6 text-small text-ink">
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.62em] left-0 h-1.5 w-1.5 bg-sea-500"
                  />
                  {madde}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper px-[clamp(20px,2.6vw,32px)] py-[clamp(24px,3vw,36px)]">
            <p className="font-mono text-label tracking-[0.18em] text-muted uppercase">
              Bu hesap şu durumlarda geçerli değil
            </p>
            <ul className="mt-6 space-y-3.5">
              {arac.gecersizDurumlar.map((madde) => (
                <li key={madde} className="relative pl-6 text-small text-muted">
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.85em] left-0 h-px w-3.5 bg-muted"
                  />
                  {madde}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="mt-9">
          <p className="max-w-[76ch] text-small text-muted">{ARAC_UYARISI}</p>
        </Reveal>
      </Section>

      <Section zemin="beyaz">
        <Reveal>
          <Eyebrow>Diğer araçlar</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Tabloyu tamamlayanlar.
          </Baslik>
        </Reveal>

        <Reveal className="mt-9">
          <ul className="izgara-cizgi grid-cols-1 sm:grid-cols-2">
            {digerleri.map((diger) => (
              <li key={diger.slug} className="bg-paper">
                <Link
                  href={`/araclar/${diger.slug}`}
                  className="flex h-full flex-col px-[clamp(20px,2.4vw,28px)] py-[clamp(22px,2.6vw,30px)] transition-transform duration-200 hover:-translate-y-[3px]"
                >
                  <span className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                    {diger.kod}
                  </span>
                  <span className="mt-3 font-display text-h3 font-medium text-sea-900">
                    {diger.ad}
                  </span>
                  <span className="mt-2.5 text-small text-muted">
                    {diger.ozet}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-11">
          <div className="flex flex-col gap-5 border border-line bg-sea-50 px-[clamp(20px,3vw,36px)] py-[clamp(24px,3vw,36px)] sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[48ch] text-lede text-ink">
              Rakamın sizin için ne anlama geldiğini konuşmak isterseniz ön
              görüşme ücretsiz.
            </p>
            <ButtonLink href="/randevu" ton="birincil">
              Ücretsiz ön görüşme
            </ButtonLink>
          </div>
        </Reveal>

        <p className="mt-8 text-small text-muted">{YASAL_IBARE}</p>
      </Section>
    </>
  );
}
