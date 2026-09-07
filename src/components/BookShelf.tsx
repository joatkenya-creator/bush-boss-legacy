import { BookCard } from "@/components/BookCard";
import { Reveal } from "@/components/Reveal";
import { books } from "@/lib/site-content";

/**
 * The catalogue. A snap-scrolling shelf on small screens so the covers keep
 * their scale, resolving to a grid once there is room for one.
 */
export function BookShelf({ layout = "shelf" }: { layout?: "shelf" | "grid" }) {
  if (layout === "grid") {
    return (
      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book, i) => (
          <Reveal as="li" key={book.title} delay={(i % 3) * 90}>
            <BookCard book={book} index={i} />
          </Reveal>
        ))}
      </ul>
    );
  }

  return (
    <ul
      className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-8 sm:-mx-8 sm:px-8 [scrollbar-width:thin]"
      aria-label="Books by Fabian Stennett"
    >
      {books.map((book, i) => (
        <li key={book.title} className="w-[15rem] shrink-0 snap-start sm:w-[17rem]">
          <BookCard book={book} index={i} />
        </li>
      ))}
    </ul>
  );
}
