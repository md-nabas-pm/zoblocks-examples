import { Copilot } from "@/components/zoblocks/copilot";
import { Example, lookUp, SAFE_EVENTS, scriptedProvider } from "./shared";

export default function Dictating() {
  return (
    <Example title="Dictating">
      <Copilot provider={scriptedProvider(SAFE_EVENTS)} modes={[lookUp]} anchor="inline" />
    </Example>
  );
}
