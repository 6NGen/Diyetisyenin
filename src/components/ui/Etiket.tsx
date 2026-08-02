import type { ReactNode } from "react";

type EtiketTonu = "acik" | "koyu" | "vurgu";

const TONLAR: Record<EtiketTonu, string> = {
  acik: "border-line text-sea-700 bg-white",
  koyu: "border-line-dark text-sea-300 bg-transparent",
  vurgu: "border-sea-700 text-white bg-sea-700",
};

/** Küçük çerçeveli mono etiket: sıhhat rozeti, paket rozeti, kategori. */
export function Etiket({
  children,
  ton = "acik",
  className = "",
}: {
  children: ReactNode;
  ton?: EtiketTonu;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 font-mono text-label uppercase tracking-[0.18em] ${TONLAR[ton]} ${className}`}
    >
      {children}
    </span>
  );
}
