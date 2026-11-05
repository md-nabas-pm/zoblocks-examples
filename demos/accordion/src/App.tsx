import ApplicationRefusesExample from "./examples/governed-sections/application-refuses";
import BreakGlassWithReasonExample from "./examples/governed-sections/break-glass-with-reason";
import ConsentGateExample from "./examples/governed-sections/consent-gate";
import ReaderChoosesWhenToSeeItExample from "./examples/governed-sections/reader-chooses-when-to-see-it";
import WithheldAndSayingSoExample from "./examples/governed-sections/withheld-and-saying-so";
import DensityIsSpacingExample from "./examples/structures/density-is-spacing";
import NestedWithHeadingLevelsExample from "./examples/structures/nested-with-heading-levels";
import SingleDisclosureExample from "./examples/structures/single-disclosure";
import ThreeVariantsExample from "./examples/structures/three-variants";
import OneSectionAtATimeExample from "./examples/the-record/one-section-at-a-time";
import RecordReadsWhileClosedExample from "./examples/the-record/record-reads-while-closed";
import SectionCannotBeClosedExample from "./examples/the-record/section-cannot-be-closed";

export default function App() {
  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <RecordReadsWhileClosedExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <SectionCannotBeClosedExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <OneSectionAtATimeExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <ReaderChoosesWhenToSeeItExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <BreakGlassWithReasonExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <ConsentGateExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <ApplicationRefusesExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <WithheldAndSayingSoExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <NestedWithHeadingLevelsExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <ThreeVariantsExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <DensityIsSpacingExample />
        </section>

        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <SingleDisclosureExample />
        </section>
      </div>
    </main>
  );
}
