import { ChartAccordion } from "../components/zoblocks/chart-accordion";
import { CHART_UPDATED_AT } from "../data/chart-accordion-fixtures";

export default function BreakGlassAccessExample() {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Break-glass access</h3>
        <p className="text-sm text-gray-600">
          The viewer must select a reason before restricted clinical information is disclosed.
        </p>
      </div>

      <div className="p-4">
        <ChartAccordion
          headingLevel={3}
          toolbarLabel="Okonkwo, A. · MRN 4471902"
          onDisclose={(event) => {
            console.info("Demo break-glass disclosure:", {
              section: event.key,
              reason: event.reasonCode,
              at: event.at,
            });
            return true;
          }}
          sections={[
            {
              key: "emergency-notes",
              label: "Emergency treatment notes",
              access: {
                kind: "reason",
                reasons: [
                  { code: "emergency", label: "Emergency treatment" },
                  { code: "covering", label: "Covering clinician" },
                  { code: "coordination", label: "Care coordination" },
                ],
                notice: "Select a reason to request access to this restricted section.",
              },
              children: (
                <div className="space-y-2">
                  <p className="font-medium">Emergency assessment summary</p>
                  <p>Demo-only clinical content made available after a reason is selected.</p>
                </div>
              ),
            },
            {
              key: "routine-notes",
              label: "Routine clinical notes",
              status: "Available",
              severity: "normal",
              count: 1,
              updatedAt: CHART_UPDATED_AT.recent,
              children: <p>Routine outpatient review documented.</p>,
            },
          ]}
        />
      </div>
    </section>
  );
}
