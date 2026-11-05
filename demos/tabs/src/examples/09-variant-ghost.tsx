import { Tabs } from "@zoblocks/tabs";

function PreviewPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-[#F8FAFC] p-4">
      <p className="text-sm">{children}</p>
    </div>
  );
}

function Rendered() {
  return (
    <PreviewPanel>
      <strong>Rendered</strong> — Preview the component as it appears to users.
    </PreviewPanel>
  );
}

function Source() {
  return (
    <PreviewPanel>
      <strong>Source</strong> — Inspect the component implementation.
    </PreviewPanel>
  );
}

function Diff() {
  return (
    <PreviewPanel>
      <strong>Diff</strong> — Review changes between versions.
    </PreviewPanel>
  );
}

export function GhostVariantExample() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Ghost</h2>
        <p className="text-sm text-gray-500">
          Minimal tabs without a track, rail, or indicator — useful in dense toolbars and popovers.
        </p>
      </div>

      <Tabs
        as="tabs"
        variant="ghost"
        aria-label="Preview mode"
        defaultValue="rendered"
        items={[
          {
            value: "rendered",
            label: "Rendered",
            children: <Rendered />,
          },
          {
            value: "source",
            label: "Source",
            children: <Source />,
          },
          {
            value: "diff",
            label: "Diff",
            children: <Diff />,
          },
        ]}
      />
    </section>
  );
}
