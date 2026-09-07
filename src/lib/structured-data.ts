import {
  BRAND,
  LINKS,
  books,
  featuredRelease,
  socials,
  type Book,
  type EventItem,
} from "@/lib/site-content";
import { absoluteUrl } from "@/lib/site-url";

/**
 * Schema.org graphs. These describe only what has been verified — no awards,
 * affiliations or engagement counts are asserted here.
 *
 * Each graph is a function, not a constant: URLs are resolved per request from
 * the host actually serving the page (see `site-url.ts`), so nothing is baked
 * in at import time while the site has no domain of its own.
 */

const personId = () => `${absoluteUrl("/")}#person`;
const websiteId = () => `${absoluteUrl("/")}#website`;

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    url: absoluteUrl("/"),
    name: BRAND.name,
    alternateName: [BRAND.author, BRAND.artist],
    description: BRAND.intro,
    inLanguage: "en",
    publisher: { "@id": personId() },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(),
    name: BRAND.author,
    alternateName: [BRAND.name, BRAND.artist],
    url: absoluteUrl("/"),
    description: BRAND.intro,
    jobTitle: ["Musician", "Author", "Speaker"],
    nationality: { "@type": "Country", name: "Jamaica" },
    knowsAbout: [
      "Jamaican Maroons",
      "Maroon heritage",
      "Jamaican history",
      "Jamaican culture",
      "Reggae music",
      "Conscious music",
      "Cultural identity",
    ],
    sameAs: socials.map((s) => s.href),
  };
}

export function musicGroupSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: BRAND.artist,
    alternateName: BRAND.name,
    url: absoluteUrl("/music"),
    genre: ["Reggae", "Conscious music"],
    member: { "@id": personId() },
    track: {
      "@type": "MusicRecording",
      name: featuredRelease.title,
      byArtist: { "@type": "MusicGroup", name: featuredRelease.artist },
      url: featuredRelease.href,
    },
  };
}

/** A book only enters the graph once it has a real title. */
function isPublishable(book: Book) {
  return !/to be confirmed/i.test(book.title);
}

export function bookListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Books by ${BRAND.author}`,
    url: absoluteUrl("/books"),
    itemListElement: books.filter(isPublishable).map((book, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Book",
        name: book.title,
        author: { "@id": personId() },
        description: book.description,
        url: book.href,
        bookFormat: "https://schema.org/EBook",
      },
    })),
  };
}

export function speakingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Speaking engagements with ${BRAND.name}`,
    serviceType: "Cultural and motivational speaking",
    provider: { "@id": personId() },
    url: absoluteUrl("/speaking"),
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/speaking"),
      name: "Booking enquiries",
    },
    potentialAction: {
      "@type": "CommunicateAction",
      target: LINKS.booking,
    },
  };
}

export function eventSchema(events: EventItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: events.map((event, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Event",
        name: event.title,
        startDate: event.date,
        location: { "@type": "Place", name: event.location },
        description: event.description,
        performer: { "@id": personId() },
        ...(event.href ? { url: event.href } : {}),
      },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
