"use client";

import { Form } from "antd";
import { Signature, type SignatureValue } from "@zoblocks/signature";
import "@zoblocks/signature/styles.css";

const NOW = "2026-11-04T09:00:00+05:30";

const ORIGINAL_SIGNATURE = {
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

const REVOKED_EXAMPLE = {
  outcome: "revoked",
  original: ORIGINAL_SIGNATURE,
  revokedBy: { name: "Alex Patient" },
  revokedAt: NOW,
  reason: "Consent withdrawn by the patient.",
  recordedAt: NOW,
} satisfies SignatureValue;

export function Withdrawn() {
  return (
    <Form layout="vertical">
      <Form.Item label="Patient signature">
        <Signature
          id="withdrawn-signature"
          now={NOW}
          meaning="consent"
          value={REVOKED_EXAMPLE}
          disabled
        />
      </Form.Item>
    </Form>
  );
}
