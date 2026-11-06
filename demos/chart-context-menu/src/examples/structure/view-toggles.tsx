import { useState } from "react";
import { ChartContextMenu, type ChartMenuAction } from "@/components/zoblocks/chart-context-menu";

type Density = "comfortable" | "compact";

export default function ViewTogglesExample() {
  const [pinned, setPinned] = useState(false);
  const [abnormal, setAbnormal] = useState(false);
  const [density, setDensity] = useState<Density>("comfortable");
  const [event, setEvent] = useState("Right-click the Vitals column to change its view settings.");

  const actions: ChartMenuAction[] = [
    {
      id: "pin",
      label: "Pin this column",
      tier: "routine",
      kind: "checkbox",
      checked: pinned,
    },
    {
      id: "abn",
      label: "Abnormal values only",
      tier: "routine",
      kind: "checkbox",
      checked: abnormal,
    },
    {
      id: "comfortable",
      label: "Comfortable",
      tier: "routine",
      kind: "radio",
      radioGroup: "density",
      group: "Density",
      checked: density === "comfortable",
    },
    {
      id: "compact",
      label: "Compact",
      tier: "routine",
      kind: "radio",
      radioGroup: "density",
      group: "Density",
      checked: density === "compact",
    },
  ];

  const handleToggle = (action: ChartMenuAction, checked: boolean) => {
    switch (action.id) {
      case "pin":
        setPinned(checked);
        break;

      case "abn":
        setAbnormal(checked);
        break;

      case "comfortable":
        setDensity("comfortable");
        break;

      case "compact":
        setDensity("compact");
        break;
    }

    setEvent(`onToggle("${action.id}", ${checked})`);
  };

  return (
    <div className="w-full space-y-3">
      <ChartContextMenu
        subject={{
          resource: "Encounter",
          id: "col-vitals",
          label: "Vitals column",
        }}
        actions={actions}
        onToggle={handleToggle}
      >
        {(trigger) => (
          <div
            {...trigger}
            role={undefined}
            className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--zb-text)]">Vitals</p>
              <p className="text-xs text-[var(--zb-text-subtle)]">
                Blood pressure · Heart rate · Temperature · SpO₂
              </p>
            </div>

            <span className="text-xs text-[var(--zb-text-muted)]">Right-click to customize</span>
          </div>
        )}
      </ChartContextMenu>

      <div className="min-h-16 space-y-2 p-3" aria-live="polite">
        <p className="text-xs text-[var(--zb-text-subtle)]">{event}</p>
      </div>

      <p className="text-xs text-[var(--zb-text-muted)]">
        Right-click the column. The toggles change view state, not the record.
      </p>
    </div>
  );
}
