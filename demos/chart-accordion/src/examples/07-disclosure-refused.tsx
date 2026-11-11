import { ChartAccordion } from "../components/zoblocks/chart-accordion";

export default function DisclosureRefusedExample() {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-base font-semibold">Disclosure refused</h3>
        <p className="text-sm text-gray-600">
          The application can deny a disclosure request even when the section has a valid access
          gate.
        </p>
      </div>

      <div className="p-4">
        <ChartAccordion
          headingLevel={3}
          toolbarLabel="Okonkwo, A. · MRN 4471902"
          onDisclose={(event) => {
            console.info("Demo disclosure denied:", event.key);
            return false;
          }}
          sections={[
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
                  This content must remain undisclosed because the application refuses the request.
                </p>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
