import { useState } from "react";
import { ChartCoPresence } from "../components/zoblocks/care-team-presence";
import { marsh, serverTime } from "../data/care-team-presence-fixtures";

export default function ChartCoPresenceExample() {
  const [action, setAction] = useState("");

  const openReadOnly = () => {
    setAction("Opening Marsh's progress note in read-only mode.");
  };

  const requestHandoff = () => {
    setAction("Handoff requested from L. Marsh, LCSW.");
  };

  const startAddendum = () => {
    setAction("A separate addendum has been started.");
  };

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Told before you type, not at save</h2>
        <p className="text-sm text-gray-600">
          Another clinician is already documenting this progress note. Choose how to proceed before
          making changes.
        </p>
      </div>

      <div className="p-4">
        <ChartCoPresence
          others={[
            {
              clinician: marsh,
              activity: "documenting",
              since: "2026-08-24T09:12:00+05:30",
              target: "Progress note",
              unsigned: true,
            },
          ]}
          now={serverTime}
          onOpenTheirs={openReadOnly}
          onRequestHandoff={requestHandoff}
          onSeparateAddendum={startAddendum}
        />

        {action ? (
          <p className="mt-3 text-sm text-gray-600" role="status">
            {action}
          </p>
        ) : (
          <p className="mt-3 text-sm text-gray-500">
            Pick one — none is highlighted, because which is right depends on facts this component
            does not have.
          </p>
        )}
      </div>
    </section>
  );
}
