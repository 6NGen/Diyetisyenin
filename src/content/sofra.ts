/**
 * "Sünnet üzere sofra" bölümü — 14 madde.
 *
 * ⚠ KAYNAK DOĞRULAMA NOTU
 * Spesifikasyon bu maddelerin `diyetisyen-katalog.html` dosyasındaki `.adab-item`
 * bloklarından birebir aktarılmasını istiyor. O dosya bu depoda bulunmadığı için
 * aşağıdaki künyeler ve sıhhat notları, ilgili rivayetlerin yaygın olarak
 * kullanılan standart referanslarına göre yazıldı.
 *
 * YAYINA ALMADAN ÖNCE: her künye ve sıhhat notu katalogla birebir
 * karşılaştırılmalı, farklıysa katalogdaki hâliyle değiştirilmelidir.
 * Künyeler kısaltılmaz, "iyileştirilmez".
 */

export type SofraMaddesi = {
  baslik: string;
  /** Rivayetin muhtevası. */
  metin: string;
  bugunkuKarsiligi: string;
  /** Örn. "Tirmizî, Zühd 47 · İbn Mâce, Et'ime 50" */
  kaynak: string;
  /** Örn. "Sahih · müttefekun aleyh" | "Hasen–sahih" | "Hasen" */
  sihhat?: string;
};

export const SOFRA_UYARISI =
  "Bu bölüm isteğe bağlıdır ve sitenin beslenme danışmanlığı hizmetinin bir parçası değildir. " +
  "Hadis ilmi benim uzmanlık alanım değildir; künyeler kaynak eserlerden aktarılmıştır. " +
  "Dinî hüküm için ehline başvurunuz. Buradaki hiçbir madde tıbbi tavsiye, teşhis veya tedavi yerine geçmez.";

export const SOFRA_ZAYIF_RIVAYET_NOTU =
  "Sofra âdâbı etrafında halk arasında dolaşan rivayetlerin bir kısmı zayıf, bir kısmı ise uydurmadır. " +
  "Bu sayfaya yalnızca sıhhati kaynak eserlerde açıkça belirtilen rivayetler alınmıştır. " +
  "Sıhhat notu bulunmayan bir rivayetle karşılaştığınızda, onu bir sağlık önerisine dönüştürmeden önce " +
  "hem hadis ilmine hem de güncel beslenme bilgisine ayrı ayrı başvurmak gerekir.";

export const SOFRA_MADDELERI: readonly SofraMaddesi[] = [
  {
    baslik: "Yemeğe besmele ile başlamak",
    metin:
      "Yemeğe başlarken Allah'ın adının anılması, başlangıçta unutulursa hatırlandığı anda söylenmesi tavsiye edilmiştir.",
    bugunkuKarsiligi:
      "Öğüne bilinçli bir duruşla başlamak, ilk lokmadan önce bir an durmak demek. Ayakta, telefon elde ve aceleyle başlanan öğünlerde tokluk sinyali geç fark edilir; kısa bir başlangıç ritüeli öğünü fark edilir kılar.",
    kaynak: "Ebû Dâvûd, Et'ime 15 · Tirmizî, Et'ime 47",
    sihhat: "Hasen–sahih",
  },
  {
    baslik: "Sağ elle ve önünden yemek",
    metin:
      "Sofrada sağ elin kullanılması ve kişinin kendi önünden yemesi öğütlenmiştir.",
    bugunkuKarsiligi:
      "Ortak kaptan yemekte kendi tarafından almak, hem hijyen hem de porsiyon açısından işe yarar: tabağın her yerine uzanmak, yenen miktarın takibini imkânsız hâle getirir.",
    kaynak: "Buhârî, Et'ime 2, 3 · Müslim, Eşribe 108",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "Mideyi üçe ayırmak",
    metin:
      "Âdemoğlunun doldurduğu kapların en kötüsünün mide olduğu; kişiye belini doğrultacak birkaç lokmanın yeteceği, illâ yiyecekse midesinin üçte birini yemeğe, üçte birini içeceğe, üçte birini nefese ayırması gerektiği bildirilmiştir.",
    bugunkuKarsiligi:
      "Bu sitenin imza fikri buradan geliyor. Bugünkü karşılığı basit: tabağı ağzına kadar doldurmamak, öğünü tam doymadan bitirmek ve tokluk sinyalinin yerleşmesi için zaman bırakmak. Mide, tokluğu ancak öğün başladıktan bir süre sonra bildirir.",
    kaynak: "Tirmizî, Zühd 47 · İbn Mâce, Et'ime 50",
    sihhat: "Hasen–sahih",
  },
  {
    baslik: "Yemeği kötülememek",
    metin:
      "Peygamber'in hiçbir yemeği ayıplamadığı; canı çekerse yediği, çekmezse bıraktığı nakledilmiştir.",
    bugunkuKarsiligi:
      "Besinleri \"iyi\" ve \"kötü\" diye ikiye ayırmak, beslenme danışmanlığında en sık karşılaştığım sorunlardan biri. Yasak listesi büyüdükçe uyum düşer, suçluluk artar. Bir besin öğün içindeki yeri ve miktarıyla değerlendirilir, kendi başına yargılanmaz.",
    kaynak: "Buhârî, Et'ime 21 · Müslim, Eşribe 187",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "Birlikte yemek",
    metin:
      "Yemeğin topluca yenmesi ve üzerine Allah'ın adının anılması hâlinde bereketleneceği bildirilmiştir.",
    bugunkuKarsiligi:
      "Yalnız ve ekran karşısında yenen öğünlerde hem süre kısalır hem de yenen miktar fark edilmez. Sofrayı paylaşmak öğünü yavaşlatır; yavaşlayan öğün daha iyi fark edilir.",
    kaynak: "Ebû Dâvûd, Et'ime 14 · İbn Mâce, Et'ime 17",
    sihhat: "Hasen",
  },
  {
    baslik: "Yaslanarak yememek",
    metin:
      "Peygamber'in yaslanarak yemek yemediğini söylediği rivayet edilmiştir.",
    bugunkuKarsiligi:
      "Dik oturarak yemek, hem çiğnemeyi hem de yutmayı kolaylaştırır. Uzanarak veya iyice arkaya yaslanarak yemek, reflü şikâyeti olanlarda rahatsızlığı artırabilir.",
    kaynak: "Buhârî, Et'ime 13 · Ebû Dâvûd, Et'ime 17",
    sihhat: "Sahih",
  },
  {
    baslik: "Suyu üç nefeste içmek",
    metin:
      "Suyun bir dikişte değil, ara vererek üç nefeste içildiği nakledilmiştir.",
    bugunkuKarsiligi:
      "Günlük sıvı alımının tamamını birkaç seferde içmek yerine güne yaymak, hem alımı kolaylaştırır hem de susuzluk hissinin açlıkla karışmasını azaltır. Öğün arasına yayılmış su, öğün sırasında içilen büyük miktardan daha rahat tolere edilir.",
    kaynak: "Buhârî, Eşribe 26 · Müslim, Eşribe 123",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "Kabın içine solumamak",
    metin:
      "İçilen kabın içine solunmaması, sıcak olanın soğumasının beklenmesi tavsiye edilmiştir.",
    bugunkuKarsiligi:
      "Ortak kaba üflememek temel bir hijyen kuralıdır. Çok sıcak içeceklerin bekletilerek içilmesi de ağız ve yemek borusu mukozasını korur.",
    kaynak: "Buhârî, Vudû' 18 · Tirmizî, Eşribe 15",
    sihhat: "Sahih",
  },
  {
    baslik: "Düşen lokmayı alıp temizleyerek yemek",
    metin:
      "Lokma düştüğünde bulaşan şeyin temizlenip lokmanın yenmesi, şeytana bırakılmaması öğütlenmiştir.",
    bugunkuKarsiligi:
      "Buradaki asıl mesele israfın önlenmesi. Bugün karşılığı, tabakta artan yemeği çöpe atmadan saklamak, porsiyonu baştan gerçekçi tutmak ve alışverişi tüketebileceğiniz kadar yapmaktır. Hijyen koşulları elbette gözetilir.",
    kaynak: "Müslim, Eşribe 136 · Tirmizî, Et'ime 11",
    sihhat: "Sahih",
  },
  {
    baslik: "Yemekten sonra hamd etmek",
    metin:
      "Öğünün sonunda yiyeceği veren için hamd edilmesi tavsiye edilmiştir.",
    bugunkuKarsiligi:
      "Öğünü bir kapanışla bitirmek, \"bitti\" sinyalini netleştirir. Kapanışı olmayan öğünler kolayca uzar; masada oturmaya devam etmek, tokluğa rağmen atıştırmayı sürdürmenin en yaygın sebeplerinden biri.",
    kaynak: "Tirmizî, Daavât 56 · Ebû Dâvûd, Et'ime 52",
    sihhat: "Hasen",
  },
  {
    baslik: "Sofrayı paylaşmak, komşuyu gözetmek",
    metin:
      "Çorba pişirildiğinde suyunun çoğaltılıp komşuya ikram edilmesi öğütlenmiştir.",
    bugunkuKarsiligi:
      "Bir öğünü paylaşmak, o öğünü hem daha ölçülü hem de daha anlamlı kılar. Fazla pişen yemeği paylaşmak, aynı zamanda gıda israfına karşı en eski ve en pratik çözüm.",
    kaynak: "Müslim, Birr 142 · Tirmizî, Et'ime 30",
    sihhat: "Sahih",
  },
  {
    baslik: "Talbîne — arpa çorbası",
    metin:
      "Un hâline getirilmiş arpadan yapılan, süt ve bal katılan sulu bir çorba olan talbînenin, hasta ve kederli kişiye tavsiye edildiği nakledilmiştir.",
    bugunkuKarsiligi:
      "Talbîne, tam tahıl arpanın sütle pişirilmiş sulu hâli. Arpa, beta-glukan açısından zengin bir tam tahıl; sulu ve ılık bir tahıl çorbası iştahsız dönemlerde tolere edilmesi kolay bir öğündür. Bu, çorbanın bir hastalığı tedavi ettiği anlamına gelmez — sadece iyi kurulmuş, sade bir tahıl öğünüdür.",
    kaynak: "Buhârî, Et'ime 24 · Müslim, Selâm 89",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "Çörek otu",
    metin:
      "Çörek otunun şifa taşıdığına dair rivayet, sofra ve mutfak âdâbı bahislerinde sıkça zikredilir.",
    bugunkuKarsiligi:
      "Çörek otu bir baharattır: ekmekte, peynirde, salatada kullanılır. Güncel bilgiyle söylenebilecek olan şudur — mutfakta kullanılan miktarlarda güvenli ve lezzet verici bir tohumdur. Hiçbir hastalığın tedavisi değildir, ilacın yerine geçmez ve yüksek doz takviye olarak kullanılması hekime danışmadan doğru değil. Bu sitede takviye satışı yoktur.",
    kaynak: "Buhârî, Tıb 7 · Müslim, Selâm 88",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "Sahura kalkmak",
    metin:
      "Sahur yemeğinde bereket bulunduğu, bir yudum su ile de olsa sahura kalkılması bildirilmiştir.",
    bugunkuKarsiligi:
      "Oruç tutulan günlerde sahuru atlamak, gün içindeki susuzluğu ve yorgunluğu belirgin biçimde artırır. Sahurun protein, posa ve sıvı içermesi, iftara kadar geçen süreyi daha rahat kılar. Ağır ve çok tuzlu sahur ise gün içinde susuzluk hissini artırır.",
    kaynak: "Buhârî, Savm 20 · Müslim, Sıyâm 45",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "İftara hurma veya su ile başlamak",
    metin:
      "Orucun hurma ile, bulunmazsa su ile açılması tavsiye edilmiştir.",
    bugunkuKarsiligi:
      "Uzun açlık sonrası doğrudan büyük bir öğüne geçmek, hem sindirimi zorlar hem de porsiyon kontrolünü imkânsız kılar. Küçük bir başlangıç ve ardından kısa bir ara, iftar sofrasında yenen toplam miktarı gerçekçi tutmanın en pratik yolu.",
    kaynak: "Ebû Dâvûd, Savm 21 · Tirmizî, Savm 10",
    sihhat: "Hasen",
  },
];
