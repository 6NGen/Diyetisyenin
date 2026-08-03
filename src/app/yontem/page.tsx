import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ADIME, KAYNAKLAR, VERI_BLOKLARI } from "@/content/yontem";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Yöntem",
  description:
    "Beslenme danışmanlığında ADIME'nin beş adımı, kullandığım ölçüm ve hesaplama yöntemleri, denklemler ve kaynak listesi. Hangi hesabın nereden geldiği açık yazılı.",
  alternates: { canonical: "/yontem" },
};

export default function YontemSayfasi() {
  return (
    <>
      <SayfaBasligi
        eyebrow="Yöntem · ADIME"
        baslik="Nasıl çalıştığım, adım adım."
        lede="Beslenme danışmanlığının uluslararası çerçevesi ADIME'dir. Aşağıda hem bu beş adımı hem de her adımda kullandığım ölçüm ve hesaplama yöntemlerini, formülleriyle birlikte bulacaksınız. Bir hesabın nereden geldiğini bilmiyorsanız o hesaba güvenmek zorunda değilsiniz."
      />

      <Section zemin="beyaz">
        <ol className="izgara-cizgi grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ADIME.map((adim, sira) => (
            <li key={adim.no} className="bg-paper">
              <Reveal
                gecikme={sira * 50}
                className="flex h-full flex-col px-[clamp(20px,2.4vw,28px)] py-[clamp(24px,2.8vw,32px)]"
              >
                <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  {adim.no} · {adim.kod}
                </p>
                <h2 className="mt-3 font-display text-h3 font-medium text-sea-900">
                  {adim.baslik}
                </h2>
                <p className="mt-3 text-small text-muted">{adim.ozet}</p>
                <ul className="mt-5 grow space-y-2.5 border-t border-line pt-5">
                  {adim.maddeler.map((madde) => (
                    <li
                      key={madde}
                      className="relative pl-5 text-small text-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-[0.6em] left-0 h-1.5 w-1.5 bg-sea-500"
                      />
                      {madde}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section zemin="tint" id="olcum">
        <Reveal>
          <Eyebrow>Ölçüm ve hesaplama</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Neyi, nasıl ölçüyorum.
          </Baslik>
          <Lede className="mt-5">
            Aşağıdaki altı blok, bir planın arkasındaki bütün hesabı içerir.
            Formüller olduğu gibi yazılıdır; isterseniz kendi rakamlarınızla
            kontrol edebilirsiniz. Tahmin denklemleri başlangıç noktasıdır,
            kesin sonuç değil — asıl ayar takip sırasında yapılır.
          </Lede>
        </Reveal>

        <div className="mt-11 space-y-[clamp(28px,3.5vw,44px)]">
          {VERI_BLOKLARI.map((blok, sira) => (
            <Reveal key={blok.kod} gecikme={sira * 40}>
              <article className="border border-line bg-paper">
                <header className="border-b border-line px-[clamp(20px,2.6vw,32px)] py-[clamp(20px,2.4vw,28px)]">
                  <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                    Blok {blok.kod}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(22px,2.6vw,28px)] leading-tight font-medium text-sea-900">
                    {blok.baslik}
                  </h3>
                  <p className="mt-3 max-w-[68ch] text-small text-muted">
                    {blok.giris}
                  </p>
                </header>

                <dl>
                  {blok.satirlar.map((satir) => (
                    <div
                      key={satir.ad}
                      className="grid gap-2 border-b border-line px-[clamp(20px,2.6vw,32px)] py-[clamp(18px,2.2vw,26px)] last:border-b-0 md:grid-cols-[minmax(180px,0.9fr)_2fr] md:gap-8"
                    >
                      {/* min-w-0: ızgara hücrelerinin varsayılan min-width:auto
                          değeri, taşmayan formül kutusunun 320px'te sayfayı
                          yatay kaydırmasına yol açıyordu. */}
                      <dt className="min-w-0 font-display text-[18px] leading-snug font-medium text-sea-900">
                        {satir.ad}
                      </dt>
                      <dd className="min-w-0">
                        <p className="max-w-[64ch] text-small text-ink">
                          {satir.aciklama}
                        </p>
                        {satir.formul ? (
                          // Dar ekranda yatay kayan bölge; klavye ile de
                          // kaydırılabilmesi için odaklanabilir.
                          <div
                            tabIndex={0}
                            role="region"
                            aria-label={`${satir.ad} formülü`}
                            className="mt-3 overflow-x-auto border border-line bg-sea-50 px-3 py-2.5"
                          >
                            <code className="font-mono text-[13px] whitespace-nowrap text-sea-900">
                              {satir.formul}
                            </code>
                          </div>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section zemin="beyaz" id="kaynaklar">
        <Reveal>
          <Eyebrow>Kaynaklar</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Bu sayfadaki bilgiler nereden geliyor?
          </Baslik>
        </Reveal>

        <Reveal className="mt-9">
          <ol className="border-t border-line">
            {KAYNAKLAR.map((kaynak, sira) => (
              <li
                key={kaynak.kunye}
                className="grid gap-2 border-b border-line py-5 md:grid-cols-[48px_1fr] md:gap-6"
              >
                <span className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  {String(sira + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="max-w-[76ch] text-small text-ink">
                    {kaynak.kunye}
                  </p>
                  {kaynak.not ? (
                    <p className="mt-1.5 text-small text-muted">{kaynak.not}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-11">
          <div className="border border-line bg-sea-50 px-[clamp(20px,3vw,36px)] py-[clamp(24px,3vw,36px)]">
            <p className="max-w-[62ch] text-lede text-ink">
              Bu yöntemin size uyup uymadığını konuşmak için 15 dakikalık
              ücretsiz ön görüşme yeterli.
            </p>
            <div className="mt-7">
              <ButtonLink href="/randevu" ton="birincil">
                Ücretsiz ön görüşme
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
