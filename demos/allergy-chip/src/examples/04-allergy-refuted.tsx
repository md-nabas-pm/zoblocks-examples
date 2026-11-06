import { AllergyChip } from "../components/zoblocks/allergy-chip";
import { allergyRefuted } from "@/data/allergy-fixtures";

export default function AllergyRefuted() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">A refuted entry stays in the record</h2>
        <p className="text-sm text-gray-600">
          Struck through and dimmed rather than deleted. A refuted allergy that vanishes gets
          re-reported at the next intake, and the rechallenge that disproved it is the most useful
          thing in the chart.
        </p>
      </div>

      <div className="p-4">
        <AllergyChip record={allergyRefuted} />
      </div>
    </section>
  );
}
