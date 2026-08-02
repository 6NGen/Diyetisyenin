# public/ dizini

Buraya yayın öncesi eklenmesi gereken dosyalar:

| Dosya | Nerede kullanılıyor | Durum |
|---|---|---|
| `katalog.pdf` | `/paketler` sayfasındaki "Katalogu indir" butonu | **eksik — eklenmeli** |

Favicon, `apple-touch-icon` ve Open Graph görseli koda gömülüdür; bu dizine
dosya eklemeye gerek yoktur:

- `src/app/icon.tsx` → favicon (32×32)
- `src/app/apple-icon.tsx` → apple-touch-icon (180×180)
- `src/app/opengraph-image.tsx` → OG görseli (1200×630)

`katalog.pdf` eklenmediği sürece `/paketler` sayfasındaki indirme butonu 404
verir. PDF yayımlanmayacaksa `src/app/paketler/page.tsx` içindeki
"Katalogu indir" bloğu kaldırılmalıdır.
