import { useState } from "react";
import { ChartHeader } from "../components/zoblocks/chart-header";
import { DEMO_PATIENT, DEMO_IDENTIFIERS, DEMO_SAFETY } from "../data/chart-header-fixtures";

export function PatientRoutineExample() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="space-y-4">
      <ChartHeader
        patient={DEMO_PATIENT}
        identifiers={DEMO_IDENTIFIERS}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        safety={DEMO_SAFETY}
      />
    </section>
  );
}
