import { CareTimeline } from "@/components/zoblocks/care-timeline";
import { NewestFirstExample } from "./examples/view/newest-first";
import { SourceUnavailableExample } from "./examples/view/source-unavailable";
import { StatedGapExample } from "./examples/view/stated-gap";
import { FilteredRegistersExample } from "./examples/view/filtered-registers";
import { EmptyStatesExample } from "./examples/view/empty-states";
import { DashboardCardExample } from "./examples/view/dashboard-card";
import { PlannedAboveNowExample } from "./examples/planned-and-happened/planned-above-now";
import { LapsedPlannedExample } from "./examples/planned-and-happened/lapsed-planned";
import { CancelledVsNotDoneExample } from "./examples/planned-and-happened/cancelled-vs-not-done";
import { AmendedWithDeltaExample } from "./examples/corrections-access/amended-with-delta";
import { EnteredInErrorExample } from "./examples/corrections-access/entered-in-error";
import { RestrictedRecordExample } from "./examples/corrections-access/restricted-record";
import { ConsentGatedExample } from "./examples/corrections-access/consent-gated";
import { QuestionnaireThreadExample } from "./examples/reading/questionnaire-thread";
import { ClusterWithCriticalEvent } from "./examples/reading/cluster-with-critical-event";
import { NewSinceLastReviewedExample } from "./examples/reading/new-since-last-reviewed";
import { ImpreciseDateExample } from "./examples/reading/imprecise-date";
import { ClinicalOnOneSideExample } from "./examples/reading/clinical-on-one-side";
import { PatientFacingUnreviewedResultExample } from "./examples/reading/patient-facing-unreviewed-result";

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 gap-3.5">
      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <CareTimeline
            aria-label="Care timeline for Ada Lovelace"
            events={[]}
            now={"2025-07-01"}
            coverage={{
              window: { from: "2025-07-01" },
              order: "newest-first",
              total: 43,
              hidden: [{ reason: "access", count: 2 }],
              sources: [
                { id: "ehr", label: "Northside EHR", status: "ok" },
                {
                  id: "hie",
                  label: "Northside Regional Exchange",
                  status: "unavailable",
                  detail: "Timed out after 8s.",
                },
              ],
            }}
            group="auto"
            cluster={{ kinds: ["observation"], within: "P3D", min: 3 }}
            seenThrough="2026-08-12T14:02:00+05:30"
            lateEntryAfter="P2D"
            onLoadOlder={() => console.log("onLoadOlder called")}
          />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <NewestFirstExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <SourceUnavailableExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <StatedGapExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <FilteredRegistersExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <EmptyStatesExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <DashboardCardExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <PlannedAboveNowExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <LapsedPlannedExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <CancelledVsNotDoneExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <AmendedWithDeltaExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <EnteredInErrorExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <RestrictedRecordExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <ConsentGatedExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <QuestionnaireThreadExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <ClusterWithCriticalEvent />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <NewSinceLastReviewedExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <ImpreciseDateExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <ClinicalOnOneSideExample />
        </div>
      </section>

      <section className="w-full max-w-3xl flex items-center justify-center rounded-lg border p-6">
        <div className="w-full">
          <PatientFacingUnreviewedResultExample />
        </div>
      </section>
    </div>
  );
}
