import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import {
  EPOSTA_HREF,
  SITE,
  TELEFON_HREF,
  WHATSAPP_HREF,
  telefonGoster,
} from "@/content/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${SITE.sehir} adresi, çalışma saatleri, telefon, WhatsApp ve e-posta. Yüz yüze veya online görüşme için doğrudan ulaşabilirsiniz.`,
  alternates: { canonical: "/iletisim" },
};

const HARITA_SORGUSU = encodeURIComponent(SITE.adres);

export default function IletisimSayfasi() {
  const koordinatVar = SITE.koordinat.lat !== 0 || SITE.koordinat.lng !== 0;
  const haritaSrc = koordinatVar
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${SITE.koordinat.lng - 0.006}%2C${SITE.koordinat.lat - 0.004}%2C${SITE.koordinat.lng + 0.006}%2C${SITE.koordinat.lat + 0.004}&layer=mapnik&marker=${SITE.koordinat.lat}%2C${SITE.koordinat.lng}`
    : null;

  return (
    <>
      <SayfaBasligi
        eyebrow="İletişim"
        baslik="Nerede, ne zaman."
        lede="Randevu için formu doldurmak en hızlısı; acele bir sorunuz varsa WhatsApp'tan yazabilir ya da doğrudan arayabilirsiniz."
      />

      <Section zemin="beyaz">
        <div className="grid gap-[clamp(32px,5vw,64px)] lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Doğrudan ulaşın</Eyebrow>
            <Baslik seviye={2} className="mt-4">
              İletişim bilgileri
            </Baslik>

            <dl className="mt-8 border-t border-line">
              {[
                {
                  ad: "Telefon",
                  deger: telefonGoster(SITE.telefon),
                  href: TELEFON_HREF,
                  harici: false,
                },
                {
                  ad: "WhatsApp",
                  deger: telefonGoster(SITE.whatsapp),
                  href: WHATSAPP_HREF,
                  harici: true,
                },
                {
                  ad: "E-posta",
                  deger: SITE.eposta,
                  href: EPOSTA_HREF,
                  harici: false,
                },
                {
                  ad: "Instagram",
                  deger: SITE.instagram.replace(/^https?:\/\//, ""),
                  href: SITE.instagram,
                  harici: true,
                },
              ].map((satir) => (
                <div
                  key={satir.ad}
                  className="grid gap-1 border-b border-line py-4 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                    {satir.ad}
                  </dt>
                  <dd>
                    <a
                      href={satir.href}
                      {...(satir.harici
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="break-words text-sea-700 underline underline-offset-4 hover:text-sea-900"
                    >
                      {satir.deger}
                    </a>
                  </dd>
                </div>
              ))}

              <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                  Adres
                </dt>
                <dd className="text-ink">{SITE.adres}</dd>
              </div>
            </dl>

            <div className="mt-10">
              <Eyebrow>Çalışma saatleri</Eyebrow>
              <dl className="mt-5 border-t border-line">
                {SITE.calismaSaatleri.map((satir) => (
                  <div
                    key={satir.gun}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                  >
                    <dt className="text-small text-ink">{satir.gun}</dt>
                    <dd className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                      {satir.saat}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 max-w-[56ch] text-small text-muted">
                Görüşmeler randevu ile yapılır. Mesajlara hafta içi mesai
                saatleri içinde dönüş yapıyorum.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/randevu" ton="birincil">
                Randevu formu
              </ButtonLink>
              <ButtonLink href={WHATSAPP_HREF} ton="ikincil" harici>
                WhatsApp&apos;tan yaz
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal gecikme={80}>
            <Eyebrow>Konum</Eyebrow>
            <Baslik seviye={2} className="mt-4">
              Nasıl gelinir?
            </Baslik>

            <div className="mt-8 border border-line">
              {haritaSrc ? (
                <iframe
                  title={`${SITE.sehir} ofis konumu haritası`}
                  src={haritaSrc}
                  loading="lazy"
                  className="block aspect-[4/3] w-full border-0"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-start justify-center gap-3 bg-sea-50 px-[clamp(20px,3vw,32px)]">
                  <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                    Harita
                  </p>
                  {/* sea-50 zeminde --muted 4.64:1'de kalıyor; bu kutuda
                      --ink kullanılarak pay bırakılıyor. */}
                  <p className="max-w-[42ch] text-small text-ink">
                    Harita, <code className="font-mono">SITE.koordinat</code>{" "}
                    alanına gerçek enlem ve boylam girildiğinde burada
                    görünecek.
                  </p>
                </div>
              )}
              <div className="border-t border-line px-[clamp(16px,2.4vw,24px)] py-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${HARITA_SORGUSU}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase underline underline-offset-4"
                >
                  Yol tarifi al →
                </a>
              </div>
            </div>

            <div className="mt-8 border border-line bg-sea-50 px-[clamp(20px,3vw,32px)] py-[clamp(20px,2.6vw,28px)]">
              <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                Online görüşme
              </p>
              <p className="mt-4 max-w-[52ch] text-small text-ink">
                Türkiye içinden veya dışından çalışabilirsiniz. Görüşme
                bağlantısı randevu onayıyla birlikte e-posta ile gönderilir;
                ayrıca bir uygulama kurmanız gerekmez.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
