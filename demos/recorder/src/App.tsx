import { CaptureExample } from "./examples/01-capture";
import { FullEncounterExample } from "./examples/02-full-encounter";
import { CompactControlExample } from "./examples/03-compact-control";
import { InlineDictationExample } from "./examples/04-inline-dictation";
import { MicrophoneMutedExample } from "./examples/05-microphone-muted";
import { DeviceLostExample } from "./examples/06-device-lost";
import { WrongMicrophoneExample } from "./examples/07-wrong-microphone";
import { AwaitingConsentExample } from "./examples/08-awaiting-consent";
import { HeldNotUploadedExample } from "./examples/09-held-not-uploaded";
import { DispositionStatesExample } from "./examples/10-disposition-states";
import { PlaybackWithSpeakersExample } from "./examples/11-playback-with-speakers";
import { PlaybackWithoutDiarisationExample } from "./examples/12-playback-without-diarisation";
import { LiveTranscriptExample } from "./examples/13-live-transcript";
import { TranscriptStalledExample } from "./examples/14-transcript-stalled";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <CaptureExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <FullEncounterExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <CompactControlExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <InlineDictationExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <MicrophoneMutedExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <DeviceLostExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <WrongMicrophoneExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <AwaitingConsentExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <HeldNotUploadedExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <DispositionStatesExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <PlaybackWithSpeakersExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <PlaybackWithoutDiarisationExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 border-b border-slate-200 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <LiveTranscriptExample />
          </div>
        </section>

        <section className="scroll-mt-6 space-y-4 pb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <TranscriptStalledExample />
          </div>
        </section>
      </div>
    </main>
  );
}
