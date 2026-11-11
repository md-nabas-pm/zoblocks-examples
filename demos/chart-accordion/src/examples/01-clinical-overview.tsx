import { ChartAccordion } from "../components/zoblocks/chart-accordion";
import {
  ALLERGY_FIXTURES,
  CHART_CONTEXT,
  CHART_UPDATED_AT,
  LAB_RESULT_FIXTURES,
  MEDICATION_FIXTURES,
  VITAL_FIXTURES,
} from "../data/chart-accordion-fixtures";

export default function ClinicalOverviewExample() {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Clinical overview</h3>
        <p className="text-sm text-gray-600">
          A chart summary with clinical status, severity, counts and update times.
        </p>
      </div>

      <div className="p-4">
        <ChartAccordion
          headingLevel={3}
          toolbarLabel={CHART_CONTEXT.patientLabel}
          sections={[
            {
              key: "allergies",
              label: "Allergies",
              status: "Active",
              severity: "high",
              count: ALLERGY_FIXTURES.length,
              updatedAt: CHART_UPDATED_AT.recent,
              children: (
                <ul className="list-disc space-y-1 pl-5">
                  {ALLERGY_FIXTURES.map((allergy) => (
                    <li key={allergy.name}>
                      <strong>{allergy.name}</strong> — {allergy.reaction} ({allergy.severity})
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              key: "medications",
              label: "Medications",
              status: "Current",
              severity: "normal",
              count: MEDICATION_FIXTURES.length,
              updatedAt: CHART_UPDATED_AT.previous,
              children: (
                <ul className="list-disc space-y-1 pl-5">
                  {MEDICATION_FIXTURES.map((medication) => (
                    <li key={medication.name}>
                      <strong>{medication.name}</strong> — {medication.dose}, {medication.frequency}
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              key: "lab-results",
              label: "Lab results",
              status: "Review",
              severity: "low",
              count: LAB_RESULT_FIXTURES.length,
              updatedAt: CHART_UPDATED_AT.recent,
              children: (
                <ul className="list-disc space-y-1 pl-5">
                  {LAB_RESULT_FIXTURES.map((result) => (
                    <li key={result.name}>
                      <strong>{result.name}:</strong> {result.value} — {result.status}
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              key: "vitals",
              label: "Observations",
              status: "Recorded",
              severity: "normal",
              count: VITAL_FIXTURES.length,
              updatedAt: CHART_UPDATED_AT.older,
              children: (
                <ul className="list-disc space-y-1 pl-5">
                  {VITAL_FIXTURES.map((vital) => (
                    <li key={vital.name}>
                      <strong>{vital.name}:</strong> {vital.value}
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
