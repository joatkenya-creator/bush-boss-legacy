import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="eyebrow">{children}</span>
      <span className="rule-gold hidden w-20 sm:block" />
    </div>
  );
}

export function Section({
  children,
  className,
  dark,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        dark && "on-dark grain",
        "py-24 sm:py-32",
        className,
      )}
    >
      {dark && <span className="grain-overlay" aria-hidden="true" />}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
