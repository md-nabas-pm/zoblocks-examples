import { ClinicalNote } from "../components/zoblocks/clinical-note";
import { DEMO_AUTHOR, DEMO_SUBJECT } from "../fixtures/clinical-note-fixtures";
import { DEMO_NOW } from "../fixtures/demo-time";
import { ExampleFrame } from "./ExampleFrame";

export function EmptyProgressDraftExample() {
  return (
    <ExampleFrame
      title="Empty Progress Draft"
      description="The default empty Progress Note; activate Sign & file to inspect the required-section findings."
    >
      <ClinicalNote
        subject={DEMO_SUBJECT}
        author={DEMO_AUTHOR}
        noteType="progress"
        now={DEMO_NOW}
      />
    </ExampleFrame>
  );
}
