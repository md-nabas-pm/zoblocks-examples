import { ProvenanceChip } from "../components/zoblocks/provenance-chip";
import {
  NOW,
  BP_POLICY,
  DEVICE_FRESH,
  DEVICE_STALE,
  NO_DATE,
  EXTERNAL,
} from "../data/provenance-chip-fixtures";

export function FreshnessStatesExample() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Freshness</h2>
      <ul className="space-y-2">
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-44 text-sm opacity-70">Fresh (2 h)</span>
          <span className="font-medium tabular-nums">126/78 mmHg</span>
          <ProvenanceChip record={DEVICE_FRESH} now={NOW} stalenessPolicy={BP_POLICY} />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-44 text-sm opacity-70">Stale (6 d, 3 d policy)</span>
          <span className="font-medium tabular-nums">126/78 mmHg</span>
          <ProvenanceChip record={DEVICE_STALE} now={NOW} stalenessPolicy={BP_POLICY} />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-44 text-sm opacity-70">No policy (unknown)</span>
          <span className="font-medium tabular-nums">126/78 mmHg</span>
          <ProvenanceChip record={DEVICE_STALE} now={NOW} />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-44 text-sm opacity-70">No date (no age)</span>
          <span className="font-medium tabular-nums">126/78 mmHg</span>
          <ProvenanceChip record={NO_DATE} now={NOW} stalenessPolicy={BP_POLICY} />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-44 text-sm opacity-70">No “now” (no age)</span>
          <span className="font-medium tabular-nums">126/78 mmHg</span>
          <ProvenanceChip record={DEVICE_FRESH} stalenessPolicy={BP_POLICY} />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-44 text-sm opacity-70">Observed vs received</span>
          <span className="font-medium tabular-nums">7.2 %</span>
          <ProvenanceChip record={EXTERNAL} now={NOW} stalenessPolicy={BP_POLICY} />
        </li>
      </ul>
    </section>
  );
}
