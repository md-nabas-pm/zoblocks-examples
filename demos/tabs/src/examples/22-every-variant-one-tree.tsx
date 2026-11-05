import { Tabs } from "@zoblocks/tabs";

const VARIANTS = [
  "segmented",
  "underline",
  "pill",
  "enclosed",
  "rail",
  "ghost",
  "stepper",
  "command",
  "card",
  "stat",
  "unstyled",
] as const;

export function EveryVariantOneTreeExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Every variant, one tree</h2>
        <p className="text-sm text-gray-500">
          The same items across all eleven visual variants. The styling changes, but the
          accessibility mode and keyboard model remain consistent.
        </p>
      </div>

      <div className="space-y-6">
        {VARIANTS.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="text-sm font-semibold capitalize text-gray-700">{variant}</h3>

            <Tabs
              as="tabs"
              variant={variant}
              aria-label={`${variant} example`}
              defaultValue="a"
              items={[
                { value: "a", label: "Personal" },
                { value: "b", label: "Shared" },
                { value: "c", label: "Archived" },
              ]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
