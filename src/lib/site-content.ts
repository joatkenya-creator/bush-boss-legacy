import roadFullaHole from "@/assets/road-fulla-hole.jpg";

/**
 * Central content file for The Bush Boss.
 * Update copy, links and assets here — every page reads from this file.
 */

export const LINKS = {
  music: "https://bit.ly/facebook-post-100000014054440",
  books: "https://bit.ly/4yZghtM",
  booking:
    "mailto:booking@thebushboss.com?subject=Speaking%20Engagement%20Inquiry",
  speakerInfo:
    "mailto:booking@thebushboss.com?subject=Speaker%20Information%20Request",
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

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Story", to: "/story" },
  { label: "Music", to: "/music" },
  { label: "Books", to: "/books" },
  { label: "Speaking", to: "/speaking" },
  { label: "Maroon Heritage", to: "/maroon-heritage" },
  { label: "Media", to: "/media" },
] as const;

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

/* -------------------------------- speaking -------------------------------- */

export type SpeakingTopic = {
  title: string;
  description: string;
  audience: string;
};

export const speakingTopics: SpeakingTopic[] = [
  {
    title: "Jamaican History",
    description:
      "Exploring Jamaica's history and the stories that shaped its people.",
    audience: "Schools, universities, cultural institutions",
  },
  {
    title: "Maroon Heritage",
    description:
      "Exploring Maroon identity, heritage, resilience, and cultural legacy.",
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
    description:
      "Exploring music as a vehicle for cultural expression and social consciousness.",
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
