import DemoSection from "./DemoSection";
import { PulseLoader } from "../components/zoblocks/pulse-loader";

export default function SlowWaitDemo() {
  return (
    <DemoSection>
      <div className="flex min-h-[200px] items-center justify-center">
        <PulseLoader label="Loading your records" showLabel slowAfter={1200} />
      </div>
    </DemoSection>
  );
}
