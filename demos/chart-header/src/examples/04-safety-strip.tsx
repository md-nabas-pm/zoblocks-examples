import { ChartHeader } from "../components/zoblocks/chart-header";
import { DEMO_PATIENT, DEMO_IDENTIFIERS } from "../data/chart-header-fixtures";
import "@zoblocks/identity/styles.css";

export function SafetyStripExample() {
  return (
    <section className="space-y-4">
      <div className="space-y-3">
        <div className="space-y-2">
          <ChartHeader patient={DEMO_PATIENT} identifiers={DEMO_IDENTIFIERS} safety={{}} />
        </div>
      </div>
    </section>
  );
}
