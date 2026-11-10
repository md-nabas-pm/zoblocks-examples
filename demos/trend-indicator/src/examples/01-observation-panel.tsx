"use client";

import { TrendIndicator } from "@/components/zoblocks/trend-indicator";
import { egfr, phq9 } from "@/data/trend-fixtures";

export default function ObservationPanelExample() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900">
        A falling line is not automatically good news
      </h2>

      <p className="mt-1 text-sm text-gray-600">
        The same shape, twice. A falling PHQ-9 is improvement; a falling eGFR is not. Valence is a
        required prop because a library that guesses gets half of all clinical measures wrong,
        silently, in green.
      </p>

      <div className="p-4">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">PHQ-9</span>

            <TrendIndicator
              series={{
                id: "phq9",
                label: "PHQ-9",
                valence: "higher-is-worse",
                significantChange: 5,
                points: phq9,
              }}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">eGFR</span>

            <TrendIndicator
              series={{
                id: "egfr",
                label: "eGFR",
                valence: "higher-is-better",
                unit: "mL/min",
                points: egfr,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
