import { Reveal, RevealImage } from "@/components/Reveal";
import { ActionLink } from "@/components/ui/action-link";
import type { Gift } from "@/lib/site-content";
import { cn } from "@/lib/utils";

/**
 * One of the three gifts, rendered as a full editorial chapter rather than a
 * card: an oversized numeral, a tall image, and a column of type that runs
 * past the image edge on wide screens.
 */
export function GiftChapter({
  gift,
  image,
  imageAlt,
  flip,
  secondary,
}: {
  gift: Gift;
  image: string;
  imageAlt: string;
  /** Alternate the image to the opposite side. */
  flip?: boolean;
  secondary?: { label: string; href: string };
}) {
  return (
    <article className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-0">
      {/*
       * Both children are pinned to row 1 so their column spans can overlap.
       * Without it, auto-placement refuses to share column 6/7 and drops the
       * text panel into a second row instead of over the picture.
       */}
      <div
        className={cn(
          "relative lg:col-span-7 lg:row-start-1",
          flip ? "lg:col-start-6" : "lg:col-start-1",
        )}
      >
        <RevealImage
          src={image}
          alt={imageAlt}
          width={1408}
          height={1760}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="aspect-[4/5] sm:aspect-[3/2] lg:aspect-square"
        />
        <span
          aria-hidden="true"
          className={cn(
            "display pointer-events-none absolute -top-8 select-none text-[5rem] leading-none text-gold-ink/25 sm:text-[7rem] lg:-top-14 lg:text-[9rem]",
            flip ? "right-0 lg:-right-6" : "left-0 lg:-left-6",
          )}
        >
          {gift.index}
        </span>
      </div>

      <Reveal
        delay={120}
        className={cn(
          "relative z-10 lg:col-span-6 lg:row-start-1 lg:self-center",
          flip ? "lg:col-start-1 lg:pr-10" : "lg:col-start-7 lg:pl-10",
        )}
      >
        <div
          className={cn(
            "border-t border-border pt-8 lg:border-t-0 lg:p-10 lg:backdrop-blur-sm",
            "lg:bg-background/92 lg:shadow-[var(--shadow-deep)]",
          )}
        >
          <div className="flex items-center gap-4">
            <span className="display text-xs text-gold-ink">{gift.index}</span>
            <span className="eyebrow">{gift.label}</span>
          </div>

          <h3 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl">{gift.name}</h3>
          <p className="mt-4 text-lg italic text-gold-ink/90 sm:text-xl">{gift.subheading}</p>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {gift.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink to={gift.cta.to}>{gift.cta.label}</ActionLink>
            {secondary && (
              <ActionLink href={secondary.href} variant="outline">
                {secondary.label}
              </ActionLink>
            )}
          </div>
        </div>
      </Reveal>
    </article>
  );
}
