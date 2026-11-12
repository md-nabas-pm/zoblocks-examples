import { Copilot } from "@/components/zoblocks/copilot";
import {
  CHART_EVENTS,
  DEMO_SUBJECT,
  Example,
  ScopeContract,
  betweenVisits,
  demoResolver,
  lookUp,
  prepare,
  scriptedProvider,
} from "./shared";

const shortcuts = [
  { id: "catalog", label: "Source details", question: "Describe the sample source fixture." },
  {
    id: "measures",
    label: "Measure trends",
    modeId: "between-visits",
    question: "Summarise the synthetic measure entries.",
  },
];

export default function Shortcuts() {
  return (
    <Example title="Shortcuts">
      <Copilot
        provider={scriptedProvider(CHART_EVENTS, { phiPermitted: true })}
        modes={[lookUp, prepare, betweenVisits]}
        initialModeId="look-up"
        subject={DEMO_SUBJECT}
        context={demoResolver}
        shortcuts={shortcuts}
        anchor="inline"
      />
      <ScopeContract mode={betweenVisits} />
    </Example>
  );
}
