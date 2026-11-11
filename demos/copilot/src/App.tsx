import Rest from "./demos/01-Rest";
import ModeTray from "./demos/02-ModeTray";
import Shortcuts from "./demos/03-Shortcuts";
import Dictating from "./demos/04-Dictating";
import Streaming from "./demos/05-Streaming";
import GroundedAnswer from "./demos/06-GroundedAnswer";
import GeneralKnowledgeAnswer from "./demos/07-GeneralKnowledgeAnswer";
import SourcesOpen from "./demos/08-SourcesOpen";
import Refused from "./demos/09-Refused";
import Crisis from "./demos/10-Crisis";
import ErrorState from "./demos/11-Error";
import Suppressed from "./demos/12-Suppressed";

export default function App() {
  return (
    <main className="mx-auto grid w-full max-w-4xl gap-10 px-5 py-8">
      <Rest />
      <ModeTray />
      <Shortcuts />
      <Dictating />
      <Streaming />
      <GroundedAnswer />
      <GeneralKnowledgeAnswer />
      <SourcesOpen />
      <Refused />
      <Crisis />
      <ErrorState />
      <Suppressed />
    </main>
  );
}
