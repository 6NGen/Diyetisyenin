import { ImageResponse } from "next/og";
import { SITE, TAM_AD } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${TAM_AD} — ${SITE.meslek}`;

/** Beyaz zemin + deniz yeşili başlık + üçte bir kabı. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FFFFFF",
          borderBottom: "16px solid #0B3733",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 64px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#16706A",
            }}
          >
            {`${SITE.unvan} ${SITE.ad} · ${SITE.sehir}`}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 36,
              fontSize: 92,
              lineHeight: 1,
              color: "#0B3733",
            }}
          >
            <span>Ölçü,</span>
            <span>her şeyin</span>
            <span style={{ color: "#16706A", fontWeight: 700 }}>başı.</span>
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 28,
              color: "#5F736F",
              maxWidth: 620,
            }}
          >
            {`${SITE.meslek} · Yüz yüze ve online`}
          </div>
        </div>

        {/* Üçte bir kabı */}
        <div
          style={{
            width: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#F0F7F6",
            borderLeft: "1px solid #DCE8E5",
          }}
        >
          <div
            style={{
              width: 220,
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              border: "2px solid #0B3733",
              borderTop: "0px solid transparent",
              background: "#FFFFFF",
            }}
          >
            <div style={{ height: 100, background: "#2F9187" }} />
            <div style={{ height: 100, background: "#C2A15A" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
