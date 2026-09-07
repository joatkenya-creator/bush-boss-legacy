import { createFileRoute } from "@tanstack/react-router";

import musicImg from "@/assets/music-studio.jpg";
import roadFullaHole from "@/assets/road-fulla-hole.jpg";

import { ClosingCta } from "@/components/ClosingCta";
import { ContentPending } from "@/components/ContentPending";
import { JsonLd } from "@/components/JsonLd";
import { MusicFeature } from "@/components/MusicFeature";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { ActionLink } from "@/components/ui/action-link";
import { seo } from "@/lib/seo";
import { BRAND, LINKS, releases } from "@/lib/site-content";
import { breadcrumbSchema, musicGroupSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/music")({
  head: () =>
    seo({
      title: "Music | Gangunjah Nevadye",
      description:
        "Reggae and conscious music from Gangunjah Nevadye — the musical voice of The Bush Boss, channelling Maroon history, culture, resilience and consciousness into sound. Featuring Road Fulla Hole.",
      path: "/music",
      image: roadFullaHole,
      imageAlt: "Sleeve artwork for Road Fulla Hole by Gangunjah Nevadye",
    }),
  component: MusicPage,
});

const THEMES = [
  {
    title: "History in the rhythm",
    body: "Maroon history is not background material in these songs. It is the subject — carried by the melody so it travels further than a lecture ever could.",
  },
  {
    title: "Conscious writing",
    body: "Lyrics written to be understood and argued with: identity, resilience, community and the pressure of the present day.",
  },
  {
    title: "Roots and now",
    body: "Reggae's traditions held alongside contemporary production, so the music sits comfortably in a modern playlist without softening what it says.",
  },
];

function MusicPage() {
  return (
    <>
      <PageHero
        eyebrow="01 — Music"
        title="Gangunjah Nevadye"
        lead="Where history finds its rhythm. Through reggae and conscious music, Gangunjah Nevadye channels Maroon history, culture, resilience, and consciousness into sound."
        image={musicImg}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink href={LINKS.music}>Stream / Download</ActionLink>
          <ActionLink href={LINKS.booking} variant="outline">
            Book The Bush Boss
          </ActionLink>
        </div>
      </PageHero>

      <Section id="featured">
        <SectionHeading
          label="Featured Release"
          title="Road Fulla Hole"
          lead="The latest release from Gangunjah Nevadye."
        />
        <div className="mt-16 sm:mt-20">
          <MusicFeature />
        </div>
      </Section>

      <Section dark>
        <SectionHeading label="The Sound" title="What the music carries." />
        <ul className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-3">
          {THEMES.map((theme, i) => (
            <Reveal as="li" key={theme.title} delay={i * 90}>
              <div className="h-full bg-ink p-8 sm:p-10">
                <span className="display text-xs text-gold-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-2xl">{theme.title}</h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {theme.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="catalogue" className="border-t border-border">
        <SectionHeading
          label="Catalogue"
          title="The releases"
          lead="Every confirmed release, newest first."
        />

        <ul className="mt-14 border-t border-border">
          {releases.map((release) => (
            <Reveal as="li" key={release.title} className="border-b border-border">
              <a
                href={release.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid items-center gap-6 py-8 sm:grid-cols-12 sm:py-10"
              >
                <img
                  src={release.cover}
                  alt=""
                  aria-hidden="true"
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  className="size-24 border border-border object-cover sm:col-span-2 sm:size-28"
                />
                <div className="sm:col-span-7">
                  <h3 className="text-2xl transition-colors duration-500 group-hover:text-gold-ink sm:text-3xl">
                    {release.title}
                  </h3>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-gold-ink">
                    {release.artist}
                  </p>
                  <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                    {release.description}
                  </p>
                </div>
                <span className="text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-gold-ink sm:col-span-3 sm:text-right">
                  Listen <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12">
          <ContentPending label="More releases">
            The back catalogue is added one entry at a time to{" "}
            <code className="font-sans">releases</code> in{" "}
            <code className="font-sans">src/lib/site-content.ts</code> — title, artwork, description
            and streaming URL — and appears in this list automatically.
          </ContentPending>
        </Reveal>
      </Section>

      <Section dark className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            label="Follow the sound"
            title="Where to listen"
            lead={`Confirmed destinations for ${BRAND.artist}. Dimmed platforms are awaiting official profile links.`}
          />
          <Reveal delay={140} className="lg:self-center">
            <SocialLinks />
          </Reveal>
        </div>
      </Section>

      <ClosingCta />
      <JsonLd
        data={[
          musicGroupSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Music", path: "/music" },
          ]),
        ]}
      />
    </>
  );
}
