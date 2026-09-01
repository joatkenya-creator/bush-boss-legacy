import roadFullaHole from "@/assets/road-fulla-hole.jpg";

export const LINKS = {
  music: "https://bit.ly/facebook-post-100000014054440",
  books: "https://bit.ly/4yZghtM",
  booking: "mailto:booking@thebushboss.com?subject=Speaking%20Engagement%20Inquiry",
};

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
  label: "New Music — Out Now",
  description:
    "A conscious reggae record about the rough road travelled — potholes, patience and purpose — carrying the weight of Maroon memory into a modern riddim.",
  cover: roadFullaHole,
  href: LINKS.music,
};

export const platforms = [
  { name: "Spotify", href: LINKS.music },
  { name: "Apple Music", href: LINKS.music },
  { name: "YouTube", href: LINKS.music },
  { name: "Audiomack", href: LINKS.music },
];

export type Book = {
  title: string;
  subtitle: string;
  year: string;
  href: string;
};

export const books: Book[] = [
  {
    title: "Blood of the Maroons",
    subtitle: "A history carried in the bones of the Cockpit Country.",
    year: "2023",
    href: LINKS.books,
  },
  {
    title: "Bush Law",
    subtitle: "Survival, strategy and the codes that kept a people free.",
    year: "2023",
    href: LINKS.books,
  },
  {
    title: "Nanny's Fire",
    subtitle: "The woman, the warrior, the enduring flame of resistance.",
    year: "2024",
    href: LINKS.books,
  },
  {
    title: "Road Fulla Hole",
    subtitle: "Essays on struggle, faith and forward motion.",
    year: "2024",
    href: LINKS.books,
  },
  {
    title: "Sons of the Hills",
    subtitle: "Identity and inheritance in rural Jamaica.",
    year: "2025",
    href: LINKS.books,
  },
  {
    title: "The Freedom Treaty",
    subtitle: "What was won, what was signed, what was lost.",
    year: "2025",
    href: LINKS.books,
  },
];

export const speakingTopics = [
  "Jamaican History",
  "Maroon Heritage",
  "Culture & Identity",
  "Resilience",
  "Motivation",
  "Consciousness",
  "Personal Empowerment",
];

export const socials = [
  { name: "Facebook", href: LINKS.music },
  { name: "Instagram", href: LINKS.music },
  { name: "YouTube", href: LINKS.music },
  { name: "Spotify", href: LINKS.music },
  { name: "TikTok", href: LINKS.music },
];

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Story", href: "#story" },
  { label: "Music", href: "#music" },
  { label: "Books", href: "#books" },
  { label: "Speaking", href: "#speaking" },
  { label: "Maroon Heritage", href: "#maroon" },
  { label: "Media", href: "#movement" },
  { label: "Contact", href: "#movement" },
];
