# The Bush Boss

The official website for **The Bush Boss** — the umbrella identity of Fabian
Stennett, known in music as Gangunjah Nevadye.

> **One Man. Three Gifts. One Mission.**
> Musician. Author. Speaker.
>
> Mission: _make the Maroon story impossible to ignore._

---

## Running it

```bash
npm install       # installs exactly what package-lock.json pins
npm run dev       # http://localhost:3000
npm run build     # production build into .output/
npm run lint
npm run check:theme  # guards theme contexts (see styles.css)
```

No configuration is required to run it. There is one optional setting,
`VITE_SITE_URL` — see [When you get a domain](#when-you-get-a-domain).

Stack: TanStack Start (file-based routing, SSR) · React 19 · Tailwind CSS v4 ·
TypeScript.

---

## Updating the site

**Almost every change you will want to make lives in one file:
[`src/lib/site-content.ts`](src/lib/site-content.ts).**

It is the single source of truth for copy, links and catalogue data. The pages
read from it, so adding a book, a release, a press item or a date needs no
layout work — add the entry and it appears.

| What to change                 | Where                                               |
| ------------------------------ | --------------------------------------------------- |
| Music / Amazon / booking links | `LINKS`                                             |
| Names, taglines, mission       | `BRAND`                                             |
| Navigation                     | `navLinks` (also add the matching route file)       |
| The three gifts                | `gifts`                                             |
| Featured release, catalogue    | `featuredRelease`, `releases`, `platforms`          |
| Books                          | `books`                                             |
| Author biography               | `authorProfile`                                     |
| Speaking topics, metrics       | `speakingTopics`, `credentials`, `speakingContexts` |
| Maroon heritage themes         | `maroonPillars`, `maroonTopics`                     |
| Press and appearances          | `mediaItems`                                        |
| Event dates                    | `events`                                            |
| Social profiles                | `socials`, `pendingSocials`                         |

### The authenticity rule

**Nothing on this site may be invented.** Awards, engagement counts, countries
reached, book titles, historical claims, testimonials and social accounts are
published only when The Bush Boss has supplied them.

The content model enforces this rather than relying on good intentions:

- A metric with `value: null` in `credentials` is **not rendered at all** — the
  speaking page shows an "awaiting verified figures" note instead of a number.
- Every field in `authorProfile` is `null` until real copy arrives; the author
  section prints "To be supplied by Fabian Stennett." in its place.
- `mediaItems` and `events` are empty arrays. Their sections render a designed
  empty state naming what will go there.
- A book whose title contains the words "to be confirmed" is kept out of the
  `Book` structured data until it is replaced. (All six current titles are the
  verified Kindle listings.)
- Social platforms without a confirmed URL are shown dimmed and unlinked rather
  than pointed at a guessed profile.

Replace a placeholder by editing the data — no component needs to change.

### When you get a domain

The site has no domain baked into it. Until one exists, every page
canonicalises to whatever host served the request — correct on `localhost` and
on any preview URL, and never pointing at a domain nobody owns.

To pin it, set **one** variable (see [`.env.example`](.env.example)) — either in
a `.env` file or in your host's build environment:

```
VITE_SITE_URL=https://your-domain.com
```

That switches on canonical links, `og:url`, absolute social-card image URLs, the
schema.org identifiers, and sitemap generation at build time. Then add the
sitemap line to [`public/robots.txt`](public/robots.txt).

### Before launch

- [ ] **Set a booking email that actually receives mail.** `LINKS.booking` and
      `LINKS.speakerInfo` in `src/lib/site-content.ts` currently point at
      `booking@thebushboss.com`, a mailbox on a domain that has not been
      registered — every booking enquiry, the site's primary conversion, would
      bounce. This must be a working address before the site goes live.
- [ ] Set `VITE_SITE_URL` once the domain is registered (see above).
- [x] Replace the six placeholder `books` entries with verified titles, covers,
      descriptions, publication dates and Amazon links. (Done from the Amazon
      author page — descriptions are condensed from the author's blurbs; have
      Fabian Stennett approve the wording.)
- [ ] Replace the stock photography in `src/assets/` with authentic images of
      The Bush Boss, and update each `alt` where the subject changes.
- [ ] Add confirmed streaming URLs to `platforms` (they all currently point at
      the one music link the artist supplied) and set `confirmed: true`.
- [ ] Add verified `socials` and remove those names from `pendingSocials`.
- [ ] Point `NewsletterForm` at a real mailing-list provider — it currently
      confirms locally and does not subscribe anyone.
- [ ] Fill in `authorProfile` and any `credentials` figures that can be verified.

---

## Structure

```
src/
  routes/            one file per page (TanStack file-based routing)
    __root.tsx       app shell: header, footer, global metadata, site schema
    index.tsx        home
    story.tsx  music.tsx  books.tsx  speaking.tsx
    maroon-heritage.tsx  media.tsx  contact.tsx
  components/        section and page components
    ui/              shadcn primitives + ActionLink (the site's one CTA element)
  lib/
    site-content.ts  ← all content
    site-url.ts      resolves the site's origin (VITE_SITE_URL, else the host)
    seo.ts           per-route title, description, Open Graph, canonical
    structured-data.ts  schema.org graphs (Person, WebSite, MusicGroup, Book, …)
  styles.css         design tokens, typography, texture, motion
```

### Design system

Defined entirely in [`src/styles.css`](src/styles.css). A heritage editorial
palette — obsidian, deep forest, burnished gold, terracotta, warm ivory, stone —
deliberately avoiding the green/yellow/red tourist cliché. Fraunces for display,
Work Sans for body. Square corners, hairline rules, film grain.

Sections alternate between the ivory default and the obsidian palette. Dark
sections opt in with a single `dark` prop on `<Section>`, which applies
`.on-dark` — a scoped set of token overrides, so every component inverts without
needing a dark variant of its own.

Two gold tokens exist on purpose: `--gold` for fills, rules and borders, and
`--gold-ink` for type. `--gold-ink` darkens on ivory and lifts on obsidian so
small gold text clears WCAG AA in both.

### Motion

Fade-up reveals, image wipe-ins, and a slow hero parallax, all driven by
`IntersectionObserver`. Everything is disabled under
`prefers-reduced-motion: reduce`, and content renders visible when the observer
is unavailable — motion never gates access to content.
