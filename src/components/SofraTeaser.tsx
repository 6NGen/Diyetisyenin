import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SOFRA_MADDELERI } from "@/content/sofra";

/**
 * Sayfadaki tek doygun yeşil an (footer hariç).
 * Bu bölümün zeminini değiştirmeyin, başka bölüme koyu yeşil vermeyin.
 */
export function SofraTeaser() {
  const ucteBir = SOFRA_MADDELERI[2];

  return (
    <section className="bolum-bosluk bg-sea-900">
      <div className="konteyner">
        <Reveal>
          <Eyebrow koyu>İsteğe bağlı bölüm</Eyebrow>
          <Baslik seviye={2} koyu className="mt-4 max-w-[18ch]">
            Sünnet üzere sofra
          </Baslik>

          <blockquote className="mt-8 max-w-[58ch] border-l-2 border-sea-300 pl-6">
            <p className="font-display text-[clamp(20px,2.6vw,28px)] leading-[1.45] font-light text-white">
              {ucteBir
                ? ucteBir.metin
                : "Mide üçe ayrılır: bir pay yemeğe, bir pay suya, bir pay nefese."}
            </p>
            <footer className="mt-4 font-mono text-label tracking-[0.18em] text-sea-300 uppercase">
              {ucteBir ? ucteBir.kaynak : "Tirmizî, Zühd 47 · İbn Mâce, Et'ime 50"}
              {ucteBir?.sihhat ? ` · ${ucteBir.sihhat}` : ""}
            </footer>
          </blockquote>

          <p className="mt-8 max-w-[62ch] text-lede text-sea-300">
            Sofra âdâbına dair on dört rivayet; her birinin kaynak künyesi,
            sıhhat notu ve bugünkü beslenme karşılığıyla birlikte. Hadis ilmi
            benim uzmanlık alanım değil; künyeler kaynak eserlerden aktarıldı,
            dinî hüküm için ehline başvurunuz.
          </p>

          <div className="mt-9">
            <ButtonLink href="/sunnet-uzere-sofra" ton="koyu">
              On dört maddenin tamamı
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
