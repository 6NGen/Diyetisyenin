import { UcteBirKabi } from "@/components/UcteBirKabi";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/content/site";

/** Hero BEYAZDIR. Sayfa beyazla açılır; koyu yeşile yalnızca aşağıda iner. */
export function Hero() {
  return (
    <section className="bg-white">
      <div className="konteyner grid items-center gap-[clamp(40px,6vw,72px)] pt-[clamp(48px,7vw,88px)] pb-[clamp(56px,8vw,110px)] lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
            {SITE.unvan} {SITE.ad} · {SITE.meslek}
          </p>

          <h1 className="mt-6 font-display text-h1">
            <span className="block font-light text-sea-900">Ölçü,</span>
            <span className="block font-light text-sea-900">her şeyin</span>
            <span className="block font-bold text-sea-700">başı.</span>
          </h1>

          <p className="mt-7 max-w-[54ch] text-lede text-muted">
            Beslenme, bir yasak listesi değil bir ölçü meselesidir. Önce
            ölçeriz, sonra hesaplarız, sonra sizin mutfağınıza sığan bir plan
            kurarız. Süre sözü vermem; ölçülebilir hedef koyar, birlikte
            izleriz.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/randevu" ton="birincil">
              Ücretsiz ön görüşme
            </ButtonLink>
            <ButtonLink href="/yontem" ton="ikincil">
              Yöntemi oku
            </ButtonLink>
          </div>

          <dl className="izgara-cizgi mt-11 grid-cols-2 sm:grid-cols-3">
            {[
              { ad: "Eğitim", deger: SITE.universite },
              { ad: "Görüşme", deger: "Yüz yüze ve online" },
              { ad: "Konum", deger: SITE.sehir },
            ].map((kunye) => (
              <div key={kunye.ad} className="bg-paper px-4 py-4">
                <dt className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                  {kunye.ad}
                </dt>
                <dd className="mt-1.5 text-small text-ink">{kunye.deger}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="w-full max-w-[460px] justify-self-center lg:justify-self-end">
          <UcteBirKabi />
        </div>
      </div>
    </section>
  );
}
