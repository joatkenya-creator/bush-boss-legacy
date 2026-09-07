import { createFileRoute } from "@tanstack/react-router";

import booksImg from "@/assets/books-still.jpg";

import { AuthorProfile } from "@/components/AuthorProfile";
import { BookShelf } from "@/components/BookShelf";
import { ClosingCta } from "@/components/ClosingCta";
import { ContentPending } from "@/components/ContentPending";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/ui/action-link";
import { seo } from "@/lib/seo";
import { BRAND, LINKS, books } from "@/lib/site-content";
import { bookListSchema, breadcrumbSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/books")({
  head: () =>
    seo({
      title: "The Books | Fabian Stennett",
      description:
        "Books by Fabian Stennett — the author behind The Bush Boss. Six and more titles on Amazon Kindle exploring the Maroon story, Jamaican heritage, identity, resilience and lived experience.",
      path: "/books",
      image: booksImg,
      imageAlt: "Books and manuscripts on a writing desk",
      type: "book",
    }),
  component: BooksPage,
});

const SUBJECTS = [
  "Maroon heritage",
  "Jamaican history",
  "Culture & identity",
  "Resilience",
  "Consciousness",
  "Lived experience",
];

function BooksPage() {
  const awaitingTitles = books.filter((book) => /to be confirmed/i.test(book.title)).length;

  return (
    <>
      <PageHero
        eyebrow="02 — Literature"
        title="The books"
        lead="Where history becomes story. Through books and storytelling, Fabian Stennett explores the Maroon story, Jamaican heritage, identity, resilience, and lived experience."
        image={booksImg}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink href={LINKS.books}>Shop on Amazon Kindle</ActionLink>
          <ActionLink to="/story" variant="outline">
            About the Author
          </ActionLink>
        </div>
      </PageHero>

      <Section id="catalogue">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            label="The Catalogue"
            title="Stories. History. Culture. Perspective."
            className="max-w-2xl"
          />
          <Reveal delay={120}>
            <p className="display text-6xl text-gold-ink sm:text-7xl">6+</p>
            <p className="eyebrow mt-2">Titles on Amazon Kindle</p>
          </Reveal>
        </div>

        <div className="mt-16">
          <BookShelf layout="grid" />
        </div>

        {awaitingTitles > 0 && (
          <Reveal delay={120} className="mt-14">
            <ContentPending label="Titles awaiting confirmation">
              {awaitingTitles} entries are placeholders. Each needs its verified title, cover image,
              description, publication date and Amazon link added to{" "}
              <code className="font-sans">books</code> in{" "}
              <code className="font-sans">src/lib/site-content.ts</code>. Every placeholder
              currently links to the author&rsquo;s Kindle store page, so no visitor hits a dead
              end.
            </ContentPending>
          </Reveal>
        )}

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink href={LINKS.books} size="lg">
            Explore All Books
          </ActionLink>
          <ActionLink href={LINKS.speakerInfo} variant="outline" size="lg">
            Enquire About Readings
          </ActionLink>
        </div>
      </Section>

      <Section dark className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading label="Subjects" title="What the books cover" />
          </div>
          <Reveal delay={140} className="lg:col-span-7 lg:self-center">
            <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {SUBJECTS.map((subject) => (
                <li key={subject} className="bg-ink px-6 py-6 text-sm text-muted-foreground">
                  {subject}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
              Subject areas rather than a synopsis — individual descriptions are published with each
              confirmed title.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section id="author" className="border-t border-border">
        <AuthorProfile />
      </Section>

      <Section className="border-t border-border bg-card/40">
        <SectionHeading
          label="For readers"
          title={`Read ${BRAND.author} on Kindle.`}
          lead="Every title is available through the author's Amazon Kindle store."
          align="center"
        />
        <Reveal delay={140} className="mt-10 flex justify-center">
          <ActionLink href={LINKS.books} size="lg">
            Shop on Amazon Kindle
          </ActionLink>
        </Reveal>
      </Section>

      <ClosingCta />
      <JsonLd
        data={[
          bookListSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Books", path: "/books" },
          ]),
        ]}
      />
    </>
  );
}
