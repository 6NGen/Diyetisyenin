import { Reveal } from "@/components/Reveal";
import { Baslik } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

// Katalog s. 11 — "Güven · Açık sözlülük".
const YAPARIM = [
  "Ölçüme ve güncel rehberlere dayanan plan yaparım.",
  "Sizin mutfağınıza, bütçenize ve saatlerinize uyarlarım.",
  "Hedefi gerçekçi tutarım ve hızını birlikte belirleriz.",
  "Sevmediğiniz besini plana koymam, alternatifini bulurum.",
  "Gerektiğinde hekime, psikoloğa veya egzersiz uzmanına yönlendiririm.",
  "Bütün verilerinizi KVKK kapsamında gizli tutarım.",
  "Neden öyle olduğunu sorduğunuzda gerekçesini açıklarım.",
];

const YAPMAM = [
  "Detoks, çay, hap, damla veya “yağ yakıcı” ürün satmam.",
  "Tek besine dayalı veya aşırı düşük kalorili şok diyet vermem.",
  "“Şu kadar günde şu kadar kilo” garantisi vermem.",
  "Herkese aynı hazır menüyü göndermem.",
  "Hastalık teşhisi koymam, ilaç dozuna karışmam.",
  "Kilonuz veya görünüşünüz üzerinden utandırmam.",
  "Ölçümlerinizi veya fotoğraflarınızı izniniz olmadan hiçbir yerde paylaşmam.",
];

export function YaparimYapmam() {
  return (
    <Section zemin="beyaz">
      <Reveal>
        <Eyebrow>Çalışma çerçevesi</Eyebrow>
        <Baslik seviye={2} className="mt-4">
          Ne yaparım, ne yapmam.
        </Baslik>
      </Reveal>

      <Reveal className="mt-11">
        <div className="izgara-cizgi grid-cols-1 md:grid-cols-2">
          <div className="bg-paper px-[clamp(20px,2.6vw,32px)] py-[clamp(24px,3vw,36px)]">
            <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
              Yaparım
            </p>
            <ul className="mt-6 space-y-3.5">
              {YAPARIM.map((madde) => (
                <li key={madde} className="relative pl-6 text-ink">
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.6em] left-0 h-1.5 w-1.5 bg-sea-500"
                  />
                  {madde}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper px-[clamp(20px,2.6vw,32px)] py-[clamp(24px,3vw,36px)]">
            <p className="font-mono text-label tracking-[0.18em] text-muted uppercase">
              Yapmam
            </p>
            <ul className="mt-6 space-y-3.5">
              {YAPMAM.map((madde) => (
                <li key={madde} className="relative pl-6 text-muted">
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.85em] left-0 h-px w-3.5 bg-muted"
                  />
                  {madde}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
