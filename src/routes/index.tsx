import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroImg from "@/assets/hero-bushboss.jpg";
import musicImg from "@/assets/music-studio.jpg";
import booksImg from "@/assets/books-still.jpg";
import speakingImg from "@/assets/speaking-stage.jpg";
import maroonImg from "@/assets/maroon-land.jpg";

import { BookCard } from "@/components/BookCard";
import { MusicFeature } from "@/components/MusicFeature";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialLinks } from "@/components/SocialLinks";
import { ActionLink } from "@/components/ui/action-link";
import { LINKS, books, navLinks, speakingTopics } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "The Bush Boss | Musician, Author & Cultural Speaker",
      },
      {
        name: "description",
        content:
          "The Bush Boss — Fabian Stennett, known as Gangunjah Nevadye. Reggae music, six books on Amazon Kindle, and cultural speaking amplifying the Jamaican Maroon story.",
      },
      { property: "og:title", content: "The Bush Boss | One Man. Three Gifts. One Mission." },
      {
        property: "og:description",
        content:
          "Music, literature and storytelling honouring Maroon heritage. Listen, read and book The Bush Boss.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="eyebrow">{children}</span>
      <span className="rule-gold hidden w-24 sm:block" />
    </div>
  );
}

function Landing() {
  const scrollY = useParallax();

  return (
    <div id="top" className="bg-background">
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-gold-foreground"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="display text-sm tracking-[0.18em] text-cream">
            The Bush Boss
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-8">
              {navLinks.slice(1, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ActionLink href={LINKS.booking} className="hidden px-5 py-3 sm:inline-flex">
            Book
          </ActionLink>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="grain relative flex min-h-svh items-end overflow-hidden pt-24">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroImg}
              alt="The Bush Boss standing in the misty Jamaican hills at dawn"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="size-full object-cover object-[62%_center]"
              style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0) scale(1.08)` }}
            />
            <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
          </div>
          <span className="grain-overlay" aria-hidden="true" />

          <div className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-28">
            <Reveal>
              <p className="eyebrow">The Bush Boss</p>
              <h1 className="mt-6 max-w-4xl text-[13vw] leading-[0.9] text-cream sm:text-7xl lg:text-8xl">
                One Man. Three Gifts. One Mission.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 flex flex-wrap gap-x-4 gap-y-1 text-sm uppercase tracking-[0.3em] text-gold">
                <span>Musician</span>
                <span aria-hidden="true" className="text-border">/</span>
                <span>Author</span>
                <span aria-hidden="true" className="text-border">/</span>
                <span>Speaker</span>
              </p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Known as Gangunjah Nevadye on the mic and Fabian Stennett on the
                page and the podium, The Bush Boss uses music, literature, and
                powerful storytelling to honor and amplify the Maroon story.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ActionLink href="#story">Explore the Story</ActionLink>
                <ActionLink href={LINKS.booking} variant="outline">
                  Book The Bush Boss
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* THREE GIFTS */}
        <section id="story" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal>
            <SectionLabel>The Work</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-5xl text-cream sm:text-7xl">
              Three Gifts. One Purpose.
            </h2>
          </Reveal>

          <div className="mt-24 space-y-28">
            <GiftBlock
              index="01"
              image={musicImg}
              alt="A vintage studio microphone lit by warm gold light"
              label="Music"
              name="Gangunjah Nevadye"
              quote="Where history finds its rhythm."
              copy="Through reggae and conscious music, Gangunjah Nevadye channels Maroon history, culture, resilience, and consciousness into sound."
              highlight="Road Fulla Hole — New Music, Out Now"
              cta={{ label: "Listen Now", href: "#music" }}
            />
            <GiftBlock
              index="02"
              flip
              image={booksImg}
              alt="Aged manuscripts and hardcover books on a dark writing desk"
              label="Books"
              name="Fabian Stennett"
              quote="Where history becomes story."
              copy="Through literature, Fabian Stennett explores the Maroon story, Jamaican heritage, identity, resilience, and the experiences that shape us."
              highlight="6+ Books Available"
              cta={{ label: "Explore the Books", href: "#books" }}
              secondary={{ label: "Buy on Amazon Kindle", href: LINKS.books }}
            />
            <GiftBlock
              index="03"
              image={speakingImg}
              alt="The Bush Boss speaking on a darkened stage before an audience"
              label="Speaking"
              name="The Message"
              quote="Where stories become movements."
              copy="Through motivational and cultural speaking, The Bush Boss challenges audiences to understand their history, embrace their identity, and move with purpose."
              highlight="Schools · Universities · Conferences · Communities"
              cta={{ label: "Book a Speaking Engagement", href: LINKS.booking }}
            />
          </div>
        </section>

        {/* MAROON STORY */}
        <section id="maroon" className="grain relative overflow-hidden bg-ink">
          <div className="absolute inset-0 -z-10">
            <img
              src={maroonImg}
              alt="Mist rising over the limestone hills of Jamaica's Cockpit Country"
              width={1920}
              height={1088}
              loading="lazy"
              className="size-full object-cover opacity-35"
              style={{ transform: `translate3d(0, ${Math.min(scrollY * 0.04, 60)}px, 0) scale(1.1)` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, var(--ink), oklch(0.16 0.012 60 / 0.55) 45%, var(--ink))",
              }}
            />
          </div>
          <span className="grain-overlay" aria-hidden="true" />

          <div className="mx-auto max-w-6xl px-6 py-32 sm:py-44">
            <Reveal>
              <SectionLabel>The Maroon Story</SectionLabel>
              <h2 className="mt-8 max-w-4xl text-4xl leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
                A story of resistance. Resilience. Identity. Freedom.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-cream/90">
                  The Maroon story is more than history. It is a living legacy of
                  resistance, survival, culture, community, and identity.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  From the mountains of the Cockpit Country to the stages and
                  pages of today, The Bush Boss carries that legacy forward —
                  using music, books, and speaking to bring greater attention to
                  Jamaican Maroon heritage, so that the story is not footnoted,
                  but felt.
                </p>
              </Reveal>
            </div>
            <Reveal delay={250}>
              <div className="mt-12 flex flex-wrap gap-4">
                <ActionLink href="#books">Explore Maroon Heritage</ActionLink>
                <ActionLink href="#movement" variant="outline">
                  Discover Jamaican History
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FEATURED MUSIC */}
        <section id="music" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal>
            <SectionLabel>Featured Music</SectionLabel>
            <h2 className="mt-6 text-5xl text-cream sm:text-7xl">Road Fulla Hole</h2>
            <p className="mt-4 text-base text-muted-foreground">
              The latest release from Gangunjah Nevadye
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-16">
            <MusicFeature />
          </Reveal>
        </section>

        {/* BOOKS */}
        <section id="books" className="border-y border-border bg-card/30 py-28 sm:py-36">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionLabel>Featured Books</SectionLabel>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <h2 className="text-5xl text-cream sm:text-7xl">The Books</h2>
                  <p className="mt-4 text-base text-muted-foreground">
                    Stories. History. Culture. Perspective.
                  </p>
                </div>
                <p className="eyebrow">6+ Titles available on Amazon Kindle</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ul className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] lg:mx-auto lg:max-w-6xl">
              {books.map((book, i) => (
                <li key={book.title}>
                  <BookCard book={book} index={i} />
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-4 px-6">
            <ActionLink href={LINKS.books} external>
              View All Books
            </ActionLink>
            <ActionLink href={LINKS.books} external variant="outline">
              Shop on Amazon
            </ActionLink>
          </div>
        </section>

        {/* SPEAKING CTA */}
        <section id="speaking" className="grain relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src={speakingImg}
              alt=""
              aria-hidden="true"
              width={1408}
              height={1008}
              loading="lazy"
              className="size-full object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, var(--ink) 12%, oklch(0.16 0.012 60 / 0.6))",
              }}
            />
          </div>
          <span className="grain-overlay" aria-hidden="true" />

          <div className="mx-auto max-w-6xl px-6 py-32 sm:py-44">
            <Reveal>
              <SectionLabel>Speaking</SectionLabel>
              <h2 className="mt-8 max-w-3xl text-4xl leading-[1.04] text-cream sm:text-6xl">
                Some stories are meant to be heard.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                Bring The Bush Boss to your school, university, conference,
                cultural event, community, or organization.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-12 flex flex-wrap gap-3">
                {speakingTopics.map((topic) => (
                  <li
                    key={topic}
                    className="border border-border/70 px-4 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-cream/80"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex flex-wrap gap-4">
                <ActionLink href={LINKS.booking}>Book The Bush Boss</ActionLink>
                <ActionLink href={LINKS.booking} variant="outline">
                  Inquire About a Speaking Engagement
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MOVEMENT */}
        <section id="movement" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionLabel>The Movement</SectionLabel>
              <h2 className="mt-6 text-5xl text-cream sm:text-6xl">
                Join the Movement
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/85">
                Press play. Turn the page. Hear the message. Discover the story.
              </p>
              <ul className="mt-8 space-y-3 text-base text-muted-foreground">
                {[
                  "Listen to the music",
                  "Read the books",
                  "Book a speaking engagement",
                  "Follow the journey",
                  "Share the Maroon story",
                ].map((item) => (
                  <li key={item} className="flex items-baseline gap-3">
                    <span className="size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <SocialLinks className="mt-10" />
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-border bg-card/50 p-8 sm:p-10">
                <h3 className="text-2xl text-cream">Stay in the Story</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  New music, new books, new dates. No noise — only the mission.
                </p>
                <form
                  className="mt-8 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    (e.currentTarget as HTMLFormElement).reset();
                  }}
                >
                  <div>
                    <label
                      htmlFor="newsletter-email"
                      className="eyebrow block"
                    >
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-3 w-full border border-border bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-gold focus-visible:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold-foreground transition-colors hover:bg-cream"
                  >
                    Join the Movement
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function GiftBlock({
  index,
  image,
  alt,
  label,
  name,
  quote,
  copy,
  highlight,
  cta,
  secondary,
  flip,
}: {
  index: string;
  image: string;
  alt: string;
  label: string;
  name: string;
  quote: string;
  copy: string;
  highlight: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
  flip?: boolean;
}) {
  const external = cta.href.startsWith("http") || cta.href.startsWith("mailto");
  return (
    <Reveal as="article" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? "lg:order-2" : undefined}>
        <div className="grain relative overflow-hidden">
          <img
            src={image}
            alt={alt}
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
          />
          <span className="grain-overlay" aria-hidden="true" />
        </div>
      </div>

      <div className={flip ? "lg:order-1" : undefined}>
        <div className="flex items-center gap-4">
          <span className="display text-xs text-gold">{index}</span>
          <span className="eyebrow">{label}</span>
        </div>
        <h3 className="mt-5 text-4xl text-cream sm:text-5xl">{name}</h3>
        <p className="mt-4 text-lg italic text-gold/90">&ldquo;{quote}&rdquo;</p>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
          {copy}
        </p>
        <p className="mt-6 text-[0.66rem] uppercase tracking-[0.24em] text-cream/70">
          {highlight}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ActionLink href={cta.href} external={external}>
            {cta.label}
          </ActionLink>
          {secondary && (
            <ActionLink href={secondary.href} external variant="outline">
              {secondary.label}
            </ActionLink>
          )}
        </div>
      </div>
    </Reveal>
  );
}
