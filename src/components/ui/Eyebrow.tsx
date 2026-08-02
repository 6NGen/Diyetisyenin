import type { ReactNode } from "react";

/** Bölüm üstü mono etiket. Koyu zeminde sea-300, açık zeminde sea-700. */
export function Eyebrow({
  children,
  koyu = false,
  className = "",
}: {
  children: ReactNode;
  koyu?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-label uppercase tracking-[0.18em] ${
        koyu ? "text-sea-300" : "text-sea-700"
      } ${className}`}
    >
      {children}
    </p>
  );
}
