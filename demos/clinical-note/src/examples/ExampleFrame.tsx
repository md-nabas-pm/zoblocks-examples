import type { ReactNode } from "react";
import { DEMO_NOTICE } from "../fixtures/clinical-note-fixtures";

export function ExampleFrame({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="w-full max-w-6xl overflow-hidden rounded-xl border border-rule bg-paper shadow-sm">
      <header className="border-b border-rule px-5 py-4">
        <h2 className="text-lg font-semibold text-ink">{title}</h2>
        <p className="mt-1 text-sm text-graphite">{description}</p>
        <p className="mt-2 text-xs text-graphite-soft">{DEMO_NOTICE}</p>
      </header>
      <div className="p-4 md:p-5">{children}</div>
    </article>
  );
}
