import { Recorder } from "../components/zoblocks/recorder";
import { DEMO_TURNS } from "../data/recorder-fixtures";

export function LiveTranscriptExample() {
  return (
    <section className="mx-auto w-full max-w-3xl space-y-5">
      <Recorder variant="stream" phase="recording" turns={DEMO_TURNS} />
    </section>
  );
}
