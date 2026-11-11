import { useCallback, useRef, useState } from "react";
import type { AuditEvent } from "@zoblocks/copilot-core";
import { Copilot } from "@/components/zoblocks/copilot";
import { DemoNote, Example, lookUp, originalGroundedProvider } from "./shared";

export default function GroundedAnswer() {
  const [event, setEvent] = useState<AuditEvent | null>(null);
  const [insertedText, setInsertedText] = useState("");
  const idSequence = useRef(0);
  const nextId = useCallback(() => `demo-id-${++idSequence.current}`, []);

  return (
    <Example title="Grounded answer">
      <DemoNote>
        This preserves the original scripted clinical answer and source for demonstration only; it
        is not validated clinical advice and requires clinical review. The “Grounded” label means a
        citation was attached; it does not prove source accuracy, authenticity, recency, or
        applicability. The source score is retrieval metadata, not clinical confidence.
      </DemoNote>
      <Copilot
        provider={originalGroundedProvider}
        modes={[lookUp]}
        actor={{ display: "Dr Amara Okafor", credential: "MD", reference: "Practitioner/7" }}
        onAudit={setEvent}
        onInsert={setInsertedText}
        locale="en-GB"
        now={() => "2026-11-11T12:00:00.000Z"}
        newId={nextId}
        anchor="inline"
      />
      {insertedText ? (
        <div className="grid gap-1">
          <strong className="text-sm" style={{ color: "var(--zb-text)" }}>
            In-memory host onInsert callback preview
          </strong>
          <DemoNote>
            The host received this text. It is not written to a note and does not create FHIR
            Provenance.
          </DemoNote>
          <p className="m-0 text-sm" style={{ color: "var(--zb-text-muted)" }}>
            {insertedText}
          </p>
        </div>
      ) : null}
      <div className="grid gap-2">
        <h3 className="m-0 text-sm font-semibold" style={{ color: "var(--zb-text)" }}>
          In-memory AuditEvent callback preview
        </h3>
        <DemoNote>
          The host receives this actual callback object. This demo holds it in component memory; the
          host is responsible for any storage or transmission. The callback is optional and
          best-effort: stopped exchanges and some assembly-error paths do not produce an event. This
          event contains aggregate source count, not question text, answer text, citation
          identities, or complete provenance. The standard hook path does not populate model ID.
        </DemoNote>
        <pre
          aria-label="In-memory AuditEvent callback preview JSON"
          tabIndex={0}
          className="m-0 max-h-72 overflow-auto rounded border p-3 font-mono text-xs"
          style={{
            background: "var(--zb-surface, var(--zb-bg))",
            borderColor: "var(--zb-border)",
            color: "var(--zb-text)",
          }}
        >
          {event
            ? JSON.stringify(event, null, 2)
            : "Submit the scripted exchange to capture the callback object."}
        </pre>
      </div>
    </Example>
  );
}
