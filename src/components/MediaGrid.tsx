import { ContentPending } from "@/components/ContentPending";
import { Reveal } from "@/components/Reveal";
import { mediaCategories, mediaItems } from "@/lib/site-content";

/**
 * Press, interviews and appearances. The grid is built and waiting; until
 * verified coverage is supplied it shows the categories it will hold rather
 * than inventing entries.
 */
export function MediaGrid() {
  if (mediaItems.length === 0) {
    return (
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <ContentPending label="No coverage published yet">
            Interviews, podcasts, radio, television, articles, events, music videos and press
            coverage will appear here as verified items are supplied. Add each one to{" "}
            <code className="font-sans">mediaItems</code> in{" "}
            <code className="font-sans">src/lib/site-content.ts</code>.
          </ContentPending>
        </Reveal>
        <Reveal delay={120}>
          <h3 className="eyebrow">What this section will hold</h3>
          <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
            {mediaCategories.map((category) => (
              <li key={category} className="bg-background px-5 py-5 text-sm text-muted-foreground">
                {category}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    );
  }

  return (
    <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {mediaItems.map((item, i) => {
        const Wrapper = item.href ? "a" : "div";
        return (
          <Reveal as="li" key={`${item.platform}-${item.title}`} delay={(i % 3) * 90}>
            <Wrapper
              {...(item.href
                ? {
                    href: item.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <div className="grain relative aspect-[3/2] overflow-hidden border border-border bg-secondary">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-cinematic)] group-hover:scale-105"
                  />
                ) : (
                  <span className="flex size-full items-center justify-center text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground/70">
                    Image to follow
                  </span>
                )}
                <span className="grain-overlay" aria-hidden="true" />
              </div>

              <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="eyebrow">{item.platform}</span>
                <span className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/75">
                  {item.date}
                </span>
              </div>
              <h3 className="mt-3 text-2xl transition-colors duration-500 group-hover:text-gold-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.href && (
                <span className="mt-4 inline-block text-[0.62rem] uppercase tracking-[0.24em] text-gold-ink">
                  View <span aria-hidden="true">&rarr;</span>
                </span>
              )}
            </Wrapper>
          </Reveal>
        );
      })}
    </ul>
  );
}
