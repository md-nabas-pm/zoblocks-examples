import InSessionVsSignedOut from "./examples/01-in-session-vs-signed-out";
import CoverageGap from "./examples/02-coverage-gap";
import DoNotDisturbRedirect from "./examples/03-do-not-disturb-redirect";
import ChartCoPresenceExample from "./examples/04-chart-co-presence";

export default function App() {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto flex max-w-lg flex-col gap-8">
        <InSessionVsSignedOut />

        <CoverageGap />

        <DoNotDisturbRedirect />

        <ChartCoPresenceExample />
      </div>
    </main>
  );
}
