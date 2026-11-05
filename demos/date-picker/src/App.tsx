import AppointmentDateExample from "./examples/fields/appointment-date";
import AppointmentPickerExample from "./examples/fields/appointment-picker";
import BirthDateExample from "./examples/fields/birth-date";
import DateFieldExample from "./examples/fields/date-field";
import FourJobsFourVariantsExample from "./examples/fields/four-jobs-four-variants";
import PartialBirthDateExample from "./examples/fields/partial-birth-date";
import PatientRoutineExample from "./examples/fields/patient-routine";
import ReadoutExample from "./examples/fields/readout";
import TimePickerExample from "./examples/fields/time-picker";
import PanelExplanationExample from "./examples/calender/panel-explanation";
import OneTabStopExample from "./examples/calender/one-tab-stop";
import SeveralDatesExample from "./examples/calender/several-dates";
import TwoClickRangeExample from "./examples/calender/range-two-clicks";
import TwoMonthsOneControlsExample from "./examples/calender/two-months-one-controls";
import RangeFieldBothEndsTypedExample from "./examples/calender/range-field-both-ends-typed";
import ThreeValuesTwoDegreesExample from "./examples/sessions/three-values-two-degrees";
import OvernightAndGuardExample from "./examples/sessions/overnight-and-guard";
import BandsAreTheHostsExample from "./examples/sessions/bands-are-the-hosts";
import TimeRangeTwoColumnsFilteredExample from "./examples/sessions/time-range-two-columns-filtered";
import AvailabilityWithAnAgeExample from "./examples/bookings/availability-with-an-age";
import ExhaustedNotEmptyExample from "./examples/bookings/exhausted-not-empty";
import ProviderDayTimeOneSurfaceExample from "./examples/bookings/provider-day-time-one-surface";
import RuleInWordsExample from "./examples/series/rule-in-words";
import RefusalInFullExample from "./examples/series/refusal-in-full";
import CollisionsResolvedBeforeWritingExample from "./examples/series/collisions-resolved-before-writing";
import EncounterRoutineExample from "./examples/series/encounter-routine";
import DaylightSavingClassifiedExample from "./examples/rules-it-keeps/daylight-saving-classified";
import DensityAndDirectionExample from "./examples/rules-it-keeps/density-and-direction";
import EveryThemeAgainstEveryDensityExample from "./examples/rules-it-keeps/every-theme-against-every-density";

export default function App() {
  return (
    <main className="flex flex-col items-center gap-6 p-6">
      <section className="rounded-lg border p-6">
        <AppointmentDateExample />
      </section>

      <section className="rounded-lg border p-6">
        <BirthDateExample />
      </section>

      <section className="rounded-lg border p-6">
        <PatientRoutineExample />
      </section>

      <section className="rounded-lg border p-6">
        <PartialBirthDateExample />
      </section>

      <section className="rounded-lg border p-6">
        <TimePickerExample />
      </section>

      <section className="rounded-lg border p-6">
        <FourJobsFourVariantsExample />
      </section>

      <section className="rounded-lg border p-6">
        <ReadoutExample />
      </section>

      <section className="rounded-lg border p-6">
        <PatientRoutineExample />
      </section>

      <section className="rounded-lg border p-6">
        <DateFieldExample />
      </section>

      <section className="rounded-lg border p-6">
        <AppointmentPickerExample />
      </section>

      <section className="rounded-lg border p-6">
        <PanelExplanationExample />
      </section>

      <section className="rounded-lg border p-6">
        <OneTabStopExample />
      </section>

      <section className="rounded-lg border p-6">
        <SeveralDatesExample />
      </section>

      <section className="rounded-lg border p-6">
        <TwoClickRangeExample />
      </section>

      <section className="rounded-lg border p-6">
        <TwoMonthsOneControlsExample />
      </section>

      <section className="rounded-lg border p-6">
        <RangeFieldBothEndsTypedExample />
      </section>

      <section className="rounded-lg border p-6">
        <ThreeValuesTwoDegreesExample />
      </section>

      <section className="rounded-lg border p-6">
        <OvernightAndGuardExample />
      </section>

      <section className="rounded-lg border p-6">
        <BandsAreTheHostsExample />
      </section>

      <section className="rounded-lg border p-6">
        <TimeRangeTwoColumnsFilteredExample />
      </section>

      <section className="rounded-lg border p-6">
        <AvailabilityWithAnAgeExample />
      </section>

      <section className="rounded-lg border p-6">
        <ExhaustedNotEmptyExample />
      </section>

      <section className="rounded-lg border p-6">
        <ProviderDayTimeOneSurfaceExample />
      </section>

      <section className="rounded-lg border p-6">
        <RuleInWordsExample />
      </section>

      <section className="rounded-lg border p-6">
        <RefusalInFullExample />
      </section>

      <section className="rounded-lg border p-6">
        <CollisionsResolvedBeforeWritingExample />
      </section>

      <section className="rounded-lg border p-6">
        <EncounterRoutineExample />
      </section>

      <section className="rounded-lg border p-6">
        <DaylightSavingClassifiedExample />
      </section>

      <section className="rounded-lg border p-6">
        <DensityAndDirectionExample />
      </section>

      <section className="rounded-lg border p-6">
        <EveryThemeAgainstEveryDensityExample />
      </section>
    </main>
  );
}
