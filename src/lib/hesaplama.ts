/**
 * Hesaplama araçlarının matematiği. Saf fonksiyonlar — React'e, tarayıcıya ve
 * sunucuya bağlı değil, tek başına test edilebilir.
 *
 * Bütün denklemler ve eşikler public/katalog.pdf s. 4–5'ten gelir ve
 * `content/yontem.ts` içindeki VERI_BLOKLARI ile aynı kaynağı paylaşır.
 * Formül değiştirilecekse iki yerde birden değiştirilmelidir.
 */

export type Cinsiyet = "kadin" | "erkek";

/** Katalog s. 4 — fiziksel aktivite düzeyi katsayıları. */
export const PAL_SECENEKLERI = [
  {
    deger: "hareketsiz",
    katsayi: 1.2,
    etiket: "Hareketsiz",
    aciklama: "Masa başı iş, düzenli egzersiz yok",
  },
  {
    deger: "hafif",
    katsayi: 1.375,
    etiket: "Hafif aktif",
    aciklama: "Haftada 1–3 gün hafif egzersiz",
  },
  {
    deger: "orta",
    katsayi: 1.55,
    etiket: "Orta aktif",
    aciklama: "Haftada 3–5 gün orta şiddette egzersiz",
  },
  {
    deger: "yuksek",
    katsayi: 1.725,
    etiket: "Çok aktif",
    aciklama: "Haftada 6–7 gün egzersiz veya bedenen ağır iş",
  },
] as const;

export type PalDegeri = (typeof PAL_SECENEKLERI)[number]["deger"];

export function palKatsayisi(deger: PalDegeri): number {
  return (
    PAL_SECENEKLERI.find((s) => s.deger === deger)?.katsayi ??
    PAL_SECENEKLERI[0].katsayi
  );
}

/* ------------------------------------------------------------------ *
 * Beden Kütle İndeksi
 * ------------------------------------------------------------------ */

/** BKİ = ağırlık (kg) / boy (m)² */
export function bkiHesapla(kg: number, boyCm: number): number | null {
  if (!Number.isFinite(kg) || !Number.isFinite(boyCm)) return null;
  if (kg <= 0 || boyCm <= 0) return null;
  const m = boyCm / 100;
  return kg / (m * m);
}

/**
 * DSÖ sınıflaması. BİLEREK kişiye hüküm olarak sunulmaz; arayüzde bir
 * referans cetveli olarak gösterilir, "siz şusunuz" cümlesi kurulmaz.
 */
export type BkiAraligi = {
  ad: string;
  /** null = alt sınır yok */
  alt: number | null;
  /** null = üst sınır yok */
  ust: number | null;
};

const BKI_UST_ARALIK: BkiAraligi = { ad: "Obez", alt: 30, ust: null };

export const BKI_ARALIKLARI: readonly BkiAraligi[] = [
  { ad: "Zayıf", alt: null, ust: 18.5 },
  { ad: "Normal", alt: 18.5, ust: 25 },
  { ad: "Fazla kilolu", alt: 25, ust: 30 },
  BKI_UST_ARALIK,
];

export function bkiAraligi(bki: number): BkiAraligi {
  const bulunan = BKI_ARALIKLARI.find((aralik) => {
    const altTamam = aralik.alt === null || bki >= aralik.alt;
    const ustTamam = aralik.ust === null || bki < aralik.ust;
    return altTamam && ustTamam;
  });
  // Cetvel sayı ekseninin tamamını kaplar (ilk aralığın altı, son aralığın
  // üstü açık), yani bulunan her zaman tanımlıdır; yedek yalnızca tip için.
  return bulunan ?? BKI_UST_ARALIK;
}

/* ------------------------------------------------------------------ *
 * Bel ölçüleri
 * ------------------------------------------------------------------ */

/** Katalog s. 4 — DSÖ bel çevresi eşikleri (cm). */
export const BEL_ESIKLERI: Record<Cinsiyet, { artmis: number; yuksek: number }> =
  {
    kadin: { artmis: 80, yuksek: 88 },
    erkek: { artmis: 94, yuksek: 102 },
  };

/** Bel/boy oranı. Katalog: hedef < 0,5. */
export const BEL_BOY_HEDEFI = 0.5;

export function belBoyOrani(belCm: number, boyCm: number): number | null {
  if (!Number.isFinite(belCm) || !Number.isFinite(boyCm)) return null;
  if (belCm <= 0 || boyCm <= 0) return null;
  return belCm / boyCm;
}

/* ------------------------------------------------------------------ *
 * Enerji, makro ve sıvı
 * ------------------------------------------------------------------ */

/**
 * Bazal metabolik hız — Mifflin-St Jeor.
 * Erkek: 10×kg + 6,25×cm − 5×yaş + 5
 * Kadın: 10×kg + 6,25×cm − 5×yaş − 161
 */
export function bmhHesapla(
  cinsiyet: Cinsiyet,
  kg: number,
  boyCm: number,
  yas: number,
): number | null {
  if (![kg, boyCm, yas].every(Number.isFinite)) return null;
  if (kg <= 0 || boyCm <= 0 || yas <= 0) return null;
  const taban = 10 * kg + 6.25 * boyCm - 5 * yas;
  return cinsiyet === "erkek" ? taban + 5 : taban - 161;
}

export type MakroAraligi = { ad: string; yuzdeAlt: number; yuzdeUst: number; gramAlt: number; gramUst: number };

/** Katalog s. 4 — TÜBER 2022 referans aralıkları. */
export const MAKRO_TANIMLARI = [
  { ad: "Karbonhidrat", yuzdeAlt: 45, yuzdeUst: 60, kcalPerGram: 4 },
  { ad: "Protein", yuzdeAlt: 10, yuzdeUst: 20, kcalPerGram: 4 },
  { ad: "Yağ", yuzdeAlt: 20, yuzdeUst: 35, kcalPerGram: 9 },
] as const;

export function makroAraliklari(gunlukKcal: number): MakroAraligi[] {
  return MAKRO_TANIMLARI.map((m) => ({
    ad: m.ad,
    yuzdeAlt: m.yuzdeAlt,
    yuzdeUst: m.yuzdeUst,
    gramAlt: (gunlukKcal * (m.yuzdeAlt / 100)) / m.kcalPerGram,
    gramUst: (gunlukKcal * (m.yuzdeUst / 100)) / m.kcalPerGram,
  }));
}

/** Katalog s. 4 — yaklaşık 30–35 ml/kg. */
export function sivIAraligi(kg: number): { alt: number; ust: number } | null {
  if (!Number.isFinite(kg) || kg <= 0) return null;
  return { alt: (kg * 30) / 1000, ust: (kg * 35) / 1000 };
}

/** Katalog s. 4 — günde 25–30 g posa. Kişiye göre değişmez, sabit hedef. */
export const POSA_HEDEFI = { alt: 25, ust: 30 } as const;

/* ------------------------------------------------------------------ *
 * Biçimlendirme
 * ------------------------------------------------------------------ */

export function sayiYaz(deger: number, basamak = 1): string {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: basamak,
    maximumFractionDigits: basamak,
  }).format(deger);
}

export function tamSayiYaz(deger: number): string {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(
    deger,
  );
}

/** Girdi alanındaki metni sayıya çevirir; virgül de nokta da kabul edilir. */
export function girdiyiSayiyaCevir(ham: string): number {
  const temiz = ham.replace(/\s/g, "").replace(",", ".");
  if (temiz === "") return Number.NaN;
  return Number(temiz);
}
