import { useEffect, useState } from "react";
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

export default function PendingInPlaceExample() {
  const [canCopy, setCanCopy] = useState<{ status: "available" } | null>(null);

  const [event, setEvent] = useState("Open the menu and watch Copy as text.");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCanCopy({ status: "available" });
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  const actions: ChartMenuAction[] = [
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
      availability: canCopy ?? { status: "pending" },
    },
    {
      id: "history",
      label: "Administration history",
      tier: "routine",
    },
  ];

  return (
    <div className="w-full space-y-3">
      <ChartContextMenu
        subject={ORDER}
        actions={actions}
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
    </div>
  );
}
