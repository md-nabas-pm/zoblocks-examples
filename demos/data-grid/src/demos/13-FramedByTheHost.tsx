import { DemoGrid, Example } from "./shared";

export default function FramedByTheHost() {
  return (
    <Example title="Framed by the host, not by itself">
      <DemoGrid masthead={false} footer={false} />
    </Example>
  );
}
