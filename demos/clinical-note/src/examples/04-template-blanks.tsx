import { ClinicalNote } from "../components/zoblocks/clinical-note";
import {
  makeTemplateBlankNote,
  DEMO_AUTHOR,
  DEMO_SUBJECT,
} from "../fixtures/clinical-note-fixtures";
import { DEMO_NOW } from "../fixtures/demo-time";
import { ExampleFrame } from "./ExampleFrame";

const TEMPLATE_NOTE = makeTemplateBlankNote();

export function TemplateBlanksExample() {
  return (
    <ExampleFrame
      title="Template Blanks and F2 Navigation"
      description="Uses wildcard blanks from the core phrase expansion schema. F2 and the visible next-blank toolbar control navigate between blanks; neither fills one. The phrases prop is not a functioning phrase picker in this component."
    >
      <ClinicalNote
        subject={DEMO_SUBJECT}
        author={DEMO_AUTHOR}
        noteType="progress"
        value={TEMPLATE_NOTE}
        now={DEMO_NOW}
      />
    </ExampleFrame>
  );
}
