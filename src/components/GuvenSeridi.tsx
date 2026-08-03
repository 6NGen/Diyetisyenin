import { Reveal } from "@/components/Reveal";
import { SITE } from "@/content/site";

const HUCRELER = [
  {
    kod: "01",
    baslik: "Diplomalı",
    metin: `${SITE.universite} mezunu. Diploma tescil numarası sayfanın altında açıkça yazılı.`,
  },
  {
    kod: "02",
    baslik: "Ölçüme dayalı",
    metin:
      "Her plan ölçüm ve hesapla başlar. Kullanılan denklemler ve kaynaklar Yöntem sayfasında açık.",
  },
  {
    kod: "03",
    baslik: "Ürün satışı yok",
    metin:
      "Takviye, çay, detoks veya program satışı yapmam. Gelir yalnızca danışmanlıktan gelir.",
  },
  {
    kod: "04",
    baslik: "Sınırı belli",
    metin:
      "Teşhis koymam, ilaç önermem, sonuç garantisi vermem. Gerektiğinde hekime yönlendiririm.",
  },
] as const;

export function GuvenSeridi() {
  return (
    <section className="bg-white pb-[clamp(40px,6vw,72px)]">
      <div className="konteyner">
        <Reveal>
          {/* Başlık seviyesi atlamasın diye görünmez ama okunabilir bir h2. */}
          <h2 className="sr-only">Neden benimle çalışırsınız</h2>
          <ul className="izgara-cizgi grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {HUCRELER.map((hucre) => (
              <li
                key={hucre.kod}
                className="bg-paper px-[clamp(18px,2.4vw,28px)] py-[clamp(22px,2.8vw,32px)]"
              >
                <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  {hucre.kod}
                </p>
                <h3 className="mt-3 font-display text-h3 font-medium text-sea-900">
                  {hucre.baslik}
                </h3>
                <p className="mt-2.5 text-small text-muted">{hucre.metin}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
