import type { ReactNode } from "react";

type Seviye = 1 | 2 | 3;

/** Display font başlık. Koyu zeminde beyaza döner. */
export function Baslik({
  seviye = 2,
  children,
  koyu = false,
  className = "",
  id,
}: {
  seviye?: Seviye;
  children: ReactNode;
  koyu?: boolean;
  className?: string;
  id?: string;
}) {
  const renk = koyu ? "text-white" : "text-sea-900";
  const olcek =
    seviye === 1
      ? "text-h1 font-light"
      : seviye === 2
        ? "text-h2 font-light"
        : "text-h3 font-medium";

  const ortak = `font-display ${olcek} ${renk} ${className}`;

  if (seviye === 1) {
    return (
      <h1 id={id} className={ortak}>
        {children}
      </h1>
    );
  }
  if (seviye === 2) {
    return (
      <h2 id={id} className={ortak}>
        {children}
      </h2>
    );
  }
  return (
    <h3 id={id} className={ortak}>
      {children}
    </h3>
  );
}

/** Başlık altındaki giriş paragrafı. */
export function Lede({
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
      className={`text-lede ${koyu ? "text-sea-300" : "text-muted"} max-w-[62ch] ${className}`}
    >
      {children}
    </p>
  );
}
