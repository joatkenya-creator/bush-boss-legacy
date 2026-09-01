import type { Book } from "@/lib/site-content";

export function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <article className="group w-[15rem] shrink-0 snap-start sm:w-[17rem]">
      <a
        href={book.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <div
          className="grain relative flex aspect-[2/3] flex-col justify-between overflow-hidden border border-border p-6 transition-transform duration-700 group-hover:-translate-y-2"
          style={{ background: "var(--gradient-earth)" }}
        >
          <span className="grain-overlay" aria-hidden="true" />
          <div className="flex items-center justify-between">
            <span className="eyebrow">No. {String(index + 1).padStart(2, "0")}</span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
              {book.year}
            </span>
          </div>
          <div>
            <div className="mb-4 h-px w-12 bg-gold" />
            <h3 className="display text-2xl text-cream">{book.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {book.subtitle}
            </p>
          </div>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">
            Fabian Stennett
          </span>
        </div>
      </a>
    </article>
  );
}
