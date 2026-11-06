import { CoverageCard, coverageFromCareTeam } from "../components/zoblocks/care-team-presence";
import { careTeamCoverageGap } from "../data/care-team-presence-fixtures";

const windows = coverageFromCareTeam(careTeamCoverageGap.participant ?? []);

const coverageGapTime = "2026-08-24T08:00:00+05:30";

export default function CoverageGap() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">A hole in the rota is drawn as a hole</h2>
        <p className="text-sm text-gray-600">
          No clinician covers 07:00–09:00. The resolver returns no coverage instead of silently
          selecting the nearest available window.
        </p>
      </div>

      <div className="p-4">
        <CoverageCard windows={windows} now={coverageGapTime} />
      </div>
    </section>
  );
}
