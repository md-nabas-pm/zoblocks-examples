import { CASELOAD, DemoGrid, Example } from "./shared";

export default function ARefusalNotANineSecondPaint() {
  return (
    <Example title="A refusal, not a nine-second paint">
      <DemoGrid
        rows={CASELOAD}
        ceiling={4}
        coverage={{ shown: CASELOAD.length, total: 1438, noun: "patients" }}
      />
    </Example>
  );
}
