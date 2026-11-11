import {
  RiskIndicator,
  type RiskAssessment,
  type RiskBand,
} from "@/components/zoblocks/risk-indicator";
import { NOT_A_DIAGNOSIS } from "./shared";

const now = "2026-08-12T10:00:00Z";
const computedAt = "2026-08-12T04:12:00Z";
const bands: RiskBand[] = ["unknown", "low", "moderate", "high", "imminent"];

export default function ScoreBands() {
  return (
    <section style={{ display: "grid", gap: 8 }}>
      <h2 style={{ margin: 0, fontSize: 16 }}>Score bands</h2>
      {bands.map((band) => {
        const assessment: RiskAssessment = {
          id: `readmit-30-${band}`,
          outcome: "30-day readmission",
          band,
          computedAt,
        };
        return (
          <RiskIndicator
            key={band}
            assessment={assessment}
            now={now}
            notADiagnosis={NOT_A_DIAGNOSIS}
          />
        );
      })}
    </section>
  );
}
