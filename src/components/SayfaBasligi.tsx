import type { ReactNode } from "react";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Her iç sayfanın açılışı. Hero gibi beyazdır; koyu sayfalarda koyu=true. */
export function SayfaBasligi({
  eyebrow,
  baslik,
  lede,
  koyu = false,
  children,
}: {
  eyebrow: string;
  baslik: ReactNode;
  lede?: ReactNode;
  koyu?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`${koyu ? "bg-sea-900" : "bg-white"} border-b ${
        koyu ? "border-line-dark" : "border-line"
      }`}
    >
      <div className="konteyner pt-[clamp(40px,6vw,72px)] pb-[clamp(36px,5vw,64px)]">
        <Eyebrow koyu={koyu}>{eyebrow}</Eyebrow>
        <Baslik seviye={1} koyu={koyu} className="mt-5 max-w-[16ch]">
          {baslik}
        </Baslik>
        {lede ? (
          <Lede koyu={koyu} className="mt-6">
            {lede}
          </Lede>
        ) : null}
        {children}
      </div>
    </div>
  );
}
