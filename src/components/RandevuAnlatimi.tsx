import { Etiket } from "@/components/ui/Etiket";

export const ON_GORUSME_KONULARI = [
  "Şu anki öğün düzeniniz ve sizi zorlayan yerler",
  "Nasıl çalıştığım, süreç boyunca ne olacağı",
  "Hangi paketin size uyduğu, uymuyorsa neden",
  "Sorularınız — özellikle daha önce denediklerinizle ilgili olanlar",
];

export const ON_GORUSME_DISI = [
  "Ölçüm alınmaz, tahlil yorumlanmaz",
  "Beslenme planı veya diyet listesi verilmez",
  "Hastalık, ilaç veya teşhis konuşulmaz",
  "Satın alma baskısı yapılmaz",
];

/** /randevu ve anasayfadaki randevu bölümünde ortak kullanılan sol sütun. */
export function RandevuAnlatimi() {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Etiket>15 dakika</Etiket>
        <Etiket>Ücretsiz</Etiket>
        <Etiket>Telefon veya görüntülü</Etiket>
      </div>

      <p className="mt-7 max-w-[54ch] text-lede text-muted">
        Ön görüşme bir satış görüşmesi değil, karşılıklı bir tanışmadır. Neye
        ihtiyacınız olduğunu anlatırsınız, ben nasıl çalıştığımı anlatırım.
        Sonunda birlikte çalışmanın size uygun olup olmadığına siz karar
        verirsiniz.
      </p>

      <div className="izgara-cizgi mt-9 grid-cols-1 sm:grid-cols-2">
        <div className="bg-paper px-5 py-6">
          <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
            Ne konuşuruz
          </p>
          <ul className="mt-4 space-y-2.5">
            {ON_GORUSME_KONULARI.map((madde) => (
              <li key={madde} className="relative pl-5 text-small text-ink">
                <span
                  aria-hidden="true"
                  className="absolute top-[0.6em] left-0 h-1.5 w-1.5 bg-sea-500"
                />
                {madde}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-paper px-5 py-6">
          <p className="font-mono text-label tracking-[0.18em] text-muted uppercase">
            Ne konuşmayız
          </p>
          <ul className="mt-4 space-y-2.5">
            {ON_GORUSME_DISI.map((madde) => (
              <li key={madde} className="relative pl-5 text-small text-muted">
                <span
                  aria-hidden="true"
                  className="absolute top-[0.85em] left-0 h-px w-3 bg-muted"
                />
                {madde}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ol className="mt-9 space-y-4">
        {[
          "Formu doldurursunuz — sağlık bilgisi istenmez.",
          "1 iş günü içinde sizi arar, uygun bir saat belirleriz.",
          "15 dakikalık ön görüşmeyi yaparız.",
          "Devam etmek isterseniz ilk randevunuzu planlarız.",
        ].map((adim, sira) => (
          <li key={adim} className="flex gap-4">
            <span className="mt-0.5 shrink-0 font-mono text-label tracking-[0.18em] text-sea-500 uppercase">
              {String(sira + 1).padStart(2, "0")}
            </span>
            <span className="text-small text-ink">{adim}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
