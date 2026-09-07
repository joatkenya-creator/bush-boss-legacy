import { createFileRoute } from "@tanstack/react-router";

import speakingImg from "@/assets/speaking-stage.jpg";

import { JsonLd } from "@/components/JsonLd";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { ActionLink } from "@/components/ui/action-link";
import { seo } from "@/lib/seo";
import { BRAND, LINKS } from "@/lib/site-content";
import { breadcrumbSchema } from "@/lib/structured-data";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact & Booking | The Bush Boss",
      description:
        "Contact The Bush Boss — speaking engagements, press and interview requests, music enquiries and general correspondence.",
      path: "/contact",
      image: speakingImg,
    }),
  component: ContactPage,
});

const ROUTES = [
  {
    label: "Speaking engagements",
    body: "Schools, universities, conferences, festivals, cultural events and community programmes.",
    action: { label: "Send a Booking Enquiry", href: LINKS.booking },
  },
  {
    label: "Speaker information",
    body: "Topics, formats, running times, travel and availability for event organisers.",
    action: { label: "Request Speaker Information", href: LINKS.speakerInfo },
  },
  {
    label: "Press & interviews",
    body: "Interview requests, biography, photography and release information.",
    action: { label: "Press Enquiries", href: LINKS.speakerInfo },
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation."
        lead={`Booking, press and general enquiries reach ${BRAND.name} directly.`}
        image={speakingImg}
      >
        <ActionLink href={LINKS.booking} size="lg">
          Book The Bush Boss
        </ActionLink>
      </PageHero>

      <Section>
        <SectionHeading
          label="Enquiries"
          title="Where to write"
          lead={`Everything reaches the same inbox — ${LINKS.bookingEmail} — but a clear subject line gets a faster reply.`}
        />

        <ul className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-3">
          {ROUTES.map((route, i) => (
            <Reveal as="li" key={route.label} delay={i * 90}>
              <div className="flex h-full flex-col bg-background p-8 sm:p-10">
                <span className="display text-xs text-gold-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-2xl">{route.label}</h3>
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {route.body}
                </p>
                <ActionLink href={route.action.href} variant="quiet" className="mt-6">
                  {route.action.label} <span aria-hidden="true">&rarr;</span>
                </ActionLink>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section dark className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              label="The Movement"
              title="Stay in the story"
              lead="New music, new books, new dates. No noise — only the mission."
            />
            <Reveal delay={160}>
              <SocialLinks className="mt-10" />
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-6 lg:self-center">
            <div className="border border-border p-8 sm:p-10">
              <h3 className="text-2xl">Join the mailing list</h3>
              <NewsletterForm className="mt-8" />
            </div>
          </Reveal>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
