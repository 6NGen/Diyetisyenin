import "server-only";
import { z } from "zod";
import { GECERLI_PAKETLER } from "@/lib/randevu-tipleri";

/**
 * Sunucu tarafı doğrulama şeması.
 *
 * `server-only` importu kasıtlı: bu modül bir istemci bileşeninden import
 * edilirse derleme hata verir ve zod istemci paketine sızmaz. İstemcinin
 * ihtiyacı olan tip ve sabitler `lib/randevu-tipleri.ts` içindedir.
 */

/**
 * Türkiye cep telefonu numarasını +90XXXXXXXXXX biçimine getirir.
 * Geçersizse null döner.
 */
export function telefonNormalize(ham: string): string | null {
  let rakam = ham.replace(/\D/g, "");

  if (rakam.startsWith("00")) rakam = rakam.slice(2);
  if (rakam.startsWith("90") && rakam.length === 12) rakam = rakam.slice(2);
  if (rakam.startsWith("0") && rakam.length === 11) rakam = rakam.slice(1);

  if (rakam.length !== 10 || !rakam.startsWith("5")) return null;

  return `+90${rakam}`;
}

/**
 * DİKKAT: Bu şema bilerek sağlık verisi içermez.
 * Hastalık, ilaç, tahlil veya ölçüm alanı EKLENMEYECEK.
 */
export const randevuSemasi = z.object({
  adSoyad: z
    .string()
    .trim()
    .min(2, "Ad soyad en az 2 karakter olmalı.")
    .max(80, "Ad soyad en fazla 80 karakter olabilir."),

  telefon: z
    .string()
    .trim()
    .min(1, "Telefon numarası gerekli.")
    .transform((deger, ctx) => {
      const normal = telefonNormalize(deger);
      if (!normal) {
        ctx.addIssue({
          code: "custom",
          message:
            "Telefon numarasını 0555 000 00 00 biçiminde girin (Türkiye cep numarası).",
        });
        return z.NEVER;
      }
      return normal;
    }),

  eposta: z
    .string()
    .trim()
    .max(120, "E-posta en fazla 120 karakter olabilir.")
    .refine(
      (deger) => deger === "" || z.email().safeParse(deger).success,
      "Geçerli bir e-posta adresi girin veya alanı boş bırakın.",
    )
    .transform((deger) => (deger === "" ? undefined : deger)),

  paket: z
    .string()
    .trim()
    .refine(
      (deger) => GECERLI_PAKETLER.includes(deger),
      "Listedeki paketlerden birini seçin.",
    ),

  not: z
    .string()
    .trim()
    .max(500, "Not en fazla 500 karakter olabilir.")
    .transform((deger) => (deger === "" ? undefined : deger)),

  kvkkOnay: z
    .string()
    .refine(
      (deger) => deger === "on" || deger === "true",
      "Devam edebilmem için aydınlatma metnini onaylamanız gerekiyor.",
    ),
});

export type RandevuGirdisi = z.infer<typeof randevuSemasi>;
