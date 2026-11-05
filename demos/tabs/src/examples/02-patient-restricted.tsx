import { Tabs } from "@zoblocks/tabs";

function Summary() {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-[#F8FAFC] p-4">
      <p className="text-sm">
        <strong>Summary</strong> — Problems, allergies, recent encounters.
      </p>
    </div>
  );
}

export function PatientRestrictedExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">A section that is restricted, not absent</h2>
        <p className="text-sm text-gray-500">
          A restricted section stays visible, with a reason explaining why it cannot be opened.
        </p>
      </div>

      <Tabs
        as="tabs"
        aria-label="Chart sections"
        defaultValue="summary"
        items={[
          {
            value: "summary",
            label: "Summary",
            children: <Summary />,
          },
          {
            value: "bh",
            label: "Behavioural health",
            disabled: true,
            disabledReason:
              "Restricted. Opening it records an access event and notifies the record owner.",
          },
        ]}
      />
    </section>
  );
}
