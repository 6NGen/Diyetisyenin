/**
 * Sitenin tek gerçek kaynağı.
 * Hiçbir bileşende iletişim bilgisi hard-code edilmez; hepsi buradan okunur.
 *
 * YAYIN ÖNCESİ: aşağıdaki [köşeli parantez] içindeki alanların tamamı doldurulmalı.
 * Unvan kuralı: yüksek lisans (MSc) yoksa "Dyt." kalır, "Uzm. Dyt." YAZILMAZ.
 */
export const SITE = {
  unvan: "Dyt.",
  ad: "Esmanur Durna",
  meslek: "Beslenme ve Diyet Danışmanı",
  sehir: "[Şehir]",
  telefon: "+905050416334",
  whatsapp: "+905050416334",
  eposta: "[E-posta adresi]",
  // Paylaşım bağlantısındaki ?igsh=... izleme parametresi kaldırıldı;
  // kalıcı profil adresi bu.
  instagram: "https://www.instagram.com/dyt_esmaa_nd",
  adres: "[Adres]",
  calismaSaatleri: [
    { gun: "Pazartesi–Cuma", saat: "09:00–18:00" },
    { gun: "Cumartesi", saat: "10:00–14:00" },
    { gun: "Pazar", saat: "Kapalı" },
  ],
  diplomaTescilNo: "[Diploma tescil no]",
  universite: "[Üniversite] Beslenme ve Diyetetik",
  koordinat: { lat: 0, lng: 0 },
} as const;

/**
 * Henüz doldurulmamış alanları ayırt eder.
 * Köşeli parantezle başlayan değerler yer tutucudur; bu değerler ne ziyaretçiye
 * bağlantı olarak gösterilir ne de yapısal veriye (JSON-LD) yazılır — aksi hâlde
 * site çalışmayan bir mailto veya sahte bir adres yayımlamış olurdu.
 */
export function yerTutucuMu(deger: string): boolean {
  return deger.trim().startsWith("[");
}

/** Başlıklarda ve künyelerde kullanılan tam ad. */
export const TAM_AD = `${SITE.unvan} ${SITE.ad}`;

/** Her sayfanın altında görünen sabit ibare. */
export const YASAL_IBARE =
  "Bu site bilgilendirme amaçlıdır, tıbbi teşhis veya tedavi yerine geçmez.";

/** tel: ve wa.me bağlantıları için yalnızca rakam. */
function sadeceRakam(deger: string): string {
  return deger.replace(/[^\d]/g, "");
}

export const TELEFON_HREF = `tel:${SITE.telefon.replace(/\s/g, "")}`;
export const WHATSAPP_HREF = `https://wa.me/${sadeceRakam(SITE.whatsapp)}`;
export const EPOSTA_HREF = `mailto:${SITE.eposta}`;

/** Telefonun okunabilir biçimi: +90 555 000 00 00 */
export function telefonGoster(numara: string): string {
  const r = sadeceRakam(numara);
  if (r.length !== 12) return numara;
  return `+${r.slice(0, 2)} ${r.slice(2, 5)} ${r.slice(5, 8)} ${r.slice(8, 10)} ${r.slice(10, 12)}`;
}

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export type MenuOgesi = { ad: string; href: string };

export const ANA_MENU: readonly MenuOgesi[] = [
  { ad: "Hakkımda", href: "/hakkimda" },
  { ad: "Yöntem", href: "/yontem" },
  { ad: "Paketler", href: "/paketler" },
  { ad: "Sofra", href: "/sunnet-uzere-sofra" },
  { ad: "Yazılar", href: "/yazilar" },
  { ad: "S.S.S.", href: "/sss" },
  { ad: "İletişim", href: "/iletisim" },
] as const;

export const YASAL_MENU: readonly MenuOgesi[] = [
  { ad: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { ad: "Çerez Politikası", href: "/cerez-politikasi" },
  { ad: "Mesafeli Satış Sözleşmesi", href: "/mesafeli-satis" },
  { ad: "İptal ve İade", href: "/iptal-ve-iade" },
] as const;

export const PARA = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0,
});

export function fiyatYaz(tutar: number): string {
  return `${PARA.format(tutar)} ₺`;
}
