/**
 * Paket içerikleri.
 *
 * KAYNAK: public/katalog.pdf — "Danışmanlık paketleri · Dört seçenek" (s. 6–7)
 * ve "Ek hizmetler · Pakete eklenebilir" (s. 8).
 *
 * Maddeler katalogdan birebir aktarılmıştır. Katalog güncellenirse bu dosya da
 * güncellenmelidir; ziyaretçi aynı sayfadan hem tabloyu okuyup hem PDF'i
 * indirdiği için iki kaynağın çelişmemesi gerekir.
 */

export type PaketSlug = "temel" | "denge" | "donusum" | "klinik";

export type Paket = {
  slug: PaketSlug;
  kod: string;
  ad: string;
  kimeGore: string;
  fiyat: number;
  fiyatNotu: string;
  sure: string;
  gorusmeSayisi: string;
  /** Anasayfa kartında görünen dört madde. */
  ozet: string[];
  /** Detay sayfasındaki tam liste. */
  tamListe: string[];
  oneCikan?: boolean;
};

export const PAKETLER: readonly Paket[] = [
  {
    slug: "temel",
    kod: "01 · Tanışma",
    ad: "Temel",
    kimeGore:
      "Nereden başlayacağını bilmeyen, önce durumunu görmek isteyenler için.",
    fiyat: 2500,
    fiyatNotu: "tek seferlik",
    sure: "2 hafta",
    gorusmeSayisi: "2 görüşme",
    ozet: [
      "60 dakikalık kapsamlı ilk görüşme",
      "Antropometrik ölçüm + vücut analizi",
      "Beslenme öyküsü ve alışkanlık haritası",
      "2 haftalık kişiye özel beslenme planı",
    ],
    tamListe: [
      "60 dakikalık kapsamlı ilk görüşme",
      "Antropometrik ölçüm + vücut analizi",
      "Beslenme öyküsü ve alışkanlık haritası",
      "2 haftalık kişiye özel beslenme planı",
      "Değişim listesi ve alışveriş rehberi",
      "2. hafta sonunda 20 dakikalık kontrol görüşmesi",
      "PDF rapor: ölçümler, hedefler, öneriler",
    ],
  },
  {
    slug: "denge",
    kod: "02 · Düzen",
    ad: "Denge",
    kimeGore:
      "Alışkanlık kurmak, öğün düzenini oturtmak ve ilk somut değişimi görmek isteyenler için.",
    fiyat: 6000,
    fiyatNotu: "/ 1 ay",
    sure: "4 hafta",
    gorusmeSayisi: "5 görüşme",
    oneCikan: true,
    ozet: [
      "Temel paketin tamamı",
      "Haftalık kontrol görüşmesi (4 kontrol)",
      "Her hafta yenilenen beslenme planı",
      "Haftalık vücut analizi ve ölçüm takibi",
    ],
    tamListe: [
      "Temel paketin tamamı",
      "Haftalık kontrol görüşmesi (4 kontrol)",
      "Her hafta yenilenen beslenme planı",
      "Haftalık vücut analizi ve ölçüm takibi",
      "WhatsApp üzerinden hafta içi soru desteği",
      "Dışarıda yeme, davet ve seyahat senaryoları",
      "Mutfak pratiği: 15 pratik tarif seti",
      "Öğün fotoğrafı geri bildirimi",
    ],
  },
  {
    slug: "donusum",
    kod: "03 · Kalıcılık",
    ad: "Dönüşüm",
    kimeGore:
      "Hedefi büyük olan ve asıl meselesi “verdiğini geri almamak” olanlar için.",
    fiyat: 15000,
    fiyatNotu: "/ 3 ay",
    sure: "12 hafta",
    gorusmeSayisi: "13+ görüşme",
    ozet: [
      "Denge paketinin tamamı, 12 hafta boyunca",
      "Aylık detaylı ilerleme raporu (grafikli)",
      "Davranış değişikliği modülü: tetikleyici haritası, duygusal yeme, farkındalıkla yeme",
      "Egzersiz uyumu: antrenman öncesi/sonrası öğün kurgusu",
    ],
    tamListe: [
      "Denge paketinin tamamı, 12 hafta boyunca",
      "Aylık detaylı ilerleme raporu (grafikli)",
      "Davranış değişikliği modülü: tetikleyici haritası, duygusal yeme, farkındalıkla yeme",
      "Egzersiz uyumu: antrenman öncesi/sonrası öğün kurgusu",
      "Laboratuvar sonuçlarının beslenme açısından yorumu",
      "Mevsime göre pazar rehberi",
      "Aile sofrası uyarlaması — evdekileri ayrı yemek yapmaya mecbur bırakmayan plan",
      "Kapanışta 3 aylık koruma ve kalıcılık planı",
      "Program bitiminden 1 ay sonra ücretsiz takip görüşmesi",
    ],
  },
  {
    slug: "klinik",
    kod: "04 · Özel durum",
    ad: "Klinik",
    kimeGore:
      "Tanı almış bir durumu olan, hekim takibiyle birlikte yürüyen danışanlar için.",
    fiyat: 18000,
    fiyatNotu: "/ 3 ay",
    sure: "12 hafta",
    gorusmeSayisi: "Hekim iş birliğiyle",
    ozet: [
      "Dönüşüm paketinin tamamı",
      "Medikal beslenme tedavisi kapsamındaki durumlar",
      "Hekimle yazılı iş birliği ve geri bildirim",
      "İlaç–besin etkileşimi değerlendirmesi",
    ],
    tamListe: [
      "Dönüşüm paketinin tamamı",
      "Medikal beslenme tedavisi kapsamındaki durumlar: tip 2 diyabet ve prediyabet, insülin direnci, PCOS, hipotiroidi/Hashimoto, hipertansiyon ve dislipidemi, çölyak ve gluten duyarlılığı, IBS (düşük FODMAP), karaciğer yağlanması, gebelik ve emzirme, çocuk ve ergen beslenmesi, sporcu beslenmesi, bariatrik cerrahi öncesi/sonrası",
      "Hekimle yazılı iş birliği ve geri bildirim",
      "İlaç–besin etkileşimi değerlendirmesi",
      "Semptom günlüğü ve eleme–yeniden yükleme protokolleri",
      "İki haftada bir laboratuvar takibi (hekim istemiyle)",
      "Gerektiğinde daha sık görüşme hakkı",
    ],
  },
] as const;

export function paketBul(slug: string): Paket | undefined {
  return PAKETLER.find((paket) => paket.slug === slug);
}

/** Katalog s. 7'deki ödeme notu. */
export const ODEME_NOTU =
  "Ödeme peşin veya taksitli yapılabilir. Online ve yüz yüze görüşme aynı fiyattadır. " +
  "Başlanmış bir programın fiyatı süre boyunca değişmez.";

/** Karşılaştırma tablosu: satırlar özellik, sütunlar paket. */
export type KarsilastirmaSatiri = {
  ozellik: string;
  deger: Record<PaketSlug, string | boolean>;
};

export const KARSILASTIRMA: readonly KarsilastirmaSatiri[] = [
  {
    ozellik: "Süre",
    deger: {
      temel: "2 hafta",
      denge: "4 hafta",
      donusum: "12 hafta",
      klinik: "12 hafta",
    },
  },
  {
    ozellik: "Görüşme sayısı",
    deger: {
      temel: "2",
      denge: "5",
      donusum: "13+",
      klinik: "13+",
    },
  },
  {
    ozellik: "60 dakikalık ilk görüşme",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Antropometrik ölçüm + vücut analizi",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Kişiye özel beslenme planı",
    deger: {
      temel: "2 haftalık",
      denge: "Her hafta yenilenir",
      donusum: "Her hafta yenilenir",
      klinik: "Her hafta yenilenir",
    },
  },
  {
    ozellik: "Değişim listesi ve alışveriş rehberi",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Ölçüm takibi",
    deger: {
      temel: "2. hafta",
      denge: "Haftalık",
      donusum: "Haftalık",
      klinik: "Haftalık",
    },
  },
  {
    ozellik: "WhatsApp soru desteği",
    deger: { temel: false, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Mutfak pratiği: 15 tarif seti",
    deger: { temel: false, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Öğün fotoğrafı geri bildirimi",
    deger: { temel: false, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Aylık ilerleme raporu (grafikli)",
    deger: { temel: false, denge: false, donusum: true, klinik: true },
  },
  {
    ozellik: "Davranış değişikliği modülü",
    deger: { temel: false, denge: false, donusum: true, klinik: true },
  },
  {
    ozellik: "Egzersiz uyumu",
    deger: { temel: false, denge: false, donusum: true, klinik: true },
  },
  {
    ozellik: "Laboratuvar sonuçlarının yorumu",
    deger: { temel: false, denge: false, donusum: true, klinik: true },
  },
  {
    ozellik: "Aile sofrası uyarlaması",
    deger: { temel: false, denge: false, donusum: true, klinik: true },
  },
  {
    ozellik: "Kalıcılık planı + 1 ay sonra ücretsiz takip",
    deger: { temel: false, denge: false, donusum: true, klinik: true },
  },
  {
    ozellik: "Medikal beslenme tedavisi",
    deger: { temel: false, denge: false, donusum: false, klinik: true },
  },
  {
    ozellik: "Hekimle yazılı iş birliği",
    deger: { temel: false, denge: false, donusum: false, klinik: true },
  },
  {
    ozellik: "İlaç–besin etkileşimi değerlendirmesi",
    deger: { temel: false, denge: false, donusum: false, klinik: true },
  },
  {
    ozellik: "Semptom günlüğü ve eleme protokolleri",
    deger: { temel: false, denge: false, donusum: false, klinik: true },
  },
  {
    ozellik: "Online görüşme imkânı",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
];

export type EkHizmet = { ad: string; aciklama: string; fiyat: string };

/** Katalog s. 8 — "Yanına alınabilecekler". */
export const EK_HIZMETLER: readonly EkHizmet[] = [
  {
    ad: "Tek seans görüşme",
    aciklama:
      "Paket almadan tek konuyu konuşmak isteyenler için 45 dakika.",
    fiyat: "1.500 ₺",
  },
  {
    ad: "Mutfak/dolap denetimi",
    aciklama:
      "Evde ya da online; kilerin ve buzdolabının birlikte gözden geçirilmesi.",
    fiyat: "1.200 ₺",
  },
  {
    ad: "Aile paketi ek kişi",
    aciklama: "Aynı evden ikinci kişi, kendi planı ve kendi ölçümleriyle.",
    fiyat: "%40 indirimli",
  },
  {
    ad: "Kurumsal seminer",
    aciklama:
      "İş yerlerine 60–90 dakikalık beslenme semineri; soru-cevap dahil.",
    fiyat: "Talebe göre",
  },
  {
    ad: "Ramazan programı",
    aciklama:
      "Sahur–iftar kurgusu, sıvı planı, bayram geçişi ve oruç dönemi ilaç uyumu.",
    fiyat: "2.000 ₺",
  },
  {
    ad: "Tarif ve menü kitapçığı",
    aciklama:
      "30 tarif, alışveriş listeleri ve haftalık menü şablonu (PDF).",
    fiyat: "600 ₺",
  },
];
