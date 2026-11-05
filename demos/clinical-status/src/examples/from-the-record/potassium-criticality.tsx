import { ClinicalStatus, fromInterpretation } from "@/components/zoblocks/clinical-status";

export default function PotassiumCriticalityExample() {
  const step = fromInterpretation("HH");

  return (
    <section className="max-w">
      {step && (
        <ClinicalStatus scale="criticality" step={step} qualifier="resulted 41 minutes ago" />
      )}
    </section>
  );
}
