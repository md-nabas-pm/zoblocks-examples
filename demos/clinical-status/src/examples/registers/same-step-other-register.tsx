import { ClinicalStatus } from "@/components/zoblocks/clinical-status";

export default function SameStepOtherRegisterExample() {
  return (
    <div className="w-full space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-3 p-5">
          <h3 className="font-semibold">Clinical register</h3>

          <ClinicalStatus scale="result-status" step="entered-in-error" />
        </div>

        <div className="flex flex-col items-center gap-3 p-5">
          <h3 className="font-semibold">Patient register</h3>

          <ClinicalStatus scale="result-status" step="entered-in-error" audience="patient" />
        </div>
      </div>
    </div>
  );
}
