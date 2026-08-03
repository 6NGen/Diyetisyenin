/**
 * Sık sorulan sorular.
 *
 * İlk altı madde public/katalog.pdf s. 12'den ("Sık sorulanlar · Merak
 * edilenler") birebir aktarılmıştır. Kalanlar siteye özgüdür ve katalogla
 * çelişmez — randevu formu ve ön görüşme gibi yalnızca sitede karşılığı olan
 * konuları açıklar.
 */
export type SSSMaddesi = {
  soru: string;
  cevap: string;
  grup: "Süreç" | "Ücret" | "Online" | "Sınırlar";
};

export const SSS: readonly SSSMaddesi[] = [
  // — Katalog s. 12 —
  {
    grup: "Online",
    soru: "Online görüşme yüz yüze kadar verimli mi?",
    cevap:
      "Evet. Tek fark vücut analizi ölçümünün bende yapılamaması. Online danışanlar için evde yapılabilecek çevre ölçümü ve tartı protokolü veriyorum; isterseniz ilk ve son ölçüm için yüz yüze gelebilirsiniz.",
  },
  {
    grup: "Süreç",
    soru: "Randevumu değiştirebilir miyim?",
    cevap:
      "En az 24 saat önceden haber verirseniz ücretsiz erteleriz. Haber verilmeyen randevular kullanılmış sayılır. Hastalık gibi mazeretlerde esneklik gösteriyorum.",
  },
  {
    grup: "Süreç",
    soru: "Program bittikten sonra ne oluyor?",
    cevap:
      "Dönüşüm ve Klinik paketlerinde kapanış görüşmesinde kalıcılık planı yazıyoruz ve bir ay sonra ücretsiz takip görüşmesi yapıyoruz. Sonrasında dilerseniz tek seans ya da aylık takip şeklinde devam edebilirsiniz.",
  },
  {
    grup: "Süreç",
    soru: "Yemek yapmayı sevmiyorum, yine de olur mu?",
    cevap:
      "Olur. Pratik seçenekler, hazır ürün okuma rehberi ve dışarıda yeme stratejisi üzerine kurulu bir plan yaparız. Mutfağa girmeyi gerektirmeyen bir plan da mümkün.",
  },
  {
    grup: "Sınırlar",
    soru: "Verdiğim bilgiler nerede saklanıyor?",
    cevap:
      "Ölçüm, sağlık bilgisi ve fotoğraflarınız KVKK'nın özel nitelikli kişisel veri hükümlerine tabidir. Açık rızanız olmadan hiçbir yerde paylaşılmaz, işlenmez. Dilediğiniz zaman silinmesini talep edebilirsiniz.",
  },
  {
    grup: "Ücret",
    soru: "Ücret iadesi var mı?",
    cevap:
      "Program başlamadan önceki iptallerde tam iade yapılır. Başladıktan sonra, kullanılmamış görüşmeler oranında iade uygulanır. Detaylar sözleşmede yazılıdır.",
  },

  // — Siteye özgü —
  {
    grup: "Süreç",
    soru: "Ücretsiz ön görüşme nedir, ne kadar sürer?",
    cevap:
      "15 dakikalık, ücretsiz ve karşılıklı bir tanışmadır. Ne beklediğinizi anlatırsınız, ben de size uygun olanı söylerim — uygun olmadığını düşünürsem bunu da söylerim. Bu görüşmede plan verilmez, ölçüm alınmaz, tahlil yorumlanmaz.",
  },
  {
    grup: "Süreç",
    soru: "İlk görüşmede ne oluyor?",
    cevap:
      "İlk görüşme 60 dakikadır. Beslenme öykünüz, hastalık ve ilaç geçmişiniz, uyku ve hareket düzeniniz konuşulur; antropometrik ölçüm ve vücut analizi yapılır. Ardından ölçümleri, hedefleri ve önerileri içeren bir PDF rapor iletirim.",
  },
  {
    grup: "Süreç",
    soru: "Görüşmeye ne getirmeliyim?",
    cevap:
      "Son altı ay içinde yapılmış tahlil sonuçlarınız, düzenli kullandığınız ilaç ve takviyelerin listesi ve varsa hekim raporunuz yeterli. Üç günlük besin tüketim kaydı tutabilirseniz görüşmeyi belirgin biçimde hızlandırır.",
  },
  {
    grup: "Ücret",
    soru: "Ödeme nasıl yapılıyor?",
    cevap:
      "Ödeme peşin veya taksitli yapılabilir. Online ve yüz yüze görüşme aynı fiyattadır. Başlanmış bir programın fiyatı süre boyunca değişmez.",
  },
  {
    grup: "Ücret",
    soru: "Sağlık sigortam karşılıyor mu?",
    cevap:
      "Bazı özel sağlık sigortası poliçeleri diyetisyen görüşmesini kapsıyor. Poliçenizin kapsamını sigorta şirketinize sormanız gerekir; talep etmeniz hâlinde gerekli belgeyi düzenlerim.",
  },
  {
    grup: "Sınırlar",
    soru: "Ne kadar sürede sonuç alırım?",
    cevap:
      "Kaç kilo verileceğine dair taahhüt bilimsel olarak da hukuken de mümkün değildir. Güvenli değişim hızı haftada vücut ağırlığının %0,5–1'i kadardır; daha hızlısı kas kaybı ve geri alma riskini büyütür. Ölçülebilir hedefler koyar, ilerlemeyi birlikte izleriz.",
  },
  {
    grup: "Sınırlar",
    soru: "Takviye veya ürün satıyor musunuz?",
    cevap:
      "Hayır. Detoks, çay, hap, damla veya “yağ yakıcı” ürün satmam; bu sitede de hiçbir ürün satışı yoktur. Bir takviyeye ihtiyaç olduğunu düşünürsem gerekçesiyle birlikte konuşur, kararı hekiminizle vermenizi öneririm.",
  },
  {
    grup: "Sınırlar",
    soru: "Hastalığıma teşhis koyabilir misiniz?",
    cevap:
      "Hayır. Hastalık teşhisi ve ilaç düzenlemesi hekimin yetkisindedir. Şüphe hâlinde sizi yönlendirir, hekimle iş birliği içinde çalışırım. Klinik pakette beslenme planı, hekiminizin tanısı ve takibi doğrultusunda kurulur.",
  },
  {
    grup: "Sınırlar",
    soru: "Randevu formunda neden sağlık bilgisi sorulmuyor?",
    cevap:
      "Sağlık verisi, kişisel verilerin korunması mevzuatında özel nitelikli veri sayılır. Bu yüzden form üzerinden hastalık, ilaç veya ölçüm bilgisi toplamıyorum. Bu bilgiler yalnızca görüşme sırasında, açık rızanızla ve gerektiği kadar kayda alınır.",
  },
];

export const SSS_GRUPLARI = ["Süreç", "Ücret", "Online", "Sınırlar"] as const;
