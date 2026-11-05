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

export function OverflowMenuExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Overflow — Priority-plus menu</h2>
        <p className="text-sm text-gray-500">
          Tabs that don&apos;t fit move into an overflow menu. The selected tab stays visible, even
          when the available width changes. Resize the window to see the behaviour.
        </p>
      </div>

      <div className="max-w-xl">
        <Tabs
          as="tabs"
          variant="underline"
          overflow="menu"
          aria-label="Chart section"
          defaultValue="summary"
          items={chartSections}
        />
      </div>
    </section>
  );
}
