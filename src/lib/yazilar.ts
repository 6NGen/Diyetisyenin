import "server-only";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type YaziKunyesi = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601: YYYY-MM-DD */
  date: string;
  tags: string[];
  /** Dakika cinsinden. Frontmatter'da yoksa kelime sayısından hesaplanır. */
  readingTime: number;
  cover?: string;
};

const YAZI_DIZINI = path.join(process.cwd(), "src", "content", "yazilar");

function dizgeDizisi(deger: unknown): string[] {
  if (Array.isArray(deger)) {
    return deger.filter((oge): oge is string => typeof oge === "string");
  }
  return [];
}

function okumaSuresi(govde: string, frontmatterDegeri: unknown): number {
  if (typeof frontmatterDegeri === "number" && frontmatterDegeri > 0) {
    return frontmatterDegeri;
  }
  const kelime = govde.trim().split(/\s+/).length;
  return Math.max(1, Math.round(kelime / 200));
}

function kunyeOku(dosya: string): YaziKunyesi | null {
  const slug = dosya.replace(/\.mdx$/, "");
  const ham = readFileSync(path.join(YAZI_DIZINI, dosya), "utf8");
  const { data, content } = matter(ham);

  const title = typeof data.title === "string" ? data.title : null;
  const description =
    typeof data.description === "string" ? data.description : null;
  const date = typeof data.date === "string" ? data.date : null;

  if (!title || !description || !date) {
    // Eksik künyeli yazı sessizce listeden düşer; derleme kırılmaz.
    return null;
  }

  const kunye: YaziKunyesi = {
    slug,
    title,
    description,
    date,
    tags: dizgeDizisi(data.tags),
    readingTime: okumaSuresi(content, data.readingTime),
  };

  if (typeof data.cover === "string") kunye.cover = data.cover;

  return kunye;
}

/** Tarihe göre yeniden eskiye sıralı yazı künyeleri. */
export function tumYazilar(): YaziKunyesi[] {
  const dosyalar = readdirSync(YAZI_DIZINI).filter((ad) => ad.endsWith(".mdx"));

  return dosyalar
    .map(kunyeOku)
    .filter((kunye): kunye is YaziKunyesi => kunye !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function yaziBul(slug: string): YaziKunyesi | undefined {
  return tumYazilar().find((yazi) => yazi.slug === slug);
}

const TARIH_BICIMI = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function tarihYaz(iso: string): string {
  const tarih = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(tarih.getTime())) return iso;
  return TARIH_BICIMI.format(tarih);
}
