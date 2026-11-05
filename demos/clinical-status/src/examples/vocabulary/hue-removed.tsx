import { ClinicalStatus } from "@/components/zoblocks/clinical-status";

const statuses = [
  { scale: "criticality", step: "critical" },
  { scale: "criticality", step: "high" },
  { scale: "criticality", step: "normal" },
  { scale: "criticality", step: "not-assessed" },
  { scale: "access", step: "restricted" },
  { scale: "result-status", step: "preliminary" },
] as const;

export default function HueRemovedExample() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold">In colour</h3>

        <div className="flex flex-wrap gap-3">
          {statuses.map(({ scale, step }) => (
            <ClinicalStatus key={`${scale}-${step}`} scale={scale} step={step} />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Desaturated</h3>

        <div className="flex flex-wrap gap-3" style={{ filter: "grayscale(1)" }}>
          {statuses.map(({ scale, step }) => (
            <ClinicalStatus key={`${scale}-${step}`} scale={scale} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}
