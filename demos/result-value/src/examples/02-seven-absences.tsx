import { ResultValue } from "@/components/zoblocks/result-value";
import { observationMasked } from "@/data/result-value-fixtures";

const absenceExamples = [
  {
    id: "hba1c",
    analyte: "HbA1c",
    absent: "not-ordered",
  },
  {
    id: "troponin",
    analyte: "Troponin I",
    absent: "awaiting",
  },
  {
    id: "blood-culture",
    analyte: "Blood culture",
    absent: "cancelled",
  },
  {
    id: "wbc",
    analyte: "White blood cell count",
    absent: "specimen-problem",
    absentDetail: "Haemolysed. Recollection requested.",
  },
  {
    id: "smoking-status",
    analyte: "Smoking status",
    absent: "declined",
  },
  {
    ...observationMasked,
    analyte: "Toxicology screen",
  },
  {
    id: "magnesium",
    analyte: "Magnesium",
    absent: "unknown",
  },
] as const;

export default function SevenAbsencesExample() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Seven absences, seven sentences</h2>
        <p className="mt-1 text-sm text-gray-600">
          An em dash is indistinguishable from a rendering bug, and it asks the reader to guess
          between three answers with three different next actions. Restricted is the one that is not
          a gap: a value exists and the reader may not see it.
        </p>
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-3">
          {absenceExamples.map((value) => (
            <ResultValue key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
