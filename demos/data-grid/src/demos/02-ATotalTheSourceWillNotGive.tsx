import { CASELOAD, DemoGrid, Example } from "./shared";

export default function ATotalTheSourceWillNotGive() {
  return (
    <Example title="A total the source will not give">
      <DemoGrid
        rows={CASELOAD}
        coverage={{ shown: CASELOAD.length, total: "unknown", noun: "clients" }}
      />
    </Example>
  );
}
