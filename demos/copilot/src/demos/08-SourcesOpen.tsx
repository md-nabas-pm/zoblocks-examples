import { Copilot } from "@/components/zoblocks/copilot";
import {
  DemoNote,
  DOSE_EVENTS,
  Example,
  MULTI_SOURCE_EVENTS,
  lookUp,
  scriptedProvider,
} from "./shared";

export default function SourcesOpen() {
  return (
    <Example title="Sources open">
      <DemoNote>
        Submit the sample question, open a citation marker, then choose Show sources. These are
        fictional, non-clinical fixtures. The guideline has an example.invalid URL; the
        organization-policy source has no URL. “Match” is retrieval metadata, not clinical
        confidence.
      </DemoNote>
      <Copilot provider={scriptedProvider(MULTI_SOURCE_EVENTS)} modes={[lookUp]} anchor="inline" />
      <h3 className="m-0 text-sm font-medium" style={{ color: "var(--zb-text)" }}>
        Documented dose example
      </h3>
      <DemoNote>
        This exact documented scripted wording is illustrative only, is not validated clinical
        advice, and requires clinical review. The displayed source passage does not establish that
        the dose is correct.
      </DemoNote>
      <Copilot provider={scriptedProvider(DOSE_EVENTS)} modes={[lookUp]} anchor="inline" />
    </Example>
  );
}
