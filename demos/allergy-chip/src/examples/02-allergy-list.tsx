import { AllergyList } from "../components/zoblocks/allergy-chip";
import { allergyListKnown, allergyListUnattributed } from "@/data/allergy-fixtures";

export default function AllergyListExample() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">The two absences that are not the same fact</h2>
        <p className="text-sm text-gray-600">
          A no-known assertion is a positive clinical finding with an author and a date, and it is
          safe to prescribe against. An unrecorded status is neither. Supply an assertion without
          its author and the component renders the second, because that is what an unattributed
          assertion is worth.
        </p>
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-4">
          <AllergyList noneKnown={allergyListKnown} />

          <AllergyList noneKnown={allergyListUnattributed} onAsk={() => {}} />
        </div>
      </div>
    </section>
  );
}
