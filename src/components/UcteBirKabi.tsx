"use client";

import { useEffect, useRef, useState } from "react";

const BANTLAR = [
  { ad: "Nefes", oran: "üçte bir", not: "boş bırakılan pay" },
  { ad: "Su", oran: "üçte bir", not: "içecek" },
  { ad: "Yemek", oran: "üçte bir", not: "katı gıda" },
] as const;

/**
 * İmza öğesi. Kaptaki üç bant, kap görünür alana girdiğinde alttan yukarı dolar.
 * prefers-reduced-motion: reduce altında bantlar doğrudan dolu gelir (globals.css).
 * Yalnızca anasayfa hero'sunda ve /sunnet-uzere-sofra sayfasında kullanılır.
 */
export function UcteBirKabi({ koyu = false }: { koyu?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [dolu, setDolu] = useState(false);

  useEffect(() => {
    const eleman = ref.current;
    if (!eleman || typeof IntersectionObserver === "undefined") {
      setDolu(true);
      return;
    }

    const gozlemci = new IntersectionObserver(
      (girisler) => {
        for (const giris of girisler) {
          if (giris.isIntersecting) {
            setDolu(true);
            gozlemci.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );

    gozlemci.observe(eleman);
    return () => gozlemci.disconnect();
  }, []);

  return (
    <figure
      className={`border p-[clamp(20px,4vw,36px)] ${
        koyu
          ? "border-line-dark bg-sea-900"
          : "border-sea-300 bg-sea-50"
      }`}
    >
      <div className="flex items-stretch gap-[clamp(16px,3vw,28px)]">
        <div
          ref={ref}
          data-dolu={dolu ? "evet" : "hayir"}
          className="vessel shrink-0 grow basis-0"
          role="img"
          aria-label="Üçte bir kabı: alt üçte biri yemek, orta üçte biri su, üst üçte biri boş."
        >
          <span className="vessel-cizgi" style={{ bottom: "33.333%" }} />
          <span className="vessel-cizgi" style={{ bottom: "66.666%" }} />
          <span className="vessel-bant vessel-bant--yemek" />
          <span className="vessel-bant vessel-bant--su" />
        </div>

        <ol
          className="grid w-[46%] max-w-[190px] shrink-0 grid-rows-3"
          aria-hidden="true"
        >
          {BANTLAR.map((bant) => (
            <li
              key={bant.ad}
              className={`flex flex-col justify-center border-t first:border-t-0 ${
                koyu ? "border-line-dark" : "border-line"
              }`}
            >
              <span
                className={`font-mono text-label tracking-[0.18em] uppercase ${
                  koyu ? "text-sea-300" : "text-sea-700"
                }`}
              >
                {bant.oran}
              </span>
              <span
                className={`font-display text-[20px] leading-tight ${
                  koyu ? "text-white" : "text-sea-900"
                }`}
              >
                {bant.ad}
              </span>
              <span
                className={`text-small ${koyu ? "text-sea-300" : "text-muted"}`}
              >
                {bant.not}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <figcaption
        className={`mt-[clamp(20px,3vw,28px)] border-t pt-4 text-small ${
          koyu ? "border-line-dark text-sea-300" : "border-line text-muted"
        }`}
      >
        Mide üçe ayrılır: bir pay yemeğe, bir pay suya, bir pay nefese. Bu
        sitenin ölçü anlayışı bu kaptan geliyor.
      </figcaption>
    </figure>
  );
}
