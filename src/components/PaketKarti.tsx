import Link from "next/link";
import { Etiket } from "@/components/ui/Etiket";
import { fiyatYaz } from "@/content/site";
import type { Paket } from "@/content/paketler";

/** Kart zemini her zaman beyazdır: tint üstünde beyaz kart = derinlik. */
export function PaketKarti({ paket }: { paket: Paket }) {
  return (
    <article className="flex h-full flex-col bg-paper px-[clamp(20px,2.4vw,28px)] py-[clamp(24px,2.8vw,32px)] transition-transform duration-200 hover:-translate-y-[3px]">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-label tracking-[0.18em] text-sea-500 uppercase">
          {paket.kod}
        </p>
        {paket.oneCikan ? <Etiket ton="vurgu">Öne çıkan</Etiket> : null}
      </div>

      <h3 className="mt-4 font-display text-[26px] leading-tight font-medium text-sea-900">
        {paket.ad}
      </h3>

      <p className="mt-2.5 text-small text-muted">{paket.kimeGore}</p>

      <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-display text-[34px] leading-none font-medium whitespace-nowrap text-sea-900">
          {fiyatYaz(paket.fiyat)}
        </span>
        <span className="font-mono text-label tracking-[0.18em] whitespace-nowrap text-muted uppercase">
          {paket.fiyatNotu}
        </span>
      </p>

      <p className="mt-2 font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
        {paket.gorusmeSayisi}
      </p>

      <ul className="mt-6 grow space-y-2.5 border-t border-line pt-6">
        {paket.ozet.map((madde) => (
          <li key={madde} className="relative pl-5 text-small text-ink">
            <span
              aria-hidden="true"
              className="absolute top-[0.62em] left-0 h-1.5 w-1.5 bg-sea-500"
            />
            {madde}
          </li>
        ))}
      </ul>

      <Link
        href={`/paketler/${paket.slug}`}
        className="mt-7 inline-flex items-center justify-between gap-2 border border-line px-4 py-3.5 font-mono text-label tracking-[0.18em] text-sea-900 uppercase transition-colors hover:border-sea-700 hover:text-sea-700"
      >
        {paket.ad} paketini incele
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
