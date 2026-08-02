# Diyetisyen web sitesi

Tek diyetisyen için tanıtım ve randevu sitesi. Birincil dönüşüm randevu formu,
ikincil dönüşüm WhatsApp tıklamasıdır.

| | |
|---|---|
| Yığın | Next.js 16 (App Router) · TypeScript strict · Tailwind v4 · Supabase |
| Dil | Yalnızca Türkçe (i18n yok) |
| Dağıtım | Vercel |

## Geliştirme

```bash
npm install
cp .env.example .env.local   # değerleri doldurun
npm run dev
```

| Komut | İş |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Üretim derlemesi |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

## Ortam değişkenleri

`.env.example` dosyasına bakınız. `SUPABASE_SERVICE_ROLE_KEY` **yalnızca sunucu
tarafında** kullanılır; başına asla `NEXT_PUBLIC_` eklenmez. Form gönderimi bir
Server Action içinden service role ile yapılır, tabloda RLS açıktır ve hiçbir
public policy tanımlı değildir.

## Veritabanı

`supabase/schema.sql` dosyasını Supabase SQL editöründe çalıştırın.

## İçerik nerede?

Bütün metin ve veri `src/content/` altındadır:

| Dosya | İçerik |
|---|---|
| `site.ts` | İsim, unvan, iletişim, çalışma saatleri — **tek gerçek kaynağı** |
| `paketler.ts` | Dört paket, karşılaştırma tablosu, ek hizmetler |
| `yontem.ts` | ADIME adımları, ölçüm/hesaplama blokları, kaynaklar |
| `sofra.ts` | 14 sofra âdâbı maddesi, kaynak künyeleri ve sıhhat notları |
| `sss.ts` | Sık sorulan sorular |
| `yazilar/*.mdx` | Blog yazıları |

Hiçbir bileşende iletişim bilgisi hard-code edilmez.

## İçerik kuralları

Bu site Türkiye'de sağlık hizmeti tanıtımı yapar. Aşağıdakiler hiçbir sayfada
bulunmaz:

- Öncesi/sonrası fotoğrafı, kilo kaybı görseli, vücut karşılaştırması
- Danışan yorumu, testimonial, yıldız puanı
- "Garanti", "kesin sonuç", "%100", "en iyi" gibi iddialar
- Sayısal vaat ("2 haftada 5 kilo")
- Ürün satışı, affiliate link, detoks/çay/hap tanıtımı
- Geri sayım sayacı, yapay aciliyet
- "Uzm. Dyt." unvanı — unvan yalnızca `SITE.unvan` sabitinden okunur
- Hastalık teşhisi veya tedavi önerisi

Randevu formu sağlık verisi toplamaz.

## Yayın öncesi kontrol listesi

- [ ] `src/content/site.ts` içindeki tüm `[köşeli parantez]` alanlar dolduruldu
- [ ] Unvan doğru: yüksek lisans yoksa `Dyt.`
- [ ] Fiyatlar katalogla birebir aynı
- [ ] `src/content/sofra.ts` künyeleri katalogla birebir karşılaştırıldı
- [ ] Yasal metinler (`/kvkk`, `/cerez-politikasi`, `/mesafeli-satis`,
      `/iptal-ve-iade`) hukukçu tarafından yazıldı — depoda yalnızca iskelet var
- [ ] Randevu formu gerçek bir gönderimle test edildi
- [ ] `public/katalog.pdf` yüklendi
- [ ] Favicon ve `apple-touch-icon` yerinde
