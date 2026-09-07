import { BRAND } from "@/lib/site-content";
import { absoluteUrl, hasKnownOrigin } from "@/lib/site-url";

type SeoInput = {
  /** Full <title>. Keep it human — no keyword stuffing. */
  title: string;
  description: string;
  /** Route path, e.g. "/music". Used for og:url and the canonical link. */
  path: string;
  /** Share image — a Vite asset import or an absolute URL. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "profile" | "article" | "book" | "music.song";
};

/**
 * Builds the `head` payload for a route: title, description, Open Graph,
 * Twitter/X card and a canonical link.
 *
 * Until a domain is configured (see `site-url.ts`) the canonical link and
 * `og:url` are omitted rather than guessed — a canonical pointing at the wrong
 * host is worse for search than no canonical at all.
 */
export function seo({ title, description, path, image, imageAlt, type = "website" }: SeoInput) {
  const known = hasKnownOrigin();
  const url = absoluteUrl(path);
  const img = image ? absoluteUrl(image) : undefined;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: BRAND.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      ...(known ? [{ property: "og:url", content: url }] : []),
      { property: "og:locale", content: "en_JM" },
      ...(img ? [{ property: "og:image", content: img }] : []),
      ...(img && imageAlt ? [{ property: "og:image:alt", content: imageAlt }] : []),
      {
        name: "twitter:card",
        content: img ? "summary_large_image" : "summary",
      },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(img ? [{ name: "twitter:image", content: img }] : []),
    ],
    links: known ? [{ rel: "canonical", href: url }] : [],
  };
}
