import { Etiket } from "@/components/ui/Etiket";
import type { SofraMaddesi } from "@/content/sofra";

/** Koyu zeminde kart. Yardımcı metin --muted değil --sea-300 (kontrast ≥ 4.5:1). */
export function SofraKarti({
  madde,
  sira,
}: {
  madde: SofraMaddesi;
  sira: number;
}) {
  return (
    <article className="flex h-full flex-col bg-sea-900 px-[clamp(20px,2.4vw,28px)] py-[clamp(24px,2.8vw,32px)]">
      <p className="font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
        {String(sira).padStart(2, "0")}
      </p>

      <h3 className="mt-3 font-display text-h3 font-medium text-white">
        {madde.baslik}
      </h3>

      <p className="mt-4 text-small text-sea-300">{madde.metin}</p>

      <div className="mt-5 grow border-t border-line-dark pt-5">
        <p className="font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
          Bugünkü karşılığı
        </p>
        <p className="mt-2.5 text-small text-white/90">
          {madde.bugunkuKarsiligi}
        </p>
      </div>

      <div className="mt-6 border-t border-line-dark pt-5">
        <p className="font-mono text-[11px] leading-relaxed tracking-[0.06em] text-sea-300">
          {madde.kaynak}
        </p>
        {madde.sihhat ? (
          <div className="mt-3">
            <Etiket ton="koyu">{madde.sihhat}</Etiket>
          </div>
        ) : null}
      </div>
    </article>
  );
}
