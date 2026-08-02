import type { Metadata } from "next";
import { YasalSayfa, type YasalBolum } from "@/components/YasalSayfa";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hangi verilerin hangi amaçla işlendiğine, saklama süresine ve ilgili kişi haklarına dair aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
  robots: { index: true, follow: false },
};

const BOLUMLER: readonly YasalBolum[] = [
  {
    baslik: "Veri sorumlusunun kimliği",
    kapsam:
      "veri sorumlusunun ad, unvan, adres, telefon ve e-posta bilgileri; varsa VERBİS kayıt bilgisi.",
  },
  {
    baslik: "İşlenen kişisel veriler",
    kapsam:
      "randevu formu üzerinden toplanan ad soyad, telefon, e-posta, ilgilenilen paket ve serbest not alanı ile teknik veriler (IP özeti, referrer). Form üzerinden özel nitelikli kişisel veri (sağlık verisi) toplanmadığı açıkça belirtilmelidir.",
  },
  {
    baslik: "Danışmanlık sürecinde işlenen sağlık verileri",
    kapsam:
      "görüşme sırasında alınan ölçüm, öykü ve tahlil bilgilerinin özel nitelikli kişisel veri olduğu; açık rıza ile işlendiği; hangi koşullarda saklandığı ve kimlerle paylaşılabileceği.",
  },
  {
    baslik: "İşleme amaçları",
    kapsam:
      "randevu talebine dönüş yapılması, danışmanlık hizmetinin sunulması, faturalandırma ve yasal yükümlülüklerin yerine getirilmesi.",
  },
  {
    baslik: "Hukuki sebepler",
    kapsam:
      "KVKK m.5 ve m.6 kapsamındaki hangi hukuki sebebe dayanıldığı; açık rıza gereken hâller.",
  },
  {
    baslik: "Aktarım",
    kapsam:
      "verilerin kimlere aktarıldığı; yurt dışında sunucu kullanan hizmet sağlayıcıları (barındırma, veritabanı, e-posta bildirim servisi) ve KVKK m.9 kapsamındaki aktarım şartları.",
  },
  {
    baslik: "Saklama süresi",
    kapsam:
      "her veri kategorisi için saklama süresi ve sürenin sonunda uygulanacak imha yöntemi.",
  },
  {
    baslik: "Toplama yöntemi",
    kapsam:
      "verilerin web sitesi formu, telefon, WhatsApp ve yüz yüze görüşme yoluyla toplandığı.",
  },
  {
    baslik: "İlgili kişinin hakları",
    kapsam:
      "KVKK m.11 kapsamındaki haklar ve bu hakların hangi kanaldan, hangi biçimde kullanılabileceği; başvuru usulü ve yanıt süresi.",
  },
  {
    baslik: "Veri güvenliği tedbirleri",
    kapsam:
      "alınan idari ve teknik tedbirler; erişim yetkilendirmesi ve şifreleme uygulamaları.",
  },
  {
    baslik: "Değişiklikler",
    kapsam: "metnin güncellenmesi hâlinde izlenecek yöntem ve yürürlük tarihi.",
  },
];

export default function KvkkSayfasi() {
  return (
    <YasalSayfa
      eyebrow="Yasal"
      baslik="KVKK Aydınlatma Metni"
      lede="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hangi kişisel verilerin hangi amaçla işlendiğini, ne kadar süreyle saklandığını ve haklarınızı bu sayfada bulacaksınız."
      bolumler={BOLUMLER}
      ekNot={
        <p>
          <strong>Not:</strong> Randevu formu bilerek sağlık verisi toplamaz.
          Hastalık, ilaç ve ölçüm bilgileri yalnızca danışmanlık görüşmesi
          sırasında, açık rızanızla ve gerektiği kadar kayda alınır.
        </p>
      }
    />
  );
}
