import { ChartHeader } from "../components/zoblocks/chart-header";
import { DEMO_PATIENT, DEMO_IDENTIFIERS } from "../data/chart-header-fixtures";

export function SpcuContextExample() {
  return (
    <section className="space-y-4">
      <ChartHeader
        patient={DEMO_PATIENT}
        identifiers={DEMO_IDENTIFIERS}
        surface="orders"
        safety={{}}
      />
    </section>
  );
}
