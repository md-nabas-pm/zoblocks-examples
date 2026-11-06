import { AllergyChip } from "../components/zoblocks/allergy-chip";
import { allergyModerate } from "@/data/allergy-fixtures";

export default function AllergyModerate() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">An intolerance is not a weak allergy</h2>
        <p className="text-sm text-gray-600">
          Akathisia on aripiprazole and sedation on quetiapine dominate psychotropic histories and
          are the entries most often lost, because somebody decided they were not real allergies.
          The kind is rendered as its own class.
        </p>
      </div>

      <div className="p-4">
        <AllergyChip record={allergyModerate} />
      </div>
    </section>
  );
}
