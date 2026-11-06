import AllergyHighRisk from "./examples/01-allergy-high-risk";
import AllergyListExample from "./examples/02-allergy-list";
import AllergyModerate from "./examples/03-allergy-moderate";
import AllergyRefuted from "./examples/04-allergy-refuted";

export default function App() {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto flex max-w-lg flex-col gap-8">
        <AllergyHighRisk />

        <AllergyListExample />

        <AllergyModerate />

        <AllergyRefuted />
      </div>
    </main>
  );
}
