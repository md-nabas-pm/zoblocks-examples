import TheDateDriversAndFraming from "./demos/TheDateDriversAndFraming";
import ExpiredNotOld from "./demos/ExpiredNotOld";
import NotScoredIsNotLow from "./demos/NotScoredIsNotLow";
import WhenOneFactorIsMostOfTheScore from "./demos/WhenOneFactorIsMostOfTheScore";
import ScoreBands from "./demos/ScoreBands";

export default function App() {
  return (
    <main style={{ display: "grid", gap: 32, maxWidth: 760, margin: "0 auto", padding: 24 }}>
      <TheDateDriversAndFraming />
      <ExpiredNotOld />
      <NotScoredIsNotLow />
      <WhenOneFactorIsMostOfTheScore />
      <ScoreBands />
    </main>
  );
}
