import { createFileRoute } from "@tanstack/react-router";

import mediaImg from "@/assets/media-still.jpg";

import { ClosingCta } from "@/components/ClosingCta";
import { ContentPending } from "@/components/ContentPending";
import { JsonLd } from "@/components/JsonLd";
import { MediaGrid } from "@/components/MediaGrid";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { ActionLink } from "@/components/ui/action-link";
import { seo } from "@/lib/seo";
import { BRAND, LINKS, events } from "@/lib/site-content";
import { breadcrumbSchema, eventSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/media")({
  head: () =>
    seo({
      title: "Media & Press | The Bush Boss",
      description:
        "Interviews, podcasts, radio, television, articles, events and music videos featuring The Bush Boss — Fabian Stennett and Gangunjah Nevadye. Press enquiries welcome.",
      path: "/media",
      image: mediaImg,
      imageAlt: "A microphone and camera set up for an interview",
    }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Room"
        title="In the media"
        lead="Interviews, podcasts, radio, television, articles, events, music videos and press coverage."
        image={mediaImg}
      >
        <ActionLink href={LINKS.speakerInfo} variant="outline">
          Press &amp; Interview Enquiries
        </ActionLink>
      </PageHero>

      <Section id="coverage">
        <SectionHeading
          label="Coverage"
          title="Every appearance, verified."
          lead="Nothing is listed here that has not been confirmed."
        />
        <div className="mt-16">
          <MediaGrid />
        </div>
      </Section>

      <Section dark id="dates" className="border-t border-border">
        <SectionHeading
          label="Events"
          title="Appearances and dates"
          lead="Festivals, talks, launches and cultural events."
        />

        {events.length === 0 ? (
          <Reveal delay={120} className="mt-12">
            <ContentPending label="No dates announced">
              Confirmed appearances appear here automatically once they are added to{" "}
              <code className="font-sans">events</code> in{" "}
              <code className="font-sans">src/lib/site-content.ts</code>.
            </ContentPending>
          </Reveal>
        ) : (
          <ul className="mt-12 border-t border-border">
            {events.map((event) => (
              <Reveal
                as="li"
                key={`${event.date}-${event.title}`}
                className="border-b border-border"
              >
                <div className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-gold-ink sm:col-span-3">
                    {event.date}
                  </p>
                  <div className="sm:col-span-6">
                    <h3 className="text-2xl">{event.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <p className="text-sm text-muted-foreground sm:col-span-3 sm:text-right">
                    {event.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        )}
      </Section>

      <Section id="press-kit" className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              label="For press"
              title="Press enquiries"
              lead={`Interview requests, biography, photography and release information for ${BRAND.name}.`}
            />
            <Reveal delay={160}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ActionLink href={LINKS.speakerInfo}>Request Press Information</ActionLink>
                <ActionLink to="/story" variant="outline">
                  Read the Story
                </ActionLink>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Or write directly to{" "}
                <a
                  href={`mailto:${LINKS.bookingEmail}`}
                  className="text-gold-ink underline-offset-4 hover:underline"
                >
                  {LINKS.bookingEmail}
                </a>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-6 lg:self-center">
            <h3 className="eyebrow">Follow</h3>
            <SocialLinks className="mt-6" />
          </Reveal>
        </div>
      </Section>

      <ClosingCta />
      <JsonLd
        data={[
          ...(events.length > 0 ? [eventSchema(events)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Media", path: "/media" },
          ]),
        ]}
      />
    </>
  );
}
