import { Copilot } from "@/components/zoblocks/copilot";
import { DemoNote, Example, SAFE_EVENTS, lookUp, scriptedProvider } from "./shared";

export default function Suppressed() {
  return (
    <Example title="Suppressed">
      <Copilot
        provider={scriptedProvider(SAFE_EVENTS)}
        modes={[lookUp]}
        suppressed
        anchor="inline"
      />
      <DemoNote>The component is suppressed and renders no assistant interface.</DemoNote>
    </Example>
  );
}
