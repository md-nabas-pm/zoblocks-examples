import DemoSection from "./DemoSection";
import { PulseLoader } from "../components/zoblocks/pulse-loader";

export default function NumericSizeFallbackDemo() {
  return (
    <DemoSection>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <PulseLoader size={88} label="Loading" />
        <PulseLoader size={56} label="Loading" />
        <PulseLoader size={24} label="Loading" />
        <PulseLoader size={20} label="Loading" />
      </div>
    </DemoSection>
  );
}
