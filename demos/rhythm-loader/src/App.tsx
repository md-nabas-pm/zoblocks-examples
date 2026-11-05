import InsideButtonDemo from "./demos/InsideButtonDemo";
import CadenceClampedDemo from "./demos/CadenceClampedDemo";
import ReducedMotionDemo from "./demos/ReducedMotionDemo";

export default function App() {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-10 px-5 py-8">
      <InsideButtonDemo />
      <CadenceClampedDemo />
      <ReducedMotionDemo />
    </main>
  );
}
