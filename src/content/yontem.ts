/**
 * Yöntem sayfası içeriği.
 * ADIME beş adım + ölçüm/hesaplama veri blokları + kaynak listesi.
 */

export type YontemAdimi = {
  no: string;
  kod: string;
  baslik: string;
  ozet: string;
  maddeler: string[];
};

/** ADIME: Assessment – Diagnosis – Intervention – Monitoring – Evaluation */
export const ADIME: readonly YontemAdimi[] = [
  {
    no: "01",
    kod: "Assessment",
    baslik: "Değerlendirme",
    ozet:
      "Önce ölçülür. Beslenme öyküsü, ölçümler, varsa tahliller ve günlük hayatın gerçek düzeni bir arada okunur.",
    maddeler: [
      "24 saatlik geri çağırma ve besin tüketim sıklığı",
      "Antropometrik ölçümler ve vücut kompozisyonu",
      "Uyku, hareket, çalışma düzeni ve öğün saatleri",
      "Hekim tarafından istenmiş tahlil sonuçlarının beslenme açısından okunması",
    ],
  },
  {
    no: "02",
    kod: "Diagnosis",
    baslik: "Beslenme tanısı",
    ozet:
      "Hastalık teşhisi değil, beslenme tanısıdır: PES formatında sorun, sebep ve belirtiler yazılır.",
    maddeler: [
      "Sorun (Problem): ölçüme dayalı, tek cümlelik tanım",
      "Etiyoloji (Etiology): sorunun arkasındaki davranış veya koşul",
      "Belirtiler (Signs/Symptoms): tanıyı destekleyen ölçülebilir veriler",
      "Tıbbi tanı hekimin yetkisindedir; burada yalnızca beslenme boyutu adlandırılır",
    ],
  },
  {
    no: "03",
    kod: "Intervention",
    baslik: "Müdahale",
    ozet:
      "Plan buradan çıkar. Hesaplanan enerji ve besin ögesi hedefleri, kişinin mutfağına ve bütçesine göre öğüne dönüşür.",
    maddeler: [
      "Enerji, makro ve öncelikli mikro besin hedeflerinin belirlenmesi",
      "Öğün sayısı, zamanlaması ve porsiyon ölçüleri",
      "Mevsim, mutfak alışkanlığı ve bütçeye göre besin seçimi",
      "Uygulanabilirliği artıran değişim listeleri ve alternatifler",
    ],
  },
  {
    no: "04",
    kod: "Monitoring",
    baslik: "İzlem",
    ozet:
      "Plan bir kez yazılıp bırakılmaz. Haftalık görüşmelerde neyin tuttuğu, neyin tutmadığı konuşulur.",
    maddeler: [
      "Ölçüm tekrarı ve eğilimin izlenmesi",
      "Uyum güçlüğü yaşanan öğünlerin ayrıştırılması",
      "Açlık–tokluk, enerji ve uyku geri bildirimi",
      "Gerektiğinde planın küçük adımlarla revizyonu",
    ],
  },
  {
    no: "05",
    kod: "Evaluation",
    baslik: "Değerlendirme",
    ozet:
      "Süreç sonunda başlangıç verileriyle karşılaştırma yapılır; devam edilecek mi, nasıl edilecek, birlikte kararlaştırılır.",
    maddeler: [
      "Başlangıç ve bitiş ölçümlerinin karşılaştırılması",
      "Hedeflere göre ilerlemenin yazılı özeti",
      "Kalıcılık için sürdürme planı",
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

export const VERI_BLOKLARI: readonly VeriBlogu[] = [
  {
    kod: "A",
    baslik: "Antropometrik ölçüm",
    giris:
      "Vücudun dış ölçüleri. Tek başına bir şey söylemez; eğilim olarak okunduğunda anlam kazanır.",
    satirlar: [
      {
        ad: "Beden Kütle İndeksi (BKİ)",
        aciklama:
          "Kaba bir tarama aracıdır. Kas kütlesi yüksek kişilerde yanıltır, tek başına karar verdirmez.",
        formul: "BKİ = ağırlık (kg) / boy (m)²",
      },
      {
        ad: "Bel çevresi",
        aciklama:
          "Karın bölgesindeki yağlanmanın göstergesi. Ölçüm, en alt kaburga ile kalça kemiği arasındaki orta noktadan, normal nefes verme sonunda alınır.",
      },
      {
        ad: "Bel/kalça oranı",
        aciklama:
          "Yağ dağılımının biçimini gösterir. Bel çevresiyle birlikte değerlendirilir.",
        formul: "BKO = bel çevresi (cm) / kalça çevresi (cm)",
      },
      {
        ad: "Bel/boy oranı",
        aciklama:
          "Basitliği nedeniyle son yıllarda öne çıkan ölçüt. Yaş ve cinsiyetten görece bağımsızdır.",
        formul: "BBO = bel çevresi (cm) / boy (cm)",
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
        ad: "Biyoelektrik impedans (BİA)",
        aciklama:
          "Vücuttan geçen düşük şiddetli akımın direncinden yağ ve yağsız kütle tahmin edilir. Ölçüm öncesi su tüketimi, egzersiz ve öğün zamanı sonucu etkiler; bu yüzden her ölçüm benzer koşullarda alınır.",
      },
      {
        ad: "Yağsız vücut kütlesi (YVK)",
        aciklama:
          "Kas, kemik, organ ve suyun toplamı. Süreç boyunca korunması hedeflenen kısım budur.",
        formul: "YVK = toplam ağırlık − yağ kütlesi",
      },
      {
        ad: "Deri kıvrım kalınlığı",
        aciklama:
          "Kaliperle belirli noktalardan alınan ölçümler. BİA'nın uygun olmadığı durumlarda tamamlayıcı olarak kullanılır.",
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
        ad: "Bazal metabolik hız — Mifflin-St Jeor",
        aciklama:
          "Sağlıklı yetişkinlerde en tutarlı sonuç veren denklemlerden biridir.",
        formul:
          "Erkek: BMH = 10 × kg + 6,25 × cm − 5 × yaş + 5 · Kadın: BMH = 10 × kg + 6,25 × cm − 5 × yaş − 161",
      },
      {
        ad: "Harris-Benedict (revize)",
        aciklama:
          "Daha eski bir denklem. Karşılaştırma amacıyla ikinci bir tahmin olarak kullanılabilir.",
      },
      {
        ad: "Fiziksel aktivite katsayısı (PAL)",
        aciklama:
          "Hareketsizden çok aktife 1,2–1,9 aralığında değişir. Toplam enerji ihtiyacı bu katsayıyla bulunur.",
        formul: "TEH = BMH × PAL",
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
        ad: "Protein",
        aciklama:
          "Sağlıklı yetişkinde genellikle vücut ağırlığının kilogramı başına 0,8–1,6 g aralığında planlanır; aktivite düzeyi ve hedefe göre değişir. Böbrek hastalığı olanlarda hekim tarafından belirlenir.",
        formul: "1 g protein ≈ 4 kcal",
      },
      {
        ad: "Yağ",
        aciklama:
          "Genellikle toplam enerjinin %25–35'i. Doymuş yağ oranı ve yağ asidi profili miktardan daha belirleyicidir.",
        formul: "1 g yağ ≈ 9 kcal",
      },
      {
        ad: "Karbonhidrat",
        aciklama:
          "Kalan enerjiden hesaplanır. Miktar kadar kaynağı, posa içeriği ve öğün içindeki bileşimi önemlidir.",
        formul: "1 g karbonhidrat ≈ 4 kcal",
      },
      {
        ad: "Posa, sıvı ve mikro besinler",
        aciklama:
          "Günlük posa hedefi, sıvı alımı ve öncelikli vitamin–mineraller (D vitamini, B12, demir, kalsiyum) plan içinde ayrıca takip edilir.",
      },
    ],
  },
  {
    kod: "E",
    baslik: "Planlama araçları",
    giris:
      "Hesap kâğıtta kalırsa işe yaramaz. Plan mutfakta uygulanabilir hâle getirilir.",
    satirlar: [
      {
        ad: "Besin değişim listeleri",
        aciklama:
          "Aynı enerji ve makro değerine sahip besinlerin birbirinin yerine kullanılabilmesi. Planı esnek kılan asıl araçtır.",
      },
      {
        ad: "Porsiyon ölçüleri",
        aciklama:
          "Avuç, kâse, yemek kaşığı gibi mutfakta zaten var olan ölçüler. Tartı zorunlu değildir.",
      },
      {
        ad: "Glisemik indeks ve yük",
        aciklama:
          "Tek başına besin sıralamak için değil, öğün bileşimini kurmak için kullanılır. Karma öğünde tek besinin indeksi belirleyici olmaz.",
        formul: "GY = (Gİ × karbonhidrat miktarı) / 100",
      },
      {
        ad: "Besin tüketim kaydı",
        aciklama:
          "Üç günlük kayıt, hafızadan anlatılan bir haftadan daha çok bilgi verir.",
      },
    ],
  },
  {
    kod: "F",
    baslik: "Sınırlar",
    giris:
      "Bir yöntemin en önemli parçası, neyi yapmadığını bilmesidir.",
    satirlar: [
      {
        ad: "Teşhis koymam",
        aciklama:
          "Hastalık teşhisi hekimin yetkisindedir. Ölçümlerde dikkat çeken bir bulgu olduğunda yönlendirme yaparım.",
      },
      {
        ad: "İlaç önermem, ilaç kesmem",
        aciklama:
          "İlaç ve doz kararı hekime aittir. Beslenme planı, kullandığınız ilaçları gözeterek kurulur.",
      },
      {
        ad: "Takviye satmam",
        aciklama:
          "Bu sitede ve görüşmelerde ürün satışı yoktur. Takviye ihtiyacı varsa gerekçesiyle birlikte konuşulur.",
      },
      {
        ad: "Süre ve sonuç sözü vermem",
        aciklama:
          "Beslenme müdahalesinin sonucu kişiden kişiye değişir. Ölçülebilir hedef koyarım, sonuç garantisi vermem.",
      },
    ],
  },
];

export type Kaynak = { kunye: string; not?: string };

export const KAYNAKLAR: readonly Kaynak[] = [
  {
    kunye:
      "T.C. Sağlık Bakanlığı, Türkiye Beslenme Rehberi (TÜBER), Ankara, 2022.",
    not: "Türkiye'ye özgü referans alım değerleri ve besin grubu önerileri.",
  },
  {
    kunye:
      "T.C. Sağlık Bakanlığı, Türkiye'ye Özgü Besin ve Beslenme Rehberi, Ankara, 2015.",
  },
  {
    kunye:
      "Academy of Nutrition and Dietetics, Nutrition Care Process and Terminology (NCPT).",
    not: "ADIME adımlarının ve PES ifadesinin kaynağı.",
  },
  {
    kunye:
      "Mifflin MD ve ark., \"A new predictive equation for resting energy expenditure in healthy individuals\", Am J Clin Nutr, 1990;51(2):241-247.",
  },
  {
    kunye:
      "World Health Organization, Waist Circumference and Waist–Hip Ratio: Report of a WHO Expert Consultation, Cenevre, 2011.",
  },
  {
    kunye:
      "Kyle UG ve ark., \"Bioelectrical impedance analysis — part I & II\", Clinical Nutrition, 2004;23(5):1226-1243 ve 23(6):1430-1453.",
  },
  {
    kunye:
      "EFSA Panel on Dietetic Products, Nutrition and Allergies, Dietary Reference Values for nutrients — Summary report, 2017.",
  },
  {
    kunye:
      "Türkiye Diyetisyenler Derneği, Diyetisyenler İçin Meslek Etiği Kuralları.",
  },
];
