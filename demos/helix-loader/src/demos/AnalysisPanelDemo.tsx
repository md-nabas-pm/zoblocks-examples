import DemoSection from "./DemoSection";
import AnalysisRegion from "./AnalysisRegion";
import { HelixLoader } from "../components/zoblocks/helix-loader";

export default function AnalysisPanelDemo() {
  return (
    <DemoSection>
      <AnalysisRegion>
        <HelixLoader mode="overlay" label="Running the panel" hint="Sequencing 4 of 12 samples" />
      </AnalysisRegion>
    </DemoSection>
  );
}
