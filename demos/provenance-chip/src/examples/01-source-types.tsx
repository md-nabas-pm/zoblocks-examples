import { ProvenanceChip } from "../components/zoblocks/provenance-chip";
import {
  NOW,
  CLINIC,
  DEVICE,
  PATIENT_REPORTED,
  EXTERNAL,
  AI_UNREVIEWED,
  AMENDED,
  LEDGER,
} from "../data/provenance-chip-fixtures";

const rows = [
  { label: "Blood pressure", value: "128/76 mmHg", record: CLINIC },
  { label: "Blood pressure", value: "131/79 mmHg", record: DEVICE },
  { label: "PHQ-9", value: "9", record: PATIENT_REPORTED },
  { label: "HbA1c", value: "7.2 %", record: EXTERNAL },
  { label: "Weight", value: "82.4 kg", record: AI_UNREVIEWED },
  { label: "Blood pressure", value: "128/76 mmHg", record: AMENDED },
];

export function SourceTypesExample() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Source types</h2>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.record.source} className="flex flex-wrap items-center gap-3">
            <span className="w-36 text-sm opacity-70">{r.label}</span>
            <span className="font-medium tabular-nums">{r.value}</span>
            <ProvenanceChip record={r.record} now={NOW} />
          </li>
        ))}
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-36 text-sm opacity-70">Glyph only</span>
          <span className="font-medium tabular-nums">128/76 mmHg</span>
          <ProvenanceChip record={CLINIC} now={NOW} glyphOnly />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-36 text-sm opacity-70">From ledger (v2)</span>
          <span className="font-medium tabular-nums">128/76 mmHg</span>
          <ProvenanceChip resourceId="obs-bp-1" versionId="v2" ledger={LEDGER} now={NOW} />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-36 text-sm opacity-70">Not in ledger</span>
          <span className="font-medium tabular-nums">120/80 mmHg</span>
          <ProvenanceChip resourceId="missing" ledger={LEDGER} now={NOW} />
          <span className="text-xs opacity-60">(renders nothing)</span>
        </li>
      </ul>
    </section>
  );
}
