import { useState } from "react";
import {
  ChartContextMenu,
  type ChartMenuAction,
  type MenuSubject,
} from "@/components/zoblocks/chart-context-menu";

const NOW = "2026-08-31T09:24:00-04:00";

const NOTE = {
  id: "note-8821",
  label: "Group therapy note — Nwosu, C.",
  detail: "Signed by R. Adeyemi, LPC",
  date: "31 Aug 2026",
};

const NOTE_ACTIONS: ChartMenuAction[] = [
  {
    id: "open",
    label: "Open note",
    tier: "routine",
  },
  {
    id: "copy",
    label: "Copy reference",
    tier: "routine",
  },
  {
    id: "history",
    label: "View note history",
    tier: "routine",
  },
];

function RestrictedNoteRow({
  note,
  now,
  onAction,
}: {
  note: typeof NOTE;
  now: string;
  onAction: (actionId: string, noteId: string) => void;
}) {
  const subject: MenuSubject = {
    resource: "DocumentReference",
    id: note.id,
    label: note.label,
    detail: note.detail,
    masked: true,
  };

  return (
    <ChartContextMenu
      subject={subject}
      actions={NOTE_ACTIONS}
      policy={{
        role: "a registered nurse",
        breakGlass: true,
      }}
      now={now}
      onRun={(action) => onAction(action.id, note.id)}
    >
      {(trigger) => (
        <div
          {...trigger}
          role={undefined}
          className="flex w-full cursor-context-menu items-center justify-between rounded-lg border border-[var(--zb-border)] p-4"
        >
          <div className="space-y-1">
            <p className="text-sm font-medium text-[var(--zb-text)]">Restricted record</p>
            <p className="text-xs text-[var(--zb-text-subtle)]">Details hidden</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-[var(--zb-text-muted)]">Date</p>
            <p className="text-sm text-[var(--zb-text-subtle)]">{note.date}</p>
          </div>
        </div>
      )}
    </ChartContextMenu>
  );
}

export default function PatientRestrictedExample() {
  const [event, setEvent] = useState<string | null>(null);

  const handleAction = (actionId: string, noteId: string) => {
    setEvent(`Action "${actionId}" selected for note ${noteId}.`);
  };

  return (
    <div className="w-full space-y-3">
      <RestrictedNoteRow note={NOTE} now={NOW} onAction={handleAction} />

      <p className="min-h-5 text-xs text-[var(--zb-text-muted)]" aria-live="polite">
        {event ?? "Right-click the row, or focus it and press Shift+F10."}
      </p>
    </div>
  );
}
