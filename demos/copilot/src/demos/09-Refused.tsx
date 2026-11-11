import { Copilot } from "@/components/zoblocks/copilot";
import {
  DECLINED_EVENTS,
  DemoNote,
  Example,
  SAFE_EVENTS,
  lookUp,
  scriptedProvider,
} from "./shared";

export default function Refused() {
  return (
    <Example title="Refused">
      <Copilot provider={scriptedProvider(SAFE_EVENTS)} modes={[lookUp]} anchor="inline" />
      <DemoNote>
        In Look up mode, submit “what are this patient&apos;s current medications” to exercise the
        documented out-of-scope refusal.
      </DemoNote>
      <h3 className="m-0 text-sm font-medium" style={{ color: "var(--zb-text)" }}>
        Declined empty response
      </h3>
      <Copilot provider={scriptedProvider(DECLINED_EVENTS)} modes={[lookUp]} anchor="inline" />
      <DemoNote>The empty scripted answer exercises the component’s Declined register.</DemoNote>
    </Example>
  );
}
