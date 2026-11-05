import ConsentInsideAntdForm from "./demos/ConsentInsideAntdForm";
import KeyboardAlone from "./demos/KeyboardAlone";
import PatientRefusal from "./demos/PatientRefusal";
import SubmittedFormLegible from "./demos/SubmittedFormLegible";
import AwaitingCountersignature from "./demos/AwaitingCountersignature";
import ConsentWithdrawn from "./demos/ConsentWithdrawn";
import FhirBundle from "./demos/FhirBundle";
import StoredInkAnyTheme from "./demos/StoredInkAnyTheme";

const examples = [
  ConsentInsideAntdForm,
  KeyboardAlone,
  PatientRefusal,
  SubmittedFormLegible,
  AwaitingCountersignature,
  ConsentWithdrawn,
  FhirBundle,
  StoredInkAnyTheme,
];

export default function App() {
  return (
    <main style={{ display: "grid", gap: 32, maxWidth: 760, margin: "0 auto", padding: 24 }}>
      {examples.map((Example) => (
        <Example key={Example.name} />
      ))}
    </main>
  );
}
