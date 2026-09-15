import bookBlazingTheTrail from "@/assets/book-blazing-the-trail.jpg";
import bookMaroonEulogies1 from "@/assets/book-maroon-eulogies-1.jpg";
import bookMaroonPoeticHistory from "@/assets/book-maroon-poetic-history.jpg";
import bookMaroonsPavingTheWay from "@/assets/book-maroons-paving-the-way.jpg";
import bookModernMaroons from "@/assets/book-modern-maroons.jpg";
import bookTheyCarvedThePathways from "@/assets/book-they-carved-the-pathways.jpg";
import roadFullaHole from "@/assets/road-fulla-hole.jpg";

/**
 * ============================================================================
 * CONTENT SOURCE OF TRUTH — The Bush Boss
 * ============================================================================
 * Every page reads from this file. To update the website, edit here — no page
 * layout needs to change.
 *
 * AUTHENTICITY RULE
 * Nothing in this file may be invented. Awards, engagement counts, countries
 * reached, book titles, historical claims, testimonials and social accounts
 * must come from The Bush Boss directly. Unverified entries use an explicit
 * placeholder, or `null`, which makes the site hide the claim entirely.
 * ============================================================================
 */

export const LINKS = {
  /** Ditto smart link — lets the listener pick their preferred music service. */
  music: "https://ditto.fm/road-fulla-hole",
  /** The artist's Facebook post announcing the release (requires a Facebook login). */
  facebook: "https://bit.ly/facebook-post-100000014054440",
  /** Current Amazon Kindle destination supplied by the author. */
  books: "https://bit.ly/4yZghtM",
  bookingEmail: "booking@thebushboss.com",
  booking: "mailto:booking@thebushboss.com?subject=Speaking%20Engagement%20Inquiry",
  speakerInfo: "mailto:booking@thebushboss.com?subject=Speaker%20Information%20Request",
};

export const BRAND = {
  name: "The Bush Boss",
  tagline: "One Man. Three Gifts. One Mission.",
  disciplines: "Musician. Author. Speaker.",
  author: "Fabian Stennett",
  artist: "Gangunjah Nevadye",
  mission: "Make the Maroon story impossible to ignore.",
  intro:
    "Known as Gangunjah Nevadye on the mic and Fabian Stennett on the page and the podium, The Bush Boss uses reggae music, conscious rap, literature, and powerful storytelling to honor and amplify the story of the Jamaican Maroons.",
  manifesto:
    "The story of the Jamaican Maroons is a story of resistance, resilience, identity, culture, freedom, and survival — a living cultural movement, not a closed chapter of Jamaican history. The Bush Boss brings that story into the present through music, literature, and speaking.",
  /** Search themes the whole site is built around — used in structured data only. */
  keywords: [
    "Jamaican music",
    "Reggae music",
    "Conscious rap",
    "Jamaican culture",
    "Jamaican Maroons",
    "Cultural movement",
    "Jamaican history",
    "Jamaican Indigenous people",
  ],
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

/* ------------------------------ three gifts ------------------------------ */

export type Gift = {
  index: string;
  label: string;
  name: string;
  subheading: string;
  description: string;
  cta: { label: string; to: string };
};

export const gifts: Gift[] = [
  {
    index: "01",
    label: "Music",
    name: "Gangunjah Nevadye",
    subheading: "Where history finds its rhythm.",
    description:
      "Through reggae music and conscious rap, Gangunjah Nevadye channels Jamaican Maroon history, culture, resilience, and consciousness into sound.",
    cta: { label: "Listen to the Music", to: "/music" },
  },
  {
    index: "02",
    label: "Literature",
    name: "Fabian Stennett",
    subheading: "Where history becomes story.",
    description:
      "Through books and storytelling, Fabian Stennett explores the Maroon story, Jamaican history and culture, identity, resilience, and lived experience.",
    cta: { label: "Explore the Books", to: "/books" },
  },
  {
    index: "03",
    label: "Speaking",
    name: "The Message",
    subheading: "Where stories become movements.",
    description:
      "Through motivational and cultural speaking, The Bush Boss challenges audiences to understand their history, embrace their identity, and move with purpose.",
    cta: { label: "Book The Bush Boss", to: "/speaking" },
  },
];

/* --------------------------------- music --------------------------------- */

export type Release = {
  title: string;
  artist: string;
  label: string;
  description: string;
  cover: string;
  href: string;
  /** YouTube video id — plays the track in-page from the play button. */
  youtubeId: string;
};

export const featuredRelease: Release = {
  title: "Road Fulla Hole",
  artist: "Gangunjah Nevadye",
  label: "The latest release from Gangunjah Nevadye",
  description:
    "Road Fulla Hole is a fresh addition to a growing catalog of Jamaican music that channels Maroon history, culture, resilience, and consciousness into reggae and conscious rap.",
  cover: roadFullaHole,
  href: LINKS.music,
  youtubeId: "1fxCRBAdugw",
};

/** Streaming destinations for the featured release, as resolved from the Ditto smart link. */
export const platforms: { name: string; href: string }[] = [
  { name: "Spotify", href: "https://open.spotify.com/track/66xfDGrerq1SuaFASens09" },
  {
    name: "Apple Music",
    href: "https://music.apple.com/album/road-fulla-hole/6794914821?i=6794914827",
  },
  { name: "YouTube", href: "https://music.youtube.com/watch?v=1fxCRBAdugw" },
  { name: "SoundCloud", href: "https://soundcloud.com/gangunjahnevadye-music/road-fulla-hole" },
  { name: "Deezer", href: "https://www.deezer.com/track/4178331742" },
  { name: "TIDAL", href: "https://tidal.com/track/546610525" },
  { name: "Amazon Music", href: "https://music.amazon.com/tracks/B0HBNJ1ZHN" },
  {
    name: "Audiomack",
    href: "https://audiomack.com/gangunjah-nevadye-6a665cf935fef/song/road-fulla-hole",
  },
];

/** Additional catalogue entries. Add releases as they are confirmed. */
export const releases: Release[] = [featuredRelease];

/* --------------------------------- books --------------------------------- */

export type Book = {
  title: string;
  subtitle: string;
  description: string;
  published: string;
  href: string;
  /** Cover artwork — the official Kindle cover from the Amazon listing. */
  cover?: string;
};

/**
 * Catalogue taken from the author's Amazon page
 * (amazon.com/stores/Fabian-Stennett/author/B0GGL3PGBF), newest first.
 * Titles, dates and covers are the Kindle listings; descriptions are
 * condensed from the author's own blurbs. Paperback and hardcover editions
 * also exist for each title.
 */
export const books: Book[] = [
  {
    title: "Blazing the Trail",
    subtitle: "Rise of the Fireborn",
    description:
      "A two-part work: a nonfiction tribute to Jamaica's trailblazers, from Queen Nanny to Marcus Garvey, followed by a near-future novel in which Canaan “Blaze” Wray, raised in the shadow of the Ciboney Maroons, builds a grassroots nation within a nation.",
    published: "18 February 2026",
    href: "https://www.amazon.com/dp/B0GNZPVYTK",
    cover: bookBlazingTheTrail,
  },
  {
    title: "They Carved the Pathways",
    subtitle: "Chronicles of Popular Jamaican Icons",
    description:
      "A tribute to the men and women who built Jamaican identity from the ground up — Maroon warriors of the 1700s, reggae legends Junior Byles, Ken Boothe and Fred Locks, boxer Mike McCallum, Grace Jones, Miss Lou, and the educators and community builders the textbooks leave out.",
    published: "10 January 2026",
    href: "https://www.amazon.com/dp/B0GG5R2GLC",
    cover: bookTheyCarvedThePathways,
  },
  {
    title: "Maroons Paving the Way",
    subtitle: "The True Way Paver",
    description:
      "Warriors, healers and leaders who defied colonial rule — Samuel Sharpe, Marcus Garvey, Queen Nanny and the Ciboney Maroons — alongside the roots of Maroon culture in food, herbs and medicine, told through poetry, lectures and prose.",
    published: "13 August 2025",
    href: "https://www.amazon.com/dp/B0FM8VW8WN",
    cover: bookMaroonsPavingTheWay,
  },
  {
    title: "Maroon Poetic History",
    subtitle: "A Collection of Proses and Poems",
    description:
      "Seven chapters of scholarly prose and verse tracing the arc of the Jamaican Maroon story, from the Ciboney Maroons to Queen Nanny, Leonard Howell and Quao, and on to icons of Black excellence from Merlene Ottey to Sizzla Kalonji.",
    published: "10 August 2025",
    href: "https://www.amazon.com/dp/B0FLWHPLSL",
    cover: bookMaroonPoeticHistory,
  },
  {
    title: "Modern Maroons Jamaica",
    subtitle: "Maroon Book of Eulogies, Part Two",
    description:
      "Eulogies, ballads and historical narrative honouring Queen Nanny, Captain Cudjoe, Three Finger Jack and Samuel Sharpe alongside the community figures of Trelawny Town and Tangle River — a living archive of the Ciboney Maroons.",
    published: "1 March 2025",
    href: "https://www.amazon.com/dp/B0DXKVM2MR",
    cover: bookModernMaroons,
  },
  {
    title: "Maroon Book of Eulogies, Part One",
    subtitle: "A History of the Ciboney First Nation Maroon People of Black River Road",
    description:
      "From Tangle River, St. James, where the Ciboney Maroons defied slavery, 44 lives are resurrected through poetry and eulogy — elders and freedom fighters alongside reggae legends Brent Dowe, Cocoa Tea, Phyllis Dillon and Joseph Hill. Ciboney Maroon history documented for the first time.",
    published: "28 February 2025",
    href: "https://www.amazon.com/dp/B0DX53PXCP",
    cover: bookMaroonEulogies1,
  },
];

/* ----------------------------- author profile ---------------------------- */

export type AuthorProfileKey =
  | "biography"
  | "background"
  | "publishedWorks"
  | "awards"
  | "interviews"
  | "culturalInterests"
  | "speakingExperience";

/**
 * Editorial biography. Every field is `null` until The Bush Boss supplies
 * verified copy — the author section renders a labelled "to be supplied" note
 * in place of any null field rather than publishing an invention.
 */
export const authorProfile: Record<AuthorProfileKey, string | null> = {
  biography: null,
  background: null,
  publishedWorks: null,
  awards: null,
  interviews: null,
  culturalInterests: null,
  speakingExperience: null,
};

export const authorProfileFields: { key: AuthorProfileKey; label: string }[] = [
  { key: "biography", label: "Biography" },
  { key: "background", label: "Background" },
  { key: "publishedWorks", label: "Published Works" },
  { key: "awards", label: "Awards & Recognition" },
  { key: "interviews", label: "Interviews" },
  { key: "culturalInterests", label: "Cultural Interests" },
  { key: "speakingExperience", label: "Speaking Experience" },
];

/* -------------------------------- speaking ------------------------------- */

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
 * Credentials. `value: null` hides the metric entirely until a verified figure
 * is supplied — never publish an invented number.
 */
export const credentials: { value: string | null; label: string }[] = [
  { value: null, label: "Speaking Engagements" },
  { value: null, label: "Years of Experience" },
  { value: "6+", label: "Books Published" },
  { value: null, label: "Countries Reached" },
];

/** The kinds of rooms The Bush Boss speaks in — not a list of past clients. */
export const speakingContexts = [
  "Organizations",
  "Schools",
  "Universities",
  "Conferences",
  "Festivals",
  "Cultural events",
  "Media appearances",
];

/* ---------------------------- maroon heritage ---------------------------- */

/**
 * Thematic pillars only. This site does not publish historical claims that have
 * not been verified — add sourced detail to `detail` as it is confirmed.
 */
export const maroonPillars: {
  word: string;
  description: string;
  detail: string | null;
}[] = [
  { word: "Resistance", description: "The refusal to be erased.", detail: null },
  {
    word: "Resilience",
    description: "Survival carried across generations.",
    detail: null,
  },
  {
    word: "Heritage",
    description: "Language, land, music, memory.",
    detail: null,
  },
  { word: "Identity", description: "Knowing where you come from.", detail: null },
];

/** Subject areas the heritage archive covers as sourced material is added. */
export const maroonTopics = [
  "Jamaican Maroons",
  "Maroon heritage",
  "Jamaican history",
  "Jamaican culture",
  "Jamaican Indigenous people",
  "Cultural identity",
  "Resistance",
  "Resilience",
  "Music as a cultural movement",
];

/* ---------------------------------- media -------------------------------- */

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

/* --------------------------------- events -------------------------------- */

export type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  href?: string;
};

/** Empty until confirmed dates are supplied. */
export const events: EventItem[] = [];

/* -------------------------------- socials -------------------------------- */

/** Only verified destinations are listed. Add platforms as links are confirmed. */
export const socials = [{ name: "Facebook", href: LINKS.facebook }];

/** Named so visitors know the channels exist, without fabricating a URL. */
export const pendingSocials = ["Instagram", "YouTube", "Spotify", "TikTok"];
