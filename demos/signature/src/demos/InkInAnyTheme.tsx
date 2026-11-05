"use client";

import { SignatureInk, type SignatureValue } from "@zoblocks/signature";
import "@zoblocks/signature/styles.css";

const NOW = "2026-11-04T09:00:00+05:30";

const SIGNED_EXAMPLE = {
  outcome: "signed",
  method: "type",
  ink: {
    strokes: [],
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80"><text x="8" y="55" font-size="36" font-family="cursive">Alex Patient</text></svg>',
    render: {
      viewBox: "0 0 240 80",
      paths: [],
      text: {
        value: "Alex Patient",
        x: 8,
        y: 55,
        fontSize: 36,
        fontFamily: "cursive",
        italic: true,
      },
    },
    bounds: { x: 8, y: 15, width: 220, height: 50 },
  },
  signer: { name: "Alex Patient" },
  capacity: "self",
  meaning: "consent",
  recordedAt: NOW,
  attestation: "I have read the information and agree to proceed.",
  provenance: { method: "type" },
} satisfies SignatureValue;

export function InkInAnyTheme() {
  if (SIGNED_EXAMPLE.outcome !== "signed") return null;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <div style={{ background: "#fff", color: "#111827", padding: 16 }}>
        <SignatureInk
          ink={SIGNED_EXAMPLE.ink}
          label="Example signature on a light surface"
          height={56}
        />
      </div>

      <div style={{ background: "#0f172a", color: "#f1f5f9", padding: 16 }}>
        <SignatureInk
          ink={SIGNED_EXAMPLE.ink}
          label="Example signature on a dark surface"
          height={56}
        />
      </div>
    </div>
  );
}
