import KnownProgressDemo from "./demos/KnownProgressDemo";
import ProgressFromImportDemo from "./demos/ProgressFromImportDemo";
import BeforeTotalKnownDemo from "./demos/BeforeTotalKnownDemo";
import DeterminateDemo from "./demos/DeterminateDemo";
import IndeterminateDemo from "./demos/IndeterminateDemo";
import ZeroAndFullDemo from "./demos/ZeroAndFullDemo";
import ReducedMotionDemo from "./demos/ReducedMotionDemo";

export default function App() {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-8">
      <section className="grid gap-7">
        <div className="grid gap-9">
          <KnownProgressDemo />
          <ProgressFromImportDemo />
          <BeforeTotalKnownDemo />
        </div>
      </section>
      <section className="grid gap-7">
        <div className="grid gap-9">
          <DeterminateDemo />
          <IndeterminateDemo />
          <ZeroAndFullDemo />
          <ReducedMotionDemo />
        </div>
      </section>
    </main>
  );
}
