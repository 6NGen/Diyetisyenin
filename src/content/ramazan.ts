/**
 * Ramazan programı sayfası.
 *
 * Sayfanın iki dayanağı var:
 * 1. public/katalog.pdf s. 8 — "Ramazan programı" ek hizmeti
 *    (sahur–iftar kurgusu, sıvı planı, bayram geçişi, oruç dönemi ilaç uyumu)
 * 2. content/sofra.ts — "Hurma" ve "Oruç düzeni" maddeleri
 *
 * KURAL: burada hiçbir tıbbi tavsiye verilmez. Oruç tutulup tutulamayacağı
 * kararı hekimindir; sayfa bunu birden fazla yerde açıkça söyler.
 */

export type RamazanBolumu = {
  kod: string;
  baslik: string;
  giris: string;
  maddeler: { baslik: string; metin: string }[];
};

export const RAMAZAN_GIRIS =
  "Ramazan'da beslenme, öğün sayısının azalması değil öğün düzeninin tamamen " +
  "değişmesidir. Aynı miktarı iki öğünde almak, aynı sıvıyı daha dar bir zaman " +
  "aralığına sığdırmak ve uyku düzeni değişmişken bunu sürdürmek gerekir. " +
  "Aşağıdakiler genel çerçevedir; kişiye özel plan bunun üzerine kurulur.";

/** Sayfanın en üstünde ve sonunda tekrarlanan sınır. */
export const RAMAZAN_HEKIM_UYARISI =
  "Oruç tutup tutamayacağınız tıbbi bir karardır ve hekiminize aittir. " +
  "Diyabet, gebelik, emzirme, böbrek hastalığı, düzenli ilaç kullanımı ve " +
  "bariatrik cerrahi geçmişi olan durumlarda oruç öncesinde mutlaka hekiminize " +
  "danışın. Bu sayfa hiçbir hâlde hekim görüşünün yerine geçmez.";

export const RAMAZAN_BOLUMLERI: readonly RamazanBolumu[] = [
  {
    kod: "01",
    baslik: "Sahur",
    giris:
      "Sahuru atlamak, gün içindeki susuzluğu ve yorgunluğu belirgin biçimde artırır. Sahurun işi tok tutmak değil, uzun süreye yayılan bir doygunluk kurmaktır.",
    maddeler: [
      {
        baslik: "Protein bulundurun",
        metin:
          "Yumurta, peynir, yoğurt veya baklagil. Protein, öğünün doygunluk süresini uzatan bileşendir.",
      },
      {
        baslik: "Posayı ihmal etmeyin",
        metin:
          "Tam tahıllı ekmek, yulaf, sebze. Posa hem tokluğu uzatır hem gün içindeki bağırsak düzenini korur.",
      },
      {
        baslik: "Sıvıyı sahura sıkıştırmayın",
        metin:
          "Sahurda bir seferde çok su içmek işe yaramaz; fazlası kısa sürede atılır. Sıvı, iftar ile sahur arasına yayılmalıdır.",
      },
      {
        baslik: "Çok tuzlu ve çok şekerliden kaçının",
        metin:
          "Salam, sucuk, turşu ve tatlı; gün içinde susuzluk hissini artırır. Sahurun en pahalı hatası budur.",
      },
      {
        baslik: "Sahuru geciktirin",
        metin:
          "Sahuru imsak vaktine yakın tutmak, açlık süresini kısaltır. Erken yatıp sahuru atlamak yerine kısa bir sahur bile tercih edilir.",
      },
    ],
  },
  {
    kod: "02",
    baslik: "İftar",
    giris:
      "Uzun açlıktan sonra doğrudan büyük bir öğüne geçmek hem sindirimi zorlar hem porsiyon kontrolünü imkânsız kılar. İftarı ikiye bölmek en pratik çözümdür.",
    maddeler: [
      {
        baslik: "Küçük bir başlangıçla açın",
        metin:
          "Hurma, su veya çorba. Orucun hurma ile açılması yerleşik bir uygulamadır; beslenme açısından da uzun açlık sonrası hızlı ve posayla gelen bir karbonhidrat kaynağıdır. Miktar önemlidir.",
      },
      {
        baslik: "Ara verin",
        metin:
          "Başlangıçtan sonra 10–15 dakika bekleyip asıl öğüne geçmek, tokluk sinyalinin yerleşmesine zaman bırakır. Sofrada geçirilen bu kısa ara, yenen toplam miktarı en çok değiştiren şeydir.",
      },
      {
        baslik: "Tabak modelini bozmayın",
        metin:
          "Yarısı sebze, çeyreği protein, çeyreği tam tahıl. Ramazan'da tabak değişmez, yalnızca saati değişir.",
      },
      {
        baslik: "Kızartma ve hamur işini öğünün merkezine koymayın",
        metin:
          "Yasak değil; ama iftar sofrasında üst üste geldiğinde öğün hem ağırlaşır hem sıvı ihtiyacını artırır.",
      },
      {
        baslik: "Tatlıyı iftardan hemen sonraya yığmayın",
        metin:
          "Tatlı yenecekse öğünden bir süre sonra, porsiyonu belirlenmiş hâlde. Şerbetli tatlılar sıvı ihtiyacını da artırır.",
      },
    ],
  },
  {
    kod: "03",
    baslik: "Sıvı planı",
    giris:
      "Ramazan'daki en yaygın sorun kalori değil sıvı açığıdır. Gün içinde su içilemediği için, iftar ile sahur arasındaki süre planlanmalıdır.",
    maddeler: [
      {
        baslik: "Güne değil, aralığa yayın",
        metin:
          "İftar ile sahur arasında düzenli aralıklarla, küçük miktarlarda. Bir seferde büyük miktar içmek işe yaramaz.",
      },
      {
        baslik: "Çay ve kahveyi sayıya katmayın",
        metin:
          "İftardan sonra üst üste içilen koyu çay, sıvı alımının yerine geçmez ve uyku düzenini bozabilir.",
      },
      {
        baslik: "Yemekten gelen sıvıyı hesaba katın",
        metin:
          "Çorba, yoğurt, sebze ve meyve günlük sıvının azımsanmayacak bir kısmını verir.",
      },
      {
        baslik: "Sıcak havada hedefi yukarı çekin",
        metin:
          "Ramazan yaz aylarına denk geldiğinde sıvı ihtiyacı artar; bu, plan içinde ayrıca ayarlanır.",
      },
    ],
  },
  {
    kod: "04",
    baslik: "Bayram geçişi",
    giris:
      "Bir ay boyunca iki öğüne alışmış bir düzenden üç öğüne dönmek, Ramazan'ın kendisi kadar dikkat ister. Bayramın ilk üç günü çoğu kişide en zorlanılan kısımdır.",
    maddeler: [
      {
        baslik: "Kahvaltıyı hemen geri getirin",
        metin:
          "Bayramın ilk sabahı öğün düzenine dönmek, geçişi günlere yaymaktan daha kolaydır.",
      },
      {
        baslik: "Ziyaret sofralarını tek öğün sayın",
        metin:
          "Gün içinde birden fazla ziyarette ikramları ayrı öğün gibi almak, toplamı hızla büyütür.",
      },
      {
        baslik: "Tatlıyı güne bir kez planlayın",
        metin:
          "Yasak listesi değil; sayısı belli bir plan. Bayramda tatlı yemeyeceğim demek, çoğu zaman tutulmayan bir söz oluyor.",
      },
    ],
  },
];

export type RamazanSss = { soru: string; cevap: string };

export const RAMAZAN_SSS: readonly RamazanSss[] = [
  {
    soru: "Ramazan'da kilo verilir mi?",
    cevap:
      "Ramazan bir kilo verme dönemi olarak planlanmaz. Öğün sayısı azalsa da toplam alım çoğu kişide artar; ayrıca uyku düzeni ve hareket azalır. Bu sayfadaki çerçevenin amacı kilo vermek değil, orucu daha rahat tutmak ve Ramazan sonunda düzeni kaybetmemektir.",
  },
  {
    soru: "Sahurda ne kadar su içmeliyim?",
    cevap:
      "Sahurda bir seferde çok su içmek işe yaramaz — fazlası kısa sürede atılır. Günlük sıvı ihtiyacınızı iftar ile sahur arasına yayarak almak gerekir. Kendi yaklaşık ihtiyacınızı araçlar bölümündeki enerji ihtiyacı hesaplayıcısında görebilirsiniz.",
  },
  {
    soru: "Diyabetim var, oruç tutabilir miyim?",
    cevap:
      "Bu bir tıbbi karardır ve hekiminize aittir. Hekiminiz oruç tutmanızda sakınca görmüyorsa, ilaç saatleriniz ve öğün kurgunuz birlikte planlanır. Bu sayfa veya herhangi bir genel içerik, hekim değerlendirmesinin yerine geçmez.",
  },
  {
    soru: "Ramazan'da spor yapabilir miyim?",
    cevap:
      "Çoğu sağlıklı kişi için mümkündür; zamanlaması önemlidir. Genellikle iftardan bir süre sonra tercih edilir. Şiddet ve süre, o dönemki sıvı durumunuza göre ayarlanır.",
  },
  {
    soru: "Nafile oruçlar için de plan yapıyor musunuz?",
    cevap:
      "Evet. Pazartesi–perşembe oruçları veya eyyâm-ı bîd gibi düzenler beslenme planına dahil edilebilir. Aynı uyarı burada da geçerli: diyabet, gebelik, emzirme ve düzenli ilaç kullanımı olan durumlarda hekimle birlikte planlanır.",
  },
];
