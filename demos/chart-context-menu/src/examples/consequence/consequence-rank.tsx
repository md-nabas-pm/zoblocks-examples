import { useState } from "react";
import {
  ChartContextMenu,
  type ChartMenuAction,
  type MenuSubject,
} from "@/components/zoblocks/chart-context-menu";

const NOW = "2026-08-31T09:24:00-04:00";

const ORDER: MenuSubject = {
  resource: "MedicationRequest",
  id: "med-4471",
  label: "Lisinopril 10 mg",
  detail: "Oral · daily · started 4 Mar 2026",
};

const ACTIONS: ChartMenuAction[] = [
  {
    id: "copy",
    label: "Copy as text",
    tier: "routine",
  },
  {
    id: "mar",
    label: "Add a note to the MAR",
    tier: "documented",
    applies: ["MedicationRequest"],
    records: "Writes a note on the medication record. Nursing sees it at the next round.",
  },
  {
    id: "pharmacy",
    label: "Flag for pharmacy review",
    tier: "documented",
    applies: ["MedicationRequest"],
    records: "Creates a Task for pharmacy. It appears in their queue with your name on it.",
  },
  {
    id: "dc",
    label: "Discontinue",
    tier: "clinical",
    applies: ["MedicationRequest"],
    confirm: "The next scheduled dose is 14:00 today. Discontinuing stops it.",
    confirmVerb: "Discontinue",
  },
];

export default function ConsequenceRankExample() {
  const [event, setEvent] = useState("Try Copy, then the MAR note, then Discontinue.");

  return (
    <div className="w-full space-y-3">
      <ChartContextMenu
        subject={ORDER}
        actions={ACTIONS}
        now={NOW}
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

            <div className="text-right">
              <p className="text-xs text-[var(--zb-text-muted)]">Next dose</p>
              <p className="text-sm tabular-nums text-[var(--zb-text-subtle)]">14:00</p>
            </div>
          </div>
        )}
      </ChartContextMenu>

      <p className="min-h-5 text-xs text-[var(--zb-text-muted)]" aria-live="polite">
        {event}
      </p>

      <p className="text-xs text-[var(--zb-text-muted)]">
        Right-click the row, or focus it and press Shift+F10.
      </p>
    </div>
  );
}
