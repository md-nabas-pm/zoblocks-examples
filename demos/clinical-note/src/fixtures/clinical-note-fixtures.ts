import { expand, NOTE_TYPES, SECTIONS, type NoteTypeName } from "@zoblocks/clinical-note-core";
import type { Node as PMNode } from "prosemirror-model";
import { mixed, noteDoc, noteSection, para } from "../components/zoblocks/clinical-note";
import { DEMO_PULL_AT } from "./demo-time";

export const DEMO_SUBJECT = {
  reference: "Patient/DEMO-001",
  display: "FICTIONAL SAMPLE",
  identifier: "DEMO-001",
  detail: "Synthetic demo record",
};

export const DEMO_AUTHOR = {
  display: "Example Author",
  role: "Demonstration only",
};

export const DEMO_NOTICE =
  "Fictional synthetic content for interface demonstration only; not clinical advice or a clinically validated workflow.";

export const DEMO_PLACEHOLDER = "Fictional placeholder text for interface demonstration only.";

/** Builds every section required by the selected note type, including empty sections. */
export function makeNote(
  noteType: NoteTypeName,
  contentByCode: Record<string, readonly PMNode[]> = {},
) {
  return noteDoc(
    ...NOTE_TYPES[noteType].sections.map((section) =>
      noteSection(
        { code: section.code, title: section.title, required: section.required },
        ...(contentByCode[section.code] ?? []),
      ),
    ),
  );
}

export function makeCompleteProgressNote() {
  return makeNote("progress", {
    [SECTIONS.hpi.code]: [para(DEMO_PLACEHOLDER)],
    [SECTIONS.assessmentAndPlan.code]: [para(DEMO_PLACEHOLDER)],
  });
}

export function makeOriginNote() {
  return makeNote("progress", {
    [SECTIONS.hpi.code]: [
      mixed(
        ["Fictional placeholder text ", "typed"],
        ["with a dictated sample range ", "dictated", { confidence: 0.96 }],
        [
          "and a pulled sample range ",
          "pulled",
          { source: "Observation/DEMO-001", at: DEMO_PULL_AT },
        ],
        ["plus copied sample text", "copied", { source: "Composition/DEMO-PRIOR" }],
      ),
    ],
    [SECTIONS.assessmentAndPlan.code]: [para(DEMO_PLACEHOLDER)],
  });
}

export function makeTemplateBlankNote() {
  const expansion = expand("Fictional placeholder ***sample***", {
    provenance: { origin: "template", source: "Phrase/DEMO" },
  });
  const paragraphs: PMNode[] = [];
  expansion.content.forEach((node) => paragraphs.push(node));

  return makeNote("progress", {
    [SECTIONS.hpi.code]: paragraphs,
    [SECTIONS.assessmentAndPlan.code]: [para(DEMO_PLACEHOLDER)],
  });
}

export function makeHistoryAndPhysicalNote() {
  const content = Object.fromEntries(
    NOTE_TYPES.historyAndPhysical.sections.map((section) => [
      section.code,
      [para(DEMO_PLACEHOLDER)],
    ]),
  ) as Record<string, PMNode[]>;

  return makeNote("historyAndPhysical", content);
}

export const READER_ATTESTATIONS = [
  {
    who: "Example Author",
    role: "Demonstration only",
    when: "16 Aug 2026, 14:38 IST (UTC+05:30)",
    statement: "Illustrative supplied attestation text.",
  },
];

export const READER_ADDENDA = [
  {
    author: "Example Author",
    when: "16 Aug 2026, 14:42 IST (UTC+05:30)",
    text: "Fictional addendum text for interface demonstration only.",
  },
];
