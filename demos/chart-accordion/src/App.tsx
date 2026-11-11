import ClinicalOverviewExample from "./examples/01-clinical-overview";
import OpenOnArrivalExample from "./examples/02-open-on-arrival";
import PinnedSafetySectionExample from "./examples/03-pinned-safety-section";
import WithheldRecordsExample from "./examples/04-withheld-records";
import ConsentRequiredExample from "./examples/05-consent-required";
import BreakGlassAccessExample from "./examples/06-break-glass-access";
import DisclosureRefusedExample from "./examples/07-disclosure-refused";
import AdvisoryBeforeDisclosureExample from "./examples/08-advisory-before-disclosure";

export default function App() {
  return (
    <main className="min-h-screen space-y-8 bg-white px-6 py-8">
      <div className="mx-auto max-w-xl space-y-8">
        <ClinicalOverviewExample />
        <OpenOnArrivalExample />
        <PinnedSafetySectionExample />
        <WithheldRecordsExample />
        <ConsentRequiredExample />
        <BreakGlassAccessExample />
        <DisclosureRefusedExample />
        <AdvisoryBeforeDisclosureExample />
      </div>
    </main>
  );
}
