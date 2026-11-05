import * as React from "react";
import DemoSection from "./DemoSection";
import { InfusionLoader } from "../components/zoblocks/infusion-loader";

function AdvancingInfusion() {
  const [progress, setProgress] = React.useState(8);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => (current >= 100 ? 8 : current + 2));
    }, 220);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <InfusionLoader
      progress={progress}
      label="Importing records"
      showLabel
      hint="1,284 of 3,000 records"
    />
  );
}

export default function DeterminateDemo() {
  return (
    <DemoSection>
      <AdvancingInfusion />
    </DemoSection>
  );
}
