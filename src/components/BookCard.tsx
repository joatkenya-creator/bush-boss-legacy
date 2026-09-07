import { BRAND, type Book } from "@/lib/site-content";
import { cn } from "@/lib/utils";

/**
 * A single title. Where an official cover has not been supplied, a typographic
 * sleeve stands in — clearly marked, and replaced by adding `cover` to the
 * book entry in site-content.ts.
 */
export function BookCard({
  book,
  index,
  className,
}: {
  book: Book;
  index: number;
  className?: string;
}) {
  const unconfirmed = /to be confirmed/i.test(book.title);

  return (
    <article className={cn("group flex h-full flex-col", className)}>
      <a
        href={book.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        {book.cover ? (
          <img
            src={book.cover}
            alt={`Cover of ${book.title} by ${BRAND.author}`}
            width={800}
            height={1200}
            loading="lazy"
            decoding="async"
            className="aspect-[2/3] w-full border border-border object-cover transition-transform duration-700 ease-[var(--ease-cinematic)] group-hover:-translate-y-2"
          />
        ) : (
          <div
            className="grain relative flex aspect-[2/3] flex-col justify-between overflow-hidden border border-border p-6 transition-transform duration-700 ease-[var(--ease-cinematic)] group-hover:-translate-y-2"
            style={{ background: "var(--gradient-earth)" }}
          >
            <span className="grain-overlay" aria-hidden="true" />
            <div className="flex items-start justify-between gap-3">
              <span className="eyebrow">No. {String(index + 1).padStart(2, "0")}</span>
              <span className="text-right text-[0.55rem] uppercase leading-relaxed tracking-[0.2em] text-stone/60">
                Cover
                <br />
                to follow
              </span>
            </div>
            <div>
              <span className="mb-4 block h-px w-12 bg-gold" />
              <h3 className="display text-2xl leading-tight text-cream">{book.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/80">{book.subtitle}</p>
            </div>
            <span className="text-[0.58rem] uppercase tracking-[0.24em] text-gold-ink">
              {BRAND.author}
            </span>
          </div>
        )}
      </a>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{book.description}</p>
      <p className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/75">
        {book.published}
      </p>
      <a
        href={book.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-4 text-[0.62rem] uppercase tracking-[0.24em] text-gold-ink transition-colors hover:text-foreground"
      >
        {unconfirmed ? "Browse on Amazon Kindle" : "Read on Amazon Kindle"}
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </article>
  );
}
