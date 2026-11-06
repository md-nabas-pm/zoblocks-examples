import OutOfScopeCount from "./demos/OutOfScopeCount";
import EveryPatientSearchRecorded from "./demos/EveryPatientSearchRecorded";
import ActionsRankAboveRecords from "./demos/ActionsRankAboveRecords";
import SignificantActionConfirmation from "./demos/SignificantActionConfirmation";

export default function App() {
  return (
    <main className="mx-auto flex w-full max-w-[920px] flex-col gap-10 px-5 py-10">
      <OutOfScopeCount />
      <EveryPatientSearchRecorded />
      <ActionsRankAboveRecords />
      <SignificantActionConfirmation />
    </main>
  );
}
