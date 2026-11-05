import { useMemo } from "react";
import { toFhirBundle } from "@zoblocks/signature";
import { Example, patientSignature } from "./shared";

export default function FhirBundle() {
  const bundle = useMemo(
    () =>
      toFhirBundle(patientSignature, {
        release: "R4",
        subject: { display: "Randall, Josh", reference: "Patient/4471902" },
      }),
    [],
  );
  const entries = bundle.entry as Array<{
    resource?: { resourceType?: string };
    request?: { method?: string; url?: string };
  }>;

  return (
    <Example
      title="What it emits, and why it is not a Consent"
      titleClassName="m-0 text-[17px] font-semibold tracking-[-0.01em] text-ink"
      sectionClassName="signature-fhir-example flex flex-col gap-3.5"
      description={
        <>
          <p className="m-0 max-w-[640px] text-pretty text-[14.5px] leading-relaxed text-graphite">
            Transaction Bundle: entry 0 is POST Consent; entry 1 is POST Provenance.
          </p>
          <p className="m-0 max-w-[640px] text-pretty text-[14.5px] leading-relaxed text-graphite">
            The R4 Consent resource has no signature element; the signature is carried by
            Provenance.
          </p>
        </>
      }
    >
      <div className="zb-stage flex min-h-[220px] items-center justify-center px-7 py-11">
        <div className="mx-auto grid w-full max-w-xl gap-3 font-sans text-ink">
          <ol className="m-0 grid list-none gap-2 p-0">
            {entries.map((entry, index) => (
              <li
                key={index}
                className="flex items-baseline gap-3 rounded-lg border border-rule bg-paper px-3 py-2 text-sm"
              >
                <span className="font-mono text-xs text-graphite">entry[{index}]</span>
                <span className="font-medium text-ink">
                  {entry.request?.method} {entry.resource?.resourceType}
                </span>
              </li>
            ))}
          </ol>
          <details className="text-xs">
            <summary className="cursor-pointer text-graphite">The whole transaction Bundle</summary>
            <pre className="scroll-thin m-0 mt-2 max-h-72 overflow-auto rounded-lg border border-rule bg-paper-sunk p-3 font-mono text-[0.6875rem] leading-relaxed text-ink">
              {JSON.stringify(bundle, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </Example>
  );
}
