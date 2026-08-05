import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171512",
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        <div style={{ display: "flex", color: "#F3F0EA" }}>ts</div>
        <div style={{ display: "flex", color: "#E08A4B" }}>_</div>
      </div>
    ),
    { ...size },
  );
}
