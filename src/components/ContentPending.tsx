import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * An honest, designed placeholder.
 *
 * The brief forbids inventing biography, credentials, press or history, so
 * where verified copy has not been supplied the site says so plainly instead
 * of filling the gap. Replace a `<ContentPending>` with real content as it
 * arrives — nothing else on the page needs to change.
 */
export function ContentPending({
  label,
  children,
  className,
}: {
  label: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border border-dashed border-border/80 p-6 sm:p-8", className)}>
      <p className="eyebrow">{label}</p>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
        {children ?? (
          <>
            This section is built and ready. Verified copy has not been supplied yet, so nothing is
            published here — add it to{" "}
            <code className="font-sans text-foreground">src/lib/site-content.ts</code> and it will
            appear.
          </>
        )}
      </p>
    </div>
  );
}
