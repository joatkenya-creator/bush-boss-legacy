import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Small gold kicker with a hairline rule — the site's section signature. */
export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="eyebrow">{children}</span>
      <span className="rule-gold hidden w-20 shrink-0 sm:block" />
    </div>
  );
}

/**
 * Editorial section heading: kicker, display headline, optional standfirst.
 */
export function SectionHeading({
  label,
  title,
  lead,
  className,
  align = "start",
}: {
  label?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {label && (
        <SectionLabel className={align === "center" ? "justify-center" : ""}>{label}</SectionLabel>
      )}
      <h2
        className={cn(
          "mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl",
          align === "start" && "max-w-4xl",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "start" && "max-w-2xl",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  innerClassName,
  dark,
  id,
  bleed,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** Flips the section to the obsidian palette. */
  dark?: boolean;
  id?: string;
  /** Skip the centred container — the child manages its own width. */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(dark && "on-dark grain relative isolate", "py-24 sm:py-32 lg:py-40", className)}
    >
      {dark && <span className="grain-overlay" aria-hidden="true" />}
      {bleed ? (
        children
      ) : (
        <div className={cn("mx-auto max-w-7xl px-5 sm:px-8", innerClassName)}>{children}</div>
      )}
    </section>
  );
}
