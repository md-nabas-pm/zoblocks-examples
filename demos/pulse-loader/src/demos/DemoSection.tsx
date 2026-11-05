import type { ReactNode } from "react";

export default function DemoSection({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="grid gap-3.5">
      <div className="grid gap-1">
        <h3 className="m-0 text-[17px] font-semibold tracking-tight text-[var(--zb-text)]">
          {title}
        </h3>
        <p className="m-0 max-w-[640px] text-sm leading-relaxed text-[var(--zb-text-muted)]">
          {description}
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border border-[var(--zb-border)] bg-[var(--zb-surface)]">
        <div className="grid gap-5 px-6 py-7">{children}</div>
      </div>
    </section>
  );
}
