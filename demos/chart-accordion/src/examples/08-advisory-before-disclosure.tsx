import { ChartAccordion } from "../components/zoblocks/chart-accordion";
import { CHART_UPDATED_AT } from "../data/chart-accordion-fixtures";

export default function AdvisoryBeforeDisclosureExample() {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Advisory before disclosure</h3>
        <p className="text-sm text-gray-600">
          An advisory notice asks the viewer to acknowledge context before opening a section.
        </p>
      </div>

      <div className="p-4">
        <ChartAccordion
          headingLevel={3}
          toolbarLabel="Okonkwo, A. · MRN 4471902"
          onDisclose={(event) => {
            console.info("Demo advisory acknowledged:", event.key);
            return true;
          }}
          sections={[
            {
              key: "routine-results",
              label: "Routine results",
              status: "Available",
              severity: "normal",
              count: 2,
              updatedAt: CHART_UPDATED_AT.recent,
              children: <p>Routine results are available to the current viewer.</p>,
            },
            {
              key: "sensitive-history",
              label: "Sensitive clinical history",
              access: {
                kind: "advisory",
                notice:
                  "This section contains sensitive clinical context. Review only when relevant to the current care task.",
              },
              children: (
                <div className="space-y-2">
                  <p className="font-medium">Sensitive history summary</p>
                  <p>Fictional demo content shown after the advisory is acknowledged.</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
