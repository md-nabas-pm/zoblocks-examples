import { Signature, type SignatureValue } from "@zoblocks/signature";
import { Example, NOW, RECORDER, RECORDED_AT, REVOKED_AT, patientSignature } from "./shared";

const value: SignatureValue = {
  outcome: "revoked",
  original: patientSignature,
  revokedBy: { name: "Josh Randall" },
  revokedAt: REVOKED_AT,
  reason: "Changed their mind after speaking with their daughter.",
  recordedAt: RECORDED_AT,
  recordedBy: RECORDER,
};

export default function ConsentWithdrawn() {
  return (
    <Example title="Consent withdrawn, the original kept">
      <Signature now={NOW} value={value} disabled />
    </Example>
  );
}
