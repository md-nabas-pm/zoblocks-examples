import { useState } from "react";
import {
  ChartContextMenu,
  type ChartMenuAction,
  type MenuSubject,
} from "@/components/zoblocks/chart-context-menu";

const NOW = "2026-08-31T09:24:00-04:00";

const ORDER: MenuSubject = {
  resource: "MedicationRequest",
  id: "med-8821",
  label: "Buprenorphine 8 mg",
  detail: "Sublingual · daily · treatment program",
};

const ACTIONS: ChartMenuAction[] = [
  {
    id: "open",
    label: "Open order",
    tier: "routine",
  },
  {
    id: "part2",
    label: "Reveal Part 2 program notes",
    tier: "disclosive",
    applies: ["MedicationRequest"],
    reasons: [
      "Treatment of this patient",
      "Medical emergency (42 CFR §2.51)",
      "Written patient consent on file",
    ],
  },
];

export default function ReasonFirstAuditExample() {
  const [events, setEvents] = useState<string[]>([]);

  const handleRun = (action: ChartMenuAction) => {
    setEvents((previous) => [`onRun("${action.id}") — ${action.label}`, ...previous]);
  };

  return (
    <div className="w-full space-y-3">
      <ChartContextMenu
        subject={ORDER}
        actions={ACTIONS}
        policy={{
          role: "a registered nurse",
          breakGlass: true,
        }}
        now={NOW}
        onRun={handleRun}
        onDisclose={(record) => {
          const reason = record.reason ? `: ${record.reason}` : "";

          setEvents((previous) => [
            `onDisclose — ${record.action}, ${record.outcome}${reason}`,
            ...previous,
          ]);
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
              <p className="text-xs text-[var(--zb-text-muted)]">Status</p>
              <p className="text-sm text-[var(--zb-text-subtle)]">Active</p>
            </div>
          </div>
        )}
      </ChartContextMenu>

      <div className="min-h-16 space-y-2 p-3" aria-live="polite">
        {events.length === 0 ? (
          <p className="text-xs text-[var(--zb-text-muted)]">
            Right-click the row and choose Reveal Part 2 program notes.
          </p>
        ) : (
          events.map((event, index) => (
            <p key={`${event}-${index}`} className="text-xs text-[var(--zb-text-subtle)]">
              {event}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
