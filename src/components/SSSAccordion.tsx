import { SSS, SSS_GRUPLARI } from "@/content/sss";

/**
 * <details>/<summary> ile kurulur: JavaScript gerekmez, klavye ile tam gezilebilir
 * ve tarayıcının kendi sayfa içi arama davranışı içerikleri bulabilir.
 */
export function SSSAccordion() {
  return (
    <div className="space-y-[clamp(36px,5vw,56px)]">
      {SSS_GRUPLARI.map((grup) => {
        const maddeler = SSS.filter((madde) => madde.grup === grup);
        if (maddeler.length === 0) return null;

        return (
          <section key={grup} aria-labelledby={`sss-${grup}`}>
            <h2
              id={`sss-${grup}`}
              className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase"
            >
              {grup}
            </h2>

            <div className="mt-5 border-t border-line">
              {maddeler.map((madde) => (
                <details
                  key={madde.soru}
                  name={`sss-${grup}`}
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
          </section>
        );
      })}
    </div>
  );
}
