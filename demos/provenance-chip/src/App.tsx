import { SourceTypesExample } from "./examples/01-source-types";
import { FreshnessStatesExample } from "./examples/02-freshness-states";
import { AiExtractedExample } from "./examples/03-ai-extracted";

export default function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto w-full max-w-5xl space-y-12">
        <SourceTypesExample />
        <FreshnessStatesExample />
        <AiExtractedExample />
      </div>
    </main>
  );
}
