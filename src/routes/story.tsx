import { createFileRoute } from "@tanstack/react-router";

import archiveImg from "@/assets/archive-still.jpg";
import heroImg from "@/assets/hero-bushboss.jpg";

import { AuthorProfile } from "@/components/AuthorProfile";
import { ClosingCta } from "@/components/ClosingCta";
import { ContentPending } from "@/components/ContentPending";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealImage } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { ActionLink } from "@/components/ui/action-link";
import { seo } from "@/lib/seo";
import { BRAND, LINKS, gifts } from "@/lib/site-content";
import { breadcrumbSchema, personSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/story")({
  head: () =>
    seo({
      title: "The Story | The Bush Boss, Jamaican Maroon Culture & Music",
      description:
        "One man, three names, one mission. How Fabian Stennett, Gangunjah Nevadye and The Bush Boss became three expressions of one cultural movement: amplifying the Jamaican Maroons.",
      path: "/story",
      image: heroImg,
      imageAlt: "The Bush Boss in the Jamaican hills",
      type: "profile",
    }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Story"
        title="One man. Three names."
        lead={BRAND.intro}
        image={heroImg}
        imageAlt="The Bush Boss standing in the misty Jamaican hills"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink href={LINKS.booking}>Book The Bush Boss</ActionLink>
          <ActionLink to="/maroon-heritage" variant="outline">
            The Maroon Story
          </ActionLink>
        </div>
      </PageHero>

      {/* One identity, three names */}
      <Section>
        <SectionHeading
          label="The Identity"
          title="Three names for one body of work."
          lead="They are not personas or side projects. Each name marks the discipline the work is speaking through."
        />

        <ul className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-3">
          {gifts.map((gift, i) => (
            <Reveal as="li" key={gift.index} delay={i * 90}>
              <div className="flex h-full flex-col bg-background p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="display text-xs text-gold-ink">{gift.index}</span>
                  <span className="eyebrow">{gift.label}</span>
                </div>
                <h3 className="mt-6 text-3xl">{gift.name}</h3>
                <p className="mt-3 italic text-gold-ink/90">{gift.subheading}</p>
                <p className="mt-5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {gift.description}
                </p>
                <ActionLink to={gift.cta.to} variant="quiet" className="mt-6">
                  {gift.cta.label} <span aria-hidden="true">&rarr;</span>
                </ActionLink>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Mission */}
      <Section dark>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <RevealImage
              src={archiveImg}
              alt="Archive materials and historical documents on a dark surface"
              width={1408}
              height={1056}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[4/3] border border-border"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:self-center">
            <SectionHeading
              label="The Mission"
              title={BRAND.mission}
              lead="Not a slogan — a working brief that decides what gets made, and what gets said."
            />
            <Reveal delay={180}>
              <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
                {BRAND.manifesto}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Full biography */}
      <Section id="biography">
        <AuthorProfile />
      </Section>

      {/* Timeline scaffold */}
      <Section className="border-t border-border bg-card/40">
        <SectionHeading
          label="The Journey"
          title="A timeline, when the dates are confirmed."
          lead="Releases, publications, appearances and milestones belong here in order. Nothing is listed until The Bush Boss verifies it."
        />
        <Reveal delay={120} className="mt-12">
          <ContentPending label="Timeline pending">
            Add each milestone — date, title and a sentence of context — and this section will
            render it as a dated editorial timeline.
          </ContentPending>
        </Reveal>
      </Section>

      <ClosingCta />
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Story", path: "/story" },
          ]),
        ]}
      />
    </>
  );
}
