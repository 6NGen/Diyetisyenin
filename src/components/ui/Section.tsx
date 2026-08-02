import type { ReactNode } from "react";

/**
 * Bölüm zemini.
 * - "beyaz"  → varsayılan; sayfa yüzeyinin dörtte üçü bu olmalı
 * - "tint"   → sea-50; alternasyon bu tonla yapılır, ikinci bir koyu renkle değil
 * - "koyu"   → sea-900; yalnızca sünnet üzere sofra bölümü ve footer
 */
export type Zemin = "beyaz" | "tint" | "koyu";

const ZEMINLER: Record<Zemin, string> = {
  beyaz: "bg-white text-ink",
  tint: "bg-sea-50 text-ink",
  koyu: "bg-sea-900 text-sea-300",
};

export function Section({
  zemin = "beyaz",
  id,
  children,
  className = "",
  bosluk = true,
}: {
  zemin?: Zemin;
  id?: string;
  children: ReactNode;
  className?: string;
  bosluk?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${ZEMINLER[zemin]} ${bosluk ? "bolum-bosluk" : ""} ${className}`}
    >
      <div className="konteyner">{children}</div>
    </section>
  );
}
