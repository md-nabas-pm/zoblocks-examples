"use client";

import ObservationPanelExample from "./examples/01-observation-panel";
import ObservationCorrectedExample from "./examples/02-observation-corrected";
import ObservationPotassiumCriticalExample from "./examples/03-observation-potassium-critical";
import TwoPointsIsNotATrendExample from "./examples/04-two-points-is-not-a-trend";

export default function App() {
  return (
    <main className="min-h-screen bg-white px-6 py-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-10">
        <ObservationPanelExample />
        <ObservationCorrectedExample />
        <ObservationPotassiumCriticalExample />
        <TwoPointsIsNotATrendExample />
      </div>
    </main>
  );
}
