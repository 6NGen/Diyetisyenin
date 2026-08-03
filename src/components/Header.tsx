"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import {
  ANA_MENU,
  EK_MENU,
  SITE,
  TAM_AD,
  TELEFON_HREF,
  WHATSAPP_HREF,
  telefonGoster,
  yerTutucuMu,
} from "@/content/site";
import { usePathname } from "next/navigation";

export function Header() {
  const [acik, setAcik] = useState(false);
  const yol = usePathname();
  const menuId = useId();
  const acButonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /** Kapatan her yol buradan geçer ki odak açan butona geri dönsün. */
  const kapat = () => {
    setAcik(false);
    acButonRef.current?.focus();
  };

  // Panel açıkken arkadaki sayfa kaymasın.
  useEffect(() => {
    if (!acik) return;
    const onceki = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = onceki;
    };
  }, [acik]);

  // Odak panelin içinde kalsın; Escape kapatsın.
  useEffect(() => {
    if (!acik) return;
    const panel = panelRef.current;
    if (!panel) return;

    const odaklanabilirler = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );

    odaklanabilirler()[0]?.focus();

    const tusaBasildi = (olay: KeyboardEvent) => {
      if (olay.key === "Escape") {
        setAcik(false);
        acButonRef.current?.focus();
        return;
      }
      if (olay.key !== "Tab") return;

      const ogeler = odaklanabilirler();
      const ilk = ogeler[0];
      const son = ogeler[ogeler.length - 1];
      if (!ilk || !son) return;

      if (olay.shiftKey && document.activeElement === ilk) {
        olay.preventDefault();
        son.focus();
      } else if (!olay.shiftKey && document.activeElement === son) {
        olay.preventDefault();
        ilk.focus();
      }
    };

    document.addEventListener("keydown", tusaBasildi);
    return () => document.removeEventListener("keydown", tusaBasildi);
  }, [acik]);

  const etkinMi = (href: string) =>
    yol === href || (href !== "/" && yol.startsWith(`${href}/`));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
        <div className="konteyner flex h-[66px] items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${TAM_AD} — anasayfa`}
          >
            {/* Bağlantının kendi aria-label'ı var; logo süsleyicidir, alt boş. */}
            <Image
              src="/logo-amblem.png"
              alt=""
              width={512}
              height={512}
              priority
              sizes="(min-width: 640px) 36px, 28px"
              className="h-7 w-7 shrink-0 object-contain sm:h-9 sm:w-9"
            />
            <span className="font-display text-[16px] leading-none font-medium text-sea-900 sm:text-[19px]">
              {SITE.unvan} {SITE.ad}
            </span>
            {yerTutucuMu(SITE.sehir) ? null : (
              <span className="hidden font-mono text-label tracking-[0.18em] text-muted uppercase sm:inline">
                {SITE.sehir}
              </span>
            )}
          </Link>

          <nav aria-label="Ana menü" className="hidden items-center gap-6 xl:flex">
            {ANA_MENU.map((oge) => (
              <Link
                key={oge.href}
                href={oge.href}
                aria-current={etkinMi(oge.href) ? "page" : undefined}
                className={`font-mono text-label tracking-[0.18em] uppercase transition-colors ${
                  etkinMi(oge.href)
                    ? "text-sea-700 underline underline-offset-[6px]"
                    : "text-ink hover:text-sea-700"
                }`}
              >
                {oge.ad}
              </Link>
            ))}
            <Link
              href="/randevu"
              className="border border-sea-700 bg-sea-700 px-4 py-2.5 font-mono text-label tracking-[0.18em] text-white uppercase transition-colors hover:border-sea-900 hover:bg-sea-900"
            >
              Randevu
            </Link>
          </nav>

          <button
            ref={acButonRef}
            type="button"
            onClick={() => setAcik(true)}
            aria-expanded={acik}
            aria-controls={menuId}
            aria-haspopup="dialog"
            className="flex items-center gap-2 border border-line px-3 py-2 font-mono text-label tracking-[0.18em] text-sea-900 uppercase xl:hidden"
          >
            <span aria-hidden="true" className="flex w-4 flex-col gap-[3px]">
              <span className="block h-px w-full bg-sea-900" />
              <span className="block h-px w-full bg-sea-900" />
              <span className="block h-px w-full bg-sea-900" />
            </span>
            {/* 320px'te yazı gizlenir ama butonun erişilebilir adı korunur. */}
            <span className="sr-only sm:not-sr-only">Menü</span>
          </button>
        </div>
      </header>

      {/*
        Yan menü. Header'ın dışında duruyor çünkü sticky header'ın yığın
        bağlamı içinde kalsaydı tüm sayfayı kaplayamazdı.
        Kapalıyken inert: bağlantılar sekmeyle gezilemez, ekran okuyucuya
        görünmez — ama geçiş animasyonu için DOM'da kalır.
      */}
      <div className="xl:hidden">
        <div
          aria-hidden="true"
          onClick={kapat}
          className={`fixed inset-0 z-[60] bg-sea-900/40 transition-opacity duration-300 motion-reduce:transition-none ${
            acik ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        <div
          id={menuId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menüsü"
          inert={!acik}
          className={`fixed top-0 right-0 z-[70] flex h-dvh w-1/2 min-w-[270px] flex-col border-l border-line bg-white transition-transform duration-300 motion-reduce:transition-none ${
            acik ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[66px] shrink-0 items-center justify-between gap-3 border-b border-line pr-[clamp(16px,4vw,24px)] pl-[clamp(20px,5vw,28px)]">
            <span className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
              Menü
            </span>
            <button
              type="button"
              onClick={kapat}
              className="flex items-center gap-2 border border-line px-3 py-2 font-mono text-label tracking-[0.18em] text-sea-900 uppercase"
            >
              <span aria-hidden="true" className="relative block h-3 w-3">
                <span className="absolute top-1/2 left-0 block h-px w-full rotate-45 bg-sea-900" />
                <span className="absolute top-1/2 left-0 block h-px w-full -rotate-45 bg-sea-900" />
              </span>
              Kapat
            </button>
          </div>

          <nav
            aria-label="Site menüsü"
            className="flex-1 overflow-y-auto overscroll-contain px-[clamp(20px,5vw,28px)]"
          >
            <ul>
              {[...ANA_MENU, ...EK_MENU].map((oge) => (
                <li key={oge.href}>
                  <Link
                    href={oge.href}
                    onClick={() => setAcik(false)}
                    aria-current={etkinMi(oge.href) ? "page" : undefined}
                    className={`block border-b border-line py-4 font-mono text-label tracking-[0.18em] uppercase ${
                      etkinMi(oge.href) ? "text-sea-700" : "text-ink"
                    }`}
                  >
                    {oge.ad}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-6 pb-8">
              <p className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                Doğrudan
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={TELEFON_HREF}
                    className="text-small text-sea-700 underline underline-offset-4"
                  >
                    {telefonGoster(SITE.telefon)}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small text-sea-700 underline underline-offset-4"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="shrink-0 border-t border-line px-[clamp(20px,5vw,28px)] py-[clamp(16px,4vw,24px)]">
            <Link
              href="/randevu"
              onClick={() => setAcik(false)}
              className="block bg-sea-700 px-4 py-3.5 text-center font-mono text-label tracking-[0.18em] text-white uppercase"
            >
              Ücretsiz ön görüşme
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
