import { ImageResponse } from "next/og";

export const alt = "Gajendhiran Mohan — Forward Deployed Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e8",
          color: "#161513",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2, color: "#6f6b62" }}>
          <span>§01 IDENTITY</span>
          <span>CHENNAI · IST</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, fontWeight: 700, letterSpacing: -6, lineHeight: 0.92 }}>Gajendhiran</div>
          <div style={{ display: "flex", alignItems: "flex-end", fontSize: 132, fontWeight: 700, letterSpacing: -6, lineHeight: 0.92 }}>
            Mohan
            <div style={{ width: 22, height: 22, background: "#c8401a", marginLeft: 10, marginBottom: 22 }} />
          </div>
        </div>
        <div style={{ display: "flex", borderTop: "2px solid #161513", paddingTop: 22, fontSize: 30, justifyContent: "space-between" }}>
          <span style={{ fontWeight: 600 }}>Forward Deployed Engineer</span>
          <span style={{ color: "#4a4740" }}>AI-native products · production systems</span>
        </div>
      </div>
    ),
    size,
  );
}
