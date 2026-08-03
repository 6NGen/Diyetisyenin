/**
 * Yöntem sayfası içeriği.
 *
 * KAYNAK: public/katalog.pdf — "Süreç · Beş adım" (s. 3) ve
 * "Yöntem · Ölçüm ve hesaplama" (s. 4–5).
 */

export type YontemAdimi = {
  no: string;
  kod: string;
  baslik: string;
  ozet: string;
  maddeler: string[];
};

export const ADIME_GIRIS =
  "Uluslararası Beslenme Bakım Süreci (Nutrition Care Process — ADIME) modelini takip " +
  "ediyorum. Her danışan aynı beş adımdan geçer; içerik kişiye göre değişir, yöntem değişmez.";

export const ADIME: readonly YontemAdimi[] = [
  {
    no: "01",
    kod: "A",
    baslik: "Değerlendirme",
    ozet:
      "Beslenme öyküsü, hastalık ve ilaç geçmişi, uyku, hareket, laboratuvar sonuçları, antropometrik ölçümler.",
    maddeler: [
      "Beslenme öyküsü ve alışkanlık haritası",
      "Hastalık ve ilaç geçmişi",
      "Uyku ve hareket düzeni",
      "Laboratuvar sonuçları ve antropometrik ölçümler",
    ],
  },
  {
    no: "02",
    kod: "D",
    baslik: "Tanımlama",
    ozet:
      "Sorunun beslenme diliyle adı konur: yetersiz protein alımı, düzensiz öğün örüntüsü, sıvı açığı gibi.",
    maddeler: [
      "Sorun beslenme diliyle adlandırılır",
      "Örnek: yetersiz protein alımı",
      "Örnek: düzensiz öğün örüntüsü",
      "Örnek: sıvı açığı",
    ],
  },
  {
    no: "03",
    kod: "I",
    baslik: "Müdahale",
    ozet:
      "Kişiye özel öğün planı, alışveriş listesi, mutfak pratiği ve davranış hedefleri. Birlikte yazılır.",
    maddeler: [
      "Kişiye özel öğün planı",
      "Alışveriş listesi",
      "Mutfak pratiği",
      "Davranış hedefleri — birlikte yazılır",
    ],
  },
  {
    no: "04",
    kod: "M",
    baslik: "İzlem",
    ozet:
      "Planlı kontrollerde ölçüm tekrarı, kayıt incelemesi ve engellerin konuşulması.",
    maddeler: [
      "Planlı kontrol görüşmeleri",
      "Ölçüm tekrarı",
      "Besin tüketim kaydının incelenmesi",
      "Uygulamayı zorlaştıran engellerin konuşulması",
    ],
  },
  {
    no: "05",
    kod: "E",
    baslik: "Değerlendirme",
    ozet:
      "Hedefe göre sonuç ölçümü; plan ya sürdürülür ya revize edilir. Kapanışta kalıcılık planı.",
    maddeler: [
      "Hedefe göre sonuç ölçümü",
      "Planın sürdürülmesi veya revizyonu",
      "Kapanışta kalıcılık planı",
      "Gerekiyorsa hekime veya başka bir uzmana yönlendirme",
    ],
  },
];

export type VeriBlogu = {
  kod: string;
  baslik: string;
  giris: string;
  satirlar: { ad: string; aciklama: string; formul?: string }[];
};

export const VERI_BLOKLARI_GIRIS =
  "Programınızdaki her sayının bir dayanağı var. Aşağıda kullandığım ölçüm ve hesaplama " +
  "araçlarının tamamı yer alıyor — isterseniz ilk görüşmede tek tek konuşuruz.";

export const VERI_BLOKLARI: readonly VeriBlogu[] = [
  {
    kod: "A",
    baslik: "Antropometrik ölçüm",
    giris:
      "Vücudun dış ölçüleri. Tek bir ölçüm değil, birkaçı bir arada okunduğunda anlam kazanır.",
    satirlar: [
      {
        ad: "Beden Kütle İndeksi (BKİ)",
        aciklama:
          "Tek başına yeterli değildir; kas kütlesi yüksek kişilerde yanıltır. Bu yüzden yalnız kullanılmaz.",
        formul: "BKİ = kg / m²",
      },
      {
        ad: "Bel çevresi",
        aciklama:
          "Karın içi yağlanmanın göstergesi. DSÖ eşikleri: kadın 80 / 88 cm, erkek 94 / 102 cm.",
      },
      {
        ad: "Bel / boy oranı",
        aciklama:
          "Kardiyometabolik riski BKİ'den daha iyi öngörür.",
        formul: "Hedef: bel çevresi / boy < 0,5",
      },
      {
        ad: "Boyun, kalça, orta kol çevresi",
        aciklama:
          "Uyku apnesi taraması ve yağ dağılım örüntüsü için tamamlayıcı ölçümler.",
      },
    ],
  },
  {
    kod: "B",
    baslik: "Vücut kompozisyonu",
    giris:
      "Tartıdaki sayı yağ, kas, su ve kemiğin toplamıdır. Hangisinin değiştiği, ne kadar değiştiğinden önemlidir.",
    satirlar: [
      {
        ad: "Biyoelektrik impedans (BIA)",
        aciklama:
          "Yağ kütlesi, yağsız kütle, toplam vücut suyu, bazal metabolizma tahmini. Standart koşullarda tekrarlanır: aynı saat, aç, tuvalet sonrası, egzersizsiz.",
      },
      {
        ad: "Neden sadece tartı değil",
        aciklama:
          "İki kişi aynı kiloda olabilir; biri kas biri yağ kaybediyor olabilir. Takip kilo üzerinden değil kompozisyon üzerinden yapılır.",
      },
      {
        ad: "Çevre ölçümü",
        aciklama:
          "Tartının durduğu haftalarda ilerlemeyi gösteren ikinci kanıt. Ölçüm kayıtları izniniz olmadan hiçbir yerde paylaşılmaz.",
      },
    ],
  },
  {
    kod: "C",
    baslik: "Enerji hesabı",
    giris:
      "Günlük enerji ihtiyacı tahmin edilir, ölçülmez. Denklemler başlangıç noktasıdır; asıl ayar takip sırasında yapılır.",
    satirlar: [
      {
        ad: "Bazal metabolizma — Mifflin-St Jeor",
        aciklama: "Sağlıklı yetişkinlerde en tutarlı sonuç veren denklemlerden biri.",
        formul:
          "E: 10×kg + 6,25×cm − 5×yaş + 5 · K: 10×kg + 6,25×cm − 5×yaş − 161",
      },
      {
        ad: "Fiziksel aktivite düzeyi (PAL)",
        aciklama: "Katsayılarla günlük ihtiyaç bulunur.",
        formul: "Hareketsiz 1,2 · hafif 1,375 · orta 1,55 · yüksek 1,725",
      },
      {
        ad: "Yağsız kütle bilinen kişilerde",
        aciklama:
          "Katch-McArdle denklemi tercih edilir; BIA verisi olduğunda daha isabetli sonuç verir.",
      },
      {
        ad: "Güvenli değişim hızı",
        aciklama:
          "Daha hızlısı kas kaybı ve geri alma riskini büyütür.",
        formul: "Haftada vücut ağırlığının %0,5–1'i",
      },
    ],
  },
  {
    kod: "D",
    baslik: "Makro ve mikro besinler",
    giris:
      "Toplam enerji hedeflendikten sonra bu enerjinin nereden geleceği belirlenir.",
    satirlar: [
      {
        ad: "Referans aralıklar (TÜBER 2022)",
        aciklama: "Türkiye Beslenme Rehberi'nin yetişkin için verdiği aralıklar.",
        formul: "Karbonhidrat %45–60 · Protein %10–20 · Yağ %20–35 (doymuş <%10)",
      },
      {
        ad: "Protein",
        aciklama:
          "Sağlıklı yetişkinde 0,8–1,0 g/kg; ağırlık kaybı ve düzenli antrenman döneminde artırılır, böbrek hastalığında hekim görüşüyle sınırlandırılır.",
      },
      {
        ad: "Posa",
        aciklama:
          "Günde 25–30 g. Tokluk, bağırsak sağlığı ve kan şekeri dengesinin en ucuz aracı.",
      },
      {
        ad: "Sıvı",
        aciklama:
          "Yaklaşık 30–35 ml/kg; sıcak hava, emzirme ve yoğun egzersizde yukarı çekilir.",
      },
      {
        ad: "Risk altındaki mikro besinler",
        aciklama:
          "D vitamini, B12, demir, folat, iyot, kalsiyum, omega-3. Gerekirse hekimden tetkik istenir.",
      },
    ],
  },
  {
    kod: "E",
    baslik: "Planlama araçları",
    giris: "Hesap kâğıtta kalırsa işe yaramaz. Plan mutfakta uygulanabilir hâle getirilir.",
    satirlar: [
      {
        ad: "Besin tüketim kaydı",
        aciklama:
          "24 saatlik geri çağırma ve 3 günlük kayıt (2 hafta içi + 1 hafta sonu). Analiz BeBiS ile yapılır.",
      },
      {
        ad: "Değişim listeleri",
        aciklama:
          "Sabit menü yerine eşdeğer gruplar. “Bunu yiyemezsen yerine şunu” mantığı — sürdürülebilirliğin anahtarı.",
      },
      {
        ad: "Tabak modeli",
        aciklama:
          "Yarısı sebze, çeyreği protein, çeyreği tam tahıl. Tartı istemeyen danışanlar için birincil araç.",
      },
      {
        ad: "Glisemik indeks ve yük",
        aciklama:
          "İnsülin direnci, diyabet ve PCOS programlarında öğün kurgusunun temeli.",
        formul: "GY = (Gİ × karbonhidrat miktarı) / 100",
      },
      {
        ad: "Davranışsal yöntemler",
        aciklama:
          "Hedef daraltma, tetikleyici haritası, öğün düzeni, farkındalıkla yeme, uyku ve stres bağlantısı.",
      },
    ],
  },
  {
    kod: "F",
    baslik: "Sınırlar",
    giris: "Bir yöntemin en önemli parçası, neyi yapmadığını bilmesidir.",
    satirlar: [
      {
        ad: "Tanı koymam",
        aciklama:
          "Hastalık teşhisi ve ilaç düzenlemesi hekimin yetkisindedir. Şüphe hâlinde yönlendirir, hekimle iş birliği içinde çalışırım.",
      },
      {
        ad: "Tedaviyi değiştirmem",
        aciklama:
          "İnsülin, tiroid ilacı, tansiyon ilacı gibi tedavilerde doz kararı hekime aittir; ben beslenmeyi ona uyarlarım.",
      },
      {
        ad: "Sonuç garantisi vermem",
        aciklama:
          "Kaç kilo verileceğine dair taahhüt bilimsel olarak da hukuken de mümkün değildir.",
      },
      {
        ad: "Ürün satmam",
        aciklama:
          "Detoks, çay, hap, damla veya “yağ yakıcı” ürün satışı yapmam. Gelir yalnızca danışmanlıktan gelir.",
      },
    ],
  },
];

export type Kaynak = { kunye: string; not?: string };

/** Katalog s. 5 — "Başvurduğum kaynaklar". */
export const KAYNAKLAR: readonly Kaynak[] = [
  {
    kunye:
      "T.C. Sağlık Bakanlığı — Türkiye Beslenme Rehberi (TÜBER) 2022",
    not: "Makro besin referans aralıklarının ve besin grubu önerilerinin kaynağı.",
  },
  {
    kunye:
      "T.C. Sağlık Bakanlığı — Türkiye Diyabet Programı ve ilgili tanı-tedavi kılavuzları",
  },
  {
    kunye:
      "Dünya Sağlık Örgütü (WHO) — beslenme, şeker, tuz ve yağ alım önerileri",
  },
  {
    kunye:
      "EFSA — Avrupa Diyetle Referans Alım Değerleri (Dietary Reference Values)",
  },
  {
    kunye:
      "Academy of Nutrition and Dietetics — Nutrition Care Process (ADIME)",
    not: "Beş adımlı sürecin kaynağı.",
  },
  { kunye: "ESPEN — klinik beslenme kılavuzları" },
  {
    kunye: "Türkiye Diyetisyenler Derneği yayınları ve mesleki etik ilkeleri",
  },
];
