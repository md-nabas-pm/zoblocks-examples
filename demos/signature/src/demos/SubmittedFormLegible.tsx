import { Signature } from "@zoblocks/signature";
import { Example, NOW, patientSignature } from "./shared";

export default function SubmittedFormLegible() {
  return (
    <Example title="A submitted form stays legible">
      <Signature now={NOW} value={patientSignature} disabled />
    </Example>
  );
}
