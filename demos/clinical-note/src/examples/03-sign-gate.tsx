import * as React from "react";
import { ClinicalNote } from "../components/zoblocks/clinical-note";
import {
  makeCompleteProgressNote,
  DEMO_AUTHOR,
  DEMO_SUBJECT,
} from "../fixtures/clinical-note-fixtures";
import { DEMO_NOW } from "../fixtures/demo-time";
import { ExampleFrame } from "./ExampleFrame";

const COMPLETE_PROGRESS = makeCompleteProgressNote();

type CallbackSnapshot = {
  kind: string;
  document: unknown;
  acknowledged: string[];
};

export function SignGateExample() {
  const [complete, setComplete] = React.useState(false);
  const [callbackArgs, setCallbackArgs] = React.useState<CallbackSnapshot>();

  return (
    <ExampleFrame
      title="What Blocks Signing"
      description="Compare an empty draft with a document containing every Progress Note section and fictional placeholder text in the required sections. The callback panel shows arguments actually received. This demo does not persist a note or create a cryptographic signature."
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded-md border border-rule px-3 py-1.5 text-sm text-ink hover:border-rule-strong"
          onClick={() => setComplete(false)}
          aria-pressed={!complete}
        >
          Empty draft
        </button>
        <button
          type="button"
          className="rounded-md border border-rule px-3 py-1.5 text-sm text-ink hover:border-rule-strong"
          onClick={() => setComplete(true)}
          aria-pressed={complete}
        >
          Required sections filled
        </button>
      </div>
      <ClinicalNote
        key={complete ? "complete" : "empty"}
        subject={DEMO_SUBJECT}
        author={DEMO_AUTHOR}
        noteType="progress"
        value={complete ? COMPLETE_PROGRESS : undefined}
        now={DEMO_NOW}
        attestation="I reviewed this fictional example for interface demonstration."
        onCommit={(kind, doc, acknowledged) =>
          setCallbackArgs({ kind, document: doc.toJSON(), acknowledged })
        }
      />
      <section className="mt-4 rounded-md border border-rule bg-paper-sunk p-3">
        <h3 className="text-sm font-semibold text-ink">Actual onCommit arguments</h3>
        <p className="mt-1 text-xs text-graphite">
          The document is shown as its ProseMirror JSON representation. This panel records the
          callback input only; it does not perform storage or signing.
        </p>
        <pre className="mt-2 max-h-80 overflow-auto text-xs text-ink" aria-live="polite">
          {callbackArgs === undefined
            ? "No callback received yet."
            : JSON.stringify(callbackArgs, null, 2)}
        </pre>
      </section>
    </ExampleFrame>
  );
}
