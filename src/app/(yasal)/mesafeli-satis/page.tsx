import type { Metadata } from "next";
import { YasalSayfa, type YasalBolum } from "@/components/YasalSayfa";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi",
  description:
    "Uzaktan satın alınan beslenme danışmanlığı hizmetlerine ilişkin mesafeli satış sözleşmesi: taraflar, hizmetin konusu, ödeme, ifa ve cayma hakkı koşulları.",
  alternates: { canonical: "/mesafeli-satis" },
  robots: { index: true, follow: false },
};

const BOLUMLER: readonly YasalBolum[] = [
  {
    baslik: "Taraflar",
    kapsam:
      "satıcı/sağlayıcı ve alıcı bilgileri; sağlayıcının unvan, adres, telefon, e-posta ve varsa mersis/vergi bilgileri.",
  },
  {
    baslik: "Sözleşmenin konusu",
    kapsam:
      "sunulan hizmetin niteliği: beslenme ve diyet danışmanlığı; hizmetin tıbbi teşhis veya tedavi olmadığı.",
  },
  {
    baslik: "Hizmetin temel nitelikleri ve ücreti",
    kapsam:
      "paket adı, süresi, görüşme sayısı, KDV dahil toplam ücret ve varsa ek masraflar.",
  },
  {
    baslik: "Ödeme koşulları",
    kapsam:
      "ödeme yöntemi, ödeme zamanı, taksitlendirme koşulları ve fatura düzenleme usulü.",
  },
  {
    baslik: "İfa şekli ve süresi",
    kapsam:
      "görüşmelerin yüz yüze veya online olarak nasıl yapılacağı, randevu planlaması ve hizmetin başlangıç–bitiş tarihleri.",
  },
  {
    baslik: "Cayma hakkı",
    kapsam:
      "6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında cayma hakkının süresi, kullanım usulü ve cayma hakkının kullanılamayacağı hâller (hizmetin ifasına başlanmış olması dâhil).",
  },
  {
    baslik: "Randevu erteleme ve iptal",
    kapsam:
      "randevunun kaç saat önce bildirilmesi hâlinde ücretsiz erteleneceği ve geç bildirim/katılmama durumunda uygulanacak kural.",
  },
  {
    baslik: "Tarafların yükümlülükleri",
    kapsam:
      "danışanın doğru bilgi verme yükümlülüğü; danışmanın gizlilik ve mesleki etik yükümlülükleri.",
  },
  {
    baslik: "Kişisel verilerin korunması",
    kapsam: "KVKK Aydınlatma Metni'ne atıf ve açık rıza süreçleri.",
  },
  {
    baslik: "Uyuşmazlıkların çözümü",
    kapsam:
      "Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri'nin yetkisi; parasal sınırlara atıf.",
  },
  {
    baslik: "Yürürlük",
    kapsam: "sözleşmenin ne zaman kurulmuş sayılacağı ve yürürlük tarihi.",
  },
];

export default function MesafeliSatisSayfasi() {
  return (
    <YasalSayfa
      eyebrow="Yasal"
      baslik="Mesafeli Satış Sözleşmesi"
      lede="Uzaktan satın alınan danışmanlık paketlerine ilişkin sözleşme koşulları: hizmetin kapsamı, ödeme, ifa ve cayma hakkı."
      bolumler={BOLUMLER}
    />
  );
}
