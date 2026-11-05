import { ClinicalStatus, StatusLegend } from "@/components/zoblocks/clinical-status";

export default function OneDatumThreeShapesExample() {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <ClinicalStatus scale="criticality" step="critical" />
          <span className="text-sm text-slate-500">Default chip</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ClinicalStatus scale="criticality" step="critical" density="compact" />
          <span className="text-sm text-slate-500">Compact chip</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ClinicalStatus scale="criticality" step="critical" shape="dot" />
          <span className="text-sm text-slate-500">Dot</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ClinicalStatus scale="criticality" step="critical" shape="affix" />
          <span className="text-sm text-slate-500">Affix</span>
        </div>
      </div>

      <div className="border-t pt-5">
        <h3 className="mb-3 text-center font-semibold">Criticality legend</h3>

        <StatusLegend scale="criticality" />
      </div>
    </div>
  );
}
