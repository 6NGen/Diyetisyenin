import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { EK_HIZMETLER } from "@/content/paketler";
import {
  RAMAZAN_BOLUMLERI,
  RAMAZAN_GIRIS,
  RAMAZAN_HEKIM_UYARISI,
  RAMAZAN_SSS,
} from "@/content/ramazan";
import { SOFRA_MADDELERI } from "@/content/sofra";
import { YASAL_IBARE } from "@/content/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ramazan'da beslenme",
  description:
    "Sahur ve iftar kurgusu, sıvı planı ve bayram geçişi. Ramazan'da orucu daha rahat tutmak ve ay sonunda düzeni kaybetmemek için pratik çerçeve.",
  alternates: { canonical: "/ramazan" },
};

const RAMAZAN_HIZMETI = EK_HIZMETLER.find((h) => h.ad === "Ramazan programı");

/** Sofra bölümünde Ramazan'la doğrudan ilgili iki madde. */
const ILGILI_SOFRA_BASLIKLARI = ["Hurma", "Oruç düzeni"];

export default function RamazanSayfasi() {
  const ilgiliSofra = SOFRA_MADDELERI.filter((madde) =>
    ILGILI_SOFRA_BASLIKLARI.includes(madde.baslik),
  );

  return (
    <>
      <JsonLd veri={faqJsonLd(RAMAZAN_SSS)} />
      <JsonLd
        veri={breadcrumbJsonLd([
          { ad: "Anasayfa", href: "/" },
          { ad: "Ramazan'da beslenme", href: "/ramazan" },
        ])}
      />

      <SayfaBasligi
        eyebrow="Mevsimlik"
        baslik="Ramazan'da beslenme"
        lede={RAMAZAN_GIRIS}
      >
        <div className="mt-9 border border-sea-500 bg-sea-50 px-[clamp(20px,3vw,32px)] py-[clamp(20px,2.6vw,28px)]">
          <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
            Önce bunu okuyun
          </p>
          <p className="mt-4 max-w-[76ch] text-small text-ink">
            {RAMAZAN_HEKIM_UYARISI}
          </p>
        </div>
      </SayfaBasligi>

      {RAMAZAN_BOLUMLERI.map((bolum, sira) => (
        <Section
          key={bolum.kod}
          zemin={sira % 2 === 0 ? "beyaz" : "tint"}
          id={bolum.kod}
        >
          <Reveal>
            <Eyebrow>{bolum.kod}</Eyebrow>
            <Baslik seviye={2} className="mt-4">
              {bolum.baslik}
            </Baslik>
            <Lede className="mt-5">{bolum.giris}</Lede>
          </Reveal>

          <Reveal className="mt-9">
            <ul className="izgara-cizgi grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {bolum.maddeler.map((madde) => (
                <li
                  key={madde.baslik}
                  className="bg-paper px-[clamp(20px,2.4vw,28px)] py-[clamp(22px,2.6vw,30px)]"
                >
                  <h3 className="font-display text-h3 font-medium text-sea-900">
                    {madde.baslik}
                  </h3>
                  <p className="mt-3 text-small text-muted">{madde.metin}</p>
                </li>
              ))}
              {/* Izgara deseni son satırda yarım kalmasın diye boş hücreler. */}
              {Array.from({
                length: (3 - (bolum.maddeler.length % 3)) % 3,
              }).map((_, i) => (
                <li key={`bos-${i}`} aria-hidden="true" className="bg-paper" />
              ))}
            </ul>
          </Reveal>
        </Section>
      ))}

      {ilgiliSofra.length > 0 ? (
        <section className="bolum-bosluk bg-sea-900">
          <div className="konteyner">
            <Reveal>
              <Eyebrow koyu>Sofra âdâbından</Eyebrow>
              <Baslik seviye={2} koyu className="mt-4 max-w-[22ch]">
                Oruçla doğrudan ilgili iki madde
              </Baslik>
              <p className="mt-6 max-w-[62ch] text-lede text-sea-300">
                Bu ikisi, sitedeki isteğe bağlı sofra bölümünden. Kaynak
                künyeleri ve sıhhat notlarıyla birlikte orada duruyor.
              </p>
            </Reveal>

            <Reveal className="mt-9">
              <ul className="izgara-cizgi-koyu grid-cols-1 md:grid-cols-2">
                {ilgiliSofra.map((madde) => (
                  <li
                    key={madde.baslik}
                    className="bg-sea-900 px-[clamp(20px,2.4vw,28px)] py-[clamp(24px,2.8vw,32px)]"
                  >
                    <h3 className="font-display text-h3 font-medium text-white">
                      {madde.baslik}
                    </h3>
                    <p className="mt-4 text-small text-sea-300">
                      {madde.metin}
                    </p>
                    <p className="mt-5 border-t border-line-dark pt-4 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-sea-300">
                      {madde.kaynak}
                      {madde.sihhat ? ` · ${madde.sihhat}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-9">
              <ButtonLink href="/sunnet-uzere-sofra" ton="koyu">
                On dört maddenin tamamı
              </ButtonLink>
            </Reveal>
          </div>
        </section>
      ) : null}

      <Section zemin="beyaz" id="sss">
        <Reveal>
          <Eyebrow>Ramazan · S.S.S.</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            En çok sorulanlar
          </Baslik>
        </Reveal>

        <Reveal className="mt-9">
          <div className="border-t border-line">
            {RAMAZAN_SSS.map((madde) => (
              <details
                key={madde.soru}
                name="ramazan-sss"
                className="group border-b border-line"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 marker:content-none">
                  <span className="font-display text-[19px] leading-snug font-medium text-sea-900">
                    {madde.soru}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 font-mono text-[15px] leading-none text-sea-700 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[70ch] pr-8 pb-6 text-ink">
                  {madde.cevap}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section zemin="tint">
        <Reveal>
          <div className="border border-line bg-paper px-[clamp(20px,3vw,36px)] py-[clamp(24px,3vw,36px)]">
            <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
              Kişiye özel plan
            </p>
            <Baslik seviye={2} className="mt-4 !text-h3">
              Ramazan programı
            </Baslik>
            <p className="mt-4 max-w-[62ch] text-small text-ink">
              {RAMAZAN_HIZMETI?.aciklama ??
                "Sahur–iftar kurgusu, sıvı planı, bayram geçişi ve oruç dönemi ilaç uyumu."}
            </p>
            {RAMAZAN_HIZMETI ? (
              <p className="mt-5 font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                {RAMAZAN_HIZMETI.fiyat}
              </p>
            ) : null}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/randevu" ton="birincil">
                Ücretsiz ön görüşme
              </ButtonLink>
              <ButtonLink href="/paketler#ek-hizmetler" ton="ikincil">
                Ek hizmetlerin tamamı
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-9">
          <p className="max-w-[76ch] text-small text-muted">
            {RAMAZAN_HEKIM_UYARISI}
          </p>
          <p className="mt-3 max-w-[76ch] text-small text-muted">
            {YASAL_IBARE} Kendi yaklaşık sıvı ve enerji ihtiyacınızı{" "}
            <Link
              href="/araclar/enerji-ihtiyaci"
              className="text-sea-700 underline underline-offset-4"
            >
              hesaplama araçlarından
            </Link>{" "}
            görebilirsiniz.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
