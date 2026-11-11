import { Copilot } from "@/components/zoblocks/copilot";
import type { CopilotProvider } from "@zoblocks/copilot-core";
import {
  DEMO_SUBJECT,
  DemoNote,
  Example,
  SAFE_EVENTS,
  demoResolver,
  hostileRecordResolver,
  lookUp,
  prepare,
  scriptedProvider,
} from "./shared";

const providerFailure = {
  ...scriptedProvider([]),
  send() {
    return {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            throw new Error("scripted provider failure");
          },
        };
      },
    };
  },
} satisfies CopilotProvider;

const resolverFailure = {
  async resolve() {
    throw new Error("scripted resolver failure");
  },
};

export default function ErrorState() {
  return (
    <Example title="Error">
      <div className="grid min-w-0 gap-3 md:grid-cols-2">
        <div className="grid min-w-0 gap-2">
          <h3 className="m-0 text-sm font-medium" style={{ color: "var(--zb-text)" }}>
            Provider failure
          </h3>
          <Copilot provider={providerFailure} modes={[lookUp]} anchor="inline" />
        </div>
        <div className="grid min-w-0 gap-2">
          <h3 className="m-0 text-sm font-medium" style={{ color: "var(--zb-text)" }}>
            Missing subject
          </h3>
          <Copilot
            provider={scriptedProvider(SAFE_EVENTS, { phiPermitted: true })}
            modes={[prepare]}
            context={demoResolver}
            anchor="inline"
          />
        </div>
        <div className="grid min-w-0 gap-2">
          <h3 className="m-0 text-sm font-medium" style={{ color: "var(--zb-text)" }}>
            Missing resolver
          </h3>
          <Copilot
            provider={scriptedProvider(SAFE_EVENTS, { phiPermitted: true })}
            modes={[prepare]}
            subject={DEMO_SUBJECT}
            anchor="inline"
          />
        </div>
        <div className="grid min-w-0 gap-2">
          <h3 className="m-0 text-sm font-medium" style={{ color: "var(--zb-text)" }}>
            Resolver failure
          </h3>
          <Copilot
            provider={scriptedProvider(SAFE_EVENTS, { phiPermitted: true })}
            modes={[prepare]}
            subject={DEMO_SUBJECT}
            context={resolverFailure}
            anchor="inline"
          />
        </div>
        <div className="grid min-w-0 gap-2">
          <h3 className="m-0 text-sm font-medium" style={{ color: "var(--zb-text)" }}>
            Hostile synthetic record
          </h3>
          <Copilot
            provider={scriptedProvider(SAFE_EVENTS, { phiPermitted: true })}
            modes={[prepare]}
            subject={DEMO_SUBJECT}
            context={hostileRecordResolver}
            anchor="inline"
          />
        </div>
      </div>
      <DemoNote>
        Submit a neutral question in the first four examples. In the last, submit a question about
        the synthetic record to exercise the documented hostile-record block. All errors and records
        are scripted; resolver filtering is host-owned.
      </DemoNote>
    </Example>
  );
}
