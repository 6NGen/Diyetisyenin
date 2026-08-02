import type { Metadata } from "next";
import { YasalSayfa, type YasalBolum } from "@/components/YasalSayfa";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Bu sitede hangi çerezlerin kullanıldığı, ne amaçla saklandığı, saklama süreleri ve çerez tercihlerinizi nasıl yönetebileceğinize dair bilgilendirme.",
  alternates: { canonical: "/cerez-politikasi" },
  robots: { index: true, follow: false },
};

const BOLUMLER: readonly YasalBolum[] = [
  {
    baslik: "Çerez nedir?",
    kapsam: "çerezin tanımı ve benzer teknolojiler (yerel depolama, piksel).",
  },
  {
    baslik: "Bu sitede kullanılan çerezler",
    kapsam:
      "kullanılan her çerezin adı, sağlayıcısı, amacı ve saklama süresiyle listelendiği tablo. Site şu anda analitik veya reklam çerezi kullanmıyorsa bu açıkça yazılmalıdır.",
  },
  {
    baslik: "Zorunlu çerezler",
    kapsam:
      "sitenin çalışması için gerekli olan ve açık rıza gerektirmeyen çerezler.",
  },
  {
    baslik: "Analitik ve performans çerezleri",
    kapsam:
      "ölçümleme aracı eklenirse hangi verilerin toplandığı ve rıza yönetiminin nasıl işlediği.",
  },
  {
    baslik: "Üçüncü taraf içerikler",
    kapsam:
      "gömülü harita, video veya sosyal medya içeriklerinin kendi çerezlerini yerleştirebileceği.",
  },
  {
    baslik: "Çerez tercihlerinin yönetimi",
    kapsam:
      "tarayıcı ayarlarından çerezlerin nasıl silineceği veya engelleneceği; varsa site içi tercih paneli.",
  },
  {
    baslik: "Politikadaki değişiklikler",
    kapsam: "güncelleme usulü ve yürürlük tarihi.",
  },
];

export default function CerezSayfasi() {
  return (
    <YasalSayfa
      eyebrow="Yasal"
      baslik="Çerez Politikası"
      lede="Bu sitede hangi çerezlerin kullanıldığını, ne işe yaradıklarını ve tercihlerinizi nasıl yönetebileceğinizi bu sayfada bulacaksınız."
      bolumler={BOLUMLER}
    />
  );
}
