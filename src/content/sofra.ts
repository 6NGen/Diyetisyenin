/**
 * "Sünnet üzere sofra" bölümü — 14 madde.
 *
 * KAYNAK: public/katalog.pdf, s. 9–10 ("İsteğe bağlı bölüm · Sofra âdâbı").
 *
 * Rivayet muhtevaları, "bugünkü karşılığı" yorumları, kaynak künyeleri ve
 * sıhhat notları katalogdan BİREBİR aktarılmıştır. Künyeler kısaltılmaz,
 * râvî bilgileri düşürülmez, sıhhat notları "iyileştirilmez".
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

/** Katalog s. 9 — bölüm girişi. */
export const SOFRA_GIRIS =
  "Talep eden danışanlar için programa, Peygamber Efendimiz'in (s.a.v.) sofra âdâbından " +
  "beslenen bir çerçeve ekliyorum. Aşağıdakiler tıbbi bir reçete değil; ölçü, şükür ve " +
  "sadelik üzerine kurulu bir sofra kültürü. Yine de çoğunun bugünkü beslenme biliminde " +
  "karşılığı olduğunu görmek dikkat çekici.";

/** Katalog s. 9 — uyarı kutusu. */
export const SOFRA_UYARISI =
  "Bu bölüm isteğe bağlıdır ve hiçbir pakette zorunlu değildir. Rivayetler kaynaklarıyla " +
  "ve mümkün olduğunca sıhhat durumuyla birlikte verilmiştir; hadis ilmi bu kataloğun " +
  "uzmanlık alanı değildir, tafsilat için ehline başvurulmalıdır.";

/** Katalog s. 10 — sayfa sonundaki zayıf rivayet notu. */
export const SOFRA_ZAYIF_RIVAYET_NOTU =
  "“Biz acıkmadıkça yemeyen, yediğimizde de doymayan bir topluluğuz” sözü halk arasında " +
  "çok yaygındır ancak muteber hadis kaynaklarında sahih bir isnadla yer almaz. Bu tür " +
  "meşhur ama kaynağı zayıf sözleri, sahih rivayetlerden ayrı tutmayı tercih ediyorum.";

export const SOFRA_MADDELERI: readonly SofraMaddesi[] = [
  {
    baslik: "Üçte bir ölçüsü",
    metin:
      "Rivayette, insanoğlunun midesinden daha kötü bir kap doldurmadığı; kendisine yetecek birkaç lokmanın kâfi geldiği, mutlaka yiyecekse midesinin üçte birini yemeğe, üçte birini içeceğe, üçte birini nefese ayırması bildirilir.",
    bugunkuKarsiligi:
      "Porsiyon kontrolü ve doymadan sofradan kalkma. Tokluk sinyalinin beyne ulaşması yaklaşık 20 dakika sürer.",
    kaynak:
      "Tirmizî, Zühd 47 · İbn Mâce, Et'ime 50 · Ahmed b. Hanbel, Müsned, IV/132 (Mikdâm b. Ma'dîkerib'den)",
    sihhat: "Hasen–sahih",
  },
  {
    baslik: "Besmele, sağ el, önünden",
    metin:
      "Küçük yaşta bir çocuğa sofrada verilen tavsiye üç maddeydi: Allah'ın adını anmak, sağ elle yemek ve kendi önünden yemek.",
    bugunkuKarsiligi:
      "Yemeğe bilinçli başlamak. Öğüne bir duruş noktasıyla başlamak, otomatik ve dalgın yemeyi kesen en basit uygulamadır.",
    kaynak: "Buhârî, Et'ime 2 · Müslim, Eşribe 108 (Ömer b. Ebû Seleme'den)",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "Yemeği kötülememek",
    metin:
      "Rivayete göre Efendimiz hiçbir yemeği ayıplamadı; canı çekerse yer, çekmezse dokunmadan bırakırdı.",
    bugunkuKarsiligi:
      "Besinleri “yasak/serbest” diye ikiye ayırmamak. Yiyecekleri suçla etiketlemek, kısıtlama–tıkınma döngüsünü besleyen en yaygın hatalardan biridir.",
    kaynak: "Buhârî, Et'ime 21 · Müslim, Eşribe 187 (Ebû Hüreyre'den)",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "Suyu üç nefeste içmek",
    metin:
      "Suyun bir dikişte değil, üç nefeste içildiği; bunun daha kandırıcı ve rahat olduğu bildirilir.",
    bugunkuKarsiligi:
      "Sıvıyı güne yayarak almak. Bir seferde çok su içmek yerine düzenli aralıklarla içmek daha iyi tolere edilir.",
    kaynak: "Müslim, Eşribe 123 · Tirmizî, Eşribe 13 (Enes b. Mâlik'ten)",
    sihhat: "Sahih",
  },
  {
    baslik: "Sıcak yemeği üflememek",
    metin:
      "İçeceğe üflenmesi hoş görülmemiş, yemeğin soğuması beklenmiştir.",
    bugunkuKarsiligi:
      "Çok sıcak içecek ve yemek tüketimi Dünya Sağlık Örgütü'nün ilgili değerlendirmesinde (IARC, 65 °C üzeri) yemek borusu için risk faktörü olarak ele alınmıştır.",
    kaynak: "Tirmizî, Eşribe 15 · Ebû Dâvûd, Eşribe 20 · İbn Mâce, Et'ime 26",
    sihhat: "Hasen",
  },
  {
    baslik: "Birlikte yemek",
    metin:
      "Yemeğin toplu yenmesi, dağınık yenmemesi tavsiye edilmiş; bereketin cemaatle olduğu bildirilmiştir.",
    bugunkuKarsiligi:
      "Aile sofrası. Ortak sofrada yemek yiyen çocuklarda beslenme kalitesinin daha iyi olduğu gösterilmiştir; ayrıca ekran karşısında yemeyi engeller.",
    kaynak: "Ebû Dâvûd, Et'ime 14 · İbn Mâce, Et'ime 17",
    sihhat: "Hasen",
  },
  {
    baslik: "Zeytinyağı",
    metin:
      "Zeytinyağının yenmesi ve onunla yağlanılması tavsiye edilmiş, mübarek bir ağaçtan geldiği belirtilmiştir. Kur'ân'da da zeytin ağacına yemin edilir (Tîn 95/1) ve “mübarek” olarak anılır (Nûr 24/35).",
    bugunkuKarsiligi:
      "Akdeniz diyetinin temel yağı. Sızma zeytinyağı, tekli doymamış yağ ve polifenol içeriğiyle kardiyovasküler koruma açısından en çok çalışılmış yağdır.",
    kaynak: "Tirmizî, Et'ime 43 · İbn Mâce, Et'ime 34",
    sihhat:
      "Tirmizî “garîb” demiştir; şâhidleriyle birlikte hasen kabul edilmiştir",
  },
  {
    baslik: "Hurma",
    metin:
      "İçinde hurma bulunmayan evin halkının aç sayıldığı bildirilir. Orucun hurma ile açılması da yerleşik bir uygulamadır.",
    bugunkuKarsiligi:
      "Uzun açlık sonrası hızlı ve posayla birlikte gelen bir karbonhidrat kaynağı. Miktar önemlidir; Ramazan programında porsiyon belirlenir.",
    kaynak: "Müslim, Eşribe 152–153 (Hz. Âişe'den)",
    sihhat: "Sahih",
  },
  {
    baslik: "Bal",
    metin:
      "Kur'ân'da balın insanlar için şifa taşıdığı bildirilir (Nahl 16/68–69). Hadiste de şifanın sayıldığı üç şeyden biri olarak bal şerbeti geçer.",
    bugunkuKarsiligi:
      "Bal, rafine şekere göre daha iyi bir tercihtir ancak yine bir şekerdir. Diyabet ve insülin direnci programlarında miktarı sınırlandırılır. Bir yaş altı bebeklere botulizm riski nedeniyle kesinlikle verilmez.",
    kaynak: "Buhârî, Tıb 3 · Kur'ân-ı Kerîm, Nahl 16/69",
    sihhat: "Sahih",
  },
  {
    baslik: "Çörek otu",
    metin:
      "Kara habbede (çörek otu) ölüm dışında her derde şifa bulunduğu bildirilir.",
    bugunkuKarsiligi:
      "Mutfakta faydalı bir tohum. İlaç yerine geçmez, hiçbir tedavinin yerini almaz; kan sulandırıcı kullananlarda hekime danışılmalıdır.",
    kaynak: "Buhârî, Tıb 7 · Müslim, Selâm 88 (Ebû Hüreyre'den)",
    sihhat: "Sahih · müttefekun aleyh",
  },
  {
    baslik: "Talbîne",
    metin:
      "Arpa unundan yapılan sulu bir çorba olan talbînenin hastanın gönlünü rahatlattığı ve hüznün bir kısmını giderdiği bildirilmiştir.",
    bugunkuKarsiligi:
      "Arpa, çözünür lif (beta-glukan) bakımından zengindir; tokluk ve kan şekeri dengesi açısından değerli bir tam tahıldır.",
    kaynak: "Buhârî, Et'ime 24 · Müslim, Selâm 89 (Hz. Âişe'den)",
    sihhat: "Sahih",
  },
  {
    baslik: "Oruç düzeni",
    metin:
      "Pazartesi–perşembe oruçları, her ayın 13–14–15. günleri (eyyâm-ı bîd) ve gün aşırı tutulan Dâvûd orucu nafile oruçlar arasında sayılır.",
    bugunkuKarsiligi:
      "Aralıklı açlık üzerine yapılan çalışmalarla benzeşen bir örüntü. Ancak diyabet, gebelik, emzirme ve düzenli ilaç kullanımı gibi durumlarda mutlaka hekim ve diyetisyenle birlikte planlanmalıdır.",
    kaynak: "Tirmizî, Savm 44 · Buhârî, Savm 59–60 · Müslim, Sıyâm 189",
    sihhat: "Sahih",
  },
  {
    baslik: "İsraf etmemek",
    metin:
      "“Yiyin, için; israf etmeyin. Çünkü Allah israf edenleri sevmez.” (A'râf 7/31). Helâl ve tayyib olanın yenmesi de emredilmiştir (Bakara 2/168, Mâide 5/88).",
    bugunkuKarsiligi:
      "Porsiyon planlaması ve gıda israfını azaltmak. Doğru alışveriş listesi hem bütçeyi hem tabağı düzeltir.",
    kaynak: "Kur'ân-ı Kerîm, A'râf 7/31 · Bakara 2/168 · Mâide 5/88",
  },
  {
    baslik: "Şükür ve sağlık",
    metin:
      "Yemekten sonra hamd edilmesi tavsiye edilmiş; insanların çoğunun aldandığı iki nimetten birinin sağlık, diğerinin boş vakit olduğu bildirilmiştir.",
    bugunkuKarsiligi:
      "Sağlığın hastalanmadan önce korunması. Bu bir davranış meselesidir ve süreklilik ister.",
    kaynak: "Buhârî, Rikâk 1 (İbn Abbâs'tan) · Tirmizî, Daavât 56",
    sihhat: "Sahih",
  },
];
