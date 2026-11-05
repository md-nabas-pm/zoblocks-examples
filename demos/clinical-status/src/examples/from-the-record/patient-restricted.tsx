import { ClinicalStatus } from "@/components/zoblocks/clinical-status";

export default function PatientRestrictedExample() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <ClinicalStatus scale="access" step="part-2" />
    </div>
  );
}
