import roadFullaHole from "@/assets/road-fulla-hole.jpg";

/**
 * Central content file for The Bush Boss.
 * Update copy, links and assets here — every page reads from this file.
 *
 * AUTHENTICITY RULE: nothing in this file may be invented. Awards, degrees,
 * engagement counts, book titles, historical claims, testimonials and social
 * accounts stay as explicit placeholders (or `null`) until verified copy is
 * supplied. Placeholders render as visibly labelled on the page; invented
 * facts are not recoverable once published.
 */

export const LINKS = {
  music: "https://bit.ly/facebook-post-100000014054440",
  books: "https://bit.ly/4yZghtM",
  booking: "mailto:booking@thebushboss.com?subject=Speaking%20Engagement%20Inquiry",
  speakerInfo: "mailto:booking@thebushboss.com?subject=Speaker%20Information%20Request",
  /** Replace with the production domain before launch (canonical + OG tags). */
  siteUrl: "https://thebushboss.com",
};

export const BRAND = {
  name: "The Bush Boss",
  tagline: "One Man. Three Gifts. One Mission.",
  disciplines: "Musician. Author. Speaker.",
  author: "Fabian Stennett",
  artist: "Gangunjah Nevadye",
  mission: "Make the Maroon story impossible to ignore.",
  intro:
    "Known as Gangunjah Nevadye on the mic and Fabian Stennett on the page and the podium, The Bush Boss uses music, literature, and powerful storytelling to honor and amplify the Maroon story.",
};

/* ---------------------------------- nav ---------------------------------- */

/**
 * The site is a single narrative page — every destination is an in-page
 * anchor. Add `to:` routes here only once real sub-pages exist, otherwise the
 * links resolve to 404s.
 */
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Story", href: "#story" },
  { label: "Music", href: "#music" },
  { label: "Books", href: "#books" },
  { label: "Speaking", href: "#speaking" },
  { label: "Maroon Heritage", href: "#maroon" },
  { label: "Media", href: "#media" },
] as const;

/* -------------------------------- manifesto ------------------------------- */

export const manifesto = {
  heading: "The story deserves to be heard.",
  lead: "The Maroon story is a story of resistance, resilience, identity, culture, freedom, and survival.",
  body: "The Bush Boss brings that story into the present through music, literature, and speaking.",
  closing:
    "Three disciplines, one refusal — that a people who fought for their freedom should be remembered as a footnote. The mission is simple: make the Maroon story impossible to ignore.",
};

/* --------------------------------- music --------------------------------- */

export type Release = {
  title: string;
  artist: string;
  label: string;
  description: string;
  cover: string;
  href: string;
};

export const featuredRelease: Release = {
  title: "Road Fulla Hole",
  artist: "Gangunjah Nevadye",
  label: "The latest release from Gangunjah Nevadye",
  description:
    "Road Fulla Hole is a fresh addition to a growing catalog that channels Maroon history, culture, resilience, and consciousness into music.",
  cover: roadFullaHole,
  href: LINKS.music,
};

/** Streaming destinations. Replace each href as official links are confirmed. */
export const platforms = [
  { name: "Stream", href: LINKS.music },
  { name: "Download", href: LINKS.music },
  { name: "YouTube", href: LINKS.music },
];

/* --------------------------------- books ---------------------------------- */

export type Book = {
  title: string;
  subtitle: string;
  description: string;
  published: string;
  href: string;
  /** Cover artwork — add an imported asset once official covers are supplied. */
  cover?: string;
};

/**
 * Placeholder catalogue entries. Titles and descriptions must be replaced with
 * the verified Amazon Kindle listings before launch.
 */
export const books: Book[] = [
  {
    title: "Title to be confirmed — I",
    subtitle: "Maroon heritage",
    description:
      "Placeholder entry. Replace with the verified title, description and Amazon Kindle link.",
    published: "Publication date to be confirmed",
    href: LINKS.books,
  },
  {
    title: "Title to be confirmed — II",
    subtitle: "Jamaican history",
    description:
      "Placeholder entry. Replace with the verified title, description and Amazon Kindle link.",
    published: "Publication date to be confirmed",
    href: LINKS.books,
  },
  {
    title: "Title to be confirmed — III",
    subtitle: "Culture & identity",
    description:
      "Placeholder entry. Replace with the verified title, description and Amazon Kindle link.",
    published: "Publication date to be confirmed",
    href: LINKS.books,
  },
  {
    title: "Title to be confirmed — IV",
    subtitle: "Resilience",
    description:
      "Placeholder entry. Replace with the verified title, description and Amazon Kindle link.",
    published: "Publication date to be confirmed",
    href: LINKS.books,
  },
  {
    title: "Title to be confirmed — V",
    subtitle: "Consciousness",
    description:
      "Placeholder entry. Replace with the verified title, description and Amazon Kindle link.",
    published: "Publication date to be confirmed",
    href: LINKS.books,
  },
  {
    title: "Title to be confirmed — VI",
    subtitle: "Lived experience",
    description:
      "Placeholder entry. Replace with the verified title, description and Amazon Kindle link.",
    published: "Publication date to be confirmed",
    href: LINKS.books,
  },
];

/* --------------------------------- author --------------------------------- */

/**
 * Author profile. Every `null` field is hidden on the page until a verified
 * value is supplied — do not fill these with plausible-sounding biography.
 */
export const author: {
  name: string;
  role: string;
  biography: string | null;
  fields: { label: string; value: string | null }[];
} = {
  name: "Fabian Stennett",
  role: "Author · Cultural storyteller",
  biography: null,
  fields: [
    { label: "Background", value: null },
    { label: "Published works", value: "6+ titles on Amazon Kindle" },
    { label: "Awards", value: null },
    { label: "Interviews", value: null },
    { label: "Cultural interests", value: null },
    { label: "Speaking experience", value: null },
  ],
};

/* -------------------------------- speaking -------------------------------- */

export type SpeakingTopic = {
  title: string;
  description: string;
  audience: string;
};

export const speakingTopics: SpeakingTopic[] = [
  {
    title: "Jamaican History",
    description: "Exploring Jamaica's history and the stories that shaped its people.",
    audience: "Schools, universities, cultural institutions",
  },
  {
    title: "Maroon Heritage",
    description: "Exploring Maroon identity, heritage, resilience, and cultural legacy.",
    audience: "Heritage organisations, festivals, community groups",
  },
  {
    title: "Culture & Identity",
    description: "Understanding culture as a living force.",
    audience: "Conferences, diaspora and cultural events",
  },
  {
    title: "Motivation",
    description: "Turning history, struggle, and experience into purpose.",
    audience: "Organisations, teams, community programmes",
  },
  {
    title: "Music & Consciousness",
    description: "Exploring music as a vehicle for cultural expression and social consciousness.",
    audience: "Festivals, media, creative programmes",
  },
  {
    title: "Youth & Empowerment",
    description:
      "Inspiring younger generations to understand where they come from and where they can go.",
    audience: "Schools, youth programmes, mentorship initiatives",
  },
];

/**
 * Credentials. `value: null` hides the metric until a verified figure is
 * supplied — never publish an invented number.
 */
export const credentials: { value: string | null; label: string }[] = [
  { value: null, label: "Speaking Engagements" },
  { value: null, label: "Years of Experience" },
  { value: "6+", label: "Books Published" },
  { value: null, label: "Countries Reached" },
];

export const speakingContexts = [
  "Organizations",
  "Schools",
  "Universities",
  "Conferences",
  "Festivals",
  "Cultural events",
  "Media appearances",
];

/* --------------------------- maroon heritage ------------------------------ */

/**
 * Themes only — deliberately no dates, names or historical claims. Verified,
 * sourced historical content drops into `detail` when it is supplied.
 */
export const maroonThemes: { title: string; detail: string | null }[] = [
  { title: "Resistance", detail: null },
  { title: "Resilience", detail: null },
  { title: "Heritage", detail: null },
  { title: "Identity", detail: null },
];

/* ---------------------------------- media --------------------------------- */

export type MediaItem = {
  title: string;
  platform: string;
  date: string;
  description: string;
  href?: string;
  image?: string;
};

/** Empty until verified press, interviews and appearances are supplied. */
export const mediaItems: MediaItem[] = [];

export const mediaCategories = [
  "Interviews",
  "Podcasts",
  "Radio",
  "Television",
  "Articles",
  "Events",
  "Music videos",
  "Press coverage",
];

/* --------------------------------- events --------------------------------- */

export type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  href?: string;
};

/** Empty until confirmed dates are supplied. */
export const events: EventItem[] = [];

/* --------------------------------- socials -------------------------------- */

/** Only verified destinations are listed. Add platforms as links are confirmed. */
export const socials = [{ name: "Facebook", href: LINKS.music }];

export const pendingSocials = ["Instagram", "YouTube", "Spotify", "TikTok"];
