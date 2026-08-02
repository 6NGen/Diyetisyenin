/**
 * Paket içerikleri.
 *
 * KAYNAK NOTU: `diyetisyen-katalog.html` bu depoda bulunmadığı için maddeler
 * spesifikasyondaki fiyat ve yapı bilgisine göre yazılmıştır. Yayın öncesi
 * katalog PDF'i ile birebir karşılaştırılmalıdır (bkz. yayın kontrol listesi).
 *
 * Kural: hiçbir maddede sayısal vaat, garanti veya sonuç iddiası bulunmaz.
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
      "Nereden başlayacağını bilmeyen, önce kendi durumunu net görmek isteyen kişiler için tek görüşmelik başlangıç.",
    fiyat: 2500,
    fiyatNotu: "tek seferlik",
    sure: "Tek görüşme",
    gorusmeSayisi: "1 görüşme · 60 dk",
    ozet: [
      "60 dakikalık kapsamlı ilk değerlendirme",
      "Antropometrik ölçüm ve vücut kompozisyonu analizi",
      "Günlük enerji ve makro besin ihtiyacının hesaplanması",
      "Yazılı özet rapor ve iki haftalık uygulama önerisi",
    ],
    tamListe: [
      "60 dakikalık kapsamlı ilk değerlendirme görüşmesi",
      "Beslenme öyküsü, öğün düzeni ve yeme alışkanlıklarının çıkarılması",
      "Antropometrik ölçümler: boy, ağırlık, bel ve kalça çevresi, BKİ",
      "Biyoelektrik impedans ile vücut kompozisyonu analizi (yüz yüze görüşmelerde)",
      "Bazal metabolizma ve günlük enerji ihtiyacının hesaplanması",
      "Makro besin dağılımının kişiye göre belirlenmesi",
      "Varsa mevcut tahlil sonuçlarınızın beslenme açısından okunması",
      "Görüşme sonrası yazılı özet rapor (PDF)",
      "İki haftalık, uygulanabilir bir başlangıç önerisi listesi",
      "Sorularınız için görüşme sonrası 7 gün mesaj desteği",
    ],
  },
  {
    slug: "denge",
    kod: "02 · Denge",
    ad: "Denge",
    kimeGore:
      "Beslenme düzenini oturtmak ve bir ay boyunca düzenli takip ile alışkanlık kurmak isteyenler için.",
    fiyat: 6000,
    fiyatNotu: "/ 1 ay",
    sure: "1 ay",
    gorusmeSayisi: "4 görüşme · haftada 1",
    oneCikan: true,
    ozet: [
      "Temel paketteki ilk değerlendirmenin tamamı",
      "Haftalık takip görüşmeleri ve plan revizyonu",
      "Kişiye özel öğün planı ve alışveriş listesi",
      "Süre boyunca WhatsApp üzerinden mesaj desteği",
    ],
    tamListe: [
      "Temel paketteki ilk değerlendirmenin tamamı",
      "Haftada bir, 30 dakikalık takip görüşmesi (toplam 4 görüşme)",
      "Kişiye özel, mevsime ve mutfağınıza göre kurulmuş öğün planı",
      "Öğün planına eşlik eden haftalık alışveriş listesi",
      "Dışarıda yeme, davet ve seyahat durumları için alternatif kurgular",
      "Her görüşmede ölçüm tekrarı ve planın gerçek hayata göre revizyonu",
      "Porsiyon ölçüleri ve el/kâse ölçüsü rehberi",
      "Süre boyunca hafta içi WhatsApp mesaj desteği",
      "Ay sonunda ilerleme özeti ve devam önerisi",
    ],
  },
  {
    slug: "donusum",
    kod: "03 · Dönüşüm",
    ad: "Dönüşüm",
    kimeGore:
      "Kısa süreli düzenlemelerin kalıcı olmadığını görmüş, üç aylık bir süreçle çalışmak isteyenler için.",
    fiyat: 15000,
    fiyatNotu: "/ 3 ay",
    sure: "3 ay",
    gorusmeSayisi: "12 görüşme · haftada 1",
    ozet: [
      "Üç ay boyunca haftalık takip (12 görüşme)",
      "Davranış odaklı çalışma: açlık, tokluk ve öğün ritmi",
      "Egzersiz alışkanlığına göre uyarlanmış öğün zamanlaması",
      "Üç aylık ölçüm karşılaştırması ve yazılı rapor",
    ],
    tamListe: [
      "Denge paketindeki her şey, üç ay boyunca",
      "Haftada bir, 30–40 dakikalık takip görüşmesi (toplam 12 görüşme)",
      "Davranış odaklı çalışma: açlık–tokluk farkındalığı, öğün ritmi, atıştırma düzeni",
      "Duygusal yeme durumlarında uygulanabilir başa çıkma stratejileri",
      "Egzersiz alışkanlığınıza göre uyarlanmış öğün zamanlaması",
      "Aylık ölçüm tekrarı ve vücut kompozisyonu takibi",
      "Mevsim değişimlerine göre yenilenen öğün planı",
      "Ev dışı öğünler, tatil ve özel günler için ayrı kurgular",
      "Süre boyunca hafta içi WhatsApp mesaj desteği",
      "Üç aylık ölçüm karşılaştırması ve kapsamlı yazılı rapor",
      "Süreç sonrası devamlılık planı",
    ],
  },
  {
    slug: "klinik",
    kod: "04 · Klinik",
    ad: "Klinik",
    kimeGore:
      "Hekimi tarafından tanısı konmuş ve takibi süren durumlarda, hekim yönlendirmesi doğrultusunda tıbbi beslenme tedavisi isteyenler için.",
    fiyat: 18000,
    fiyatNotu: "/ 3 ay",
    sure: "3 ay",
    gorusmeSayisi: "12 görüşme · haftada 1",
    ozet: [
      "Dönüşüm paketindeki üç aylık takibin tamamı",
      "Hekim raporu ve tahlil sonuçlarına göre plan kurgusu",
      "İlaç–besin etkileşimlerinin gözetilmesi",
      "Talep hâlinde hekiminizle yazışma ve süreç paylaşımı",
    ],
    tamListe: [
      "Dönüşüm paketindeki üç aylık takibin tamamı",
      "Hekim raporu, tanı ve tahlil sonuçlarının beslenme açısından değerlendirilmesi",
      "Tıbbi beslenme tedavisi ilkelerine göre kurgulanmış öğün planı",
      "İlaç–besin ve takviye–besin etkileşimlerinin gözetilmesi",
      "Gerektiğinde mikro besin alımının ayrıntılı takibi",
      "Tahlil tekrarlarında planın güncellenmesi",
      "Talep hâlinde hekiminizle yazışma ve sürecin paylaşılması",
      "Süre boyunca hafta içi WhatsApp mesaj desteği",
      "Üç aylık kapsamlı değerlendirme raporu",
      "Tanı, ilaç ve tedavi kararları hekiminize aittir; bu paket beslenme ayağını yürütür",
    ],
  },
] as const;

export function paketBul(slug: string): Paket | undefined {
  return PAKETLER.find((paket) => paket.slug === slug);
}

/** Karşılaştırma tablosu: satırlar özellik, sütunlar paket. */
export type KarsilastirmaSatiri = {
  ozellik: string;
  deger: Record<PaketSlug, string | boolean>;
};

export const KARSILASTIRMA: readonly KarsilastirmaSatiri[] = [
  {
    ozellik: "Süre",
    deger: {
      temel: "Tek görüşme",
      denge: "1 ay",
      donusum: "3 ay",
      klinik: "3 ay",
    },
  },
  {
    ozellik: "Görüşme sayısı",
    deger: { temel: "1", denge: "4", donusum: "12", klinik: "12" },
  },
  {
    ozellik: "İlk değerlendirme (60 dk)",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Antropometrik ölçüm",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Vücut kompozisyonu analizi",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Enerji ve makro hesabı",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Kişiye özel öğün planı",
    deger: { temel: false, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Haftalık alışveriş listesi",
    deger: { temel: false, denge: true, donusum: true, klinik: true },
  },
  {
    ozellik: "Plan revizyonu",
    deger: {
      temel: false,
      denge: "Haftalık",
      donusum: "Haftalık",
      klinik: "Haftalık",
    },
  },
  {
    ozellik: "Davranış odaklı çalışma",
    deger: { temel: false, denge: false, donusum: true, klinik: true },
  },
  {
    ozellik: "Mesaj desteği",
    deger: { temel: "7 gün", denge: "1 ay", donusum: "3 ay", klinik: "3 ay" },
  },
  {
    ozellik: "Tahlil sonuçlarının değerlendirilmesi",
    deger: { temel: "Özet", denge: "Özet", donusum: true, klinik: true },
  },
  {
    ozellik: "İlaç–besin etkileşimi takibi",
    deger: { temel: false, denge: false, donusum: false, klinik: true },
  },
  {
    ozellik: "Hekimle yazışma",
    deger: { temel: false, denge: false, donusum: false, klinik: true },
  },
  {
    ozellik: "Yazılı rapor",
    deger: {
      temel: "Özet",
      denge: "Aylık",
      donusum: "Kapsamlı",
      klinik: "Kapsamlı",
    },
  },
  {
    ozellik: "Online görüşme imkânı",
    deger: { temel: true, denge: true, donusum: true, klinik: true },
  },
];

export type EkHizmet = { ad: string; aciklama: string; fiyat: string };

export const EK_HIZMETLER: readonly EkHizmet[] = [
  {
    ad: "Tek seferlik kontrol görüşmesi",
    aciklama:
      "Daha önce birlikte çalıştığımız danışanlar için 30 dakikalık ara kontrol ve plan güncellemesi.",
    fiyat: "1.200 ₺",
  },
  {
    ad: "Ölçüm ve rapor",
    aciklama:
      "Yalnızca antropometrik ölçüm, vücut kompozisyonu analizi ve yazılı yorum. Plan içermez.",
    fiyat: "900 ₺",
  },
  {
    ad: "Kurum içi seminer",
    aciklama:
      "İş yerlerinde beslenme, öğün düzeni ve ofis atıştırmalıkları üzerine 60 dakikalık sunum.",
    fiyat: "Talebe göre",
  },
  {
    ad: "Aile paketi ek kişi",
    aciklama:
      "Aynı hanede yaşayan ikinci kişi için Denge veya Dönüşüm paketine indirimli ek katılım.",
    fiyat: "%25 indirim",
  },
];
