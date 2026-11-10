"use client";

import { TrendIndicator } from "@/components/zoblocks/trend-indicator";
import { ferritin } from "@/data/trend-fixtures";

export default function ObservationCorrectedExample() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900">
        Where comparability breaks, the line breaks
      </h2>

      <p className="mt-1 text-sm text-gray-600">
        A lab switching immunoassay platforms shifts every ferritin by 20% with no clinical change
        at all. Two separate paths say &quot;these are not the same series&quot; without a legend; a
        dashed gap says it only to somebody who already knows the convention.
      </p>

      <div className="p-4">
        <TrendIndicator
          series={{
            id: "ferritin",
            label: "Ferritin",
            valence: "higher-is-worse",
            unit: "ng/mL",
            points: ferritin,
          }}
        />
      </div>
    </section>
  );
}
