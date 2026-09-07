import { Reveal } from "@/components/Reveal";
import { ActionLink } from "@/components/ui/action-link";
import { LINKS } from "@/lib/site-content";

/** The closing statement. Every page ends here, on the three primary actions. */
export function ClosingCta() {
  return (
    <section className="on-dark grain relative isolate overflow-hidden border-t border-border">
      <span className="grain-overlay" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-earth)" }}
      />

      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">
        <Reveal>
          <h2 className="max-w-4xl text-balance text-4xl leading-[1.03] sm:text-6xl lg:text-7xl">
            Make the story impossible to ignore.
          </h2>
          <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            Whether you want to hear the music, explore the books, learn about Maroon heritage, or
            bring The Bush Boss to your stage — the journey starts here.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink href={LINKS.booking} size="lg">
              Book The Bush Boss
            </ActionLink>
            <ActionLink to="/music" variant="outline" size="lg">
              Listen to the Music
            </ActionLink>
            <ActionLink to="/books" variant="outline" size="lg">
              Explore the Books
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
