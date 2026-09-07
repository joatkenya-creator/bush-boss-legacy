import { createFileRoute } from "@tanstack/react-router";
import { useEffect, type CSSProperties, type ReactNode } from "react";

import archiveImg from "@/assets/archive-still.jpg";
import authorImg from "@/assets/author-portrait.jpg";
import booksImg from "@/assets/books-still.jpg";
import heroImg from "@/assets/hero-bushboss.jpg";
import maroonImg from "@/assets/maroon-land.jpg";
import mediaImg from "@/assets/media-still.jpg";
import musicImg from "@/assets/music-studio.jpg";
import speakingImg from "@/assets/speaking-stage.jpg";

import { BookCard } from "@/components/BookCard";
import { MusicFeature } from "@/components/MusicFeature";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { ActionLink } from "@/components/ui/action-link";
import {
  BRAND,
  LINKS,
  author,
  books,
  credentials,
  manifesto,
  maroonThemes,
  mediaCategories,
  mediaItems,
  speakingContexts,
  speakingTopics,
} from "@/lib/site-content";

const DESCRIPTION =
  "The Bush Boss — Fabian Stennett, known as Gangunjah Nevadye. Reggae and conscious music, books on Amazon Kindle, and cultural speaking amplifying Jamaican Maroon heritage.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Bush Boss | Musician, Author & Cultural Speaker" },
      { name: "description", content: DESCRIPTION },
      {
        property: "og:title",
        content: "The Bush Boss | One Man. Three Gifts. One Mission.",
      },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: LINKS.siteUrl },
      { property: "og:site_name", content: BRAND.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Bush Boss" },
      { name: "twitter:description", content: BRAND.tagline },
    ],
    links: [{ rel: "canonical", href: LINKS.siteUrl }],
  }),
  component: Landing,
});

/**
 * Publishes scroll position as a single CSS variable on <html>. The parallax
 * layers read it in CSS, so scrolling costs zero React re-renders.
 */
function useScrollVar() {
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        document.documentElement.style.setProperty("--sy", String(window.scrollY));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
}

function depth(value: number) {
  return { "--depth": value } as CSSProperties;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="eyebrow">{children}</span>
      <span className="rule-gold hidden w-20 sm:block" />
    </div>
  );
}

/** Marks copy that is deliberately unwritten until verified content arrives. */
function Pending({ children }: { children: ReactNode }) {
  return (
    <p className="border-l border-gold/50 pl-4 text-sm leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

function Landing() {
  useScrollVar();

  return (
    <div id="top">
      <a
        href="#manifesto"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-gold-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main>
        <Hero />
        <Manifesto />
        <ThreeGifts />
        <MaroonStory />
        <FeaturedMusic />
        <Books />
        <AuthorProfile />
        <Speaking />
        <Credentials />
        <Media />
        <Movement />
        <FinalCta />
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section className="grain relative flex min-h-svh items-end overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="The Bush Boss standing in the misty Jamaican hills at dawn"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="parallax size-full object-cover object-[62%_center]"
          style={depth(0.14)}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
      </div>
      <span className="grain-overlay" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal>
          <p className="eyebrow">{BRAND.name}</p>
          <h1 className="mt-7 max-w-4xl text-left text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.9]">
            One Man.
            <br />
            Three Gifts.
            <br />
            One Mission.
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.3em] text-gilt sm:text-sm">
            <span>Musician</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span>Author</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span>Speaker</span>
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {BRAND.intro}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ActionLink href="#story">Explore the Story</ActionLink>
            <ActionLink href={LINKS.booking} variant="outline">
              Book The Bush Boss
            </ActionLink>
          </div>
        </Reveal>
      </div>

      <a
        href="#manifesto"
        aria-label="Scroll to the story"
        className="absolute bottom-6 right-5 hidden items-center gap-3 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gilt sm:right-8 sm:flex"
      >
        Scroll
        <span aria-hidden="true" className="block h-10 w-px bg-gold/60" />
      </a>
    </section>
  );
}

/* -------------------------------- manifesto ------------------------------- */

function Manifesto() {
  return (
    <section id="manifesto" className="on-light py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>The Mission</SectionLabel>
          <h2 className="mt-8 max-w-4xl text-[clamp(2.25rem,6vw,5rem)] leading-[1.02]">
            {manifesto.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed sm:text-2xl">{manifesto.lead}</p>
            <p className="mt-6 text-xl leading-relaxed sm:text-2xl">{manifesto.body}</p>
          </Reveal>
          <Reveal delay={200} className="lg:pt-3">
            <p className="text-base leading-relaxed text-muted-foreground">{manifesto.closing}</p>
            <p className="display mt-10 text-3xl leading-tight sm:text-4xl">
              &ldquo;{BRAND.mission}&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- three gifts ------------------------------ */

function ThreeGifts() {
  return (
    <section id="story" className="on-light border-t border-border pb-28 pt-24 sm:pb-40 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>The Work</SectionLabel>
          <h2 className="mt-7 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02]">
            Three gifts.
            <br />
            One purpose.
          </h2>
        </Reveal>

        <div className="mt-24 space-y-28 sm:space-y-36">
          <GiftBlock
            index="01"
            image={musicImg}
            alt="A vintage studio microphone lit by warm gold light"
            label="Music"
            name="Gangunjah Nevadye"
            quote="Where history finds its rhythm."
            copy="Through reggae and conscious music, Gangunjah Nevadye channels Maroon history, culture, resilience, and consciousness into sound."
            highlight="Road Fulla Hole — new music, out now"
            cta={{ label: "Listen to the Music", href: "#music" }}
          />
          <GiftBlock
            index="02"
            flip
            image={booksImg}
            alt="Aged manuscripts and hardcover books on a dark writing desk"
            label="Literature"
            name="Fabian Stennett"
            quote="Where history becomes story."
            copy="Through books and storytelling, Fabian Stennett explores the Maroon story, Jamaican heritage, identity, resilience, and lived experience."
            highlight="6+ titles on Amazon Kindle"
            cta={{ label: "Explore the Books", href: "#books" }}
            secondary={{ label: "Shop on Kindle", href: LINKS.books }}
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
            cta={{ label: "Book The Bush Boss", href: LINKS.booking }}
          />
        </div>
      </div>
    </section>
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
    <Reveal as="article" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className={flip ? "lg:order-2" : undefined}>
        <div className="grain relative overflow-hidden">
          <img
            src={image}
            alt={alt}
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
          />
          <span className="grain-overlay" aria-hidden="true" />
        </div>
      </div>

      <div className={flip ? "lg:order-1" : undefined}>
        <div className="flex items-center gap-4">
          <span className="display text-sm text-gilt">{index}</span>
          <span className="eyebrow">{label}</span>
        </div>
        <h3 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02]">{name}</h3>
        <p className="mt-4 text-lg italic text-gilt">&ldquo;{quote}&rdquo;</p>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">{copy}</p>
        <p className="mt-6 text-[0.66rem] uppercase tracking-[0.24em]">{highlight}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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

/* ------------------------------ maroon story ------------------------------ */

function MaroonStory() {
  return (
    <section id="maroon" className="on-dark grain relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={maroonImg}
          alt="Mist rising over the limestone hills of Jamaica's Cockpit Country"
          width={1920}
          height={1088}
          loading="lazy"
          className="parallax size-full object-cover opacity-40"
          style={depth(0.05)}
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

      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-44">
        <Reveal>
          <SectionLabel>Maroon Heritage</SectionLabel>
          <h2 className="mt-8 text-[clamp(2rem,7vw,5.5rem)] leading-[0.96]">The Maroon Story</h2>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-14 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {maroonThemes.map((theme) => (
              <li key={theme.title} className="border-t border-border pt-4">
                <p className="display text-2xl sm:text-3xl">{theme.title}.</p>
                {theme.detail && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {theme.detail}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={150}>
            <p className="text-xl leading-relaxed sm:text-2xl">
              The Maroon story is more than a chapter in Jamaican history. It is a living legacy.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Bush Boss carries that legacy forward — using music, books and speaking to bring
              greater attention to Jamaican Maroon heritage, so that the story is not footnoted, but
              felt.
            </p>
            <Pending>
              Sourced historical content for this section is being prepared with verified
              references. Nothing is published here until it can be cited.
            </Pending>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ActionLink href="#books">Explore the Maroon Story</ActionLink>
            <ActionLink href={LINKS.booking} variant="outline">
              Book a Maroon Heritage Talk
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ featured music ---------------------------- */

function FeaturedMusic() {
  return (
    <section id="music" className="on-dark border-t border-border py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Featured Music</SectionLabel>
          <h2 className="mt-7 text-[clamp(2.25rem,7vw,5rem)] leading-[1.0]">Road Fulla Hole</h2>
          <p className="mt-4 text-base text-muted-foreground">
            The latest release from Gangunjah Nevadye
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-16">
          <MusicFeature />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- books --------------------------------- */

function Books() {
  return (
    <section id="books" className="on-light py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Literature</SectionLabel>
          <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-[clamp(2.25rem,7vw,5rem)] leading-[1.0]">The Books</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Stories. History. Culture. Perspective.
              </p>
            </div>
            <p className="eyebrow">6+ titles on Amazon Kindle</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <ul className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:thin] sm:px-8 lg:mx-auto lg:max-w-7xl">
          {books.map((book, i) => (
            <li key={book.title}>
              <BookCard book={book} index={i} />
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <Reveal delay={150}>
          <Pending>
            Titles, descriptions and publication dates are placeholders until the verified Amazon
            Kindle listings are supplied. Every card links to the live Kindle store in the meantime.
          </Pending>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ActionLink href={LINKS.books} external>
              Explore All Books
            </ActionLink>
            <ActionLink href={LINKS.books} external variant="outline">
              Shop on Amazon Kindle
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ author profile ---------------------------- */

function AuthorProfile() {
  const known = author.fields.filter((field) => field.value);
  return (
    <section id="author" className="on-light border-t border-border py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="grain relative overflow-hidden">
            <img
              src={authorImg}
              alt="Portrait of Fabian Stennett, the author behind the books"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <span className="grain-overlay" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionLabel>The Author</SectionLabel>
          <h2 className="mt-7 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.0]">{author.name}</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.26em] text-gilt">{author.role}</p>

          {author.biography ? (
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              {author.biography}
            </p>
          ) : (
            <div className="mt-8 max-w-xl">
              <Pending>
                Full biography to be supplied. This section is built to hold verified background,
                published works, awards, interviews, cultural interests and speaking experience —
                each appears only once its copy is confirmed.
              </Pending>
            </div>
          )}

          {known.length > 0 && (
            <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {known.map((field) => (
                <div key={field.label} className="border-t border-border pt-4">
                  <dt className="eyebrow">{field.label}</dt>
                  <dd className="mt-2 text-base">{field.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ActionLink href={LINKS.books} external>
              Read the Books
            </ActionLink>
            <ActionLink href={LINKS.speakerInfo} variant="outline">
              Request Full Biography
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- speaking -------------------------------- */

function Speaking() {
  return (
    <section id="speaking" className="on-dark grain relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={speakingImg}
          alt=""
          aria-hidden="true"
          width={1408}
          height={1008}
          loading="lazy"
          className="size-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--ink) 14%, oklch(0.16 0.012 60 / 0.72))",
          }}
        />
      </div>
      <span className="grain-overlay" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-44">
        <Reveal>
          <SectionLabel>Speaking</SectionLabel>
          <h2 className="mt-8 max-w-3xl text-[clamp(2rem,6vw,4.5rem)] leading-[1.04]">
            Some stories are meant to be heard.
          </h2>
          <p className="mt-6 text-lg text-gilt">Bring The Bush Boss to your stage.</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Schools, universities, conferences, festivals, cultural events, community organisations.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {speakingTopics.map((topic) => (
              <li key={topic.title} className="bg-background p-7">
                <h3 className="text-xl">{topic.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
                <p className="mt-5 text-[0.6rem] uppercase tracking-[0.2em] text-gilt">
                  {topic.audience}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ActionLink href={LINKS.booking}>Book The Bush Boss</ActionLink>
            <ActionLink href={LINKS.speakerInfo} variant="outline">
              Request Speaker Information
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- credentials ------------------------------ */

function Credentials() {
  const verified = credentials.filter((metric) => metric.value);
  return (
    <section className="on-dark border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>

        {verified.length > 0 && (
          <Reveal delay={80}>
            <dl className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {verified.map((metric) => (
                <div key={metric.label} className="border-t border-border pt-5">
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <span className="display block text-5xl sm:text-6xl">{metric.value}</span>
                    <span className="mt-3 block text-[0.64rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {metric.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        <Reveal delay={120}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Speaks to</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {speakingContexts.map((context) => (
                  <li key={context}>{context}</li>
                ))}
              </ul>
            </div>
            <Pending>
              Engagement counts, years of experience and countries reached are published only once
              verified. Named organisations, institutions and appearances drop into this section as
              they are confirmed.
            </Pending>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- media --------------------------------- */

function Media() {
  return (
    <section id="media" className="on-light py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Press</SectionLabel>
          <h2 className="mt-7 text-[clamp(2.25rem,7vw,5rem)] leading-[1.0]">In the Media</h2>
        </Reveal>

        {mediaItems.length > 0 ? (
          <Reveal delay={100}>
            <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {mediaItems.map((item) => (
                <li key={item.title}>
                  <article>
                    {item.image && (
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[3/2] w-full object-cover"
                      />
                    )}
                    <p className="eyebrow mt-5">
                      {item.platform} · {item.date}
                    </p>
                    <h3 className="mt-3 text-2xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-[0.62rem] uppercase tracking-[0.22em] text-gilt hover:underline"
                      >
                        Read / Watch
                      </a>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : (
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal delay={100}>
              <div className="grain relative overflow-hidden">
                <img
                  src={mediaImg}
                  alt="A microphone and notebook on a broadcast desk"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <span className="grain-overlay" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg leading-relaxed">
                Interviews, podcasts, radio, television, articles, events, music videos and press
                coverage are collected here.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3">
                {mediaCategories.map((category) => (
                  <li
                    key={category}
                    className="border-t border-border pt-3 text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Pending>
                  No press items are listed yet. Verified coverage is added as it is confirmed —
                  nothing is invented to fill the grid.
                </Pending>
              </div>
              <div className="mt-8">
                <ActionLink href={LINKS.speakerInfo} variant="outline">
                  Media &amp; Press Enquiries
                </ActionLink>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------- movement -------------------------------- */

function Movement() {
  return (
    <section id="movement" className="on-light border-t border-border py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionLabel>The Movement</SectionLabel>
          <h2 className="mt-7 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.0]">Join the Movement</h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed">
            Press play. Turn the page. Hear the message. Discover the story.
          </p>
          <ul className="mt-8 space-y-3 text-base text-muted-foreground">
            {[
              "Listen to the music",
              "Read the books",
              "Learn the heritage",
              "Attend an event",
              "Book a speaking engagement",
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
          <div className="grain relative overflow-hidden">
            <img
              src={archiveImg}
              alt="Aged archive paper and handwritten documents in warm light"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="grain-overlay" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- final cta ------------------------------- */

function FinalCta() {
  return (
    <section className="on-dark grain relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={maroonImg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          loading="lazy"
          className="size-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--ink), oklch(0.18 0.012 60 / 0.85))",
          }}
        />
      </div>
      <span className="grain-overlay" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-44">
        <Reveal>
          <h2 className="max-w-5xl text-[clamp(2.25rem,8vw,6rem)] leading-[0.94]">
            Make the story impossible to ignore.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you want to hear the music, explore the books, learn about Maroon heritage, or
            bring The Bush Boss to your stage — the journey starts here.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ActionLink href={LINKS.booking}>Book The Bush Boss</ActionLink>
            <ActionLink href={LINKS.music} external variant="outline">
              Listen to the Music
            </ActionLink>
            <ActionLink href={LINKS.books} external variant="outline">
              Explore the Books
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- structured data ---------------------------- */

/** Only facts that appear on the page — no invented credentials. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${LINKS.siteUrl}/#website`,
      url: LINKS.siteUrl,
      name: BRAND.name,
      description: DESCRIPTION,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${LINKS.siteUrl}/#person`,
      name: BRAND.author,
      alternateName: [BRAND.name, BRAND.artist],
      jobTitle: ["Musician", "Author", "Speaker"],
      description: BRAND.intro,
      knowsAbout: [
        "Jamaican Maroon heritage",
        "Jamaican history",
        "Jamaican culture",
        "Reggae and conscious music",
        "Cultural identity",
      ],
      url: LINKS.siteUrl,
      sameAs: [LINKS.music],
    },
    {
      "@type": "MusicRecording",
      name: "Road Fulla Hole",
      byArtist: { "@type": "MusicGroup", name: BRAND.artist },
      url: LINKS.music,
    },
  ],
};
