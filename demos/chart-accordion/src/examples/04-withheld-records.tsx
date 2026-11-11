import { ChartAccordion } from "../components/zoblocks/chart-accordion";
import { CHART_UPDATED_AT } from "../data/chart-accordion-fixtures";

export default function WithheldRecordsExample() {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Withheld records</h3>
        <p className="text-sm text-gray-600">
          Restricted sections disclose why content is unavailable without rendering that content.
        </p>
      </div>

      <div className="p-4">
        <ChartAccordion
          headingLevel={3}
          toolbarLabel="Demo patient · Chart 0042"
          sections={[
            {
              key: "allergies",
              label: "Allergies",
              status: "Reviewed",
              severity: "normal",
              count: 2,
              updatedAt: CHART_UPDATED_AT.recent,
              children: <p>Allergy information is available to the current viewer.</p>,
            },
            {
              key: "restricted-notes",
              label: "Restricted clinical notes",
              access: {
                kind: "withheld",
                reason: "Access is restricted to the treating team.",
              },
            },
            {
              key: "external-records",
              label: "External treatment records",
              access: {
                kind: "withheld",
                reason: "Required authorization has not been provided.",
              },
            },
          ]}
        />
      </div>
    </section>
  );
}
