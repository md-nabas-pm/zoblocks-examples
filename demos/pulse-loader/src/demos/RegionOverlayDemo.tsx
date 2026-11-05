import DemoSection from "./DemoSection";
import OverlayRegion from "./OverlayRegion";
import { PulseLoader } from "../components/zoblocks/pulse-loader";

export default function RegionOverlayDemo() {
  return (
    <DemoSection>
      <OverlayRegion>
        <PulseLoader mode="overlay" size="lg" label="Loading results" />
      </OverlayRegion>
    </DemoSection>
  );
}
