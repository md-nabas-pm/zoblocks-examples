import { useState } from "react";
import { ProvenanceChip } from "../components/zoblocks/provenance-chip";
import { NOW, AI_UNREVIEWED, AI_CONFIRMED } from "../data/provenance-chip-fixtures";

export function AiExtractedExample() {
  const [opened, setOpened] = useState<string | null>(null);

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">AI-extracted values</h2>
      <ul className="space-y-2">
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-36 text-sm opacity-70">Unreviewed</span>
          <span className="font-medium tabular-nums">Weight 82.4 kg</span>
          <ProvenanceChip
            record={AI_UNREVIEWED}
            now={NOW}
            onOpenSpan={(span) =>
              setOpened(`${span.document}, page ${span.page}, line ${span.line}`)
            }
          />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-36 text-sm opacity-70">Confirmed</span>
          <span className="font-medium tabular-nums">Weight 82.4 kg</span>
          <ProvenanceChip
            record={AI_CONFIRMED}
            now={NOW}
            onOpenSpan={(span) =>
              setOpened(`${span.document}, page ${span.page}, line ${span.line}`)
            }
          />
        </li>
        <li className="flex flex-wrap items-center gap-3">
          <span className="w-36 text-sm opacity-70">Open chain</span>
          <span className="font-medium tabular-nums">Weight 82.4 kg</span>
          <ProvenanceChip
            record={AI_UNREVIEWED}
            now={NOW}
            onOpenChain={(r) => setOpened(`Chain: ${r.model}`)}
          />
        </li>
      </ul>
      <p className="text-sm opacity-70" aria-live="polite">
        {opened ? `Opened: ${opened}` : "Click “View span” or a chip to see the handler fire."}
      </p>
    </section>
  );
}
