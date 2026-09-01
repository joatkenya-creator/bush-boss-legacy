import { ActionLink } from "@/components/ui/action-link";
import { featuredRelease, platforms } from "@/lib/site-content";

export function MusicFeature() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="relative">
        <div
          className="absolute -inset-4 -z-10 opacity-40 blur-2xl"
          style={{ background: "var(--gradient-earth)" }}
          aria-hidden="true"
        />
        <img
          src={featuredRelease.cover}
          alt="Cover artwork for Road Fulla Hole by Gangunjah Nevadye"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full border border-border object-cover"
          style={{ boxShadow: "var(--shadow-deep)" }}
        />
      </div>

      <div>
        <p className="eyebrow">{featuredRelease.label}</p>
        <h3 className="mt-5 text-5xl text-cream sm:text-6xl">
          {featuredRelease.title}
        </h3>
        <p className="mt-3 text-sm uppercase tracking-[0.28em] text-gold">
          {featuredRelease.artist}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          {featuredRelease.description}
        </p>

        <div className="mt-8 flex items-center gap-4 border border-border bg-card/60 p-4">
          <a
            href={featuredRelease.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play Road Fulla Hole"
            className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground transition-transform duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">
              {featuredRelease.title} — {featuredRelease.artist}
            </p>
            <div className="mt-3 flex h-6 items-end gap-[3px]" aria-hidden="true">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className="w-full bg-olive"
                  style={{
                    height: `${20 + Math.abs(Math.sin(i * 1.7)) * 80}%`,
                    opacity: i < 18 ? 1 : 0.35,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-3">
          {platforms.map((platform) => (
            <li key={platform.name}>
              <ActionLink
                href={platform.href}
                external
                variant="outline"
                className="px-5 py-3"
              >
                {platform.name}
              </ActionLink>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <ActionLink href={featuredRelease.href} external>
            Stream / Download
          </ActionLink>
        </div>
      </div>
    </div>
  );
}
