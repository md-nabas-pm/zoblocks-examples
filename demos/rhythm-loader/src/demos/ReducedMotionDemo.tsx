import { RhythmLoader } from "../components/zoblocks/rhythm-loader";

export default function ReducedMotionDemo() {
  return (
    <section className="grid gap-3.5">
      <div className="overflow-hidden rounded-xl border border-[var(--zb-border)] bg-[var(--zb-surface)]">
        <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-10 px-7 py-11">
          <RhythmLoader motion="full" showLabel label="Full motion" />
          <RhythmLoader motion="reduced" showLabel label="Reduced motion" />
        </div>
      </div>
    </section>
  );
}
