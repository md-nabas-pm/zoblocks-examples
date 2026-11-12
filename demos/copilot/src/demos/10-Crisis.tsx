import { Copilot } from "@/components/zoblocks/copilot";
import { DemoNote, Example, SAFE_EVENTS, lookUp, scriptedProvider } from "./shared";

export default function Crisis() {
  return (
    <Example title="Crisis">
      <Copilot
        provider={scriptedProvider(SAFE_EVENTS)}
        modes={[lookUp]}
        locale="en-GB"
        anchor="inline"
      />
      <DemoNote>
        Try the documented deterministic trigger “I want to kill myself”. The classifier interrupts
        the scripted provider, and the composer is disabled in crisis. The crisis state is terminal
        until New chat resets the thread. No escalation service is connected by this demo.
      </DemoNote>
    </Example>
  );
}
