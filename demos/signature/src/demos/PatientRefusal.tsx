import { useState } from "react";
import { Signature, type SignatureValue } from "@zoblocks/signature";
import { ATTESTATION, Example, NOW, RECORDER, SUBJECT, outcomeLabel } from "./shared";

export default function PatientRefusal() {
  const [value, setValue] = useState<SignatureValue>();
  return (
    <Example title="The patient who refused to sign">
      <Signature
        now={NOW}
        meaning="consent"
        attestation={ATTESTATION}
        subject={SUBJECT}
        recordedBy={RECORDER}
        outcomes={["declined", "unable", "verbal", "on-paper"]}
        onChange={setValue}
      />
      {value && <p role="status">Recorded outcome: {outcomeLabel(value)}</p>}
    </Example>
  );
}
