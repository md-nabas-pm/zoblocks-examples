import { ClinicalNote } from "../components/zoblocks/clinical-note";
import {
  makeCompleteProgressNote,
  READER_ADDENDA,
  READER_ATTESTATIONS,
  DEMO_SUBJECT,
} from "../fixtures/clinical-note-fixtures";
import { ExampleFrame } from "./ExampleFrame";

const READER_NOTE = makeCompleteProgressNote();

export function SignedReaderExample() {
  return (
    <ExampleFrame
      title="Signed Reader with Attestations and Addenda"
      description="ClinicalNote.Reader displays a supplied fictional document with static attestation and addendum data. It does not verify signatures or create legal supersession."
    >
      <ClinicalNote.Reader
        subject={DEMO_SUBJECT}
        title="Illustrative progress note"
        doc={READER_NOTE}
        attestations={READER_ATTESTATIONS}
        addenda={READER_ADDENDA}
      />
    </ExampleFrame>
  );
}
