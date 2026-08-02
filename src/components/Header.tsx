"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ANA_MENU, SITE, TAM_AD } from "@/content/site";

export function Header() {
  const [acik, setAcik] = useState(false);
  const yol = usePathname();
  const menuId = useId();

  useEffect(() => {
    setAcik(false);
  }, [yol]);

  useEffect(() => {
    if (!acik) return;
    const kapat = (olay: KeyboardEvent) => {
      if (olay.key === "Escape") setAcik(false);
    };
    window.addEventListener("keydown", kapat);
    return () => window.removeEventListener("keydown", kapat);
  }, [acik]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="konteyner flex h-[66px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-2"
          aria-label={`${TAM_AD} — anasayfa`}
        >
          <span className="font-display text-[19px] leading-none font-medium text-sea-900">
            {SITE.unvan} {SITE.ad}
          </span>
          <span className="hidden font-mono text-label tracking-[0.18em] text-muted uppercase sm:inline">
            {SITE.sehir}
          </span>
        </Link>

        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-6 lg:flex"
        >
          {ANA_MENU.map((oge) => {
            const etkin =
              yol === oge.href || (oge.href !== "/" && yol.startsWith(`${oge.href}/`));
            return (
              <Link
                key={oge.href}
                href={oge.href}
                aria-current={etkin ? "page" : undefined}
                className={`font-mono text-label tracking-[0.18em] uppercase transition-colors ${
                  etkin
                    ? "text-sea-700 underline underline-offset-[6px]"
                    : "text-ink hover:text-sea-700"
                }`}
              >
                {oge.ad}
              </Link>
            );
          })}
          <Link
            href="/randevu"
            className="border border-sea-700 bg-sea-700 px-4 py-2.5 font-mono text-label tracking-[0.18em] text-white uppercase transition-colors hover:border-sea-900 hover:bg-sea-900"
          >
            Randevu
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setAcik((o) => !o)}
          aria-expanded={acik}
          aria-controls={menuId}
          className="flex items-center gap-2 border border-line px-3 py-2 font-mono text-label tracking-[0.18em] text-sea-900 uppercase lg:hidden"
        >
          <span
            aria-hidden="true"
            className="flex w-4 flex-col gap-[3px]"
          >
            <span className="block h-px w-full bg-sea-900" />
            <span className="block h-px w-full bg-sea-900" />
            <span className="block h-px w-full bg-sea-900" />
          </span>
          {acik ? "Kapat" : "Menü"}
        </button>
      </div>

      {acik ? (
        <nav
          id={menuId}
          aria-label="Mobil menü"
          className="border-t border-line bg-white lg:hidden"
        >
          <div className="konteyner flex flex-col py-2">
            {ANA_MENU.map((oge) => (
              <Link
                key={oge.href}
                href={oge.href}
                className="border-b border-line py-3.5 font-mono text-label tracking-[0.18em] text-ink uppercase last:border-b-0"
              >
                {oge.ad}
              </Link>
            ))}
            <Link
              href="/randevu"
              className="mt-3 mb-2 bg-sea-700 px-4 py-3.5 text-center font-mono text-label tracking-[0.18em] text-white uppercase"
            >
              Ücretsiz ön görüşme
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
