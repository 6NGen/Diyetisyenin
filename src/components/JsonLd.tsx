/** JSON-LD blokları için tek çıkış noktası. */
export function JsonLd({ veri }: { veri: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Veri yalnızca derleme zamanında bilinen sabitlerden üretilir.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(veri) }}
    />
  );
}
