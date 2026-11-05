import { PatientRoutineExample } from "./examples/01-patient-routine";
import { PatientRestrictedExample } from "./examples/02-patient-restricted";
import { SegmentedVariantExample } from "./examples/03-variant-segmented";
import { SegmentedIconsCountsExample } from "./examples/04-segmented-icons-counts";
import { UnderlineVariantExample } from "./examples/05-variant-underline";
import { PillFiltersExample } from "./examples/06-variant-pill-filters";
import { EnclosedAddCloseExample } from "./examples/07-enclosed-add-close";
import { RailVariantExample } from "./examples/08-variant-rail";
import { GhostVariantExample } from "./examples/09-variant-ghost";
import { CommandVariantExample } from "./examples/10-variant-command";
import { StepperVariantExample } from "./examples/11-variant-stepper";
import { CardVariantExample } from "./examples/12-variant-card";
import { StatVariantExample } from "./examples/13-variant-stat";
import { SemanticSegmentedFormExample } from "./examples/14-semantic-segmented-form";
import { NavigationRealLinksExample } from "./examples/15-navigation-real-links";
import { OverflowScrollExample } from "./examples/16-overflow-scroll";
import { OverflowMenuExample } from "./examples/17-overflow-menu";
import { OverflowCollapseExample } from "./examples/18-overflow-collapse";
import { UnsavedChangesGuardExample } from "./examples/19-unsaved-changes-guard";
import { RestrictedAndStaleExample } from "./examples/20-restricted-and-stale";
import { SeverityInStripExample } from "./examples/21-severity-in-strip";
import { EveryVariantOneTreeExample } from "./examples/22-every-variant-one-tree";
import { ThemeDensityExample } from "./examples/23-theme-density";

export default function App() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-10">
      <PatientRoutineExample />

      <PatientRestrictedExample />

      <SegmentedVariantExample />

      <SegmentedIconsCountsExample />

      <UnderlineVariantExample />

      <PillFiltersExample />

      <EnclosedAddCloseExample />

      <RailVariantExample />

      <GhostVariantExample />

      <CommandVariantExample />

      <StepperVariantExample />

      <CardVariantExample />

      <StatVariantExample />

      <SemanticSegmentedFormExample />

      <NavigationRealLinksExample />

      <OverflowScrollExample />

      <OverflowMenuExample />

      <OverflowCollapseExample />

      <UnsavedChangesGuardExample />

      <RestrictedAndStaleExample />

      <SeverityInStripExample />

      <EveryVariantOneTreeExample />

      <ThemeDensityExample />
    </main>
  );
}
