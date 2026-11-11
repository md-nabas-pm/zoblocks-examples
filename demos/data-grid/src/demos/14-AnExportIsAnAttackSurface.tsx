import { toGridDelimited } from "@/lib/zoblocks-grid";
import { CASELOAD, CASELOAD_COLUMNS, CASELOAD_COVERAGE, DemoGrid, Example } from "./shared";

const rows = [{ ...CASELOAD[0]!, name: '=HYPERLINK("http://x.example","Ade")' }, CASELOAD[4]!];
const coverage = { ...CASELOAD_COVERAGE, shown: rows.length };
const exported = toGridDelimited(rows, CASELOAD_COLUMNS, { coverage });

export default function AnExportIsAnAttackSurface() {
  return (
    <Example title="An export is an attack surface">
      <div className="grid min-w-0 gap-3">
        <DemoGrid rows={rows} coverage={coverage} />
        <pre
          aria-label="Delimited export including its coverage sentence"
          tabIndex={0}
          className="m-0 max-h-48 overflow-auto rounded border p-3 font-mono text-xs leading-relaxed"
          style={{
            background: "var(--zb-surface, #fff)",
            borderColor: "var(--zb-border, #cbd5e1)",
            color: "var(--zb-text, #1e293b)",
          }}
        >
          {exported}
        </pre>
      </div>
    </Example>
  );
}
