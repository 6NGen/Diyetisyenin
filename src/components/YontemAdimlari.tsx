import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ADIME, ADIME_GIRIS } from "@/content/yontem";

/** Anasayfadaki özet hâli. Tam anlatım /yontem sayfasında. */
export function YontemAdimlari() {
  return (
    <Section zemin="beyaz" id="yontem">
      <Reveal>
        <Eyebrow>Yöntem · ADIME</Eyebrow>
        <Baslik seviye={2} className="mt-4">
          Beş adım, hep aynı sırada.
        </Baslik>
        <Lede className="mt-5">{ADIME_GIRIS}</Lede>
      </Reveal>

      <ol className="izgara-cizgi mt-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {ADIME.map((adim, sira) => (
          <li key={adim.no} className="bg-paper">
            <Reveal
              gecikme={sira * 60}
              className="flex h-full flex-col px-[clamp(18px,2vw,24px)] py-[clamp(22px,2.6vw,30px)] transition-transform duration-200 hover:-translate-y-[3px]"
            >
              <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                {adim.no} · {adim.kod}
              </p>
              <h3 className="mt-3 font-display text-h3 font-medium text-sea-900">
                {adim.baslik}
              </h3>
              <p className="mt-2.5 text-small text-muted">{adim.ozet}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-9">
        <ButtonLink href="/yontem" ton="ikincil">
          Yöntemin tamamını oku
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
