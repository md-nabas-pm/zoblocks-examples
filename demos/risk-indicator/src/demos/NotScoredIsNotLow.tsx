import { RiskIndicator, type RiskAssessment } from "@/components/zoblocks/risk-indicator";
import { NOT_A_DIAGNOSIS } from "./shared";

const now = "2026-08-12T10:00:00Z";
const assessment: RiskAssessment = {
  id: "readmit-30-unscored",
  outcome: "30-day readmission",
  band: "unknown",
  computedAt: "2026-08-12T04:12:00Z",
};

export default function NotScoredIsNotLow() {
  return (
    <section style={{ display: "grid", gap: 8 }}>
      <h2 style={{ margin: 0, fontSize: 16 }}>Not scored is not low</h2>
      <RiskIndicator assessment={assessment} now={now} notADiagnosis={NOT_A_DIAGNOSIS} />
    </section>
  );
}
