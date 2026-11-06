import { useState } from "react";
import {
  ChartContextMenu,
  type ChartMenuAction,
  type MenuSubject,
} from "@/components/zoblocks/chart-context-menu";

const NOW = "2026-08-31T09:24:00-04:00";

const MEDICATION = {
  id: "med-4471",
  label: "Lisinopril 10 mg",
  detail: "Oral · daily · started 4 Mar 2026",
  time: "14:00",
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
    applies: ["MedicationRequest"],
    records: "Writes a note on the medication record. Nursing sees it at the next round.",
  },
];

function MedicationRow({
  order,
  now,
  onAction,
}: {
  order: typeof MEDICATION;
  now: string;
  onAction: (actionId: string, orderId: string) => void;
}) {
  const subject: MenuSubject = {
    resource: "MedicationRequest",
    id: order.id,
    label: order.label,
    detail: order.detail,
  };

  return (
    <ChartContextMenu
      subject={subject}
      actions={MEDICATION_ACTIONS}
      now={now}
      onRun={(action) => onAction(action.id, order.id)}
    >
      {(trigger) => (
        <div
          {...trigger}
          role={undefined}
          className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
        >
          <div className="space-y-1">
            <p className="text-sm font-medium text-[var(--zb-text)]">{order.label}</p>
            <p className="text-xs text-[var(--zb-text-subtle)]">{order.detail}</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-[var(--zb-text-muted)]">Next dose</p>
            <p className="text-sm tabular-nums text-[var(--zb-text-subtle)]">{order.time}</p>
          </div>
        </div>
      )}
    </ChartContextMenu>
  );
}

export default function PatientRoutineExample() {
  const [event, setEvent] = useState<string | null>(null);

  const handleAction = (actionId: string, orderId: string) => {
    setEvent(`Action "${actionId}" selected for medication ${orderId}.`);
  };

  return (
    <div className="w-full space-y-3">
      <MedicationRow order={MEDICATION} now={NOW} onAction={handleAction} />

      <p className="min-h-5 text-xs text-[var(--zb-text-muted)]" aria-live="polite">
        {event ?? "Right-click the row, or focus it and press Shift+F10."}
      </p>
    </div>
  );
}
