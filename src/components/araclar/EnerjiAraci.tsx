"use client";

import { useId, useState } from "react";
import {
  PAL_SECENEKLERI,
  POSA_HEDEFI,
  bmhHesapla,
  girdiyiSayiyaCevir,
  makroAraliklari,
  palKatsayisi,
  sayiYaz,
  sivIAraligi,
  tamSayiYaz,
  type Cinsiyet,
  type PalDegeri,
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

const PAL_LISTESI = PAL_SECENEKLERI.map((s) => ({
  deger: s.deger,
  etiket: `${s.etiket} — ${s.aciklama}`,
}));

export function EnerjiAraci() {
  const on = useId();
  const [cinsiyet, setCinsiyet] = useState<Cinsiyet>("kadin");
  const [kg, setKg] = useState("");
  const [boy, setBoy] = useState("");
  const [yas, setYas] = useState("");
  const [pal, setPal] = useState<PalDegeri>("hafif");

  const kgSayi = girdiyiSayiyaCevir(kg);
  const bmh = bmhHesapla(
    cinsiyet,
    kgSayi,
    girdiyiSayiyaCevir(boy),
    girdiyiSayiyaCevir(yas),
  );
  const katsayi = palKatsayisi(pal);
  const gunluk = bmh === null ? null : bmh * katsayi;
  const makrolar = gunluk === null ? null : makroAraliklari(gunluk);
  const sivi = sivIAraligi(kgSayi);

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
          yardim="Mifflin-St Jeor denklemi kadın ve erkek için farklı sabit kullanır."
        />
        <SayiAlani
          id={`${on}-yas`}
          etiket="Yaş"
          birim="yıl"
          deger={yas}
          onChange={setYas}
          min={18}
          max={100}
        />
        <SayiAlani
          id={`${on}-kg`}
          etiket="Ağırlık"
          birim="kg"
          deger={kg}
          onChange={setKg}
          min={30}
          max={300}
        />
        <SayiAlani
          id={`${on}-boy`}
          etiket="Boy"
          birim="cm"
          deger={boy}
          onChange={setBoy}
          min={120}
          max={230}
        />
        <SecimAlani
          id={`${on}-pal`}
          etiket="Hareket düzeyi"
          deger={pal}
          secenekler={PAL_LISTESI}
          onChange={setPal}
          yardim="Emin değilseniz bir alt basamağı seçin; fazla tahmin etmek en sık yapılan hatadır."
        />
      </form>

      <div className="space-y-6">
        <SonucKutusu>
          {gunluk === null || bmh === null ? (
            <BeklemeMetni>
              Yaş, ağırlık ve boy girdiğinizde sonuç burada belirir.
            </BeklemeMetni>
          ) : (
            <>
              <BuyukSayi
                etiket="Günlük enerji ihtiyacı — tahmin"
                deger={tamSayiYaz(gunluk)}
                birim="kcal / gün"
              />

              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                <div>
                  <dt className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                    Bazal metabolizma
                  </dt>
                  <dd className="mt-1.5 text-small text-ink">
                    {tamSayiYaz(bmh)} kcal
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                    Aktivite katsayısı
                  </dt>
                  <dd className="mt-1.5 text-small text-ink">
                    × {sayiYaz(katsayi, 3).replace(/,?0+$/, "")}
                  </dd>
                </div>
              </dl>

              {makrolar ? (
                <div className="mt-7 border-t border-line pt-6">
                  <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                    Makro dağılımı — TÜBER 2022 aralıkları
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {makrolar.map((makro) => (
                      <li
                        key={makro.ad}
                        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-2.5 last:border-b-0"
                      >
                        <span className="text-small text-ink">
                          {makro.ad}{" "}
                          <span className="text-muted">
                            %{makro.yuzdeAlt}–{makro.yuzdeUst}
                          </span>
                        </span>
                        <span className="font-mono text-[12px] whitespace-nowrap text-sea-900">
                          {tamSayiYaz(makro.gramAlt)} – {tamSayiYaz(makro.gramUst)} g
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                {sivi ? (
                  <div>
                    <p className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                      Sıvı
                    </p>
                    <p className="mt-1.5 text-small text-ink">
                      {sayiYaz(sivi.alt, 1)} – {sayiYaz(sivi.ust, 1)} litre / gün
                    </p>
                  </div>
                ) : null}
                <div>
                  <p className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                    Posa
                  </p>
                  <p className="mt-1.5 text-small text-ink">
                    {POSA_HEDEFI.alt} – {POSA_HEDEFI.ust} g / gün
                  </p>
                </div>
              </div>

              <p className="mt-6 border-t border-line pt-5 text-small text-muted">
                Bu sayı bir başlangıç noktasıdır, hedef değil. Kaç kalori
                yemeniz gerektiği; hedefinize, ölçümlerinize ve süreç boyunca
                verdiğiniz yanıta göre plan yazılırken belirlenir.
              </p>
            </>
          )}
        </SonucKutusu>
      </div>
    </div>
  );
}
