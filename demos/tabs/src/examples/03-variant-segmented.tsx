import { Tabs } from "@zoblocks/tabs";

export function SegmentedVariantExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Segmented</h2>
        <p className="text-sm text-gray-500">
          The control the whole system started from. The thumb is one transformed element, so it
          moves position and width together and never repaints the track. Click either half, or
          focus it and press the left or right arrow key.
        </p>
      </div>

      <Tabs
        as="tabs"
        variant="segmented"
        fill="equal"
        aria-label="Document scope"
        defaultValue="personal"
        items={[
          {
            value: "personal",
            label: "Personal",
            children: (
              <div className="rounded-xl border border-dashed border-gray-300 bg-[#F8FAFC] p-4">
                <p className="text-sm">
                  <strong>Personal</strong> — 14 documents only you can see.
                </p>
              </div>
            ),
          },
          {
            value: "shared",
            label: "Shared",
            children: (
              <div className="rounded-xl border border-dashed border-gray-300 bg-[#F8FAFC] p-4">
                <p className="text-sm">
                  <strong>Shared</strong> — 6 documents shared with your care team.
                </p>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
}
