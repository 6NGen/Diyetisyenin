import "server-only";

/**
 * IP başına 5 dakikada 3 istek. Bellek içi, basit bir sayaç.
 *
 * Sınır: sunucusuz ortamda her örnek (instance) kendi belleğini tutar, bu yüzden
 * bu sayaç kesin bir kota değil, kabaca bir fren görevi görür. Asıl bot koruması
 * honeypot alanı ve zod doğrulamasıdır. Trafik arttığında bu fonksiyonun
 * Upstash Redis gibi paylaşımlı bir sayaçla değiştirilmesi gerekir.
 */
const PENCERE_MS = 5 * 60 * 1000;
const SINIR = 3;

const sayac = new Map<string, number[]>();

export function sinirAsildiMi(anahtar: string): boolean {
  const simdi = Date.now();
  const gecmis = sayac.get(anahtar) ?? [];
  const guncel = gecmis.filter((an) => simdi - an < PENCERE_MS);

  // Süresi geçmiş anahtarları ara sıra temizle ki harita sınırsız büyümesin.
  if (sayac.size > 500) {
    for (const [k, v] of sayac) {
      if (v.every((an) => simdi - an >= PENCERE_MS)) sayac.delete(k);
    }
  }

  if (guncel.length >= SINIR) {
    sayac.set(anahtar, guncel);
    return true;
  }

  guncel.push(simdi);
  sayac.set(anahtar, guncel);
  return false;
}
