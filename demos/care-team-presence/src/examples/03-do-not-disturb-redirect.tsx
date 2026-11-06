import { PresenceChip } from "../components/zoblocks/care-team-presence";
import { resolveEscalation } from "../lib/zoblocks-presence";
import { marsh, practitionerSigner } from "../data/care-team-presence-fixtures";

const withCover = resolveEscalation(practitionerSigner);

const withoutCover = resolveEscalation({
  clinician: marsh,
  state: "in-group",
});

export default function DoNotDisturbRedirect() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Do not disturb is a redirect, not a locked door</h2>
        <p className="text-sm text-gray-600">
          A clinician in a group session redirects escalation to their covering clinician. Without
          cover, an explicit override is required.
        </p>
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <PresenceChip presence={practitionerSigner} />

            <p className="text-sm text-gray-500">
              {withCover.kind === "covering"
                ? "With cover named — offers the cover."
                : "Unexpected escalation result."}
            </p>
          </div>

          <div className="space-y-2">
            <PresenceChip
              presence={{
                clinician: marsh,
                state: "in-group",
              }}
            />

            <p className="text-sm text-gray-500">
              {withoutCover.kind === "override-required"
                ? "With nobody covering — offers an override instead."
                : "Unexpected escalation result."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
