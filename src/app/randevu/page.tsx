import type { Metadata } from "next";
import { RandevuAnlatimi } from "@/components/RandevuAnlatimi";
import { RandevuFormu } from "@/components/RandevuFormu";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { Section } from "@/components/ui/Section";
import {
  EPOSTA_HREF,
  SITE,
  TELEFON_HREF,
  WHATSAPP_HREF,
  telefonGoster,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Randevu",
  description:
    "15 dakikalık ücretsiz ön görüşme için form. Sağlık bilgisi istenmez; yalnızca ad, telefon ve isterseniz kısa bir not. 1 iş günü içinde dönüş yapılır.",
  alternates: { canonical: "/randevu" },
};

export default function RandevuSayfasi() {
  return (
    <>
      <SayfaBasligi
        eyebrow="Randevu"
        baslik="Ücretsiz ön görüşme."
        lede="15 dakika sürer, ücretsizdir ve sizi hiçbir şeye bağlamaz. Formu doldurun, 1 iş günü içinde arayayım."
      />

      <Section zemin="tint">
        <div className="grid gap-[clamp(32px,5vw,64px)] lg:grid-cols-2">
          <Reveal>
            <RandevuAnlatimi />

            <div className="mt-10 border border-line bg-paper px-[clamp(20px,2.6vw,28px)] py-[clamp(20px,2.6vw,28px)]">
              <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                Form yerine doğrudan
              </p>
              <ul className="mt-4 space-y-2.5 text-small">
                <li>
                  <a
                    href={TELEFON_HREF}
                    className="text-sea-700 underline underline-offset-4"
                  >
                    {telefonGoster(SITE.telefon)}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sea-700 underline underline-offset-4"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={EPOSTA_HREF}
                    className="text-sea-700 underline underline-offset-4"
                  >
                    {SITE.eposta}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal gecikme={80}>
            <RandevuFormu />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
