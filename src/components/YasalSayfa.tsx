import type { ReactNode } from "react";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { Section } from "@/components/ui/Section";
import { EPOSTA_HREF, SITE, YASAL_IBARE } from "@/content/site";

export type YasalBolum = {
  baslik: string;
  /** Hukukçu metni gelene kadar bölümün neyi kapsaması gerektiğini anlatır. */
  kapsam: string;
};

/**
 * Yasal sayfa iskeleti.
 *
 * Bu sayfalardaki metinler BİLEREK yazılmamıştır. Aşağıdaki bölüm başlıkları
 * yapıyı kurar; içerikleri bir hukukçu tarafından doldurulmalıdır.
 */
export function YasalSayfa({
  eyebrow,
  baslik,
  lede,
  bolumler,
  ekNot,
}: {
  eyebrow: string;
  baslik: string;
  lede: string;
  bolumler: readonly YasalBolum[];
  ekNot?: ReactNode;
}) {
  return (
    <>
      <SayfaBasligi eyebrow={eyebrow} baslik={baslik} lede={lede} />

      <Section zemin="beyaz">
        <div className="border border-sea-500 bg-sea-50 px-[clamp(20px,3vw,32px)] py-[clamp(20px,2.6vw,28px)]">
          <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
            Taslak — yayına hazır değil
          </p>
          <p className="mt-4 max-w-[76ch] text-small text-ink">
            <strong>TODO: hukukçu metni.</strong> Bu sayfada yalnızca başlık
            yapısı vardır; bölüm metinleri bir hukukçu tarafından yazılmalı ve
            onaylanmalıdır. Site yayına alınmadan önce bu uyarı kutusu
            kaldırılmalı ve bölümler gerçek metinle doldurulmalıdır.
          </p>
        </div>

        <div className="metin mt-[clamp(36px,5vw,56px)]">
          <ol className="!list-none !pl-0">
            {bolumler.map((bolum, sira) => (
              <li key={bolum.baslik} className="!pl-0">
                <h2 id={`bolum-${sira + 1}`}>
                  <span className="mr-3 font-mono text-label tracking-[0.18em] text-sea-500 uppercase">
                    {String(sira + 1).padStart(2, "0")}
                  </span>
                  {bolum.baslik}
                </h2>
                <p className="text-muted italic">
                  TODO: hukukçu metni — {bolum.kapsam}
                </p>
              </li>
            ))}
          </ol>

          {ekNot}

          <hr className="my-10" />

          <p className="text-small text-muted">
            Bu metinlerle ilgili sorularınız için{" "}
            <a href={EPOSTA_HREF}>{SITE.eposta}</a> adresine yazabilirsiniz.
          </p>
          <p className="text-small text-muted">{YASAL_IBARE}</p>
        </div>
      </Section>
    </>
  );
}
