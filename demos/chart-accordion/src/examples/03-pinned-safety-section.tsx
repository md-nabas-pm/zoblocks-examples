import { ChartAccordion } from "../components/zoblocks/chart-accordion";
import {
  ALLERGY_FIXTURES,
  CHART_UPDATED_AT,
  MEDICATION_FIXTURES,
} from "../data/chart-accordion-fixtures";

export default function PinnedSafetySectionExample() {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Pinned safety section</h3>
        <p className="text-sm text-gray-600">
          Critical safety information stays visible while other sections remain collapsible.
        </p>
      </div>

      <div className="p-4">
        <ChartAccordion
          headingLevel={3}
          toolbarLabel="Okonkwo, A. · MRN 4471902"
          sections={[
            {
              key: "safety",
              label: "Critical safety information",
              status: "Always visible",
              severity: "critical",
              count: ALLERGY_FIXTURES.length,
              updatedAt: CHART_UPDATED_AT.recent,
              pinned: true,
              children: (
                <div className="space-y-3">
                  <p className="font-medium">Known severe allergy</p>
                  <ul className="list-disc space-y-1 pl-5">
                    {ALLERGY_FIXTURES.map((allergy) => (
                      <li key={allergy.name}>
                        <strong>{allergy.name}</strong> — {allergy.reaction}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600">
                    Review allergy details before medication decisions.
                  </p>
                </div>
              ),
            },
            {
              key: "medications",
              label: "Current medications",
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
          ]}
        />
      </div>
    </section>
  );
}
