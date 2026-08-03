"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

/**
 * Sitedeki tek hareket kalıbı:
 * görünür alana girince opacity 0→1 + translateY(16px)→0, 600ms ease.
 * prefers-reduced-motion: reduce altında animasyon uygulanmaz.
 */
export function Reveal({
  children,
  as: Etiket = "div",
  gecikme = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  gecikme?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [gorundu, setGorundu] = useState(false);

  useEffect(() => {
    const eleman = ref.current;
    if (!eleman) return;

    // prefers-reduced-motion burada kontrol edilmez; globals.css içindeki
    // @media (prefers-reduced-motion: no-preference) kuralı zaten gizlemeyi
    // yalnızca hareket istenen durumda uygular.
    if (typeof IntersectionObserver === "undefined") {
      const kare = requestAnimationFrame(() => setGorundu(true));
      return () => cancelAnimationFrame(kare);
    }

    const gozlemci = new IntersectionObserver(
      (girisler) => {
        for (const giris of girisler) {
          if (giris.isIntersecting) {
            setGorundu(true);
            gozlemci.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    gozlemci.observe(eleman);
    return () => gozlemci.disconnect();
  }, []);

  return (
    <Etiket
      ref={ref}
      data-reveal={gorundu ? "gorundu" : "bekliyor"}
      style={gecikme ? { transitionDelay: `${gecikme}ms` } : undefined}
      className={className}
    >
      {children}
    </Etiket>
  );
}
