import type { ReactNode } from "react";

export default function OverlayRegion({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-lg bg-[var(--zb-bg-muted)]">
      <div className="grid gap-3 p-5" aria-hidden="true">
        <div className="h-2.5 w-2/5 rounded-full bg-[var(--zb-border)]" />
        <div className="h-2.5 w-4/5 rounded-full bg-[var(--zb-border)]" />
        <div className="grid grid-cols-3 gap-3 pt-1">
          <div className="h-16 rounded-lg bg-[var(--zb-surface)]" />
          <div className="h-16 rounded-lg bg-[var(--zb-surface)]" />
          <div className="h-16 rounded-lg bg-[var(--zb-surface)]" />
        </div>
        <div className="h-2.5 w-3/5 rounded-full bg-[var(--zb-border)]" />
      </div>
      {children}
    </div>
  );
}
