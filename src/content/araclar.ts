/**
 * Hesaplama araçlarının künyeleri.
 *
 * Her aracın matematiği `lib/hesaplama.ts` içindedir; buradaki metinler o
 * hesabın hangi denklemden geldiğini, neyi söylemediğini ve kimin için
 * geçerli olmadığını anlatır.
 *
 * KURAL: hiçbir araç kişiye hüküm vermez. Sayı gösterilir, referans cetveli
 * bilgi olarak sunulur, "siz şusunuz" cümlesi kurulmaz. Teşhis hekimindir.
 */

export type AracSlug = "bki" | "bel-olcusu" | "enerji-ihtiyaci";

export type Arac = {
  slug: AracSlug;
  kod: string;
  ad: string;
  /** Kart ve listede görünen tek cümle. */
  ozet: string;
  /** Sayfa başlığındaki giriş. */
  giris: string;
  /** 150–160 karakter, benzersiz. */
  aciklama: string;
  /** Sonucun altında mono kutuda gösterilir. */
  formul: string;
  /** Katalogdaki kaynak. */
  kaynak: string;
  /** Bu aracın neyi söylemediği. */
  neSoylemez: string[];
  /** Hesabın geçerli olmadığı durumlar. */
  gecersizDurumlar: string[];
  /** /yontem sayfasındaki ilgili blok. */
  yontemBagi: string;
};

export const ARACLAR: readonly Arac[] = [
  {
    slug: "bki",
    kod: "01",
    ad: "Beden kütle indeksi",
    ozet: "Ağırlık ve boydan BKİ hesaplar, DSÖ cetvelini yanına koyar.",
    giris:
      "BKİ, beslenme alanında en çok kullanılan ve en çok yanlış okunan sayıdır. Hesabı basittir; asıl mesele neyi söyleyip neyi söylemediğini bilmek.",
    aciklama:
      "BKİ hesaplama aracı: ağırlık ve boy ile beden kütle indeksinizi hesaplayın, DSÖ referans cetvelini görün ve BKİ'nin neyi ölçmediğini öğrenin.",
    formul: "BKİ = ağırlık (kg) / boy (m)²",
    kaynak: "Dünya Sağlık Örgütü sınıflaması · TÜBER 2022",
    neSoylemez: [
      "Ağırlığın neyden oluştuğunu bilmez: kas, yağ, kemik ve su onun için aynıdır.",
      "Kas kütlesi yüksek kişilerde yukarı, kas kütlesi düşük kişilerde aşağı yanıltır.",
      "Yağın vücutta nerede toplandığını göstermez — bel çevresi bunu tamamlar.",
      "Tek bir ölçüm bir fotoğraftır; asıl bilgi ölçümlerin sırasındadır.",
    ],
    gecersizDurumlar: [
      "18 yaş altı — çocuk ve ergenlerde persentil eğrileri kullanılır",
      "Gebelik ve emzirme dönemi",
      "Sporcular ve kas kütlesi belirgin yüksek kişiler",
      "Ödem, asit veya belirgin sıvı tutulumu olan durumlar",
    ],
    yontemBagi: "/yontem#olcum",
  },
  {
    slug: "bel-olcusu",
    kod: "02",
    ad: "Bel çevresi ve bel/boy oranı",
    ozet:
      "Karın bölgesindeki yağlanmayı BKİ'den daha iyi gösteren iki ölçü.",
    giris:
      "Bel çevresi, karın içi yağlanmanın göstergesidir. Bel/boy oranı ise kardiyometabolik riski BKİ'den daha iyi öngörür ve yaş ile cinsiyetten görece bağımsızdır.",
    aciklama:
      "Bel çevresi ve bel/boy oranı hesaplama: DSÖ eşiklerini görün, ölçümü doğru noktadan nasıl alacağınızı öğrenin. Hedef bel/boy oranı 0,5'in altı.",
    formul: "Bel/boy oranı = bel çevresi (cm) / boy (cm) · Hedef < 0,5",
    kaynak: "DSÖ bel çevresi eşikleri · TÜBER 2022",
    neSoylemez: [
      "Ölçümün doğru noktadan alınıp alınmadığını bilemez — yanlış nokta, yanlış sayı demektir.",
      "Tek başına bir hastalık göstergesi değildir; tabloyu tamamlayan ölçümlerden biridir.",
      "Vücut kompozisyonunun yerini tutmaz.",
    ],
    gecersizDurumlar: [
      "Gebelik dönemi",
      "Karın bölgesinde ameliyat, fıtık veya belirgin şişkinlik olan durumlar",
      "18 yaş altı",
    ],
    yontemBagi: "/yontem#olcum",
  },
  {
    slug: "enerji-ihtiyaci",
    kod: "03",
    ad: "Günlük enerji ihtiyacı",
    ozet:
      "Mifflin-St Jeor ile bazal metabolizma, aktivite katsayısıyla günlük ihtiyaç.",
    giris:
      "Günlük enerji ihtiyacı tahmin edilir, ölçülmez. Denklem bir başlangıç noktası verir; asıl ayar takip görüşmelerinde, gerçek yanıta bakarak yapılır.",
    aciklama:
      "Günlük kalori ihtiyacı hesaplama: Mifflin-St Jeor denklemi ve aktivite katsayısıyla enerji ihtiyacınızı, TÜBER 2022 aralıklarıyla makro dağılımını görün.",
    formul:
      "Erkek: BMH = 10×kg + 6,25×cm − 5×yaş + 5 · Kadın: BMH = 10×kg + 6,25×cm − 5×yaş − 161 · Günlük ihtiyaç = BMH × PAL",
    kaynak: "Mifflin-St Jeor denklemi · TÜBER 2022 referans aralıkları",
    neSoylemez: [
      "Bu bir tahmindir, ölçüm değil. Aynı denklemi kullanan iki kişinin gerçek ihtiyacı farklı çıkabilir.",
      "Size kaç kalori yemeniz gerektiğini söylemez — hedefe göre bu sayının üstüne veya altına inilir, o karar plan yazılırken verilir.",
      "Yağsız kütleniz biliniyorsa Katch-McArdle denklemi daha isabetli sonuç verir; o ölçüm için vücut analizi gerekir.",
      "Makro aralıkları geniş referans bantlarıdır; kişiye özel dağılım plan içinde daraltılır.",
    ],
    gecersizDurumlar: [
      "18 yaş altı ve 65 yaş üstü — denklem bu gruplarda daha az isabetlidir",
      "Gebelik ve emzirme — ek enerji ihtiyacı ayrıca hesaplanır",
      "Böbrek hastalığı — protein miktarı hekim tarafından belirlenir",
      "Tiroid hastalığı ve metabolizmayı etkileyen ilaç kullanımı",
      "Bariatrik cerrahi geçirmiş kişiler",
    ],
    yontemBagi: "/yontem#olcum",
  },
];

export function aracBul(slug: string): Arac | undefined {
  return ARACLAR.find((arac) => arac.slug === slug);
}

/** Sayfanın tepesinde ve her aracın altında tekrarlanan çerçeve. */
export const ARAC_UYARISI =
  "Bu araçlar bilgilendirme amaçlıdır. Hesaplanan hiçbir sayı tanı değildir, " +
  "tanı yerine geçmez ve tek başına bir sağlık kararına dayanak yapılamaz. " +
  "Bir bulgu sizi endişelendiriyorsa hekiminize başvurun.";

export const ARAC_GIZLILIK_NOTU =
  "Girdiğiniz değerler tarayıcınızdan çıkmaz: hiçbir sunucuya gönderilmez, " +
  "kaydedilmez ve tarafımdan görülmez. Sayfayı kapattığınızda kaybolurlar.";
