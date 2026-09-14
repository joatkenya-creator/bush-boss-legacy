import { useState } from "react";

import { Reveal, RevealImage } from "@/components/Reveal";
import { ActionLink, actionLinkClasses } from "@/components/ui/action-link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { featuredRelease, platforms } from "@/lib/site-content";

/** A deterministic, decorative waveform — not a rendering of the audio. */
const BARS = Array.from({ length: 56 }, (_, i) => {
  const h = Math.abs(Math.sin(i * 0.7) * 0.55 + Math.sin(i * 0.23) * 0.45);
  return 22 + h * 78;
});

/**
 * The release feature: sleeve artwork, credits, a play button that streams the
 * track in-page (YouTube embed), and the platform buttons.
 */
export function MusicFeature() {
  const release = featuredRelease;
  const [playing, setPlaying] = useState(false);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-4 -z-10 opacity-45 blur-3xl"
          style={{ background: "var(--gradient-earth)" }}
        />
        <RevealImage
          src={release.cover}
          alt={`Sleeve artwork for ${release.title} by ${release.artist}`}
          width={1024}
          height={1024}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="aspect-square border border-border"
        />
      </div>

      <Reveal delay={100}>
        <p className="eyebrow">{release.label}</p>
        <h3 className="mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl">{release.title}</h3>
        <p className="mt-4 text-sm uppercase tracking-[0.28em] text-gold-ink">{release.artist}</p>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {release.description}
        </p>

        {/* Player — the embed only loads once the visitor presses play */}
        {playing ? (
          <div className="mt-9 aspect-video border border-border">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${release.youtubeId}?autoplay=1`}
              title={`${release.title} by ${release.artist}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="size-full"
            />
          </div>
        ) : (
          <div className="mt-9 flex items-center gap-5 border border-border p-4 sm:p-5">
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <span className="sr-only">
                Play {release.title} by {release.artist}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="size-5 translate-x-px"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                {release.title}
                <span className="text-muted-foreground"> — {release.artist}</span>
              </p>
              <div className="mt-3 flex h-7 items-end gap-[3px]" aria-hidden="true">
                {BARS.map((height, i) => (
                  <span
                    key={i}
                    className="w-full bg-forest"
                    style={{ height: `${height}%`, opacity: i < 18 ? 1 : 0.28 }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className={actionLinkClasses("solid", "lg")}>
                Stream / Download
              </button>
            </DialogTrigger>
            <DialogContent className="sm:rounded-none">
              <DialogTitle className="text-2xl">Choose your music service</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {release.title} by {release.artist}
              </DialogDescription>
              <ul className="grid gap-2 sm:grid-cols-2">
                {platforms.map((platform) => (
                  <li key={platform.name}>
                    <ActionLink href={platform.href} variant="outline" size="sm" className="w-full">
                      {platform.name}
                    </ActionLink>
                  </li>
                ))}
              </ul>
              <ActionLink href={release.href} variant="quiet" className="justify-self-start">
                See all platforms &rarr;
              </ActionLink>
            </DialogContent>
          </Dialog>
        </div>
      </Reveal>
    </div>
  );
}
