import {
  ChartContextMenu,
  type ChartMenuAction,
  type MenuSubject,
} from "@/components/zoblocks/chart-context-menu";

const NOW = "2026-08-31T09:24:00-04:00";

const EMPTY_ORDER: MenuSubject = {
  resource: "MedicationRequest",
  id: "med-4471",
  label: "Lisinopril 10 mg",
  detail: "Oral · daily · started 4 Mar 2026",
};

const RESTRICTED_ORDER: MenuSubject = {
  resource: "MedicationRequest",
  id: "med-8821",
  label: "Amlodipine 5 mg",
  detail: "Oral · daily · started 12 Feb 2026",
};

const MEDICATION_ACTIONS: ChartMenuAction[] = [
  {
    id: "open",
    label: "Open order",
    tier: "routine",
  },
  {
    id: "copy",
    label: "Copy as text",
    tier: "routine",
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
  {
    id: "renew",
    label: "Renew prescription",
    tier: "clinical",
    applies: ["MedicationRequest"],
  },
];

export default function TwoEmptiesExample() {
  return (
    <div className="w-full space-y-3">
      <ChartContextMenu subject={EMPTY_ORDER} actions={[]} now={NOW}>
        {(trigger) => (
          <div
            {...trigger}
            role={undefined}
            className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--zb-text)]">{EMPTY_ORDER.label}</p>
              <p className="text-xs text-[var(--zb-text-subtle)]">{EMPTY_ORDER.detail}</p>
            </div>

            <span className="text-xs text-[var(--zb-text-muted)]">No actions defined</span>
          </div>
        )}
      </ChartContextMenu>

      <ChartContextMenu
        subject={RESTRICTED_ORDER}
        actions={MEDICATION_ACTIONS}
        policy={{
          role: "a scheduling clerk",
          permitted: [],
          breakGlass: false,
        }}
        now={NOW}
      >
        {(trigger) => (
          <div
            {...trigger}
            role={undefined}
            className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--zb-text)]">{RESTRICTED_ORDER.label}</p>
              <p className="text-xs text-[var(--zb-text-subtle)]">{RESTRICTED_ORDER.detail}</p>
            </div>

            <span className="text-xs text-[var(--zb-text-muted)]">Actions restricted</span>
          </div>
        )}
      </ChartContextMenu>

      <p className="text-xs text-[var(--zb-text-muted)]">
        Right-click each row. Two empty menus, two sentences.
      </p>
    </div>
  );
}
