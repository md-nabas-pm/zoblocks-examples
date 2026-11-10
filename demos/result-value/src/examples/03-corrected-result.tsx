import { ResultValue } from "@/components/zoblocks/result-value";

const correctedTroponin = {
  id: "trop",
  versionId: "2",
  analyte: "Troponin I",
  value: 0.09,
  unit: "ng/mL",
  range: {
    high: 0.04,
  },
  status: "corrected",
  superseded: {
    value: "<0.04",
    at: "14:22 today",
  },
} as const;

export default function CorrectedResultExample() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          A correction shows the number it replaced
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          A badge saying &quot;corrected&quot; does not address the hazard, which is that somebody
          read the old value an hour ago and wrote it into a note. The old number, struck through,
          with the time it changed, does.
        </p>
      </div>

      <div className="p-4">
        <ResultValue value={correctedTroponin} />
      </div>
    </section>
  );
}
