import { ClinicalNote } from "../components/zoblocks/clinical-note";
import { makeOriginNote, DEMO_AUTHOR, DEMO_SUBJECT } from "../fixtures/clinical-note-fixtures";
import { DEMO_NOW } from "../fixtures/demo-time";
import { ExampleFrame } from "./ExampleFrame";

const ORIGIN_NOTE = makeOriginNote();

export function OriginVisibilityExample() {
  return (
    <ExampleFrame
      title="Origin and Copy-Forward Visibility"
      description="Fictional typed, dictated, pulled, and copied ranges contribute to the component's origins display and composition summary. Provenance describes the supplied source labels; it does not establish passage truth. This sample contains no AI-generated text."
    >
      <ClinicalNote
        subject={DEMO_SUBJECT}
        author={DEMO_AUTHOR}
        noteType="progress"
        value={ORIGIN_NOTE}
        now={DEMO_NOW}
      />
    </ExampleFrame>
  );
}
