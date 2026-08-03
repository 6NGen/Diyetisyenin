import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ARACLAR, ARAC_GIZLILIK_NOTU, ARAC_UYARISI } from "@/content/araclar";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hesaplama araçları",
  description:
    "BKİ, bel/boy oranı ve günlük enerji ihtiyacı hesaplama araçları. Her sonucun hangi denklemden geldiği ve neyi söylemediği açıkça yazılı.",
  alternates: { canonical: "/araclar" },
};

export default function AraclarSayfasi() {
  return (
    <>
      <SayfaBasligi
        eyebrow="Araçlar"
        baslik="Kendi rakamınıza bakın."
        lede="Yöntem sayfasında kullandığım denklemleri buraya çalışır hâlde koydum. Her araç sonucu verirken hangi formülden geldiğini, hangi kaynağa dayandığını ve neyi söylemediğini de gösterir."
      >
        <div className="mt-9 border border-sea-500 bg-sea-50 px-[clamp(20px,3vw,32px)] py-[clamp(20px,2.6vw,28px)]">
          <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
            Önce bunu okuyun
          </p>
          <p className="mt-4 max-w-[76ch] text-small text-ink">{ARAC_UYARISI}</p>
        </div>
      </SayfaBasligi>

      <Section zemin="beyaz">
        <ul className="izgara-cizgi grid-cols-1 md:grid-cols-3">
          {ARACLAR.map((arac, sira) => (
            <li key={arac.slug} className="bg-paper">
              <Reveal gecikme={sira * 60} className="h-full">
                <Link
                  href={`/araclar/${arac.slug}`}
                  className="flex h-full flex-col px-[clamp(20px,2.4vw,28px)] py-[clamp(24px,2.8vw,32px)] transition-transform duration-200 hover:-translate-y-[3px]"
                >
                  <span className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                    {arac.kod}
                  </span>
                  <span className="mt-3 font-display text-h3 font-medium text-sea-900">
                    {arac.ad}
                  </span>
                  <span className="mt-3 grow text-small text-muted">
                    {arac.ozet}
                  </span>
                  <span className="mt-6 border-t border-line pt-4 font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                    Hesapla →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-9">
          <p className="max-w-[70ch] text-small text-muted">
            {ARAC_GIZLILIK_NOTU}
          </p>
        </Reveal>
      </Section>

      <Section zemin="tint">
        <Reveal>
          <Eyebrow>Rakamdan sonra</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Sayı bir başlangıç, plan değil.
          </Baslik>
          <Lede className="mt-5">
            Bu araçlar size kendi rakamınızı gösterir; ne yapmanız gerektiğini
            söylemez. Rakamın sizin için ne anlama geldiğini, hangi ölçümlerle
            birlikte okunması gerektiğini ve buradan nasıl bir plan çıkacağını
            ücretsiz ön görüşmede konuşabiliriz.
          </Lede>
        </Reveal>

        <Reveal className="mt-9">
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/randevu" ton="birincil">
              Ücretsiz ön görüşme
            </ButtonLink>
            <ButtonLink href="/yontem" ton="ikincil">
              Denklemlerin tamamı
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
