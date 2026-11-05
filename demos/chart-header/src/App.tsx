import { PatientRoutineExample } from "./examples/01-patient-routine";
import { SpcuContextExample } from "./examples/02-spcu-context";
import { EncounterRoutineExample } from "./examples/03-encounter-routine";
import { SafetyStripExample } from "./examples/04-safety-strip";

export default function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto w-full max-w-5xl space-y-12">
        <PatientRoutineExample />

        <SpcuContextExample />

        <EncounterRoutineExample />

        <SafetyStripExample />
      </div>
    </main>
  );
}
