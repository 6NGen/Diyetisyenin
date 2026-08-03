import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik } from "@/components/ui/Baslik";
import { Etiket } from "@/components/ui/Etiket";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { PAKETLER, paketBul } from "@/content/paketler";
import { fiyatYaz } from "@/content/site";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return PAKETLER.map((paket) => ({ slug: paket.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paket = paketBul(slug);
  if (!paket) return {};

  return {
    title: `${paket.ad} paketi`,
    description: `${paket.ad} paketi — ${paket.sure}, ${paket.gorusmeSayisi}, ${fiyatYaz(paket.fiyat)} ${paket.fiyatNotu}. ${paket.kimeGore}`.slice(
      0,
      158,
    ),
    alternates: { canonical: `/paketler/${paket.slug}` },
  };
}

export default async function PaketDetay({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paket = paketBul(slug);
  if (!paket) notFound();

  const digerleri = PAKETLER.filter((p) => p.slug !== paket.slug);

  return (
    <>
      <JsonLd veri={serviceJsonLd(paket)} />
      <JsonLd
        veri={breadcrumbJsonLd([
          { ad: "Anasayfa", href: "/" },
          { ad: "Paketler", href: "/paketler" },
          { ad: paket.ad, href: `/paketler/${paket.slug}` },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="konteyner pt-[clamp(28px,4vw,44px)] pb-[clamp(36px,5vw,64px)]">
          <nav aria-label="Sayfa yolu">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-label tracking-[0.18em] text-muted uppercase">
              <li>
                <Link href="/" className="hover:text-sea-700">
                  Anasayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/paketler" className="hover:text-sea-700">
                  Paketler
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-sea-700">
                {paket.ad}
              </li>
            </ol>
          </nav>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Eyebrow>{paket.kod}</Eyebrow>
            {paket.oneCikan ? <Etiket ton="vurgu">Öne çıkan</Etiket> : null}
          </div>

          <Baslik seviye={1} className="mt-5">
            {paket.ad}
          </Baslik>

          <p className="mt-6 max-w-[58ch] text-lede text-muted">
            {paket.kimeGore}
          </p>

          <dl className="izgara-cizgi mt-9 grid-cols-2 md:grid-cols-4">
            {[
              { ad: "Ücret", deger: `${fiyatYaz(paket.fiyat)}` },
              { ad: "Ödeme", deger: paket.fiyatNotu },
              { ad: "Süre", deger: paket.sure },
              { ad: "Görüşme", deger: paket.gorusmeSayisi },
            ].map((satir) => (
              <div key={satir.ad} className="bg-paper px-4 py-4">
                <dt className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  {satir.ad}
                </dt>
                <dd className="mt-1.5 text-small text-ink">{satir.deger}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/randevu" ton="birincil">
              Ücretsiz ön görüşme
            </ButtonLink>
            <ButtonLink href="/paketler#karsilastirma" ton="ikincil">
              Paketleri karşılaştır
            </ButtonLink>
          </div>
        </div>
      </div>

      <Section zemin="beyaz">
        <Reveal>
          <Eyebrow>Pakete dahil</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Bu pakette ne var?
          </Baslik>
        </Reveal>

        <Reveal className="mt-9">
          <ul className="max-w-[76ch] border-t border-line">
            {paket.tamListe.map((madde) => (
              <li
                key={madde}
                className="relative border-b border-line py-4 pl-7 text-ink"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-[1.35em] left-0 h-1.5 w-1.5 bg-sea-500"
                />
                {madde}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-9">
          <p className="max-w-[68ch] text-small text-muted">
            Bu paket bir sonuç taahhüdü içermez. Beslenme müdahalesine verilen
            yanıt kişiden kişiye değişir; birlikte ölçülebilir hedefler
            koyarız ve ilerlemeyi görüşmelerde izleriz. Teşhis ve tedavi
            kararları hekiminize aittir.
          </p>
        </Reveal>
      </Section>

      <Section zemin="tint">
        <Reveal>
          <Eyebrow>Diğer paketler</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Bu size uymadıysa.
          </Baslik>
        </Reveal>

        <Reveal className="mt-9">
          <ul className="izgara-cizgi grid-cols-1 sm:grid-cols-3">
            {digerleri.map((diger) => (
              <li key={diger.slug} className="bg-paper">
                <Link
                  href={`/paketler/${diger.slug}`}
                  className="flex h-full flex-col px-[clamp(20px,2.4vw,28px)] py-[clamp(22px,2.6vw,30px)] transition-transform duration-200 hover:-translate-y-[3px]"
                >
                  <span className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                    {diger.kod}
                  </span>
                  <span className="mt-3 font-display text-h3 font-medium text-sea-900">
                    {diger.ad}
                  </span>
                  <span className="mt-2.5 grow text-small text-muted">
                    {diger.kimeGore}
                  </span>
                  <span className="mt-5 font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                    {fiyatYaz(diger.fiyat)} {diger.fiyatNotu} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}
