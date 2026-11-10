import { ResultValue } from "@/components/zoblocks/result-value";

const sameAssayResult = {
  id: "tsh-same-assay",
  analyte: "TSH",
  value: 6.4,
  unit: "mIU/L",
  range: {
    low: 0.4,
    high: 4.0,
  },
  resultedAt: "2026-02-15T09:00:00Z",
  prior: {
    value: 3.1,
    at: "2026-02-01T09:00:00Z",
  },
} as const;

const differentAssayResult = {
  id: "tsh-different-assay",
  analyte: "TSH",
  value: 6.4,
  unit: "mIU/L",
  range: {
    low: 0.4,
    high: 4.0,
  },
  resultedAt: "2026-02-15T09:00:00Z",
  prior: {
    value: 3.1,
    at: "2026-02-01T09:00:00Z",
    differentMethod: true,
  },
} as const;

export default function DifferentAssayDeltaExample() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          A delta the component refuses to draw
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Two numbers from two assays subtracted from each other is not a delta. Flagging the method
          change and annotating the number anyway would not help — an annotated wrong number still
          gets read as a number — so the delta disappears entirely.
        </p>
      </div>

      <div className="p-4">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs" style={{ color: "#08110F", opacity: 0.62 }}>
              Same assay — the delta prints.
            </p>
            <ResultValue value={sameAssayResult} />
          </div>

          <div>
            <p className="mb-2 text-xs" style={{ color: "#08110F", opacity: 0.62 }}>
              Different assay — flagged, and the delta disappears entirely.
            </p>
            <ResultValue value={differentAssayResult} />
          </div>
        </div>
      </div>
    </section>
  );
}
