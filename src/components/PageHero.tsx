import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

/**
 * The standard interior-page opener: dark, full-bleed, with a large display
 * headline sitting over a veiled photograph.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
  align = "start",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  /** Leave empty when the image is purely atmospheric. */
  imageAlt?: string;
  children?: ReactNode;
  align?: "start" | "center";
}) {
  return (
    <section className="on-dark grain relative isolate overflow-hidden">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt={imageAlt ?? ""}
            {...(imageAlt ? {} : { "aria-hidden": true })}
            className="size-full scale-105 object-cover opacity-50"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
        </div>
      )}
      <span className="grain-overlay" aria-hidden="true" />

      <div
        className={
          align === "center"
            ? "mx-auto max-w-4xl px-5 pb-24 pt-40 text-center sm:px-8 sm:pb-32 sm:pt-52"
            : "mx-auto max-w-7xl px-5 pb-24 pt-40 sm:px-8 sm:pb-32 sm:pt-52"
        }
      >
        <Reveal immediate>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-balance text-[2.75rem] leading-[0.95] sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
