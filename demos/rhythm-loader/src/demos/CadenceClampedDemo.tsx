import { RhythmLoader } from "../components/zoblocks/rhythm-loader";

export default function CadenceClampedDemo() {
  return (
    <section className="grid gap-3.5">
      <div className="overflow-hidden rounded-xl border border-[var(--zb-border)] bg-[var(--zb-surface)]">
        <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-10 px-7 py-11">
          <RhythmLoader bpm={40} showLabel label="40 bpm" />
          <RhythmLoader bpm={60} showLabel label="60 bpm" />
          <RhythmLoader bpm={100} showLabel label="100 bpm" />
        </div>
      </div>
    </section>
  );
}
