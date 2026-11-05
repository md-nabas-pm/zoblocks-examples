import DemoSection from "./DemoSection";
import { InfusionLoader } from "../components/zoblocks/infusion-loader";

export default function IndeterminateDemo() {
  return (
    <DemoSection>
      <InfusionLoader label="Preparing the export" showLabel />
    </DemoSection>
  );
}
