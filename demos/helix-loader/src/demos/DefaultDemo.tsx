import DemoSection from "./DemoSection";
import { HelixLoader } from "../components/zoblocks/helix-loader";

export default function DefaultDemo() {
  return (
    <DemoSection>
      <div className="flex min-h-[200px] items-center justify-center">
        <HelixLoader label="Running the panel" showLabel />
      </div>
    </DemoSection>
  );
}
