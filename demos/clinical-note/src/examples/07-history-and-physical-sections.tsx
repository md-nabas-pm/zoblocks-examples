import { ClinicalNote } from "../components/zoblocks/clinical-note";
import {
  makeHistoryAndPhysicalNote,
  DEMO_AUTHOR,
  DEMO_SUBJECT,
} from "../fixtures/clinical-note-fixtures";
import { DEMO_NOW } from "../fixtures/demo-time";
import { ExampleFrame } from "./ExampleFrame";

const HISTORY_AND_PHYSICAL = makeHistoryAndPhysicalNote();

export function HistoryAndPhysicalExample() {
  return (
    <ExampleFrame
      title="History and Physical Section Set"
      description="Uses the built-in historyAndPhysical note type and its schema-defined sections, populated with neutral fictional placeholder text only."
    >
      <ClinicalNote
        subject={DEMO_SUBJECT}
        author={DEMO_AUTHOR}
        noteType="historyAndPhysical"
        value={HISTORY_AND_PHYSICAL}
        now={DEMO_NOW}
      />
    </ExampleFrame>
  );
}
