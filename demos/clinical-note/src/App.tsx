import { EmptyProgressDraftExample } from "./examples/01-empty-progress-draft";
import { OriginVisibilityExample } from "./examples/02-origin-visibility";
import { SignGateExample } from "./examples/03-sign-gate";
import { TemplateBlanksExample } from "./examples/04-template-blanks";
import { SaveStateExample } from "./examples/05-save-state";
import { SignedReaderExample } from "./examples/06-signed-reader";
import { HistoryAndPhysicalExample } from "./examples/07-history-and-physical-sections";

export default function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col items-center gap-8 p-4 md:p-8">
      <header className="w-full max-w-6xl">
        <h1 className="text-2xl font-semibold text-ink">Clinical Note examples</h1>
        <p className="mt-2 text-sm text-graphite">
          Synthetic fictional content for interface demonstrations only. These examples are not
          clinical advice or clinically validated workflows.
        </p>
      </header>
      <EmptyProgressDraftExample />
      <OriginVisibilityExample />
      <SignGateExample />
      <TemplateBlanksExample />
      <SaveStateExample />
      <SignedReaderExample />
      <HistoryAndPhysicalExample />
    </main>
  );
}
