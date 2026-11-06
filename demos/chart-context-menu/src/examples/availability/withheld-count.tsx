import { useState } from "react";
import {
  ChartContextMenu,
  type ChartMenuAction,
  type MenuSubject,
} from "@/components/zoblocks/chart-context-menu";

const ORDER: MenuSubject = {
  resource: "MedicationRequest",
  id: "med-4471",
  label: "Lisinopril 10 mg",
  detail: "Oral · daily · started 4 Mar 2026",
};

const MEDICATION_ACTIONS: ChartMenuAction[] = [
  {
    id: "open",
    label: "Open order",
    tier: "routine",
    shortcut: "↵",
  },
  {
    id: "copy",
    label: "Copy as text",
    tier: "routine",
    shortcut: "⌘C",
  },
  {
    id: "history",
    label: "Administration history",
    tier: "routine",
  },
  {
    id: "mar",
    label: "Add a note to the MAR",
    tier: "documented",
  },
  {
    id: "renew",
    label: "Renew prescription",
    tier: "clinical",
  },
  {
    id: "discontinue",
    label: "Discontinue medication",
    tier: "clinical",
  },
];

export default function WithheldCountExample() {
  const [event, setEvent] = useState("Right-click the medication row to inspect its menu.");

  return (
    <div className="w-full space-y-3">
      <ChartContextMenu
        subject={ORDER}
        actions={MEDICATION_ACTIONS}
        policy={{
          role: "a registered nurse",
          permitted: ["open", "copy", "history", "mar"],
          breakGlass: true,
        }}
        onRun={(action) => {
          setEvent(`onRun("${action.id}") — ${action.label}`);
        }}
      >
        {(trigger) => (
          <div
            {...trigger}
            role={undefined}
            className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--zb-text)]">{ORDER.label}</p>

              <p className="text-xs text-[var(--zb-text-subtle)]">{ORDER.detail}</p>
            </div>
          </div>
        )}
      </ChartContextMenu>

      <div className="min-h-16 p-3" aria-live="polite">
        <p className="text-xs text-[var(--zb-text-subtle)]">{event}</p>
      </div>

      <p className="text-xs text-[var(--zb-text-muted)]">
        Right-click the row, or focus it and press Shift+F10.
      </p>
    </div>
  );
}
