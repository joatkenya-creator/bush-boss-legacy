import { createFileRoute } from "@tanstack/react-router";

import booksImg from "@/assets/books-still.jpg";
import heroImg from "@/assets/hero-bushboss.jpg";
import maroonImg from "@/assets/maroon-land.jpg";
import musicImg from "@/assets/music-studio.jpg";
import speakingImg from "@/assets/speaking-stage.jpg";

import { AuthorProfile } from "@/components/AuthorProfile";
import { BookShelf } from "@/components/BookShelf";
import { ClosingCta } from "@/components/ClosingCta";
import { Credentials } from "@/components/Credentials";
import { GiftChapter } from "@/components/GiftChapter";
import { JsonLd } from "@/components/JsonLd";
import { MediaGrid } from "@/components/MediaGrid";
import { MusicFeature } from "@/components/MusicFeature";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { SpeakingTopics } from "@/components/SpeakingTopics";
import { ActionLink } from "@/components/ui/action-link";
import { useParallax } from "@/hooks/use-parallax";
import { seo } from "@/lib/seo";
import { BRAND, LINKS, gifts, maroonPillars } from "@/lib/site-content";
import { musicGroupSchema, speakingServiceSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "The Bush Boss | Jamaican Reggae, Conscious Rap & Maroons",
      description:
        "Fabian Stennett, known in music as Gangunjah Nevadye. Jamaican reggae music and conscious rap, books on Jamaican history, and speaking that carries the Jamaican Maroons' cultural movement.",
      path: "/",
      image: heroImg,
      imageAlt: "The Bush Boss in the Jamaican hills at first light",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <HomeHero />
      <Manifesto />
      <ThreeGifts />
      <MaroonStory />
      <FeaturedMusic />
      <Books />
      <Author />
      <Speaking />
      <Media />
      <Movement />
      <ClosingCta />
      <JsonLd data={[musicGroupSchema(), speakingServiceSchema()]} />
    </>
  );
}

/* ---------------------------------- hero --------------------------------- */

function HomeHero() {
  const scrollY = useParallax();

  return (
    <section className="on-dark grain relative isolate flex min-h-svh items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="The Bush Boss, Jamaican reggae musician and author, standing in the misty Maroon hills of Jamaica at first light"
          width={1600}
          height={1200}
          fetchPriority="high"
          decoding="sync"
          className="size-full scale-[1.08] object-cover object-[62%_center]"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
      </div>
      <span className="grain-overlay" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pb-32">
        <Reveal immediate>
          <p className="eyebrow">{BRAND.name}</p>
          <h1 className="mt-7 max-w-5xl text-balance text-[3rem] leading-[0.9] sm:text-7xl lg:text-[7.5rem]">
            One man.
            <br />
            Three gifts.
            <br />
            One mission.
          </h1>
        </Reveal>

        <Reveal delay={140} immediate>
          <p className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.3em] text-gold-ink sm:text-sm">
            <span>Musician</span>
            <span aria-hidden="true" className="text-stone/40">
              /
            </span>
            <span>Author</span>
            <span aria-hidden="true" className="text-stone/40">
              /
            </span>
            <span>Speaker</span>
          </p>
          <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {BRAND.intro}
          </p>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink to="/story" size="lg">
              Explore the Story
            </ActionLink>
            <ActionLink href={LINKS.booking} variant="outline" size="lg">
              Book The Bush Boss
            </ActionLink>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <a
        href="#manifesto"
        className="group absolute bottom-8 right-5 hidden items-center gap-4 text-[0.58rem] uppercase tracking-[0.28em] text-stone/60 transition-colors hover:text-gold-ink sm:right-8 lg:flex"
      >
        Scroll
        <span aria-hidden="true" className="relative block h-14 w-px overflow-hidden bg-stone/25">
          <span className="scroll-cue absolute inset-x-0 top-0 block h-5 bg-gold" />
        </span>
      </a>
    </section>
  );
}

/* -------------------------------- manifesto ------------------------------- */

function Manifesto() {
  return (
    <Section id="manifesto" className="border-b border-border">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <SectionLabel>The Mission</SectionLabel>
          <h2 className="mt-7 text-balance text-4xl leading-[1.03] sm:text-6xl lg:text-7xl">
            The story deserves to be heard.
          </h2>
        </Reveal>

        <div className="lg:col-span-5 lg:pt-24">
          <Reveal delay={120}>
            <p className="text-pretty text-lg leading-relaxed">
              The Maroon story is a story of resistance, resilience, identity, culture, freedom, and
              survival. The Bush Boss brings that story into the present through music, literature,
              and speaking.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Three disciplines, one refusal: that a people who fought for their freedom should be
              reduced to a footnote. The songs carry it, the books record it, and the stage puts it
              in front of the people who need to hear it — students, communities, festivals,
              institutions.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-10 border-l border-gold pl-6 font-display text-xl italic leading-relaxed sm:text-2xl">
              {BRAND.mission}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ three gifts ------------------------------ */

const GIFT_IMAGES = [
  {
    image: musicImg,
    alt: "A studio microphone under warm gold light",
  },
  {
    image: booksImg,
    alt: "Hardcover books and aged manuscripts on a dark writing desk",
  },
  {
    image: speakingImg,
    alt: "A speaker on a darkened stage in front of an audience",
  },
];

function ThreeGifts() {
  return (
    <Section id="three-gifts">
      <SectionHeading
        label="The Work"
        title={
          <>
            Three gifts.
            <br />
            One purpose.
          </>
        }
        lead="Music, literature and speaking are not three careers. They are three ways of telling the same story to people who each need to hear it differently."
      />

      <div className="mt-24 space-y-28 sm:mt-32 sm:space-y-40">
        {gifts.map((gift, i) => (
          <GiftChapter
            key={gift.index}
            gift={gift}
            image={GIFT_IMAGES[i]?.image ?? musicImg}
            imageAlt={GIFT_IMAGES[i]?.alt ?? ""}
            flip={i % 2 === 1}
            {...(gift.label === "Literature"
              ? {
                  secondary: {
                    label: "Shop on Amazon Kindle",
                    href: LINKS.books,
                  },
                }
              : {})}
          />
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ maroon story ----------------------------- */

function MaroonStory() {
  const scrollY = useParallax();

  return (
    <Section dark id="maroon" className="overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={maroonImg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          loading="lazy"
          decoding="async"
          className="size-full scale-110 object-cover opacity-45"
          style={{
            transform: `translate3d(0, ${Math.min(scrollY * 0.03, 70)}px, 0)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--ink), oklch(0.16 0.012 60 / 0.45) 45%, var(--ink))",
          }}
        />
      </div>

      <Reveal>
        <SectionLabel>The Maroon Story</SectionLabel>
      </Reveal>

      <ul className="mt-12 space-y-1 sm:mt-16">
        {maroonPillars.map((pillar, i) => (
          <Reveal as="li" key={pillar.word} delay={i * 110}>
            <div className="group flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-stone/15 pb-4">
              <h2 className="text-[3rem] uppercase leading-[1.05] tracking-[-0.02em] transition-colors duration-700 group-hover:text-gold-ink sm:text-[5rem] lg:text-[6.5rem]">
                {pillar.word}.
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">{pillar.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={100}>
          <p className="text-pretty text-lg leading-relaxed sm:text-xl">
            The Maroon story is more than a chapter in Jamaican history. It is a living legacy.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            This site treats that legacy with the care it is owed. The heritage section is built as
            an archive — structured so that verified history, sourced material and community voices
            can be added over time, rather than filled in from guesswork.
          </p>
        </Reveal>
      </div>

      <Reveal delay={260}>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink to="/maroon-heritage" size="lg">
            Explore the Maroon Story
          </ActionLink>
          <ActionLink to="/story" variant="outline" size="lg">
            Meet The Bush Boss
          </ActionLink>
        </div>
      </Reveal>
    </Section>
  );
}

/* ----------------------------- featured music ---------------------------- */

function FeaturedMusic() {
  return (
    <Section id="music">
      <SectionHeading
        label="Featured Release"
        title="Road Fulla Hole"
        lead="The latest release from Gangunjah Nevadye."
      />
      <div className="mt-16 sm:mt-20">
        <MusicFeature />
      </div>
      <Reveal delay={120} className="mt-14">
        <ActionLink to="/music" variant="outline">
          All Music
        </ActionLink>
      </Reveal>
    </Section>
  );
}

/* --------------------------------- books --------------------------------- */

function Books() {
  return (
    <Section id="books" className="border-y border-border bg-card/40">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          label="The Books"
          title="The books"
          lead="Stories. History. Culture. Perspective."
          className="max-w-2xl"
        />
        <Reveal delay={120}>
          <p className="display text-6xl text-gold-ink sm:text-7xl">6+</p>
          <p className="eyebrow mt-2">Titles on Amazon Kindle</p>
        </Reveal>
      </div>

      <div className="mt-16">
        <BookShelf />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ActionLink to="/books">Explore All Books</ActionLink>
        <ActionLink href={LINKS.books} variant="outline">
          Shop on Amazon Kindle
        </ActionLink>
      </div>
    </Section>
  );
}

/* ---------------------------- author profile ----------------------------- */

function Author() {
  return (
    <Section dark id="author">
      <AuthorProfile compact />
    </Section>
  );
}

/* -------------------------------- speaking ------------------------------- */

function Speaking() {
  return (
    <Section id="speaking">
      <SectionHeading
        label="Speaking"
        title="Some stories are meant to be heard."
        lead="Bring The Bush Boss to your stage — schools, universities, conferences, festivals, cultural events and community programmes."
      />

      <div className="mt-16">
        <SpeakingTopics />
      </div>

      <div className="mt-16">
        <Credentials />
      </div>

      <Reveal delay={120}>
        <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink href={LINKS.booking} size="lg">
            Book The Bush Boss
          </ActionLink>
          <ActionLink href={LINKS.speakerInfo} variant="outline" size="lg">
            Request Speaker Information
          </ActionLink>
        </div>
      </Reveal>
    </Section>
  );
}

/* --------------------------------- media --------------------------------- */

function Media() {
  return (
    <Section dark id="media">
      <SectionHeading
        label="Press & Appearances"
        title="In the media"
        lead="Interviews, podcasts, radio, television, articles and events — published here as each one is verified."
      />
      <div className="mt-16">
        <MediaGrid />
      </div>
      <Reveal delay={120} className="mt-12">
        <ActionLink to="/media" variant="outline">
          Visit the Media Room
        </ActionLink>
      </Reveal>
    </Section>
  );
}

/* -------------------------------- movement ------------------------------- */

const MOVEMENT_ACTIONS = [
  { label: "Listen to the music", to: "/music" },
  { label: "Read the books", to: "/books" },
  { label: "Learn the history", to: "/maroon-heritage" },
  { label: "Attend an event", to: "/media" },
  { label: "Book the speaker", to: "/speaking" },
  { label: "Share the story", to: "/story" },
];

function Movement() {
  return (
    <Section id="movement">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            label="The Movement"
            title="Join the movement"
            lead="Press play. Turn the page. Hear the message. Discover the story."
          />
          <Reveal delay={160}>
            <SocialLinks className="mt-10" />
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-6">
          <ul className="border-t border-border">
            {MOVEMENT_ACTIONS.map((action, i) => (
              <li key={action.label} className="border-b border-border">
                <ActionLink
                  to={action.to}
                  variant="ghost"
                  className="group/row w-full justify-between px-0 py-6 tracking-[0.14em] text-foreground hover:text-gold-ink"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-[0.6rem] text-gold-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base normal-case tracking-normal sm:text-lg">
                      {action.label}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/row:translate-x-1"
                  >
                    &rarr;
                  </span>
                </ActionLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
