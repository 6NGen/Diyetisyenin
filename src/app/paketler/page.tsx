import type { Metadata } from "next";
import { PaketIzgarasi } from "@/components/PaketIzgarasi";
import { PaketKarsilastirma } from "@/components/PaketKarsilastirma";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { EK_HIZMETLER } from "@/content/paketler";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Paketler ve ücretler",
  description:
    "Dört beslenme danışmanlığı paketi: Temel, Denge, Dönüşüm ve Klinik. Süre, görüşme sayısı ve içerik karşılaştırması ile güncel ücretler tek sayfada.",
  alternates: { canonical: "/paketler" },
};

export default function PaketlerSayfasi() {
  return (
    <>
      <SayfaBasligi
        eyebrow="Paketler"
        baslik="Dört paket, tek yöntem."
        lede="Paketler arasındaki fark yöntem değil, süre ve takip sıklığıdır. Her paket aynı ölçüm ve hesap düzeniyle başlar; ayrıştıkları yer takip süresi, plan derinliği ve hekim iş birliğidir. Hangisinin size uyduğuna ücretsiz ön görüşmede birlikte karar veririz."
      />

      <Section zemin="tint">
        <PaketIzgarasi />
      </Section>

      <Section zemin="beyaz" id="karsilastirma">
        <Reveal>
          <Eyebrow>Karşılaştırma</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Hangi pakette ne var?
          </Baslik>
          <Lede className="mt-5">
            Tablo mobilde yatay kaydırılır. İlk sütun sabit kalır, böylece hangi
            satıra baktığınızı kaybetmezsiniz.
          </Lede>
        </Reveal>

        <Reveal className="mt-9">
          <PaketKarsilastirma />
        </Reveal>

        <Reveal className="mt-8">
          <p className="max-w-[68ch] text-small text-muted">
            Ücretler tek kişilik danışmanlık içindir ve KDV dahildir. Ödeme
            koşulları, erteleme ve iade kuralları{" "}
            <a
              className="text-sea-700 underline underline-offset-4"
              href="/iptal-ve-iade"
            >
              İptal ve İade
            </a>{" "}
            sayfasında yazılıdır. Paket satın almadan önce ücretsiz ön görüşme
            yapmanızı öneririm.
          </p>
        </Reveal>
      </Section>

      <Section zemin="tint" id="ek-hizmetler">
        <Reveal>
          <Eyebrow>Ek hizmetler</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Paket dışında.
          </Baslik>
        </Reveal>

        <Reveal className="mt-9">
          <ul className="izgara-cizgi grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {EK_HIZMETLER.map((hizmet) => (
              <li
                key={hizmet.ad}
                className="flex flex-col bg-paper px-[clamp(20px,2.4vw,28px)] py-[clamp(24px,2.8vw,32px)]"
              >
                <h3 className="font-display text-h3 font-medium text-sea-900">
                  {hizmet.ad}
                </h3>
                <p className="mt-3 grow text-small text-muted">
                  {hizmet.aciklama}
                </p>
                <p className="mt-5 border-t border-line pt-4 font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  {hizmet.fiyat}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-11">
          <div className="flex flex-col gap-4 border border-line bg-paper px-[clamp(20px,3vw,36px)] py-[clamp(24px,3vw,36px)] sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[46ch] text-lede text-ink">
              Paketlerin tamamını ve ölçüm ayrıntılarını içeren katalogu
              indirebilirsiniz.
            </p>
            <ButtonLink href="/katalog.pdf" ton="ikincil" harici>
              Katalogu indir (PDF)
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
