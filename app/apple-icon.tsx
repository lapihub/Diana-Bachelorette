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
          background: "#FBF8F2",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 999,
            border: "3px solid #B08D57",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#8A6A3B",
            fontSize: 80,
            fontStyle: "italic",
          }}
        >
          D
        </div>
      </div>
    ),
    size,
  );
}
