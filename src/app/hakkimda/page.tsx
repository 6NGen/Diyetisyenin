import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SayfaBasligi } from "@/components/SayfaBasligi";
import { ButtonLink } from "@/components/ui/Button";
import { Baslik, Lede } from "@/components/ui/Baslik";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SITE, TAM_AD } from "@/content/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: `${TAM_AD} — ${SITE.universite} mezunu beslenme ve diyet danışmanı. Eğitim, diploma tescil bilgisi ve çalışma yaklaşımı hakkında.`,
  alternates: { canonical: "/hakkimda" },
};

const YAKLASIM = [
  {
    baslik: "Yasak listesi vermem",
    metin:
      "Uzun yasak listeleri kısa vadede işe yarar, uzun vadede uyumu bitirir. Bunun yerine porsiyon, öğün bileşimi ve zamanlama üzerinde çalışırım. Bir besinin planda yeri olup olmadığı, o besinin kendisiyle değil öğün içindeki payıyla belirlenir.",
  },
  {
    baslik: "Sizin mutfağınıza göre kurarım",
    metin:
      "Bir plan, uygulanabildiği kadar iyidir. Ne pişirmeyi bildiğiniz, ne kadar vaktiniz olduğu, evde kaç kişi yediğiniz ve bütçeniz plana doğrudan girer. Ulaşamadığınız besinlerin listesini yapmanın kimseye faydası yok.",
  },
  {
    baslik: "Rakamları gösteririm",
    metin:
      "Hesaplanan enerji miktarını, makro dağılımını ve ölçüm sonuçlarınızı sizinle paylaşırım. Yöntem sayfasında kullandığım bütün denklemler ve kaynaklar açık yazılı; isterseniz kendi rakamlarınızla kontrol edebilirsiniz.",
  },
  {
    baslik: "Sınırımı bilirim",
    metin:
      "Teşhis koymak, ilaç önermek ve tedavi kararı vermek hekimin işidir. Ölçümlerde veya tahlillerde dikkatimi çeken bir bulgu olduğunda sizi hekime yönlendiririm. Beslenme planı, hekiminizin kararlarıyla uyumlu kurulur.",
  },
];

export default function HakkimdaSayfasi() {
  return (
    <>
      <SayfaBasligi
        eyebrow="Hakkımda"
        baslik={`${SITE.unvan} ${SITE.ad}`}
        lede={`${SITE.meslek}. ${SITE.sehir} ve online olarak çalışıyorum. Beslenmeyi bir yasak listesi değil, bir ölçü meselesi olarak ele alıyorum.`}
      />

      <Section zemin="beyaz">
        <div className="grid gap-[clamp(32px,5vw,64px)] lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Eyebrow>Nasıl buraya geldim</Eyebrow>
            <Baslik seviye={2} className="mt-4">
              Ölçmeden konuşmamayı seçtim.
            </Baslik>

            <div className="metin mt-7">
              <p>
                Beslenme ve diyetetik eğitimimi {SITE.universite} bölümünde
                tamamladım. Mezun olduğumdan bu yana yüz yüze ve online
                danışmanlık veriyorum.
              </p>
              <p>
                Bu işte en çok karşılaştığım şey, insanların beslenme hakkında
                çok şey duymuş ama kendi vücutları hakkında hiçbir şey ölçmemiş
                olması. İnternette dolaşan her öneri birinin işine yaramış
                olabilir; sizin işinize yarayıp yaramayacağını söyleyen tek şey
                sizin verinizdir. Bu yüzden her süreç ölçümle başlar ve her
                hesabın kaynağı size gösterilir.
              </p>
              <p>
                İkinci sık karşılaştığım şey, hızlı sonuç vaadiyle kurulmuş
                programların bıraktığı yorgunluk. Bir plan, uygulanabildiği
                sürece işe yarar; iki hafta sonra bırakılan bir plan hiç
                başlanmamış plandan daha yıpratıcıdır. Bu yüzden süre ve sonuç
                sözü vermiyorum. Ölçülebilir hedef koyuyor, ilerlemeyi birlikte
                izliyoruz.
              </p>
              <p>
                Sitede öncesi–sonrası fotoğrafı, danışan yorumu veya yıldız
                puanı bulamazsınız. Bunlar hem mesleğin etik çerçevesine
                uymuyor hem de size benim nasıl çalıştığım hakkında hiçbir şey
                söylemiyor. Onun yerine yöntemimi olabildiğince ayrıntılı yazdım
                — kararınızı ona bakarak verin.
              </p>
            </div>
          </Reveal>

          <Reveal gecikme={80}>
            <div className="border border-line bg-sea-50 p-[clamp(20px,3vw,32px)]">
              <p className="font-mono text-label tracking-[0.18em] text-sea-700 uppercase">
                Künye
              </p>
              <dl className="mt-6 space-y-5">
                {[
                  { ad: "Ad", deger: `${SITE.unvan} ${SITE.ad}` },
                  { ad: "Meslek", deger: SITE.meslek },
                  { ad: "Eğitim", deger: SITE.universite },
                  {
                    ad: "Diploma tescil no",
                    deger: SITE.diplomaTescilNo,
                  },
                  { ad: "Çalışma biçimi", deger: "Yüz yüze ve online" },
                  { ad: "Konum", deger: SITE.sehir },
                ].map((satir) => (
                  <div key={satir.ad} className="border-t border-line pt-4">
                    <dt className="font-mono text-label tracking-[0.18em] text-muted uppercase">
                      {satir.ad}
                    </dt>
                    <dd className="mt-1.5 text-small text-ink">
                      {satir.deger}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section zemin="tint">
        <Reveal>
          <Eyebrow>Yaklaşım</Eyebrow>
          <Baslik seviye={2} className="mt-4">
            Dört ilke.
          </Baslik>
          <Lede className="mt-5">
            Bunlar pazarlama cümleleri değil, her görüşmede uyguladığım
            kurallar. Uymadığım bir yer görürseniz bana söyleyin.
          </Lede>
        </Reveal>

        <Reveal className="mt-11">
          <ol className="izgara-cizgi grid-cols-1 md:grid-cols-2">
            {YAKLASIM.map((ilke, sira) => (
              <li
                key={ilke.baslik}
                className="bg-paper px-[clamp(20px,2.6vw,32px)] py-[clamp(24px,3vw,34px)]"
              >
                <p className="font-mono text-label tracking-[0.18em] text-sea-500 uppercase">
                  {String(sira + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-h3 font-medium text-sea-900">
                  {ilke.baslik}
                </h3>
                <p className="mt-3 max-w-[58ch] text-small text-muted">
                  {ilke.metin}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-11">
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/randevu" ton="birincil">
              Ücretsiz ön görüşme
            </ButtonLink>
            <ButtonLink href="/yontem" ton="ikincil">
              Yöntemi oku
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
