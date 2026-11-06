import { AllergyChip } from "../components/zoblocks/allergy-chip";
import { allergyHighRisk, allergyLowRisk } from "@/data/allergy-fixtures";

export default function AllergyHighRisk() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">
          Two rows, one manifestation, opposite consequences
        </h2>
        <p className="text-sm text-gray-600">
          Both patients reacted with mild urticaria. Only the criticality field separates them, and
          it is the field most implementations drop — so the two rows render as identical warnings
          and a prescriber treats them the same.
        </p>
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-3">
          <AllergyChip record={allergyHighRisk} />
          <AllergyChip record={allergyLowRisk} />
        </div>
      </div>
    </section>
  );
}
