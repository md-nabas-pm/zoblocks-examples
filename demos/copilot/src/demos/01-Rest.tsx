import { Copilot } from "@/components/zoblocks/copilot";
import { Example, lookUp, SAFE_EVENTS, scriptedProvider } from "./shared";

export default function Rest() {
  return (
    <Example title="Rest">
      <Copilot provider={scriptedProvider(SAFE_EVENTS)} modes={[lookUp]} anchor="inline" />
    </Example>
  );
}
