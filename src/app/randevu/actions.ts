"use server";

import "server-only";
import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { sinirAsildiMi } from "@/lib/rateLimit";
import { supabaseSunucu } from "@/lib/supabase";
import {
  BASARI_MESAJI,
  randevuSemasi,
  type AlanAdi,
  type FormDurumu,
} from "@/lib/schema";

/** Ham IP saklanmaz; günlük tuz ile sha256 özeti tutulur. */
function ipOzeti(ip: string): string {
  const gun = new Date().toISOString().slice(0, 10);
  const tuz = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "yerel-tuz";
  return createHash("sha256").update(`${gun}:${tuz}:${ip}`).digest("hex");
}

async function istemciIp(): Promise<string> {
  const basliklar = await headers();
  const iletilen = basliklar.get("x-forwarded-for");
  const ilk = iletilen?.split(",")[0]?.trim();
  return ilk || basliklar.get("x-real-ip") || "bilinmiyor";
}

async function bildirimGonder(kayit: {
  adSoyad: string;
  telefon: string;
  eposta?: string;
  paket: string;
  not?: string;
}): Promise<void> {
  const anahtar = process.env.RESEND_API_KEY;
  const alici = process.env.BILDIRIM_EMAIL;
  if (!anahtar || !alici) return;

  const gonderen = process.env.BILDIRIM_GONDEREN ?? "onboarding@resend.dev";

  const satirlar = [
    `Ad soyad: ${kayit.adSoyad}`,
    `Telefon: ${kayit.telefon}`,
    `E-posta: ${kayit.eposta ?? "—"}`,
    `İlgilenilen paket: ${kayit.paket}`,
    `Not: ${kayit.not ?? "—"}`,
  ];

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${anahtar}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: gonderen,
        to: [alici],
        subject: `Yeni randevu talebi — ${kayit.adSoyad}`,
        text: satirlar.join("\n"),
      }),
    });
  } catch {
    // Bildirim gönderilemezse kayıt yine de veritabanında duruyor.
    // Kullanıcıya hata gösterilmez.
  }
}

export async function randevuGonder(
  _oncekiDurum: FormDurumu,
  formData: FormData,
): Promise<FormDurumu> {
  const ham = {
    adSoyad: String(formData.get("adSoyad") ?? ""),
    telefon: String(formData.get("telefon") ?? ""),
    eposta: String(formData.get("eposta") ?? ""),
    paket: String(formData.get("paket") ?? "emin-degilim"),
    not: String(formData.get("not") ?? ""),
    kvkkOnay: String(formData.get("kvkkOnay") ?? ""),
  };

  const degerler: Partial<Record<AlanAdi, string>> = {
    adSoyad: ham.adSoyad,
    telefon: ham.telefon,
    eposta: ham.eposta,
    paket: ham.paket,
    not: ham.not,
  };

  // 1) Honeypot: gerçek kullanıcı bu alanı görmez, bot doldurur.
  const tuzak = String(formData.get("website") ?? "");
  if (tuzak.trim() !== "") {
    // Bota başarı görüntüsü verilir, kayıt yazılmaz.
    return { durum: "basarili", mesaj: BASARI_MESAJI };
  }

  // 2) Doğrulama
  const sonuc = randevuSemasi.safeParse(ham);
  if (!sonuc.success) {
    const alanHatalari: Partial<Record<AlanAdi, string>> = {};
    for (const sorun of sonuc.error.issues) {
      const alan = sorun.path[0];
      if (typeof alan === "string" && !(alan in alanHatalari)) {
        alanHatalari[alan as AlanAdi] = sorun.message;
      }
    }
    return {
      durum: "hata",
      genelMesaj: "Formda düzeltilmesi gereken alanlar var.",
      alanHatalari,
      degerler,
    };
  }

  // 3) Hız sınırı
  const ip = await istemciIp();
  const ozet = ipOzeti(ip);
  if (sinirAsildiMi(ozet)) {
    return {
      durum: "hata",
      genelMesaj:
        "Kısa süre içinde çok fazla talep gönderildi. 5 dakika sonra tekrar deneyin ya da doğrudan telefonla ulaşın.",
      degerler,
    };
  }

  // 4) Kayıt
  const supabase = supabaseSunucu();
  if (!supabase) {
    return {
      durum: "hata",
      genelMesaj:
        "Form şu anda kayıt yapamıyor: sunucuda Supabase ayarları eksik. Lütfen telefon veya WhatsApp ile ulaşın.",
      degerler,
    };
  }

  const basliklar = await headers();
  const kaynak = basliklar.get("referer") ?? null;

  const { error } = await supabase.from("randevu_talepleri").insert({
    ad_soyad: sonuc.data.adSoyad,
    telefon: sonuc.data.telefon,
    eposta: sonuc.data.eposta ?? null,
    paket: sonuc.data.paket,
    not_metni: sonuc.data.not ?? null,
    kvkk_onay: true,
    kaynak,
    ip_hash: ozet,
  });

  if (error) {
    return {
      durum: "hata",
      genelMesaj: `Talep kaydedilemedi (${error.message}). Lütfen telefon veya WhatsApp ile ulaşın.`,
      degerler,
    };
  }

  // 5) Bildirim (opsiyonel) — başarısız olursa kullanıcıya yansıtılmaz.
  await bildirimGonder({
    adSoyad: sonuc.data.adSoyad,
    telefon: sonuc.data.telefon,
    ...(sonuc.data.eposta ? { eposta: sonuc.data.eposta } : {}),
    paket: sonuc.data.paket,
    ...(sonuc.data.not ? { not: sonuc.data.not } : {}),
  });

  return { durum: "basarili", mesaj: BASARI_MESAJI };
}
