import { createFileRoute } from "@tanstack/react-router";

import archiveImg from "@/assets/archive-still.jpg";
import maroonImg from "@/assets/maroon-land.jpg";

import { ClosingCta } from "@/components/ClosingCta";
import { ContentPending } from "@/components/ContentPending";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealImage } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/ui/action-link";
import { seo } from "@/lib/seo";
import { BRAND, LINKS, maroonPillars, maroonTopics } from "@/lib/site-content";
import { breadcrumbSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/maroon-heritage")({
  head: () =>
    seo({
      title: "Maroon Heritage | The Bush Boss",
      description:
        "Jamaican Maroon heritage told through music, literature and speaking. An archive built to hold verified history — resistance, resilience, heritage and identity — carried forward by The Bush Boss.",
      path: "/maroon-heritage",
      image: maroonImg,
      imageAlt: "Mist over the limestone hills of Jamaica's Cockpit Country",
    }),
  component: MaroonHeritagePage,
});

function MaroonHeritagePage() {
  return (
    <>
      <PageHero
        eyebrow="Maroon Heritage"
        title="The Maroon story"
        lead="The Maroon story is more than a chapter in Jamaican history. It is a living legacy."
        image={maroonImg}
        imageAlt="Mist rising over Jamaica's limestone hill country"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink to="/music" variant="outline">
            Hear It in the Music
          </ActionLink>
          <ActionLink to="/books" variant="outline">
            Read It in the Books
          </ActionLink>
        </div>
      </PageHero>

      {/* Four pillars */}
      <Section dark id="pillars">
        <ul className="space-y-1">
          {maroonPillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.word} delay={i * 110}>
              <div className="group grid items-baseline gap-x-10 gap-y-3 border-b border-stone/15 py-6 lg:grid-cols-12">
                <h2 className="text-[2.75rem] uppercase leading-[1.02] tracking-[-0.02em] transition-colors duration-700 group-hover:text-gold-ink sm:text-[4.5rem] lg:col-span-6 lg:text-[6rem]">
                  {pillar.word}.
                </h2>
                <p className="text-lg text-muted-foreground lg:col-span-3">{pillar.description}</p>
                <p className="text-sm leading-relaxed text-muted-foreground/75 lg:col-span-3">
                  {pillar.detail ?? "Sourced detail to be added."}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Why the archive is empty on purpose */}
      <Section id="archive">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              label="The Archive"
              title="Built to hold history, not to guess at it."
              lead="This page is structured as an archive. The layout, navigation and article templates are finished — what goes into them must be verified first."
            />
            <Reveal delay={180}>
              <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
                Maroon history belongs to Maroon communities. Publishing unsourced claims about it —
                however well intended — would undermine the very thing {BRAND.name} is working for.
                So nothing here is invented: entries are added as they are confirmed with{" "}
                {BRAND.author} and the sources he works from.
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-10">
              <ContentPending label="Historical entries pending">
                Each entry will carry a title, period, narrative and its source. Add them to{" "}
                <code className="font-sans">src/lib/site-content.ts</code> and they will render in
                this section.
              </ContentPending>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-6">
            <RevealImage
              src={archiveImg}
              alt="Historical documents and archive materials"
              width={1408}
              height={1760}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[4/5] border border-border"
            />
          </Reveal>
        </div>
      </Section>

      {/* Subject index */}
      <Section className="border-t border-border bg-card/40" id="subjects">
        <SectionHeading
          label="Subjects"
          title="What this archive will cover"
          lead="The themes the work returns to, across all three disciplines."
        />
        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
          {maroonTopics.map((topic, i) => (
            <Reveal as="li" key={topic} delay={(i % 3) * 70}>
              <div className="flex h-full items-baseline gap-4 bg-background px-6 py-7">
                <span className="display text-xs text-gold-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base">{topic}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* How the story is carried */}
      <Section dark className="border-t border-border">
        <SectionHeading
          label="How it travels"
          title="Three ways the story reaches people."
          align="center"
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          <Reveal>
            <ActionLink to="/music" variant="outline" className="w-full py-8">
              The Music
            </ActionLink>
          </Reveal>
          <Reveal delay={90}>
            <ActionLink to="/books" variant="outline" className="w-full py-8">
              The Books
            </ActionLink>
          </Reveal>
          <Reveal delay={180}>
            <ActionLink href={LINKS.booking} variant="outline" className="w-full py-8">
              The Stage
            </ActionLink>
          </Reveal>
        </div>
      </Section>

      <ClosingCta />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Maroon Heritage", path: "/maroon-heritage" },
        ])}
      />
    </>
  );
}
