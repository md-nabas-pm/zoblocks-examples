import { useState } from "react";
import { ChartHeader } from "../components/zoblocks/chart-header";
import {
  DEMO_PATIENT,
  DEMO_IDENTIFIERS,
  THREE_OPEN_ENCOUNTERS,
} from "../data/chart-header-fixtures";
import "@zoblocks/identity/styles.css";

export function EncounterRoutineExample() {
  const [selectedEncounterId] = useState<string | undefined>();

  return (
    <section className="space-y-4">
      <ChartHeader
        patient={DEMO_PATIENT}
        identifiers={DEMO_IDENTIFIERS}
        encounters={THREE_OPEN_ENCOUNTERS}
        selectedEncounterId={selectedEncounterId}
        safety={{}}
      />
    </section>
  );
}
