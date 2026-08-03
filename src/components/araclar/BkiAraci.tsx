"use client";

import { useId, useState } from "react";
import {
  BKI_ARALIKLARI,
  bkiAraligi,
  bkiHesapla,
  girdiyiSayiyaCevir,
  sayiYaz,
} from "@/lib/hesaplama";
import {
  BeklemeMetni,
  BuyukSayi,
  SayiAlani,
  SonucKutusu,
} from "@/components/araclar/AracAlanlari";

export function BkiAraci() {
  const on = useId();
  const [kg, setKg] = useState("");
  const [boy, setBoy] = useState("");

  const bki = bkiHesapla(girdiyiSayiyaCevir(kg), girdiyiSayiyaCevir(boy));
  const icindeOlduguAralik = bki !== null ? bkiAraligi(bki) : null;

  return (
    <div className="grid gap-[clamp(28px,4vw,48px)] lg:grid-cols-2">
      <form
        className="space-y-6"
        onSubmit={(olay) => olay.preventDefault()}
        noValidate
      >
        <SayiAlani
          id={`${on}-kg`}
          etiket="Ağırlık"
          birim="kg"
          deger={kg}
          onChange={setKg}
          min={20}
          max={400}
        />
        <SayiAlani
          id={`${on}-boy`}
          etiket="Boy"
          birim="cm"
          deger={boy}
          onChange={setBoy}
          min={100}
          max={250}
          yardim="Ayakkabısız ölçülen boy."
        />
      </form>

      <div>
        <SonucKutusu>
          {bki === null ? (
            <BeklemeMetni>
              Ağırlık ve boy girdiğinizde sonuç burada belirir.
            </BeklemeMetni>
          ) : (
            <>
              <BuyukSayi
                etiket="Beden kütle indeksi"
                deger={sayiYaz(bki, 1)}
                birim="kg/m²"
              />

              {/* Referans cetveli bilgi olarak sunulur; kişiye hüküm yazılmaz. */}
              <div className="mt-7 border-t border-line pt-6">
                <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  DSÖ referans cetveli
                </p>
                <ul className="mt-4 space-y-2">
                  {BKI_ARALIKLARI.map((aralik) => {
                    const buAralikta = aralik.ad === icindeOlduguAralik?.ad;
                    return (
                      <li
                        key={aralik.ad}
                        className={`flex items-baseline justify-between gap-4 border-l-2 py-1.5 pl-3 text-small ${
                          buAralikta
                            ? "border-sea-700 text-sea-900"
                            : "border-line text-muted"
                        }`}
                      >
                        <span className={buAralikta ? "font-medium" : ""}>
                          {aralik.ad}
                          {buAralikta ? (
                            <span className="sr-only">
                              {" "}
                              — hesaplanan değer bu aralıkta
                            </span>
                          ) : null}
                        </span>
                        <span className="font-mono text-[12px] whitespace-nowrap">
                          {aralik.alt === null
                            ? `< ${sayiYaz(aralik.ust ?? 0, 1)}`
                            : aralik.ust === null
                              ? `≥ ${sayiYaz(aralik.alt, 1)}`
                              : `${sayiYaz(aralik.alt, 1)} – ${sayiYaz(aralik.ust - 0.1, 1)}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-5 text-small text-muted">
                  Cetvel nüfus taraması için yapılmıştır, kişiye tanı koymak
                  için değil. Hesaplanan değerin işaretli aralıkta olması bir
                  hastalık göstergesi değildir.
                </p>
              </div>
            </>
          )}
        </SonucKutusu>
      </div>
    </div>
  );
}
