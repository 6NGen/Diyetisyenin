import { PAKETLER } from "@/content/paketler";

/**
 * Randevu formunun İSTEMCİ tarafında ihtiyaç duyduğu tipler ve sabitler.
 *
 * Bu modül bilerek zod'a bağlı değildir: `lib/schema.ts` istemci paketine
 * girerse doğrulama kitaplığı da beraberinde gider. Doğrulama şeması
 * yalnızca Server Action tarafından import edilir.
 */

export const PAKET_SECENEKLERI = [
  { deger: "emin-degilim", etiket: "Emin değilim" },
  ...PAKETLER.map((paket) => ({
    deger: paket.slug,
    etiket: `${paket.ad} — ${paket.kod}`,
  })),
] as const;

export const GECERLI_PAKETLER: readonly string[] = PAKET_SECENEKLERI.map(
  (secenek) => secenek.deger,
);

export type AlanAdi =
  | "adSoyad"
  | "telefon"
  | "eposta"
  | "paket"
  | "not"
  | "kvkkOnay";

export type FormDurumu =
  | { durum: "bos" }
  | {
      durum: "hata";
      genelMesaj?: string;
      alanHatalari?: Partial<Record<AlanAdi, string>>;
      /** Kullanıcının yazdıklarını kaybetmemek için geri gönderilir. */
      degerler?: Partial<Record<AlanAdi, string>>;
    }
  | { durum: "basarili"; mesaj: string };

export const BASARI_MESAJI = "Talebiniz ulaştı. 1 iş günü içinde arayacağım.";
