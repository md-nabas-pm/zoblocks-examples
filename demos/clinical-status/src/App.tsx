import PotassiumCriticalityExample from "./examples/from-the-record/potassium-criticality";
import PatientRestrictedExample from "./examples/from-the-record/patient-restricted";
import NineScalesExample from "./examples/vocabulary/nine-scales-one-vocabulary";
import HueRemovedExample from "./examples/vocabulary/hue-removed";
import OneDatumThreeShapesExample from "./examples/presentations/one-datum-three-shapes";
import FortyRowsNoPillsExample from "./examples/presentations/forty-rows-no-pills";
import SameStepOtherRegisterExample from "./examples/registers/same-step-other-register";
import BothRegistersExample from "./examples/registers/both-registers-side-by-side";

export default function App() {
  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <PotassiumCriticalityExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <PatientRestrictedExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <NineScalesExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <HueRemovedExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <OneDatumThreeShapesExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <FortyRowsNoPillsExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <SameStepOtherRegisterExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <BothRegistersExample />
        </section>
      </div>
    </main>
  );
}
