# Copilot Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/md-nabas-pm/zoblocks-examples/tree/main/demos/copilot?file=src/App.tsx)
[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/devbox/github/md-nabas-pm/zoblocks-examples/tree/main/demos/copilot)

A standalone React + Vite demo of the ZoBlocks `copilot` component.

## Run locally

```bash
npm install
npm run dev
```

## Clinical-safety and owner review

This demo uses deterministic scripted providers and fictional record/source fixtures. It preserves the documented clinical answer “Rate control is a reasonable initial approach for most patients without severe symptoms.” and dose wording “Bisoprolol 2.5 mg once daily is a usual starting dose, titrated to heart rate.” Both are illustrative only, not validated advice, and require clinical review. The dose's source passage does not establish that it is correct. Source scores are retrieval metadata, not clinical confidence.

Review these unresolved implementation and documentation points before treating the demo as deployment guidance:

- The current registry-skin crisis title is “This needs a person, not a model”. Its user-facing body is “This assistant is not able to help with this. Please reach a person now.” Its third-party body is “This assistant does not answer questions about a patient in immediate danger.” These strings are currently hard-coded in the registry skin. With `en-GB`, the current resource resolver supplies Samaritans (116123) and NHS 111 (111); locale differences and default resources require clinical and localization review. This demo does not claim approval.
- The `en-GB` NHS 111 resource also has the note “Select the mental health option”, but the registry skin renders crisis resource labels and numbers without rendering `CrisisLine.note`; the intended handling needs owner review.
- Crisis classification is deterministic and rule-based; this example does not establish independent risk assessment, reliable detection, prevention of harm, or escalation. No clinical protocol callback is connected.
- Scope authorization and resolver filtering belong to the host. The visible sample resolver applies the declared resource categories and exclusions to fictional fixtures; it is not an access-control system. The Scope strip describes returned context but does not prove authorization, completeness, or freshness. “Look up” does not prevent typed identifying information.
- The resolver returns `asOf`, but the registry Scope strip does not render it. Source authenticity, recency, and clinical applicability are not verified by Copilot; “Grounded” is not proof of accuracy.
- `onAudit` is optional and best-effort, and the component does not persist or transmit events. Stopped exchanges and some request-assembly errors are not audited. The event records aggregate source count; the standard hook path does not populate model ID.
- FHIR AuditEvent is separate from FHIR Provenance. The registry skin's `onInsert(text)` does not create Provenance, and the skin does not render proposal confirmation. This demo does not claim that ordinary insertion creates a Provenance resource.
- Component metadata lists AuditEvent as a FHIR relationship but does not define the in-memory AuditEvent callback preview as a metadata example. The preview here is a supporting capability demonstration.
- The registry skin renders no DOM under suppression via `CopilotRoot`, but it calls `useSummonShortcut` unconditionally before that return. The global Cmd/Ctrl+K listener therefore remains registered while suppressed, which conflicts with the metadata claim that suppression removes the listener; source-owner review is needed.
- `Work up` is not added to default modes; source documentation keeps it opt-in. `Formulate` is also a separate explicit mode and is not part of the 12 metadata states demonstrated here.
