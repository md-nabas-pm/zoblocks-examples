import CoverageIsArithmetic from "./demos/01-CoverageIsArithmetic";
import ATotalTheSourceWillNotGive from "./demos/02-ATotalTheSourceWillNotGive";
import EverythingWithNothingHidden from "./demos/03-EverythingWithNothingHidden";
import ThePredicateMatchedNobody from "./demos/04-ThePredicateMatchedNobody";
import ARefusalNotANineSecondPaint from "./demos/05-ARefusalNotANineSecondPaint";
import AnAbsenceSortsLast from "./demos/06-AnAbsenceSortsLast";
import SortingByAModel from "./demos/07-SortingByAModel";
import ResultsArriveNothingMoves from "./demos/08-ResultsArriveNothingMoves";
import TheRowTheReaderIsOn from "./demos/09-TheRowTheReaderIsOn";
import SelectedWithVerbs from "./demos/10-SelectedWithVerbs";
import PinnedIdentity from "./demos/11-PinnedIdentity";
import LoadingMore from "./demos/12-LoadingMore";
import FramedByTheHost from "./demos/13-FramedByTheHost";
import AnExportIsAnAttackSurface from "./demos/14-AnExportIsAnAttackSurface";

export default function Home() {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-10 px-5 py-10">
      <CoverageIsArithmetic />
      <ATotalTheSourceWillNotGive />
      <EverythingWithNothingHidden />
      <ThePredicateMatchedNobody />
      <ARefusalNotANineSecondPaint />
      <AnAbsenceSortsLast />
      <SortingByAModel />
      <ResultsArriveNothingMoves />
      <TheRowTheReaderIsOn />
      <SelectedWithVerbs />
      <PinnedIdentity />
      <LoadingMore />
      <FramedByTheHost />
      <AnExportIsAnAttackSurface />
    </main>
  );
}
