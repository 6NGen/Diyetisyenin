"use client";

import { useId, useState } from "react";
import {
  BEL_BOY_HEDEFI,
  BEL_ESIKLERI,
  GIRDI_ARALIKLARI,
  belBoyOrani,
  girdiDogrula,
  hataVarMi,
  sayiYaz,
  type Cinsiyet,
} from "@/lib/hesaplama";
import {
  BeklemeMetni,
  BuyukSayi,
  SayiAlani,
  SecimAlani,
  SonucKutusu,
} from "@/components/araclar/AracAlanlari";

const CINSIYETLER = [
  { deger: "kadin" as const, etiket: "Kadın" },
  { deger: "erkek" as const, etiket: "Erkek" },
];

export function BelAraci() {
  const on = useId();
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("kadin");
  const [bel, setBel] = useState("");
  const [boy, setBoy] = useState("");

  const belSonuc = girdiDogrula(bel, GIRDI_ARALIKLARI.bel);
  const boySonuc = girdiDogrula(boy, GIRDI_ARALIKLARI.boy);
  const esik = BEL_ESIKLERI[cinsiyet];

  const belSayi = belSonuc.durum === "gecerli" ? belSonuc.deger : null;
  const oran =
    belSayi !== null && boySonuc.durum === "gecerli"
      ? belBoyOrani(belSayi, boySonuc.deger)
      : null;

  return (
    <div className="grid gap-[clamp(28px,4vw,48px)] lg:grid-cols-2">
      <form
        className="space-y-6"
        onSubmit={(olay) => olay.preventDefault()}
        noValidate
      >
        <SecimAlani
          id={`${on}-cinsiyet`}
          etiket="Cinsiyet"
          deger={cinsiyet}
          secenekler={CINSIYETLER}
          onChange={setCinsiyet}
          yardim="Bel çevresi eşikleri kadın ve erkekte farklıdır."
        />
        <SayiAlani
          id={`${on}-bel`}
          etiket="Bel çevresi"
          birim="cm"
          deger={bel}
          onChange={setBel}
          hata={belSonuc.durum === "hata" ? belSonuc.mesaj : undefined}
          ornek="85"
          yardim="En alt kaburga ile kalça kemiği arasındaki orta noktadan, normal nefes verme sonunda ölçün. Mezura gergin ama deriyi sıkıştırmayan konumda olmalı."
        />
        <SayiAlani
          id={`${on}-boy`}
          etiket="Boy"
          birim="cm"
          deger={boy}
          onChange={setBoy}
          hata={boySonuc.durum === "hata" ? boySonuc.mesaj : undefined}
          ornek="177"
          yardim="Santimetre cinsinden (örnek: 177)."
        />
      </form>

      <div className="space-y-6">
        <SonucKutusu>
          {belSayi === null ? (
            <BeklemeMetni>
              {hataVarMi(belSonuc, boySonuc)
                ? "Sonuç için soldaki uyarıyı düzeltin."
                : "Bel çevresi ve boy girdiğinizde sonuç burada belirir."}
            </BeklemeMetni>
          ) : (
            <>
              {oran !== null ? (
                <BuyukSayi
                  etiket="Bel / boy oranı"
                  deger={sayiYaz(oran, 2)}
                  birim={`hedef < ${sayiYaz(BEL_BOY_HEDEFI, 1)}`}
                />
              ) : (
                <BeklemeMetni>
                  Bel/boy oranı için boy bilgisi de gerekiyor.
                </BeklemeMetni>
              )}

              <div className="mt-7 border-t border-line pt-6">
                <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  DSÖ bel çevresi eşikleri —{" "}
                  {cinsiyet === "kadin" ? "kadın" : "erkek"}
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    {
                      ad: "Eşiklerin altında",
                      araligi: `< ${esik.artmis} cm`,
                      icinde: belSayi < esik.artmis,
                    },
                    {
                      ad: "Artmış risk eşiği",
                      araligi: `${esik.artmis} – ${esik.yuksek - 1} cm`,
                      icinde: belSayi >= esik.artmis && belSayi < esik.yuksek,
                    },
                    {
                      ad: "Yüksek risk eşiği",
                      araligi: `≥ ${esik.yuksek} cm`,
                      icinde: belSayi >= esik.yuksek,
                    },
                  ].map((satir) => (
                    <li
                      key={satir.ad}
                      className={`flex items-baseline justify-between gap-4 border-l-2 py-1.5 pl-3 text-small ${
                        satir.icinde
                          ? "border-sea-700 text-sea-900"
                          : "border-line text-muted"
                      }`}
                    >
                      <span className={satir.icinde ? "font-medium" : ""}>
                        {satir.ad}
                        {satir.icinde ? (
                          <span className="sr-only">
                            {" "}
                            — girilen ölçü bu aralıkta
                          </span>
                        ) : null}
                      </span>
                      <span className="font-mono text-[12px] whitespace-nowrap">
                        {satir.araligi}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-small text-muted">
                  Bu eşikler nüfus düzeyinde tanımlanmış tarama sınırlarıdır.
                  Eşiğin üstünde olmak bir hastalık göstergesi değildir; başka
                  ölçümler ve tahlillerle birlikte değerlendirilir.
                </p>
              </div>
            </>
          )}
        </SonucKutusu>
      </div>
    </div>
  );
}
