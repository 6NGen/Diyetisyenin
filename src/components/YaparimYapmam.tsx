import { Reveal } from "@/components/Reveal";
import { Baslik } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

const YAPARIM = [
  "Ölçüm alır, hesap yapar, her ikisini de size gösteririm.",
  "Planı sizin mutfağınıza, bütçenize ve çalışma düzeninize göre kurarım.",
  "Değişim listeleriyle esnek bir çerçeve veririm, sabit bir menü değil.",
  "Görüşmeler arasında yazılı destek veririm.",
  "Hekiminizin tanısı ve raporları doğrultusunda çalışırım.",
  "Bir bulgu dikkatimi çekerse sizi hekime yönlendiririm.",
];

const YAPMAM = [
  "Hastalık teşhisi koymam, tedavi önermem.",
  "İlaç önermem, doz değiştirmem, ilaç kestirmem.",
  "Takviye, çay, hap veya detoks programı satmam.",
  "Süre ve sonuç garantisi vermem.",
  "Öncesi–sonrası fotoğrafı çekmem, paylaşmam.",
  "Danışan yorumu toplamam, sitede yayımlamam.",
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
