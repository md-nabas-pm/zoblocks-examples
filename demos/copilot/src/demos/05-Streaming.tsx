import { Copilot } from "@/components/zoblocks/copilot";
import { Example, SAFE_EVENTS, lookUp, scriptedProvider } from "./shared";

export default function Streaming() {
  return (
    <Example title="Streaming">
      <Copilot
        provider={scriptedProvider(SAFE_EVENTS, { delayMs: 900 })}
        modes={[lookUp]}
        anchor="inline"
      />
    </Example>
  );
}
