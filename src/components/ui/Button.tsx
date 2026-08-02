import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Ton = "birincil" | "ikincil" | "koyu" | "sade";

const TABAN =
  "inline-flex items-center justify-center gap-2 font-mono text-label uppercase tracking-[0.18em] " +
  "px-6 py-4 border transition-colors duration-200 text-center";

const TONLAR: Record<Ton, string> = {
  // Doygun yeşil dolgu — sayfada üçten fazla blok kullanılmaz.
  birincil:
    "bg-sea-700 text-white border-sea-700 hover:bg-sea-900 hover:border-sea-900",
  // Açık zeminde çizgili buton.
  ikincil:
    "bg-white text-sea-900 border-line hover:border-sea-700 hover:text-sea-700",
  // Koyu zeminde çizgili buton.
  koyu: "bg-transparent text-sea-300 border-line-dark hover:bg-sea-300 hover:text-sea-900 hover:border-sea-300",
  sade: "bg-transparent text-sea-700 border-transparent px-0 py-1 hover:text-sea-900",
};

type OrtakProps = {
  ton?: Ton;
  children: ReactNode;
  className?: string;
};

type ButtonProps = OrtakProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type LinkProps = OrtakProps & { href: string; harici?: boolean };

export function Button({
  ton = "birincil",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button className={`${TABAN} ${TONLAR[ton]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  ton = "birincil",
  children,
  className = "",
  href,
  harici = false,
}: LinkProps) {
  const sinif = `${TABAN} ${TONLAR[ton]} ${className}`;

  if (harici) {
    return (
      <a
        href={href}
        className={sinif}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sinif}>
      {children}
    </Link>
  );
}
