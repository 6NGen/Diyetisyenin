"use client";

import type { ReactNode } from "react";

/** Araçlarda tekrar eden form ve sonuç parçaları. */

const GIRDI_SINIFI =
  "w-full border border-line bg-white px-4 py-3 text-ink transition-colors placeholder:text-muted/70 focus:border-sea-500";

export function SayiAlani({
  id,
  etiket,
  birim,
  deger,
  onChange,
  yardim,
  min,
  max,
}: {
  id: string;
  etiket: string;
  birim: string;
  deger: string;
  onChange: (yeni: string) => void;
  yardim?: string;
  min?: number;
  max?: number;
}) {
  const yardimId = yardim ? `${id}-yardim` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-label tracking-[0.18em] text-sea-900 uppercase"
      >
        {etiket} <span className="text-muted normal-case">({birim})</span>
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        value={deger}
        min={min}
        max={max}
        step="any"
        autoComplete="off"
        onChange={(olay) => onChange(olay.target.value)}
        aria-describedby={yardimId}
        className={`mt-2.5 ${GIRDI_SINIFI}`}
      />
      {yardim ? (
        <p id={yardimId} className="mt-2 text-small text-muted">
          {yardim}
        </p>
      ) : null}
    </div>
  );
}

export function SecimAlani<T extends string>({
  id,
  etiket,
  deger,
  secenekler,
  onChange,
  yardim,
}: {
  id: string;
  etiket: string;
  deger: T;
  secenekler: readonly { deger: T; etiket: string }[];
  onChange: (yeni: T) => void;
  yardim?: string;
}) {
  const yardimId = yardim ? `${id}-yardim` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-label tracking-[0.18em] text-sea-900 uppercase"
      >
        {etiket}
      </label>
      <select
        id={id}
        value={deger}
        onChange={(olay) => onChange(olay.target.value as T)}
        aria-describedby={yardimId}
        className={`mt-2.5 ${GIRDI_SINIFI}`}
      >
        {secenekler.map((secenek) => (
          <option key={secenek.deger} value={secenek.deger}>
            {secenek.etiket}
          </option>
        ))}
      </select>
      {yardim ? (
        <p id={yardimId} className="mt-2 text-small text-muted">
          {yardim}
        </p>
      ) : null}
    </div>
  );
}

/** Hesap tamamlanınca beliren sonuç bloğu. Ekran okuyucuya duyurulur. */
export function SonucKutusu({
  children,
  bos,
}: {
  children: ReactNode;
  bos?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="border border-line bg-sea-50 px-[clamp(20px,3vw,32px)] py-[clamp(22px,3vw,32px)]"
    >
      {children ?? <p className="text-small text-muted">{bos}</p>}
    </div>
  );
}

export function BuyukSayi({
  deger,
  birim,
  etiket,
}: {
  deger: string;
  birim?: string;
  etiket: string;
}) {
  return (
    <div>
      <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
        {etiket}
      </p>
      <p className="mt-2 flex flex-wrap items-baseline gap-2">
        <span className="font-display text-[clamp(34px,5vw,46px)] leading-none font-medium whitespace-nowrap text-sea-900">
          {deger}
        </span>
        {birim ? (
          <span className="font-mono text-label tracking-[0.18em] text-muted uppercase">
            {birim}
          </span>
        ) : null}
      </p>
    </div>
  );
}

export function BeklemeMetni({ children }: { children: ReactNode }) {
  return <p className="text-small text-muted">{children}</p>;
}
