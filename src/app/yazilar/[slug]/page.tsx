import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik } from "@/components/ui/Baslik";
import { Etiket } from "@/components/ui/Etiket";
import { YASAL_IBARE } from "@/content/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { tarihYaz, tumYazilar, yaziBul } from "@/lib/yazilar";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return tumYazilar().map((yazi) => ({ slug: yazi.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const yazi = yaziBul(slug);
  if (!yazi) return {};

  return {
    title: yazi.title,
    description: yazi.description,
    alternates: { canonical: `/yazilar/${yazi.slug}` },
    openGraph: {
      type: "article",
      title: yazi.title,
      description: yazi.description,
      publishedTime: yazi.date,
      tags: [...yazi.tags],
    },
  };
}

export default async function YaziDetay({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const yazi = yaziBul(slug);
  if (!yazi) notFound();

  // Bileşen eşlemesi src/mdx-components.tsx dosya sözleşmesiyle otomatik uygulanır.
  const { default: Govde } = await import(`@/content/yazilar/${slug}.mdx`);

  const digerYazilar = tumYazilar()
    .filter((diger) => diger.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        veri={articleJsonLd({
          baslik: yazi.title,
          aciklama: yazi.description,
          tarih: yazi.date,
          slug: yazi.slug,
        })}
      />
      <JsonLd
        veri={breadcrumbJsonLd([
          { ad: "Anasayfa", href: "/" },
          { ad: "Yazılar", href: "/yazilar" },
          { ad: yazi.title, href: `/yazilar/${yazi.slug}` },
        ])}
      />

      <article>
        <header className="border-b border-line bg-white">
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
                  <Link href="/yazilar" className="hover:text-sea-700">
                    Yazılar
                  </Link>
                </li>
              </ol>
            </nav>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2">
              <time
                dateTime={yazi.date}
                className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase"
              >
                {tarihYaz(yazi.date)}
              </time>
              <span className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                {yazi.readingTime} dk okuma
              </span>
            </div>

            <Baslik seviye={1} className="mt-5 max-w-[20ch] !text-h2">
              {yazi.title}
            </Baslik>

            <p className="mt-6 max-w-[64ch] text-lede text-muted">
              {yazi.description}
            </p>

            {yazi.tags.length > 0 ? (
              <div className="mt-7 flex flex-wrap gap-2">
                {yazi.tags.map((etiket) => (
                  <Etiket key={etiket}>{etiket}</Etiket>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <div className="konteyner bolum-bosluk">
          <div className="metin">
            <Govde />
          </div>

          <p className="metin mt-12 border-t border-line pt-6 text-small text-muted">
            {YASAL_IBARE}
          </p>
        </div>
      </article>

      <section className="border-t border-line bg-sea-50">
        <div className="konteyner py-[clamp(40px,6vw,72px)]">
          <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
            Devamı
          </p>

          {digerYazilar.length > 0 ? (
            <ul className="izgara-cizgi mt-6 grid-cols-1 md:grid-cols-2">
              {digerYazilar.map((diger) => (
                <li key={diger.slug} className="bg-paper">
                  <Link
                    href={`/yazilar/${diger.slug}`}
                    className="flex h-full flex-col px-[clamp(20px,2.4vw,28px)] py-[clamp(22px,2.6vw,30px)] transition-transform duration-200 hover:-translate-y-[3px]"
                  >
                    <span className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                      {tarihYaz(diger.date)}
                    </span>
                    <span className="mt-3 font-display text-h3 font-medium text-sea-900">
                      {diger.title}
                    </span>
                    <span className="mt-2.5 text-small text-muted">
                      {diger.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-9">
            <ButtonLink href="/randevu" ton="birincil">
              Ücretsiz ön görüşme
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
