import { KARSILASTIRMA, PAKETLER } from "@/content/paketler";
import { fiyatYaz } from "@/content/site";

function Hucre({ deger }: { deger: string | boolean }) {
  if (deger === true) {
    return (
      <>
        <span aria-hidden="true" className="text-[15px] text-sea-700">
          ✓
        </span>
        <span className="sr-only">Var</span>
      </>
    );
  }
  if (deger === false) {
    return (
      <>
        <span aria-hidden="true" className="text-muted">
          —
        </span>
        <span className="sr-only">Yok</span>
      </>
    );
  }
  return <span className="text-small text-ink">{deger}</span>;
}

/** Mobilde yatay kaydırılabilir; ilk sütun (özellik adı) yapışkan. */
export function PaketKarsilastirma() {
  return (
    <div
      className="overflow-x-auto border border-line"
      tabIndex={0}
      role="region"
      aria-label="Paket karşılaştırma tablosu — yatay kaydırılabilir"
    >
      <table className="w-full min-w-[720px] border-collapse bg-white text-left">
        <caption className="sr-only">
          Dört paketin özellik bazında karşılaştırması
        </caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="sticky left-0 z-10 border-b border-line bg-white px-4 py-4 align-bottom font-mono text-label tracking-[0.18em] text-muted uppercase"
            >
              Özellik
            </th>
            {PAKETLER.map((paket) => (
              <th
                key={paket.slug}
                scope="col"
                className={`border-b border-l border-line px-4 py-4 align-bottom ${
                  paket.oneCikan ? "bg-sea-50" : "bg-white"
                }`}
              >
                <span className="block font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  {paket.kod}
                </span>
                <span className="mt-1.5 block font-display text-[20px] leading-tight font-medium text-sea-900">
                  {paket.ad}
                </span>
                <span className="mt-1.5 block font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  {fiyatYaz(paket.fiyat)} {paket.fiyatNotu}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {KARSILASTIRMA.map((satir) => (
            <tr key={satir.ozellik}>
              <th
                scope="row"
                className="sticky left-0 z-10 border-b border-line bg-white px-4 py-3.5 text-small font-normal text-ink"
              >
                {satir.ozellik}
              </th>
              {PAKETLER.map((paket) => (
                <td
                  key={paket.slug}
                  className={`border-b border-l border-line px-4 py-3.5 text-center ${
                    paket.oneCikan ? "bg-sea-50" : ""
                  }`}
                >
                  <Hucre deger={satir.deger[paket.slug]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
