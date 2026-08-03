import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { SofraKarti } from "@/components/SofraKarti";
import { UcteBirKabi } from "@/components/UcteBirKabi";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  SOFRA_GIRIS,
  SOFRA_MADDELERI,
  SOFRA_UYARISI,
  SOFRA_ZAYIF_RIVAYET_NOTU,
} from "@/content/sofra";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Sünnet üzere sofra",
  description:
    "Sofra âdâbına dair on dört rivayet: mide üçte bir kuralı, talbîne, çörek otu, sahur ve daha fazlası. Her maddede kaynak künyesi, sıhhat notu ve bugünkü beslenme karşılığı.",
  alternates: { canonical: "/sunnet-uzere-sofra" },
};

export default function SofraSayfasi() {
  return (
    <div className="bg-sea-900">
      <SayfaBasligi
        koyu
        eyebrow="İsteğe bağlı bölüm"
        baslik="Sünnet üzere sofra"
        lede="Sofra âdâbına dair on dört rivayet; her birinin kaynak künyesi, sıhhat notu ve bugünkü beslenme karşılığıyla birlikte."
      >
        <div className="mt-10 border border-line-dark bg-sea-900 px-[clamp(20px,3vw,32px)] py-[clamp(20px,2.6vw,28px)]">
          <p className="font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
            Önce bunu okuyun
          </p>
          <p className="mt-4 max-w-[76ch] text-small text-white/90">
            {SOFRA_UYARISI}
          </p>
        </div>
      </SayfaBasligi>

      <section className="konteyner bolum-bosluk">
        <div className="grid items-start gap-[clamp(32px,5vw,64px)] lg:grid-cols-[1fr_minmax(280px,420px)]">
          <Reveal>
            <Eyebrow koyu>Bölümün çıkış noktası</Eyebrow>
            <h2 className="mt-4 max-w-[20ch] font-display text-h2 font-light text-white">
              Ölçü fikri buradan geliyor.
            </h2>
            <p className="mt-6 max-w-[62ch] text-lede text-sea-300">
              {SOFRA_GIRIS}
            </p>
            <p className="mt-5 max-w-[62ch] text-small text-sea-300">
              Maddelerin &quot;bugünkü karşılığı&quot; bölümleri benim beslenme
              yorumumdur ve rivayetin bir parçası değildir. Rivayetin muhtevası
              ile yorumu bilerek ayrı tutulmuştur.
            </p>
          </Reveal>

          <Reveal gecikme={80}>
            <UcteBirKabi koyu />
          </Reveal>
        </div>
      </section>

      <section className="konteyner pb-[clamp(60px,8vw,110px)]">
        <ol className="izgara-cizgi-koyu grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SOFRA_MADDELERI.map((madde, sira) => (
            <li key={madde.baslik} className="bg-sea-900">
              <Reveal gecikme={(sira % 3) * 60} className="h-full">
                <SofraKarti madde={madde} sira={sira + 1} />
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-[clamp(36px,5vw,56px)]">
          <div className="border border-line-dark px-[clamp(20px,3vw,32px)] py-[clamp(22px,2.8vw,30px)]">
            <p className="font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
              Zayıf rivayetler hakkında
            </p>
            <p className="mt-4 max-w-[76ch] text-small text-white/90">
              {SOFRA_ZAYIF_RIVAYET_NOTU}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-[clamp(28px,4vw,44px)]">
          <div className="flex flex-col gap-5 border border-line-dark px-[clamp(20px,3vw,32px)] py-[clamp(24px,3vw,34px)] sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[48ch] text-lede text-sea-300">
              Bu ölçü fikrinin sizin sofranızda nasıl karşılık bulacağını
              konuşmak isterseniz ön görüşme ücretsiz.
            </p>
            <ButtonLink href="/randevu" ton="koyu">
              Ücretsiz ön görüşme
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
