import { PaketKarti } from "@/components/PaketKarti";
import { Reveal } from "@/components/Reveal";
import { PAKETLER } from "@/content/paketler";

export function PaketIzgarasi() {
  return (
    <ul className="izgara-cizgi grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {PAKETLER.map((paket, sira) => (
        <li key={paket.slug} className="bg-paper">
          <Reveal gecikme={sira * 70} className="h-full">
            <PaketKarti paket={paket} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
