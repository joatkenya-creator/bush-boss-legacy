import type { Book } from "@/lib/site-content";

export function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <article className="group w-[16rem] shrink-0 snap-start sm:w-[18rem]">
      <a
        href={book.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        {book.cover ? (
          <img
            src={book.cover}
            alt={`Cover of ${book.title} by Fabian Stennett`}
            loading="lazy"
            className="aspect-[2/3] w-full border border-border object-cover transition-transform duration-700 group-hover:-translate-y-2"
          />
        ) : (
          <div
            className="grain relative flex aspect-[2/3] flex-col justify-between overflow-hidden border border-border p-6 transition-transform duration-700 group-hover:-translate-y-2"
            style={{ background: "var(--gradient-earth)" }}
          >
            <span className="grain-overlay" aria-hidden="true" />
            <div className="flex items-center justify-between">
              <span className="eyebrow">
                No. {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.58rem] uppercase tracking-[0.24em] text-stone/70">
                Cover TBC
              </span>
            </div>
            <div>
              <div className="mb-4 h-px w-12 bg-gold" />
              <h3 className="display text-2xl text-cream">{book.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone/80">
                {book.subtitle}
              </p>
            </div>
            <span className="text-[0.58rem] uppercase tracking-[0.24em] text-gold">
              Fabian Stennett
            </span>
          </div>
        )}
      </a>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {book.description}
      </p>
      <p className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/80">
        {book.published}
      </p>
      <a
        href={book.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-[0.62rem] uppercase tracking-[0.22em] text-gold hover:underline"
      >
        Amazon Kindle
      </a>
    </article>
  );
}
