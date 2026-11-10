"use client";

import { TrendIndicator } from "@/components/zoblocks/trend-indicator";
import { creatinineTwoPoints } from "@/data/trend-fixtures";

export default function TwoPointsIsNotATrendExample() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900">Two points is not a trend</h2>

      <p className="mt-1 text-sm text-gray-600">
        It is a rhetorical device. Below three comparable points the component draws no line and
        says how many it has — because an absent trend and a trend that did not move are different
        facts, and drawing the second for the first is the lie it exists to refuse.
      </p>

      <div className="p-4">
        <TrendIndicator
          series={{
            id: "creatinine",
            label: "Creatinine",
            valence: "higher-is-worse",
            points: creatinineTwoPoints,
          }}
        />
      </div>
    </section>
  );
}
