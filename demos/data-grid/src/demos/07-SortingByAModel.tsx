import { useState } from "react";
import type { GridSort } from "@/lib/zoblocks-grid";
import { CASELOAD, DemoGrid, Example } from "./shared";

export default function SortingByAModel() {
  const [sort, setSort] = useState<GridSort | null>({ key: "risk", direction: "descending" });
  return (
    <Example title="Sorting by a model is ranking a prediction">
      <DemoGrid rows={CASELOAD} sort={sort} onSortChange={setSort} />
    </Example>
  );
}
