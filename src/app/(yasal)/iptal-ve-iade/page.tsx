import type { Metadata } from "next";
import { YasalSayfa, type YasalBolum } from "@/components/YasalSayfa";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "İptal ve İade Koşulları",
  description:
    "Danışmanlık paketlerinde iptal, randevu erteleme ve ücret iadesi koşulları: başvuru yöntemi, süreler ve iadenin hangi kalemler üzerinden hesaplandığı.",
  alternates: { canonical: "/iptal-ve-iade" },
  robots: { index: true, follow: false },
};

const BOLUMLER: readonly YasalBolum[] = [
  {
    baslik: "Kapsam",
    kapsam: "bu koşulların hangi hizmet ve paketler için geçerli olduğu.",
  },
  {
    baslik: "Randevu erteleme",
    kapsam:
      "randevunun kaç saat önce bildirilmesi hâlinde ücretsiz erteleneceği; erteleme talebinin hangi kanaldan iletileceği.",
  },
  {
    baslik: "Randevuya katılmama",
    kapsam:
      "bildirimsiz katılmama durumunda görüşmenin kullanılmış sayılıp sayılmayacağı.",
  },
  {
    baslik: "Paketin yarıda bırakılması",
    kapsam:
      "kullanılmamış görüşmelerin ücretinin nasıl hesaplanacağı ve iade edileceği; kullanılmış görüşmelerin liste fiyatı üzerinden mi paket fiyatı üzerinden mi düşüleceği.",
  },
  {
    baslik: "Cayma hakkı",
    kapsam:
      "Mesafeli Sözleşmeler Yönetmeliği kapsamındaki cayma süresi ve hizmetin ifasına başlanmış olması hâlindeki istisna.",
  },
  {
    baslik: "İade başvurusu",
    kapsam:
      "başvurunun hangi kanaldan yapılacağı, hangi bilgilerin isteneceği ve yanıt süresi.",
  },
  {
    baslik: "İade süresi ve yöntemi",
    kapsam:
      "iadenin kaç iş günü içinde, hangi hesaba ve hangi yöntemle yapılacağı.",
  },
  {
    baslik: "Danışman kaynaklı iptal",
    kapsam:
      "hastalık veya mücbir sebeple görüşmenin yapılamaması hâlinde uygulanacak telafi ve iade kuralı.",
  },
  {
    baslik: "Uyuşmazlık",
    kapsam: "Tüketici Hakem Heyeti ve Tüketici Mahkemesi başvuru yolları.",
  },
];

export default function IptalIadeSayfasi() {
  return (
    <YasalSayfa
      eyebrow="Yasal"
      baslik="İptal ve İade Koşulları"
      lede="Randevu erteleme, paketin yarıda bırakılması ve ücret iadesi bu sayfadaki kurallara göre işler."
      bolumler={BOLUMLER}
    />
  );
}
