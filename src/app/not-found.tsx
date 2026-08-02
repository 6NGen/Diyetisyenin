import Link from "next/link";
import { ANA_MENU } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function BulunamadiSayfasi() {
  return (
    <div className="konteyner py-[clamp(60px,10vw,140px)]">
      <Eyebrow>404</Eyebrow>
      <Baslik seviye={1} className="mt-5 max-w-[14ch]">
        Bu sayfa yok.
      </Baslik>
      <Lede className="mt-6">
        Aradığınız adres taşınmış veya hiç var olmamış olabilir. Aşağıdaki
        sayfalardan devam edebilirsiniz.
      </Lede>

      <ul className="izgara-cizgi mt-11 max-w-[760px] grid-cols-2 sm:grid-cols-4">
        {ANA_MENU.map((oge) => (
          <li key={oge.href} className="bg-paper">
            <Link
              href={oge.href}
              className="block px-4 py-5 font-mono text-label tracking-[0.18em] text-sea-900 uppercase hover:text-sea-700"
            >
              {oge.ad}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ButtonLink href="/" ton="birincil">
          Anasayfaya dön
        </ButtonLink>
      </div>
    </div>
  );
}
