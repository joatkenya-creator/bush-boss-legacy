import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

const variants: Record<Variant, string> = {
  solid: "bg-gold text-gold-foreground hover:bg-cream",
  outline:
    "border border-border text-foreground hover:border-gold hover:text-gold",
  ghost: "text-muted-foreground hover:text-gold",
};

export function ActionLink({
  variant = "solid",
  className,
  external,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  external?: boolean;
}) {
  return (
    <a
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}
