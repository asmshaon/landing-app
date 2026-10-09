import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { FULL_NAME, HEADLINE, ROLE } from "./seo";

// Link-preview card for LinkedIn, X, Slack and search results, in the site's monochrome look.
export const alt = `${FULL_NAME}, ${ROLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const portrait = await readFile(join(process.cwd(), "public/images/og-portrait.png"), "base64");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px 0 80px",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#737373" }}>
            {FULL_NAME}
          </div>
          <div style={{ marginTop: 28, fontSize: 60, lineHeight: 1.08, color: "#111111", letterSpacing: -1 }}>
            {HEADLINE}
          </div>
          <div style={{ marginTop: 32, fontSize: 26, color: "#525252" }}>
            Payments · Bookings · POS · SaaS · 16+ years
          </div>
          <div style={{ marginTop: 40, fontSize: 24, color: "#111111" }}>asmshaon.tech</div>
        </div>
        <img
          src={`data:image/png;base64,${portrait}`}
          width={479}
          height={630}
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    size,
  );
}
