import { useState } from "react";
import {
  ChartContextMenu,
  type ChartMenuAction,
  type MenuSubject,
} from "@/components/zoblocks/chart-context-menu";

const MEDICATION: MenuSubject = {
  resource: "MedicationRequest",
  id: "med-4471",
  label: "Lisinopril 10 mg",
  detail: "Oral · daily · started 4 Mar 2026",
};

const POTASSIUM: MenuSubject = {
  resource: "Observation",
  id: "obs-8821",
  label: "Potassium 6.8 mmol/L",
  detail: "Laboratory result · Preliminary",
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
    id: "renew",
    label: "Renew for 90 days",
    tier: "clinical",
    applies: ["MedicationRequest"],
    confirm: "Issues a new order in your name.",
    availability: {
      status: "unavailable",
      reason: "Prescriber role required — you are signed in as a registered nurse",
    },
  },
];

const RESULT_ACTIONS: ChartMenuAction[] = [
  {
    id: "open-result",
    label: "Open result",
    tier: "routine",
  },
  {
    id: "release",
    label: "Release to patient portal",
    tier: "clinical",
    applies: ["Observation"],
    availability: {
      status: "unavailable",
      reason: "Preliminary results are not released. The lab has not verified this one.",
    },
  },
];

export default function AvailabilityReasonsExample() {
  const [events, setEvents] = useState<string[]>([]);

  const handleRun = (action: ChartMenuAction) => {
    setEvents((previous) => [`onRun("${action.id}") — ${action.label}`, ...previous]);
  };

  const handleBlocked = (_action: ChartMenuAction, reason: string) => {
    setEvents((previous) => [`onBlocked — ${reason}`, ...previous]);
  };

  return (
    <div className="w-full space-y-3">
      {/* Medication record */}
      <ChartContextMenu
        subject={MEDICATION}
        actions={MEDICATION_ACTIONS}
        onRun={handleRun}
        onBlocked={handleBlocked}
      >
        {(trigger) => (
          <div
            {...trigger}
            role={undefined}
            className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--zb-text)]">{MEDICATION.label}</p>

              <p className="text-xs text-[var(--zb-text-subtle)]">{MEDICATION.detail}</p>
            </div>
          </div>
        )}
      </ChartContextMenu>

      {/* Potassium result */}
      <ChartContextMenu
        subject={POTASSIUM}
        actions={RESULT_ACTIONS}
        onRun={handleRun}
        onBlocked={handleBlocked}
      >
        {(trigger) => (
          <div
            {...trigger}
            role={undefined}
            className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--zb-text)]">{POTASSIUM.label}</p>

              <p className="text-xs text-[var(--zb-text-subtle)]">{POTASSIUM.detail}</p>
            </div>
          </div>
        )}
      </ChartContextMenu>

      {/* Event log */}
      <div className="min-h-16 space-y-2 p-3" aria-live="polite">
        {events.length === 0 ? (
          <p className="text-xs text-[var(--zb-text-muted)]">
            Right-click either row to explore its available actions.
          </p>
        ) : (
          events.map((event, index) => (
            <p key={`${event}-${index}`} className="text-xs text-[var(--zb-text-subtle)]">
              {event}
            </p>
          ))
        )}
      </div>

      <p className="text-xs text-[var(--zb-text-muted)]">
        Right-click a row, or focus it and press Shift+F10.
      </p>
    </div>
  );
}
