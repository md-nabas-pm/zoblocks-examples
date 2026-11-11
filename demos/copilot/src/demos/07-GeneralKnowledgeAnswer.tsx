import { Copilot } from "@/components/zoblocks/copilot";
import { Example, GENERAL_EVENTS, lookUp, scriptedProvider } from "./shared";

export default function GeneralKnowledgeAnswer() {
  return (
    <Example title="General-knowledge answer">
      <Copilot provider={scriptedProvider(GENERAL_EVENTS)} modes={[lookUp]} anchor="inline" />
    </Example>
  );
}
