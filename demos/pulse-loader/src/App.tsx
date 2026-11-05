import RegionDelayDemo from "./demos/RegionDelayDemo";
import StallCallbackDemo from "./demos/StallCallbackDemo";
import NamedSizeFallbackDemo from "./demos/NamedSizeFallbackDemo";
import PageBootDemo from "./demos/PageBootDemo";
import RegionOverlayDemo from "./demos/RegionOverlayDemo";
import SlowWaitDemo from "./demos/SlowWaitDemo";
import ReducedMotionDemo from "./demos/ReducedMotionDemo";
import NumericSizeFallbackDemo from "./demos/NumericSizeFallbackDemo";
import PageLoaderPresetDemo from "./demos/PageLoaderPresetDemo";

export default function App() {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-8">
      <section className="grid gap-7">
        <div className="grid gap-9">
          <RegionDelayDemo />
          <StallCallbackDemo />
          <NamedSizeFallbackDemo />
        </div>
      </section>
      <section className="grid gap-7">
        <div className="grid gap-9">
          <PageBootDemo />
          <RegionOverlayDemo />
          <SlowWaitDemo />
          <ReducedMotionDemo />
          <NumericSizeFallbackDemo />
          <PageLoaderPresetDemo />
        </div>
      </section>
    </main>
  );
}
