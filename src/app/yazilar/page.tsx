import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { Etiket } from "@/components/ui/Etiket";
import { Section } from "@/components/ui/Section";
import { tarihYaz, tumYazilar } from "@/lib/yazilar";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Yazılar",
  description:
    "Sofra âdâbı, mevsim mutfağı, ölçüm ve rakamlar, yanlış bilinenler. Beslenme üzerine kaynaklı, iddiasız ve uygulanabilir yazılar.",
  alternates: { canonical: "/yazilar" },
};

export default function YazilarSayfasi() {
  const yazilar = tumYazilar();

  return (
    <>
      <SayfaBasligi
        eyebrow="Yazılar"
        baslik="Kaynaklı, iddiasız."
        lede="Sofra âdâbı, mevsim mutfağı, ölçüm ve rakamlar, yanlış bilinenler. Sayısal vaat yok, ürün tanıtımı yok; nereden bildiğimi yazmaya çalışıyorum."
      />

      <Section zemin="beyaz">
        {yazilar.length === 0 ? (
          <p className="text-lede text-muted">Henüz yazı yok.</p>
        ) : (
          <ul className="border-t border-line">
            {yazilar.map((yazi, sira) => (
              <li key={yazi.slug}>
                <Reveal gecikme={sira * 50}>
                  <Link
                    href={`/yazilar/${yazi.slug}`}
                    className="group grid gap-3 border-b border-line py-[clamp(24px,3vw,36px)] md:grid-cols-[180px_1fr] md:gap-10"
                  >
                    <div>
                      <time
                        dateTime={yazi.date}
                        className="block font-mono text-label tracking-[0.18em] text-sea-500 uppercase"
                      >
                        {tarihYaz(yazi.date)}
                      </time>
                      <span className="mt-2 block font-mono text-label tracking-[0.18em] text-muted uppercase">
                        {yazi.readingTime} dk okuma
                      </span>
                    </div>

                    <div>
                      <h2 className="font-display text-[clamp(22px,2.8vw,30px)] leading-tight font-medium text-sea-900 group-hover:text-sea-700">
                        {yazi.title}
                      </h2>
                      <p className="mt-3 max-w-[68ch] text-small text-muted">
                        {yazi.description}
                      </p>
                      {yazi.tags.length > 0 ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {yazi.tags.map((etiket) => (
                            <Etiket key={etiket}>{etiket}</Etiket>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
