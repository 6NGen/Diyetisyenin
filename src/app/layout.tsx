import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButonu } from "@/components/WhatsAppButonu";
import { SITE, SITE_URL, TAM_AD } from "@/content/site";
import { dietitianJsonLd } from "@/lib/jsonld";
import "./globals.css";

// latin-ext altkümesi zorunlu: ğ ş ı İ ç ö ü karakterleri için.
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-plex-sans",
  weight: ["300", "400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TAM_AD} — ${SITE.meslek}`,
    template: `%s — ${TAM_AD}`,
  },
  description: `${SITE.sehir} ve online beslenme danışmanlığı. Ölçüme dayalı, sürdürülebilir bir beslenme planı için ücretsiz ön görüşme.`,
  applicationName: TAM_AD,
  authors: [{ name: TAM_AD }],
  creator: TAM_AD,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: TAM_AD,
    title: `${TAM_AD} — ${SITE.meslek}`,
    description: `${SITE.sehir} ve online beslenme danışmanlığı. Ücretsiz ön görüşme ile başlayın.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${TAM_AD} — ${SITE.meslek}`,
    description: `${SITE.sehir} ve online beslenme danışmanlığı.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`no-js ${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        {/* JavaScript varsa reveal animasyonu devreye girer; yoksa içerik açık kalır. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove("no-js")`,
          }}
        />
        <JsonLd veri={dietitianJsonLd()} />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-body antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:border focus:border-sea-700 focus:bg-white focus:px-4 focus:py-2 focus:font-mono focus:text-label focus:tracking-[0.18em] focus:uppercase"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Mobil sabit buton içeriğin son satırını örtmesin diye boşluk. */}
        <div aria-hidden="true" className="h-[52px] md:hidden" />
        <WhatsAppButonu />
      </body>
    </html>
  );
}
