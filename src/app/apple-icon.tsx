import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: 96,
            height: 128,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            border: "6px solid #0B3733",
            borderTop: "0px solid transparent",
          }}
        >
          <div style={{ height: 42, background: "#2F9187" }} />
          <div style={{ height: 42, background: "#C2A15A" }} />
        </div>
      </div>
    ),
    size,
  );
}
