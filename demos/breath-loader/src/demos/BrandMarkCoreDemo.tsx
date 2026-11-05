import { BreathLoader } from "../components/zoblocks/breath-loader";

function ClinicLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="11" y="3" width="6" height="22" rx="2" fill="currentColor" />
      <rect x="3" y="11" width="22" height="6" rx="2" fill="currentColor" />
    </svg>
  );
}

export default function BrandMarkCoreDemo() {
  return (
    <section className="grid gap-3.5">
      <div className="overflow-hidden rounded-xl border border-[var(--zb-border)] bg-[var(--zb-surface)]">
        <div className="flex min-h-[220px] items-center justify-center px-7 py-11">
          <BreathLoader size="xl" showLabel label="Signing you in">
            <ClinicLogo />
          </BreathLoader>
        </div>
      </div>
    </section>
  );
}
