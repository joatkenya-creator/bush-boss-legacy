import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark grain relative isolate overflow-hidden">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt={imageAlt ?? ""}
            aria-hidden={imageAlt ? undefined : true}
            className="size-full object-cover opacity-45"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-veil)" }}
          />
        </div>
      )}
      <span className="grain-overlay" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-48">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-5xl text-cream sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
