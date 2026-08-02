import { SITE } from "@/content/site";

export type SSSMaddesi = {
  soru: string;
  cevap: string;
  grup: "Süreç" | "Ücret" | "Online" | "Sınırlar";
};

export const SSS: readonly SSSMaddesi[] = [
  {
    grup: "Süreç",
    soru: "Ücretsiz ön görüşme nedir, ne kadar sürer?",
    cevap:
      "15 dakikalık, ücretsiz ve karşılıklı bir tanışmadır. Neye ihtiyacınız olduğunu anlatırsınız, ben nasıl çalıştığımı anlatırım. Bu görüşmede plan verilmez, ölçüm alınmaz, tahlil yorumlanmaz. Amaç, birlikte çalışmanın size uygun olup olmadığına karar vermenizdir.",
  },
  {
    grup: "Süreç",
    soru: "İlk görüşmede ne oluyor?",
    cevap:
      "İlk görüşme 60 dakikadır. Beslenme öykünüz, öğün düzeniniz, uyku ve hareket alışkanlıklarınız konuşulur; antropometrik ölçümler alınır ve yüz yüze görüşmelerde vücut kompozisyonu analizi yapılır. Varsa hekiminizin istediği tahlil sonuçlarını beslenme açısından değerlendiririm. Görüşmenin ardından yazılı bir özet raporu size iletirim.",
  },
  {
    grup: "Süreç",
    soru: "Görüşmeye ne getirmeliyim?",
    cevap:
      "Son altı ay içinde yapılmış tahlil sonuçlarınız, düzenli kullandığınız ilaç ve takviyelerin listesi ve varsa hekim raporunuz yeterli. Üç günlük besin tüketim kaydı tutabilirseniz görüşmeyi belirgin biçimde hızlandırır.",
  },
  {
    grup: "Süreç",
    soru: "Ne sıklıkla görüşüyoruz?",
    cevap:
      "Paketlere göre değişir. Denge paketinde haftada bir olmak üzere ayda dört, Dönüşüm ve Klinik paketlerinde üç ay boyunca haftada bir görüşürüz. Görüşme aralıkları sizin programınıza göre birlikte belirlenir.",
  },
  {
    grup: "Online",
    soru: "Online görüşme yüz yüze görüşmeden farklı mı?",
    cevap:
      "İçerik olarak aynıdır. Tek fark, biyoelektrik impedans ölçümünün yalnızca yüz yüze yapılabilmesidir. Online çalışırken ölçümler için evde uygulanabilir bir yöntem üzerinde anlaşırız; boy, ağırlık ve çevre ölçümleri sizin tarafınızdan alınır.",
  },
  {
    grup: "Online",
    soru: "Türkiye dışından çalışabilir miyim?",
    cevap:
      "Evet. Görüşmeler görüntülü yapılır, saat farkı gözetilerek planlanır. Öğün planı bulunduğunuz ülkede ulaşabildiğiniz besinlere göre kurulur.",
  },
  {
    grup: "Ücret",
    soru: "Ödeme nasıl yapılıyor?",
    cevap:
      "Paket ücreti, ilk görüşmeden önce banka havalesi veya EFT ile ödenir. Üç aylık paketlerde talep hâlinde ödeme aylık olarak bölünebilir. Ödeme sonrası fatura düzenlenir.",
  },
  {
    grup: "Ücret",
    soru: "Paketi yarıda bırakırsam ne oluyor?",
    cevap:
      "Kullanılmamış görüşmelerin ücreti iade edilir. Ayrıntılar İptal ve İade sayfasında yazılıdır. Randevunuzu en az 24 saat önce bildirerek ücretsiz erteleyebilirsiniz.",
  },
  {
    grup: "Ücret",
    soru: "Sağlık sigortam karşılıyor mu?",
    cevap:
      "Bazı özel sağlık sigortası poliçeleri diyetisyen görüşmesini kapsıyor. Poliçenizin kapsamını sigorta şirketinize sormanız gerekir; talep etmeniz hâlinde gerekli belgeyi düzenlerim.",
  },
  {
    grup: "Sınırlar",
    soru: "Bana bir diyet listesi verecek misiniz?",
    cevap:
      "Tek başına bir kâğıt liste vermem. Enerji ve besin ögesi hedefleri hesaplanır, bu hedefler sizin mutfağınıza ve gününüze göre öğün planına dönüştürülür ve takip görüşmelerinde gerçek hayata göre revize edilir. Değişim listeleri sayesinde plan sabit bir menü değil, esnek bir çerçevedir.",
  },
  {
    grup: "Sınırlar",
    soru: "Ne kadar sürede sonuç alırım?",
    cevap:
      "Süre ve sonuç sözü vermem. Beslenme müdahalesine verilen yanıt kişiden kişiye değişir; yaş, hormonal durum, uyku, hareket düzeyi ve kullanılan ilaçlar sonucu etkiler. Ölçülebilir hedefler koyarız ve ilerlemeyi birlikte izleriz.",
  },
  {
    grup: "Sınırlar",
    soru: "Takviye veya ürün satıyor musunuz?",
    cevap:
      "Hayır. Bu sitede ve görüşmelerde hiçbir ürün, takviye, çay veya detoks programı satışı yoktur. Bir takviyeye ihtiyaç olduğunu düşünürsem gerekçesiyle birlikte konuşur, kararı hekiminizle vermenizi öneririm.",
  },
  {
    grup: "Sınırlar",
    soru: "Hastalığıma teşhis koyabilir misiniz?",
    cevap:
      "Hayır. Teşhis koymak ve tedavi kararı vermek hekimin yetkisindedir. Ölçümlerde veya tahlillerde dikkat çeken bir bulgu olduğunda sizi hekime yönlendiririm. Klinik paketinde beslenme planı, hekiminizin tanısı ve yönlendirmesi doğrultusunda kurulur.",
  },
  {
    grup: "Sınırlar",
    soru: "Randevu formunda neden sağlık bilgisi sorulmuyor?",
    cevap:
      "Sağlık verisi, kişisel verilerin korunması mevzuatında özel nitelikli veri sayılır. Bu yüzden form üzerinden hastalık, ilaç veya ölçüm bilgisi toplamıyorum. Bu bilgiler yalnızca görüşme sırasında, sizin onayınızla ve gerektiği kadar kayda alınır.",
  },
  {
    grup: "Süreç",
    soru: "Nerede görüşüyoruz?",
    cevap: `Yüz yüze görüşmeler ${SITE.sehir} adresimde yapılır; adres ve ulaşım bilgisi İletişim sayfasındadır. Dilerseniz tüm süreç online yürütülebilir.`,
  },
];

export const SSS_GRUPLARI = [
  "Süreç",
  "Ücret",
  "Online",
  "Sınırlar",
] as const;
