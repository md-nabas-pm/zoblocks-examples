import { CASELOAD, DemoGrid, Example, WIDE_COLUMNS } from "./shared";

export default function PinnedIdentity() {
  return (
    <Example title="Pinned identity, scrolled sideways">
      <div className="min-w-0 max-w-3xl">
        <DemoGrid rows={CASELOAD} columns={WIDE_COLUMNS} pinnedColumns={1} maxHeight="18rem" />
      </div>
    </Example>
  );
}
