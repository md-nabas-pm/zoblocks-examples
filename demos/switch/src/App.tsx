import AnatomyMatrixDemo from "./demos/AnatomyMatrixDemo";
import WithoutColourDemo from "./demos/WithoutColourDemo";
import LabeledTrackDemo from "./demos/LabeledTrackDemo";
import WriteAndFailDemo from "./demos/WriteAndFailDemo";
import EveryPhaseDemo from "./demos/EveryPhaseDemo";
import OfflineAndOvertakenDemo from "./demos/OfflineAndOvertakenDemo";
import TimeBoxedDemo from "./demos/TimeBoxedDemo";
import DeferredFormDemo from "./demos/DeferredFormDemo";
import AbsenceDemo from "./demos/AbsenceDemo";
import TonesDemo from "./demos/TonesDemo";
import LockedDemo from "./demos/LockedDemo";
import ConfirmationsDemo from "./demos/ConfirmationsDemo";
import ImpactDemo from "./demos/ImpactDemo";
import PanelDemo from "./demos/PanelDemo";
import AppearancesDemo from "./demos/AppearancesDemo";
import FlowsheetToPhoneDemo from "./demos/FlowsheetToPhoneDemo";
import AntdSurfaceDemo from "./demos/AntdSurfaceDemo";
import RestyledDemo from "./demos/RestyledDemo";
import RightToLeftDemo from "./demos/RightToLeftDemo";

export default function App() {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-8">
      <section className="grid gap-7">
        <div className="grid gap-9">
          <AnatomyMatrixDemo />
          <WithoutColourDemo />
          <LabeledTrackDemo />
        </div>
      </section>
      <section className="grid gap-7">
        <div className="grid gap-9">
          <WriteAndFailDemo />
          <EveryPhaseDemo />
          <OfflineAndOvertakenDemo />
          <TimeBoxedDemo />
          <DeferredFormDemo />
        </div>
      </section>
      <section className="grid gap-7">
        <div className="grid gap-9">
          <AbsenceDemo />
          <TonesDemo />
          <LockedDemo />
          <ConfirmationsDemo />
          <ImpactDemo />
          <PanelDemo />
        </div>
      </section>
      <section className="grid gap-7">
        <div className="grid gap-9">
          <AppearancesDemo />
          <FlowsheetToPhoneDemo />
          <AntdSurfaceDemo />
          <RestyledDemo />
          <RightToLeftDemo />
        </div>
      </section>
    </main>
  );
}
