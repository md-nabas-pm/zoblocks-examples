import { useState } from "react";
import {
  ChartContextMenu,
  type ChartMenuAction,
  type MenuSubject,
} from "@/components/zoblocks/chart-context-menu";

const RESULT: MenuSubject = {
  resource: "Observation",
  id: "obs-8821",
  label: "Potassium result",
  detail: "Laboratory result · Updated 31 Aug 2026",
};

const ACTIONS: ChartMenuAction[] = [
  {
    id: "open",
    label: "Open result",
    tier: "routine",
  },
  {
    id: "trend",
    label: "Trend",
    tier: "routine",
    submenu: [
      {
        id: "t7",
        label: "Last 7 days",
        tier: "routine",
      },
      {
        id: "t30",
        label: "Last 30 days",
        tier: "routine",
      },
      {
        id: "t365",
        label: "Last year",
        tier: "routine",
      },
    ],
  },
];

export default function SubmenuBesideRowExample() {
  const [events, setEvents] = useState<string[]>([]);

  const handleRun = (action: ChartMenuAction) => {
    setEvents((previous) => [`onRun("${action.id}") — ${action.label}`, ...previous]);
  };

  return (
    <div className="w-full space-y-3">
      <ChartContextMenu subject={RESULT} actions={ACTIONS} onRun={handleRun}>
        {(trigger) => (
          <div
            {...trigger}
            role={undefined}
            className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--zb-text)]">{RESULT.label}</p>
              <p className="text-xs text-[var(--zb-text-subtle)]">{RESULT.detail}</p>
            </div>

            <span className="text-xs text-[var(--zb-text-muted)]">Right-click to explore</span>
          </div>
        )}
      </ChartContextMenu>

      <div className="min-h-16 space-y-2 p-3" aria-live="polite">
        {events.length === 0 ? (
          <p className="text-xs text-[var(--zb-text-muted)]">
            Right-click the result and open Trend.
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
