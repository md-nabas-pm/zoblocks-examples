import { ClinicalStatus } from "@/components/zoblocks/clinical-status";
import { SCALES, SCALE_NAMES } from "@/lib/zoblocks-clinical-status";

export default function NineScalesExample() {
  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Nine scales, one vocabulary</h2>

        <p className="mt-2 text-sm text-slate-600">
          Each status has a consistent tone, glyph, and label across the application. No free-text
          status values are needed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SCALE_NAMES.map((scale) => (
          <section key={scale} className="rounded-lg border border-slate-200 p-4">
            <h3 className="mb-4 font-semibold">{SCALES[scale].label}</h3>

            <div className="flex flex-wrap gap-3">
              {SCALES[scale].steps.map((step) => (
                <ClinicalStatus key={step.id} scale={scale} step={step.id} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
