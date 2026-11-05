import DemoSection from "./DemoSection";
import { InfusionLoader } from "../components/zoblocks/infusion-loader";

export default function ZeroAndFullDemo() {
  return (
    <DemoSection>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <InfusionLoader progress={0} label="Starting" showLabel />
        <InfusionLoader progress={100} label="Complete" showLabel />
      </div>
    </DemoSection>
  );
}
