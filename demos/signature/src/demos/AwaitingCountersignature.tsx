import { Signature, type SignatureValue } from "@zoblocks/signature";
import { Example, NOW, RECORDER, RECORDED_AT, patientSignature } from "./shared";

const value: SignatureValue = {
  outcome: "pending",
  awaiting: "clinician",
  since: "2026-11-05T11:40:00.000Z",
  soFar: [patientSignature],
  recordedAt: RECORDED_AT,
  recordedBy: RECORDER,
};

export default function AwaitingCountersignature() {
  return (
    <Example title="Awaiting countersignature">
      <Signature now={NOW} value={value} disabled />
    </Example>
  );
}
