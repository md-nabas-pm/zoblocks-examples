import * as React from "react";
import { ClinicalNote, type SaveState } from "../components/zoblocks/clinical-note";
import { DEMO_AUTHOR, DEMO_SUBJECT } from "../fixtures/clinical-note-fixtures";
import { DEMO_NOW } from "../fixtures/demo-time";
import { ExampleFrame } from "./ExampleFrame";

const SAVE_STATES: { label: string; value: SaveState }[] = [
  { label: "Saved", value: { kind: "saved", at: "16 Aug 2026, 14:38 IST (UTC+05:30)" } },
  { label: "Saving", value: { kind: "saving" } },
  { label: "Offline", value: { kind: "offline", pending: 2 } },
  { label: "Failed", value: { kind: "failed", reason: "Demo-reported failure" } },
];

export function SaveStateExample() {
  const [saveState, setSaveState] = React.useState<SaveState>(SAVE_STATES[0].value);

  return (
    <ExampleFrame
      title="Host-Reported Save States"
      description="The parent control changes the display-only saveState prop. The status is supplied by the host: this demo performs no autosave, persistence, or offline queuing, even though the component's offline label describes pending changes as held locally."
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {SAVE_STATES.map(({ label, value }) => (
          <button
            key={label}
            type="button"
            className="rounded-md border border-rule px-3 py-1.5 text-sm text-ink hover:border-rule-strong"
            onClick={() => setSaveState(value)}
            aria-pressed={saveState.kind === value.kind}
          >
            {label}
          </button>
        ))}
      </div>
      <ClinicalNote
        subject={DEMO_SUBJECT}
        author={DEMO_AUTHOR}
        noteType="progress"
        now={DEMO_NOW}
        saveState={saveState}
      />
    </ExampleFrame>
  );
}
