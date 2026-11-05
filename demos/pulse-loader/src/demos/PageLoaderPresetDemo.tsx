import DemoSection from "./DemoSection";
import OverlayRegion from "./OverlayRegion";
import { PageLoader } from "../components/zoblocks/pulse-loader";

export default function PageLoaderPresetDemo() {
  return (
    <DemoSection>
      <OverlayRegion>
        <PageLoader mode="overlay" label="Loading your records" />
      </OverlayRegion>
    </DemoSection>
  );
}
