"use client";

import { useMemo } from "react";
import { Signature, toFhirBundle, type SignatureValue } from "@zoblocks/signature";
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

const SUBJECT = { display: "Example patient", reference: "Patient/example" };

export function ProvenanceBundle() {
  const bundle = useMemo(
    () => toFhirBundle(SIGNED_EXAMPLE, { release: "R4", subject: SUBJECT }),
    [],
  );

  return (
    <div>
      <Signature
        id="provenance-signature"
        now="2026-11-04T09:00:00+05:30"
        meaning="consent"
        value={SIGNED_EXAMPLE}
        disabled
      />

      <details>
        <summary>View generated FHIR Bundle</summary>
        <pre>{JSON.stringify(bundle, null, 2)}</pre>
      </details>
    </div>
  );
}
