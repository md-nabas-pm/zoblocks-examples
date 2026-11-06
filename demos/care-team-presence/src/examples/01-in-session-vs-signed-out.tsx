import { PresenceChip } from "../components/zoblocks/care-team-presence";
import { careTeamNightCoverage, serverTime } from "../data/care-team-presence-fixtures";

export default function InSessionVsSignedOut() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">
          In session is not away, and signed out is not offline
        </h2>
        <p className="text-sm text-gray-600">
          Both clinicians are at a computer. One must not be interrupted; the other has handed over
          to the covering clinician.
        </p>
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-3">
          {careTeamNightCoverage.map((presence) => (
            <PresenceChip key={presence.clinician.id} presence={presence} now={serverTime} />
          ))}
        </div>
      </div>
    </section>
  );
}
