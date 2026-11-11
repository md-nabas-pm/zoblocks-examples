import { CASELOAD, CASELOAD_COVERAGE, DemoGrid, Example } from "./shared";

export default function CoverageIsArithmetic() {
  return (
    <Example title="Coverage is arithmetic, not a footer note">
      <DemoGrid rows={CASELOAD} coverage={CASELOAD_COVERAGE} />
    </Example>
  );
}
