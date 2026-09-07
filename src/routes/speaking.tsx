import { createFileRoute } from "@tanstack/react-router";

import speakingImg from "@/assets/speaking-stage.jpg";

import { ClosingCta } from "@/components/ClosingCta";
import { ContentPending } from "@/components/ContentPending";
import { Credentials } from "@/components/Credentials";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SpeakingTopics } from "@/components/SpeakingTopics";
import { ActionLink } from "@/components/ui/action-link";
import { seo } from "@/lib/seo";
import { BRAND, LINKS, events } from "@/lib/site-content";
import { breadcrumbSchema, eventSchema, speakingServiceSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/speaking")({
  head: () =>
    seo({
      title: "Book The Bush Boss | Cultural & Motivational Speaker",
      description:
        "Book The Bush Boss to speak on Jamaican history, Maroon heritage, culture and identity, motivation, music and consciousness, and youth empowerment — for schools, universities, conferences, festivals and cultural events.",
      path: "/speaking",
      image: speakingImg,
      imageAlt: "The Bush Boss speaking on a darkened stage",
    }),
  component: SpeakingPage,
});

const BOOKING_STEPS = [
  {
    title: "Tell us about the room",
    body: "The audience, the occasion, the date and the location. A sentence on what you want people to leave with helps most.",
  },
  {
    title: "Shape the talk",
    body: "The topic is fitted to your audience — a school assembly, a conference keynote and a heritage festival each need a different shape.",
  },
  {
    title: "Confirm and prepare",
    body: "Format, running time, technical needs and travel are agreed in writing before the date is held.",
  },
];

function SpeakingPage() {
  return (
    <>
      <PageHero
        eyebrow="03 — Speaking"
        title="Some stories are meant to be heard."
        lead={`Bring ${BRAND.name} to your stage. Through motivational and cultural speaking, he challenges audiences to understand their history, embrace their identity, and move with purpose.`}
        image={speakingImg}
        imageAlt="The Bush Boss speaking on a darkened stage in front of an audience"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ActionLink href={LINKS.booking} size="lg">
            Book The Bush Boss
          </ActionLink>
          <ActionLink href={LINKS.speakerInfo} variant="outline" size="lg">
            Request Speaker Information
          </ActionLink>
        </div>
      </PageHero>

      <Section id="topics">
        <SectionHeading
          label="Speaking Areas"
          title="Six ways into the same story."
          lead="Each talk is built for the room it is given in. These are the subjects The Bush Boss speaks on."
        />
        <div className="mt-16">
          <SpeakingTopics />
        </div>
      </Section>

      <Section dark id="experience" className="border-t border-border">
        <SectionHeading
          label="Experience"
          title="Credentials, verified only."
          lead="This site publishes no engagement counts, affiliations or testimonials that have not been confirmed."
        />
        <div className="mt-14">
          <Credentials />
        </div>
      </Section>

      <Section id="how-it-works">
        <SectionHeading
          label="Booking"
          title="How a booking works"
          lead="Three steps, no agency layer in between."
        />
        <ol className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-3">
          {BOOKING_STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}>
              <div className="h-full bg-background p-8 sm:p-10">
                <span className="display text-xs text-gold-ink">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-2xl">{step.title}</h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink href={LINKS.booking} size="lg">
              Book The Bush Boss
            </ActionLink>
            <ActionLink href={LINKS.speakerInfo} variant="outline" size="lg">
              Request Speaker Information
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
      </Section>

      <Section className="border-t border-border bg-card/40" id="dates">
        <SectionHeading
          label="Upcoming"
          title="Dates"
          lead="Confirmed appearances are listed here."
        />

        {events.length === 0 ? (
          <Reveal delay={120} className="mt-12">
            <ContentPending label="No dates announced">
              Upcoming appearances will be listed here as they are confirmed. Add each one to{" "}
              <code className="font-sans">events</code> in{" "}
              <code className="font-sans">src/lib/site-content.ts</code> — title, date, location,
              description and a link.
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
                    {event.href && (
                      <a
                        href={event.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block text-[0.62rem] uppercase tracking-[0.22em] text-gold-ink"
                      >
                        Details <span aria-hidden="true">&rarr;</span>
                      </a>
                    )}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        )}
      </Section>

      <ClosingCta />
      <JsonLd
        data={[
          speakingServiceSchema(),
          ...(events.length > 0 ? [eventSchema(events)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Speaking", path: "/speaking" },
          ]),
        ]}
      />
    </>
  );
}
