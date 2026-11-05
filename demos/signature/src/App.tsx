import { ConsentInAForm } from "./demos/ConsentInAFormDemo";
import { KeyboardOnly } from "./demos/KeyboardOnly";
import { CannotSign } from "./demos/CannotSign";
import { Locked } from "./demos/Locked";
import { AwaitingCountersignature } from "./demos/AwaitingCountersignature";
import { Withdrawn } from "./demos/Withdrawn";
import { ProvenanceBundle } from "./demos/ProvenanceBundle";
import { InkInAnyTheme } from "./demos/InkInAnyTheme";

export default function App() {
  return (
    <main className="grid gap-4">
      <ConsentInAForm />
      <KeyboardOnly />
      <CannotSign />
      <Locked />
      <AwaitingCountersignature />
      <Withdrawn />
      <ProvenanceBundle />
      <InkInAnyTheme />
    </main>
  );
}
