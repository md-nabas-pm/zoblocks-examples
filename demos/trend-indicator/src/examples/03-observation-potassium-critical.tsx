"use client";

import { TrendIndicator } from "@/components/zoblocks/trend-indicator";
import { phq9ReliableChange } from "@/data/trend-fixtures";

export default function ObservationPotassiumCriticalExample() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900">Two points of PHQ-9 is not a change</h2>

      <p className="mt-1 text-sm text-gray-600">
        Below the reliable-change threshold the trend renders flat and neutral, whatever the
        arithmetic says. That is the clinical rule for the instrument, not a softening of a real
        move.
      </p>

      <div className="p-4">
        <TrendIndicator
          series={{
            id: "phq9-reliable-change",
            label: "PHQ-9",
            valence: "higher-is-worse",
            significantChange: 5,
            points: phq9ReliableChange,
          }}
        />
      </div>
    </section>
  );
}
