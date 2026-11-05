import DemoSection from "./DemoSection";
import { InfusionLoader } from "../components/zoblocks/infusion-loader";

export default function ReducedMotionDemo() {
  return (
    <DemoSection>
      <div className="grid w-full max-w-sm gap-6">
        <InfusionLoader progress={42} label="Importing records" showLabel motion="reduced" />
        <InfusionLoader label="Preparing the export" showLabel motion="reduced" />
      </div>
    </DemoSection>
  );
}
