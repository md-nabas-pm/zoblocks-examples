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

export function OverflowScrollExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Overflow — Scroll</h2>
        <p className="text-sm text-gray-500">
          When tabs exceed the available width, the strip scrolls horizontally with fade masks and
          nudge buttons. Arrow keys move between tabs, and scrolling follows the selection.
        </p>
      </div>

      <div className="max-w-xl">
        <Tabs
          as="tabs"
          variant="underline"
          overflow="scroll"
          aria-label="Chart section"
          defaultValue="summary"
          items={chartSections}
        />
      </div>
    </section>
  );
}
