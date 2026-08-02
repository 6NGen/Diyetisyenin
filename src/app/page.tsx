import type { Metadata } from "next";
import { GuvenSeridi } from "@/components/GuvenSeridi";
import { Hero } from "@/components/Hero";
import { PaketIzgarasi } from "@/components/PaketIzgarasi";
import { RandevuAnlatimi } from "@/components/RandevuAnlatimi";
import { Reveal } from "@/components/Reveal";
import { SofraTeaser } from "@/components/SofraTeaser";
import { YaparimYapmam } from "@/components/YaparimYapmam";
import { YontemAdimlari } from "@/components/YontemAdimlari";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  description: `${SITE.sehir} ve online beslenme danışmanlığı. Ölçüme dayalı, sizin mutfağınıza göre kurulan bir plan. Ücretsiz ön görüşme ile başlayın.`,
  alternates: { canonical: "/" },
};

/**
 * Bölüm sırası ve zemin ritmi kasıtlıdır:
 * beyaz → beyaz → beyaz → sea-50 → SEA-900 → beyaz → sea-50 → SEA-900 (footer)
 * Sayfa beyazla açılır, iki kez hafifçe tonlanır, koyu yeşile yalnızca iki kez iner.
 */
export default function Anasayfa() {
  return (
    <>
      <Hero />
      <GuvenSeridi />
      <YontemAdimlari />

      <Section zemin="tint" id="paketler">
        <Reveal>
          <Eyebrow>Paketler</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Dört paket, tek yöntem.
          </Baslik>
          <Lede className="mt-5">
            Paketler arasındaki fark yöntem değil, süre ve takip sıklığıdır.
            Hangisinin size uyduğuna ücretsiz ön görüşmede birlikte karar
            veririz.
          </Lede>
        </Reveal>

        <div className="mt-11">
          <PaketIzgarasi />
        </div>

        <Reveal className="mt-9">
          <ButtonLink href="/paketler" ton="ikincil">
            Karşılaştırma tablosunu gör
          </ButtonLink>
        </Reveal>
      </Section>

      <SofraTeaser />

      <YaparimYapmam />

      <Section zemin="tint" id="randevu">
        <Reveal>
          <Eyebrow>Randevu</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Ücretsiz ön görüşme.
          </Baslik>
        </Reveal>

        <div className="mt-11 grid gap-[clamp(32px,5vw,64px)] lg:grid-cols-2">
          <Reveal>
            <RandevuAnlatimi />
          </Reveal>

          <Reveal gecikme={80}>
            <div className="border border-line bg-paper px-[clamp(20px,3vw,36px)] py-[clamp(28px,3.5vw,44px)]">
              <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                Form
              </p>
              <p className="mt-4 max-w-[42ch] text-lede text-muted">
                Ad, telefon ve isterseniz kısa bir not. Sağlık bilgisi
                istenmez.
              </p>
              <div className="mt-8">
                <ButtonLink href="/randevu" ton="birincil">
                  Randevu formuna git
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
