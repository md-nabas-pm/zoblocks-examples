import { BreathLoader } from "../components/zoblocks/breath-loader";

export default function CalmWaitDemo() {
  return (
    <section className="grid gap-3.5">
      <div className="overflow-hidden rounded-xl border border-[var(--zb-border)] bg-[var(--zb-surface)]">
        <div className="flex min-h-[220px] items-center justify-center px-7 py-11">
          <BreathLoader
            showLabel
            label="Loading your information"
            hint="This usually takes a few seconds."
          />
        </div>
      </div>
    </section>
  );
}
