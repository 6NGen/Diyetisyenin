"use client";

import Link from "next/link";
import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { randevuGonder } from "@/app/randevu/actions";
import { PAKET_SECENEKLERI, type FormDurumu } from "@/lib/randevu-tipleri";
import { TELEFON_HREF, SITE, telefonGoster } from "@/content/site";

const BASLANGIC: FormDurumu = { durum: "bos" };

function Gonder() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center border border-sea-700 bg-sea-700 px-6 py-4 font-mono text-label tracking-[0.18em] text-white uppercase transition-colors hover:border-sea-900 hover:bg-sea-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Gönderiliyor…" : "Ön görüşme talebi gönder"}
    </button>
  );
}

function Hata({ id, mesaj }: { id: string; mesaj?: string }) {
  if (!mesaj) return null;
  return (
    <p id={id} className="mt-2 text-small text-sea-900">
      <span aria-hidden="true" className="mr-1.5 text-sea-700">
        ↳
      </span>
      {mesaj}
    </p>
  );
}

// outline-none KULLANILMAZ: globals.css'teki :focus-visible halkası
// (2px sea-500) alanlarda da görünür kalmalı. Kenarlık rengi ona eşlik eder.
const GIRDI_SINIFI =
  "w-full border border-line bg-white px-4 py-3 text-ink transition-colors placeholder:text-muted/70 focus:border-sea-500";

/**
 * Randevu formu. Sağlık verisi TOPLAMAZ:
 * hastalık, ilaç veya ölçüm alanı eklenmeyecek.
 */
export function RandevuFormu() {
  const [durum, gonder] = useActionState(randevuGonder, BASLANGIC);
  const on = useId();

  if (durum.durum === "basarili") {
    return (
      <div
        role="status"
        className="border border-sea-500 bg-sea-50 px-[clamp(20px,3vw,36px)] py-[clamp(28px,3.5vw,44px)]"
      >
        <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
          Gönderildi
        </p>
        <p className="mt-5 font-display text-[clamp(22px,2.8vw,30px)] leading-tight font-medium text-sea-900">
          {durum.mesaj}
        </p>
        <p className="mt-5 max-w-[46ch] text-small text-muted">
          Aramamı bekleyemeyecek bir sorunuz varsa{" "}
          <a
            href={TELEFON_HREF}
            className="text-sea-700 underline underline-offset-4"
          >
            {telefonGoster(SITE.telefon)}
          </a>{" "}
          numarasından doğrudan ulaşabilirsiniz.
        </p>
      </div>
    );
  }

  const hatalar = durum.durum === "hata" ? (durum.alanHatalari ?? {}) : {};
  const degerler = durum.durum === "hata" ? (durum.degerler ?? {}) : {};

  return (
    <form
      action={gonder}
      noValidate
      className="border border-line bg-white px-[clamp(20px,3vw,36px)] py-[clamp(28px,3.5vw,44px)]"
    >
      <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
        Ön görüşme talebi
      </p>
      <p className="mt-4 max-w-[44ch] text-small text-muted">
        Sağlık bilgisi istenmez. Hastalık, ilaç ve ölçüm bilgileriniz yalnızca
        görüşme sırasında, sizin onayınızla konuşulur.
      </p>

      {durum.durum === "hata" && durum.genelMesaj ? (
        <p
          role="alert"
          className="mt-6 border border-sea-500 bg-sea-50 px-4 py-3 text-small text-sea-900"
        >
          {durum.genelMesaj}
        </p>
      ) : null}

      <div className="mt-8 space-y-6">
        <div>
          <label
            htmlFor={`${on}-ad`}
            className="block font-mono text-label tracking-[0.18em] text-sea-900 uppercase"
          >
            Ad soyad <span className="text-sea-700">*</span>
          </label>
          <input
            id={`${on}-ad`}
            name="adSoyad"
            type="text"
            required
            maxLength={80}
            autoComplete="name"
            defaultValue={degerler.adSoyad ?? ""}
            aria-invalid={hatalar.adSoyad ? true : undefined}
            aria-describedby={hatalar.adSoyad ? `${on}-ad-hata` : undefined}
            className={`mt-2.5 ${GIRDI_SINIFI}`}
          />
          <Hata id={`${on}-ad-hata`} mesaj={hatalar.adSoyad} />
        </div>

        <div>
          <label
            htmlFor={`${on}-tel`}
            className="block font-mono text-label tracking-[0.18em] text-sea-900 uppercase"
          >
            Telefon <span className="text-sea-700">*</span>
          </label>
          <input
            id={`${on}-tel`}
            name="telefon"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="0555 000 00 00"
            defaultValue={degerler.telefon ?? ""}
            aria-invalid={hatalar.telefon ? true : undefined}
            aria-describedby={
              hatalar.telefon ? `${on}-tel-hata` : `${on}-tel-yardim`
            }
            className={`mt-2.5 ${GIRDI_SINIFI}`}
          />
          {hatalar.telefon ? (
            <Hata id={`${on}-tel-hata`} mesaj={hatalar.telefon} />
          ) : (
            <p id={`${on}-tel-yardim`} className="mt-2 text-small text-muted">
              Sizi bu numaradan arayacağım.
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${on}-eposta`}
            className="block font-mono text-label tracking-[0.18em] text-sea-900 uppercase"
          >
            E-posta{" "}
            <span className="text-muted normal-case">(opsiyonel)</span>
          </label>
          <input
            id={`${on}-eposta`}
            name="eposta"
            type="email"
            maxLength={120}
            autoComplete="email"
            defaultValue={degerler.eposta ?? ""}
            aria-invalid={hatalar.eposta ? true : undefined}
            aria-describedby={
              hatalar.eposta ? `${on}-eposta-hata` : undefined
            }
            className={`mt-2.5 ${GIRDI_SINIFI}`}
          />
          <Hata id={`${on}-eposta-hata`} mesaj={hatalar.eposta} />
        </div>

        <div>
          <label
            htmlFor={`${on}-paket`}
            className="block font-mono text-label tracking-[0.18em] text-sea-900 uppercase"
          >
            İlgilendiğiniz paket
          </label>
          <select
            id={`${on}-paket`}
            name="paket"
            defaultValue={degerler.paket ?? "emin-degilim"}
            aria-invalid={hatalar.paket ? true : undefined}
            aria-describedby={hatalar.paket ? `${on}-paket-hata` : undefined}
            className={`mt-2.5 ${GIRDI_SINIFI}`}
          >
            {PAKET_SECENEKLERI.map((secenek) => (
              <option key={secenek.deger} value={secenek.deger}>
                {secenek.etiket}
              </option>
            ))}
          </select>
          <Hata id={`${on}-paket-hata`} mesaj={hatalar.paket} />
        </div>

        <div>
          <label
            htmlFor={`${on}-not`}
            className="block font-mono text-label tracking-[0.18em] text-sea-900 uppercase"
          >
            Kısa not <span className="text-muted normal-case">(opsiyonel)</span>
          </label>
          <textarea
            id={`${on}-not`}
            name="not"
            rows={4}
            maxLength={500}
            defaultValue={degerler.not ?? ""}
            placeholder="Nasıl bir destek aradığınızı bir iki cümleyle yazabilirsiniz."
            aria-invalid={hatalar.not ? true : undefined}
            aria-describedby={hatalar.not ? `${on}-not-hata` : `${on}-not-yardim`}
            className={`mt-2.5 resize-y ${GIRDI_SINIFI}`}
          />
          {hatalar.not ? (
            <Hata id={`${on}-not-hata`} mesaj={hatalar.not} />
          ) : (
            <p id={`${on}-not-yardim`} className="mt-2 text-small text-muted">
              En fazla 500 karakter. Sağlık bilgisi yazmayın.
            </p>
          )}
        </div>

        {/* Honeypot — ekran okuyucudan ve klavyeden gizli, botlar doldurur. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={`${on}-website`}>Web siteniz</label>
          <input
            id={`${on}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="border-t border-line pt-6">
          <div className="flex items-start gap-3">
            <input
              id={`${on}-kvkk`}
              name="kvkkOnay"
              type="checkbox"
              required
              aria-invalid={hatalar.kvkkOnay ? true : undefined}
              aria-describedby={
                hatalar.kvkkOnay ? `${on}-kvkk-hata` : undefined
              }
              className="mt-1 h-4 w-4 shrink-0 accent-[#16706a]"
            />
            <label htmlFor={`${on}-kvkk`} className="text-small text-ink">
              <Link
                href="/kvkk"
                className="text-sea-700 underline underline-offset-4"
              >
                KVKK Aydınlatma Metni
              </Link>
              &apos;ni okudum; ad, telefon ve varsa e-posta bilgimin bu talep
              için işlenmesini onaylıyorum. <span className="text-sea-700">*</span>
            </label>
          </div>
          <Hata id={`${on}-kvkk-hata`} mesaj={hatalar.kvkkOnay} />
        </div>

        <Gonder />

        <p className="text-small text-muted">
          Formu göndermek sizi hiçbir şeye bağlamaz. Ön görüşme ücretsizdir.
        </p>
      </div>
    </form>
  );
}
