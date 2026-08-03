import Link from "next/link";
import {
  ANA_MENU,
  EPOSTA_HREF,
  SITE,
  TELEFON_HREF,
  WHATSAPP_HREF,
  YASAL_IBARE,
  YASAL_MENU,
  telefonGoster,
  yerTutucuMu,
} from "@/content/site";

export function Footer() {
  const yil = new Date().getFullYear();

  return (
    <footer className="bg-sea-900 text-sea-300">
      <div className="konteyner py-[clamp(48px,6vw,84px)]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-[22px] leading-tight font-medium text-white">
              {SITE.unvan} {SITE.ad}
            </p>
            <p className="mt-2 text-small text-sea-300">{SITE.meslek}</p>
            {yerTutucuMu(SITE.universite) ? null : (
              <p className="mt-4 text-small text-sea-300">{SITE.universite}</p>
            )}
            {yerTutucuMu(SITE.diplomaTescilNo) ? null : (
              <p className="mt-4 font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
                Diploma tescil no: {SITE.diplomaTescilNo}
              </p>
            )}
          </div>

          <nav aria-label="Alt menü">
            <p className="font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
              Sayfalar
            </p>
            <ul className="mt-4 space-y-2.5">
              {ANA_MENU.map((oge) => (
                <li key={oge.href}>
                  <Link
                    href={oge.href}
                    className="text-small text-white/85 underline-offset-4 hover:underline"
                  >
                    {oge.ad}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/randevu"
                  className="text-small text-white/85 underline-offset-4 hover:underline"
                >
                  Randevu
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
              İletişim
            </p>
            <ul className="mt-4 space-y-2.5 text-small">
              <li>
                <a
                  href={TELEFON_HREF}
                  className="text-white/85 underline-offset-4 hover:underline"
                >
                  {telefonGoster(SITE.telefon)}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 underline-offset-4 hover:underline"
                >
                  WhatsApp
                </a>
              </li>
              {yerTutucuMu(SITE.eposta) ? null : (
                <li>
                  <a
                    href={EPOSTA_HREF}
                    className="text-white/85 underline-offset-4 hover:underline"
                  >
                    {SITE.eposta}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 underline-offset-4 hover:underline"
                >
                  Instagram
                </a>
              </li>
              {yerTutucuMu(SITE.adres) ? null : (
                <li className="pt-2 text-sea-300">{SITE.adres}</li>
              )}
            </ul>
          </div>

          <div>
            <p className="font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
              Çalışma saatleri
            </p>
            <dl className="mt-4 space-y-2.5 text-small">
              {SITE.calismaSaatleri.map((satir) => (
                <div key={satir.gun} className="flex justify-between gap-4">
                  <dt className="text-sea-300">{satir.gun}</dt>
                  <dd className="text-white/85">{satir.saat}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
              Yasal
            </p>
            <ul className="mt-4 space-y-2.5 text-small">
              {YASAL_MENU.map((oge) => (
                <li key={oge.href}>
                  <Link
                    href={oge.href}
                    className="text-white/85 underline-offset-4 hover:underline"
                  >
                    {oge.ad}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line-dark pt-6">
          <p className="max-w-[70ch] text-small text-sea-300">{YASAL_IBARE}</p>
          <p className="mt-3 font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
            © {yil} {SITE.unvan} {SITE.ad}
          </p>
        </div>
      </div>
    </footer>
  );
}
