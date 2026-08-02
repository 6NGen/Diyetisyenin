import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: üçte bir kabının küçültülmüş hâli. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 26,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            border: "2px solid #0B3733",
            borderTop: "0px solid transparent",
          }}
        >
          <div style={{ height: 8, background: "#2F9187" }} />
          <div style={{ height: 8, background: "#C2A15A" }} />
        </div>
      </div>
    ),
    size,
  );
}
