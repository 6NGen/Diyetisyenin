import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withMDX = createMDX({
  options: {
    // Turbopack eklenti adlarını dizge olarak ister; fonksiyon geçilemiyor.
    // remark-frontmatter, YAML bloğunu ayrıştırıp çıktıdan çıkarır — künye
    // bilgisi ayrıca gray-matter ile lib/yazilar.ts içinde okunur.
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
  },
});

export default withMDX(nextConfig);
