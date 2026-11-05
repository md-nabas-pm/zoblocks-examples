import { Tabs } from "@zoblocks/tabs";

function StepPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-[#F8FAFC] p-4">
      <p className="text-sm">{children}</p>
    </div>
  );
}

function Identity() {
  return (
    <StepPanel>
      <strong>Identity</strong> — Patient identity details have been verified.
    </StepPanel>
  );
}

function Insurance() {
  return (
    <StepPanel>
      <strong>Insurance</strong> — Insurance information has been added.
    </StepPanel>
  );
}

function Consent() {
  return (
    <StepPanel>
      <strong>Consent</strong> — Review and complete the required consent information.
    </StepPanel>
  );
}

export function StepperVariantExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Stepper</h2>
        <p className="text-sm text-gray-500">
          Completed steps remain accessible, while forward progress is earned. Review stays locked
          and explains what must be completed first.
        </p>
      </div>

      <Tabs
        as="steps"
        variant="stepper"
        aria-label="Patient intake"
        defaultValue="consent"
        items={[
          {
            value: "identity",
            label: "Identity",
            state: "done",
            children: <Identity />,
          },
          {
            value: "insurance",
            label: "Insurance",
            state: "done",
            children: <Insurance />,
          },
          {
            value: "consent",
            label: "Consent",
            state: "current",
            children: <Consent />,
          },
          {
            value: "review",
            label: "Review",
            state: "locked",
            disabled: true,
            disabledReason: "Complete the consent step first",
          },
        ]}
      />
    </section>
  );
}
