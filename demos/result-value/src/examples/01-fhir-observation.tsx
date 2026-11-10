import { ResultValue, fromObservation } from "@/components/zoblocks/result-value";
import { observationPotassiumCritical } from "@/data/result-value-fixtures";

const serverTime = "2026-11-10T08:33:00Z";

export default function FhirObservationExample() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">A FHIR Observation, unedited</h2>
        <p className="mt-1 text-sm text-gray-600">
          The adapter leaves undefined everything it cannot determine. A missing referenceRange
          becomes no range — not an empty one, and not a silent assumption of normality.
        </p>
      </div>

      <div className="p-4">
        <ResultValue value={fromObservation(observationPotassiumCritical)} now={serverTime} />
      </div>
    </section>
  );
}
