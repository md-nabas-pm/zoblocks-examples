import { Copilot } from "@/components/zoblocks/copilot";
import {
  CHART_EVENTS,
  DEMO_SUBJECT,
  DemoNote,
  Example,
  ScopeContract,
  demoResolver,
  lookUp,
  prepare,
  scriptedProvider,
} from "./shared";

const historyShortcut = {
  id: "demo-history",
  label: "Patient history",
  modeId: "prepare",
  question: "Summarise the synthetic record.",
};

export default function ModeTray() {
  return (
    <Example title="Mode tray">
      <Copilot
        provider={scriptedProvider(CHART_EVENTS, { phiPermitted: true })}
        modes={[lookUp, prepare]}
        initialModeId="look-up"
        subject={DEMO_SUBJECT}
        context={demoResolver}
        shortcuts={[historyShortcut]}
        anchor="inline"
      />
      <ScopeContract mode={lookUp} />
      <ScopeContract mode={prepare} />
      <DemoNote>
        The sample host resolver filters by the selected mode’s reads and excludes before returning
        synthetic records; the component does not authorize access. Look up’s empty reads contract
        does not stop a person from typing identifying information.
      </DemoNote>
    </Example>
  );
}
