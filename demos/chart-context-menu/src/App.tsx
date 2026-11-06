import { useEffect } from "react";
import { ContextMenuStage } from "./context-menu-stage";
import PatientRoutineExample from "./examples/about/patient-routine";
import PatientRestrictedExample from "./examples/about/patient-restricted";
import ConsequenceRankExample from "./examples/consequence/consequence-rank";
import ReasonFirstAuditExample from "./examples/consequence/reason-first-audit";
import AvailabilityReasonsExample from "./examples/availability/availability-reasons";
import WithheldCountExample from "./examples/availability/withheld-count";
import PendingInPlaceExample from "./examples/availability/pending-in-place";
import TwoEmptiesExample from "./examples/availability/two-empties";
import ViewTogglesExample from "./examples/structure/view-toggles";
import SubmenuBesideRowExample from "./examples/structure/submenu-beside-row";

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        {/* Existing Context Menu Stage */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <ContextMenuStage density="standard" />
          </div>
        </section>

        {/* About: Patient Routine */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <PatientRoutineExample />
          </div>
        </section>

        {/* About: Patient Restricted */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <PatientRestrictedExample />
          </div>
        </section>

        {/* Consequences: Consequence is a rank, not a boolean */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <ConsequenceRankExample />
          </div>
        </section>

        {/* Consequences: The record is made when the reasons are offered */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <ReasonFirstAuditExample />
          </div>
        </section>

        {/* Availability: Unavailable, with the reason in place */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <AvailabilityReasonsExample />
          </div>
        </section>

        {/* Availability: Withheld is counted, never hidden */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <WithheldCountExample />
          </div>
        </section>

        {/* Availability: A menu that never moves under the cursor */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <PendingInPlaceExample />
          </div>
        </section>

        {/* Availability: Two empties, two sentences */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <TwoEmptiesExample />
          </div>
        </section>

        {/* Structure: Toggles are view state, always routine */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <ViewTogglesExample />
          </div>
        </section>

        {/* Structure: A submenu opens beside its row */}
        <section className="flex w-full items-center justify-center rounded-lg border p-6">
          <div className="w-full max-w-3xl">
            <SubmenuBesideRowExample />
          </div>
        </section>
      </div>
    </main>
  );
}
