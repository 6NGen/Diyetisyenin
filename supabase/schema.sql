-- Randevu talepleri tablosu.
-- Supabase SQL editöründe bir kez çalıştırın.
--
-- Güvenlik modeli: RLS açıktır ve BİLEREK hiçbir policy tanımlanmamıştır.
-- Tabloya yalnızca service role erişebilir; service role anahtarı da
-- yalnızca sunucu tarafındaki Server Action içinde kullanılır.

create table if not exists public.randevu_talepleri (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  ad_soyad text not null,
  telefon text not null,
  eposta text,
  paket text,
  not_metni text,
  kvkk_onay boolean not null default false,
  kaynak text,               -- utm veya referrer
  ip_hash text,              -- ham IP saklanmaz, sha256 hash tutulur
  durum text not null default 'yeni'
    check (durum in ('yeni', 'arandi', 'randevu', 'kapandi'))
);

alter table public.randevu_talepleri enable row level security;
-- Bilerek hiçbir policy yok: yalnızca service role erişir.

create index if not exists randevu_talepleri_created_at_idx
  on public.randevu_talepleri (created_at desc);

create index if not exists randevu_talepleri_durum_idx
  on public.randevu_talepleri (durum);

comment on table public.randevu_talepleri is
  'Randevu formu gönderimleri. Sağlık verisi TOPLANMAZ; özel nitelikli kişisel veri bu tabloya yazılmaz.';
