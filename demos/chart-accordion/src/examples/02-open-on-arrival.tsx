import { ChartAccordion } from "../components/zoblocks/chart-accordion";
import {
  ALLERGY_FIXTURES,
  CHART_UPDATED_AT,
  MEDICATION_FIXTURES,
} from "../data/chart-accordion-fixtures";

export default function OpenOnArrivalExample() {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Open on arrival</h3>
        <p className="text-sm text-gray-600">
          Allergies and medications are expanded initially; other sections remain collapsed.
        </p>
      </div>

      <div className="p-4">
        <ChartAccordion
          headingLevel={3}
          defaultOpenKeys={["allergies", "medications"]}
          toolbarLabel="Okonkwo, A. · MRN 4471902"
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
                      <strong>{allergy.name}</strong> — {allergy.reaction}
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
              key: "history",
              label: "Clinical history",
              status: "Reviewed",
              severity: "normal",
              count: 1,
              updatedAt: CHART_UPDATED_AT.older,
              children: <p>Previous outpatient review documented.</p>,
            },
          ]}
        />
      </div>
    </section>
  );
}
