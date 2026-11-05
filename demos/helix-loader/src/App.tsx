import WhilePanelRunsDemo from "./demos/WhilePanelRunsDemo";
import SlowWaitWayOutDemo from "./demos/SlowWaitWayOutDemo";
import FourSizesDemo from "./demos/FourSizesDemo";
import DefaultDemo from "./demos/DefaultDemo";
import AnalysisPanelDemo from "./demos/AnalysisPanelDemo";
import ReducedMotionDemo from "./demos/ReducedMotionDemo";

export default function App() {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-8">
      <section className="grid gap-7">
        <div className="grid gap-9">
          <WhilePanelRunsDemo />
          <SlowWaitWayOutDemo />
          <FourSizesDemo />
        </div>
      </section>
      <section className="grid gap-7">
        <div className="grid gap-9">
          <DefaultDemo />
          <AnalysisPanelDemo />
          <ReducedMotionDemo />
        </div>
      </section>
    </main>
  );
}
