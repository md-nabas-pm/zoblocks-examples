import { ChartAccordion } from "../components/zoblocks/chart-accordion";
import { CHART_UPDATED_AT } from "../data/chart-accordion-fixtures";

export default function ConsentRequiredExample() {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Consent required</h3>
        <p className="text-sm text-gray-600">
          A consent-gated section requests authorization before its content is disclosed.
        </p>
      </div>

      <div className="p-4">
        <ChartAccordion
          headingLevel={3}
          toolbarLabel="Okonkwo, A. · MRN 4471902"
          onDisclose={(event) => {
            console.info("Demo disclosure approved:", event.key);
            return true;
          }}
          sections={[
            {
              key: "general-notes",
              label: "General clinical notes",
              status: "Available",
              severity: "normal",
              count: 1,
              updatedAt: CHART_UPDATED_AT.recent,
              children: <p>Routine outpatient review documented.</p>,
            },
            {
              key: "protected-notes",
              label: "Protected treatment notes",
              access: {
                kind: "consent",
                policy: "42 CFR Part 2",
                state: "missing",
                notice: "Authorization is required before these notes can be viewed.",
              },
              children: (
                <p>
                  Demo-only protected treatment note content. No real patient information is
                  included.
                </p>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
