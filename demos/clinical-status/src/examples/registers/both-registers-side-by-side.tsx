import { ClinicalStatus } from "@/components/zoblocks/clinical-status";

const statuses = [
  { scale: "result-status", step: "entered-in-error" },
  { scale: "result-status", step: "preliminary" },
  { scale: "data-quality", step: "self-reported" },
  { scale: "access", step: "part-2" },
  { scale: "criticality", step: "critical" },
] as const;

export default function BothRegistersExample() {
  return (
    <div className="w-full space-y-6">
      {(["clinician", "patient"] as const).map((audience) => (
        <section key={audience} className="space-y-4 p-4">
          <h3 className="text-center font-semibold capitalize">{audience}</h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {statuses.map(({ scale, step }) => (
              <ClinicalStatus
                key={`${scale}-${step}`}
                scale={scale}
                step={step}
                audience={audience}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
