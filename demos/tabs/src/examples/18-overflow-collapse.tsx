import { Tabs } from "@zoblocks/tabs";

const chartSections = [
  { value: "summary", label: "Summary" },
  { value: "observations", label: "Observations" },
  { value: "medications", label: "Medications" },
  { value: "allergies", label: "Allergies" },
  { value: "problems", label: "Problems" },
  { value: "procedures", label: "Procedures" },
  { value: "immunisations", label: "Immunisations" },
  { value: "documents", label: "Documents" },
  { value: "encounters", label: "Encounters" },
  { value: "care-plans", label: "Care plans" },
  { value: "audit-log", label: "Audit log" },
];

export function OverflowCollapseExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Overflow — Collapse to a select</h2>
        <p className="text-sm text-gray-500">
          When the container becomes too narrow, the tab strip collapses into a native select. This
          responds to container width rather than viewport width.
        </p>
      </div>

      <div className="max-w-[320px]">
        <Tabs
          as="tabs"
          variant="underline"
          overflow="collapse"
          aria-label="Chart section"
          defaultValue="summary"
          items={chartSections}
        />
      </div>
    </section>
  );
}
