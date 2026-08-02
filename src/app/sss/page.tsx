import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SSSAccordion } from "@/components/SSSAccordion";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SSS } from "@/content/sss";
import { faqJsonLd } from "@/lib/jsonld";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Sık sorulan sorular",
  description:
    "Ön görüşme, ilk randevu, ücretler, online çalışma ve sınırlar hakkında en sık sorulan soruların cevapları. Süreç boyunca ne olacağını önceden bilin.",
  alternates: { canonical: "/sss" },
};

export default function SSSSayfasi() {
  return (
    <>
      <JsonLd veri={faqJsonLd(SSS)} />

      <SayfaBasligi
        eyebrow="S.S.S."
        baslik="Sık sorulan sorular."
        lede="Ön görüşmede en çok karşılaştığım sorular ve cevapları. Aradığınızı bulamazsanız bana doğrudan yazabilirsiniz."
      />

      <Section zemin="beyaz">
        <Reveal>
          <SSSAccordion />
        </Reveal>

        <Reveal className="mt-[clamp(40px,6vw,64px)]">
          <div className="flex flex-col gap-5 border border-line bg-sea-50 px-[clamp(20px,3vw,36px)] py-[clamp(24px,3vw,36px)] sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[46ch] text-lede text-ink">
              Cevabını bulamadığınız bir soru varsa ön görüşmede konuşalım.
            </p>
            <ButtonLink href="/randevu" ton="birincil">
              Ücretsiz ön görüşme
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
