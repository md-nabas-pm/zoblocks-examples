import FhirObservationExample from "./examples/01-fhir-observation";
import SevenAbsencesExample from "./examples/02-seven-absences";
import CorrectedResultExample from "./examples/03-corrected-result";
import DifferentAssayDeltaExample from "./examples/04-different-assay-delta";

export default function App() {
  return (
    <main className="min-h-screen bg-white px-6 py-8">
      <div className="mx-auto flex max-w-xl flex-col gap-10">
        <FhirObservationExample />
        <SevenAbsencesExample />
        <CorrectedResultExample />
        <DifferentAssayDeltaExample />
      </div>
    </main>
  );
}
