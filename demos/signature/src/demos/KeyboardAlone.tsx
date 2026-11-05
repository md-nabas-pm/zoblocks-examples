import { Signature } from "@zoblocks/signature";
import { ATTESTATION, Example, NOW, RECORDER, SUBJECT } from "./shared";

export default function KeyboardAlone() {
  return (
    <Example title="Signed with the keyboard alone">
      <Signature
        now={NOW}
        meaning="consent"
        attestation={ATTESTATION}
        subject={SUBJECT}
        recordedBy={RECORDER}
        methods={["type"]}
      />
    </Example>
  );
}
