# public/ dizini

| Dosya | Nerede kullanılıyor | Durum |
|---|---|---|
| `katalog.pdf` | `/paketler` sayfasındaki "Katalogu indir" butonu | ✅ eklendi (13 sayfa) |
| `logo-amblem.png` | Header'daki logo (yazısız lotus amblemi) | ✅ kullanımda |
| `logo.png` | Tam kilit: amblem + "DİYETİSYEN" + alt başlık | ⏸ şu an kullanılmıyor, arşiv |

## Logo hakkında

`logo-amblem.png`, orijinal logodan yazı kısmı çıkarılarak kırpılmıştır —
header'da danışanın adı zaten Fraunces ile yazıldığı için logonun kendi
"DİYETİSYEN" yazısı tekrar olurdu.

Favicon ve `apple-touch-icon` bilerek logodan üretilmemiştir: lotus 32×32'ye
indirildiğinde okunamayacak kadar ayrıntılı kalıyor. Bu ikonlar
`src/app/icon.tsx` ve `src/app/apple-icon.tsx` içinde üçte bir kabı
motifinden üretiliyor.

Favicon, `apple-touch-icon` ve Open Graph görseli koda gömülüdür; bu dizine
dosya eklemeye gerek yoktur:

- `src/app/icon.tsx` → favicon (32×32)
- `src/app/apple-icon.tsx` → apple-touch-icon (180×180)
- `src/app/opengraph-image.tsx` → OG görseli (1200×630)

## Katalog güncellenirse

`katalog.pdf` sitedeki içeriğin kaynağıdır. Yeni bir sürüm koyduğunuzda
`src/content/paketler.ts` ve `src/content/sofra.ts` dosyalarının katalogla
tutarlı kaldığını kontrol edin — ziyaretçi aynı sayfadan hem sayfayı okuyup
hem PDF'i indirdiği için iki kaynağın çelişmemesi gerekir.
