import { CASELOAD, DemoGrid, Example } from "./shared";

export default function EverythingWithNothingHidden() {
  return (
    <Example title="Everything, with nothing hidden">
      <DemoGrid
        rows={CASELOAD}
        coverage={{ shown: CASELOAD.length, total: CASELOAD.length, noun: "referrals" }}
      />
    </Example>
  );
}
