import { ledgerFrom, type ProvenanceRecord } from "../components/zoblocks/provenance-chip";

export const NOW = "2026-10-05T10:00:00Z";

/** Three days: a blood pressure older than this is flagged stale. */
export const BP_POLICY = () => 3 * 24 * 60 * 60 * 1000;

export const CLINIC: ProvenanceRecord = {
  source: "clinic",
  observedAt: "2026-10-05T10:00:00Z",
  performer: { display: "Dr. Smith", role: "Physician" },
};

export const DEVICE: ProvenanceRecord = {
  source: "device",
  observedAt: "2026-10-01T10:00:00Z",
  device: "Omron BP7450",
};

export const PATIENT_REPORTED: ProvenanceRecord = {
  source: "patient-reported",
  observedAt: "2026-10-04T20:15:00Z",
};

export const EXTERNAL: ProvenanceRecord = {
  source: "external",
  observedAt: "2026-07-28T09:00:00Z",
  recordedAt: "2026-10-05T08:00:00Z",
  organisation: "Riverside Health Network",
  exchange: "Carequality",
  document: "C-CDA, authored 5 Oct",
};

export const AMENDED: ProvenanceRecord = {
  source: "amended",
  observedAt: "2026-10-05T09:30:00Z",
  performer: { display: "M. Adeyemi", role: "Medical assistant" },
  supersedes: { value: "142/90", reason: "transcription error", at: "2026-10-05T09:50:00Z" },
};

export const AI_UNREVIEWED: ProvenanceRecord = {
  source: "ai-extracted",
  recordedAt: "2026-10-03T14:00:00Z",
  model: "doc-extract-v2",
  span: { document: "Scanned fax, 3 Oct 2026", page: 2, line: 14 },
  confirmed: false,
};

export const AI_CONFIRMED: ProvenanceRecord = {
  ...AI_UNREVIEWED,
  confirmed: true,
  confirmedBy: { display: "Dr. A. Rao", role: "Attending" },
};

export const DEVICE_FRESH: ProvenanceRecord = { ...DEVICE, observedAt: "2026-10-05T08:00:00Z" };
export const DEVICE_STALE: ProvenanceRecord = { ...DEVICE, observedAt: "2026-09-29T10:00:00Z" };
export const NO_DATE: ProvenanceRecord = { source: "clinic" };

export const LEDGER = ledgerFrom({
  "obs-bp-1": CLINIC,
  "obs-bp-1@v2": AMENDED,
});
