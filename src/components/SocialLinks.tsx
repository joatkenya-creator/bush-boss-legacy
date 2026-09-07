import { pendingSocials, socials } from "@/lib/site-content";
import { cn } from "@/lib/utils";

/** Minimal single-path glyphs — no icon dependency for five marks. */
const ICONS: Record<string, string> = {
  Facebook:
    "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.93 8.44-9.94Z",
  Instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9a3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07Zm0 3.18a6.66 6.66 0 1 0 0 13.32 6.66 6.66 0 0 0 0-13.32Zm0 10.98a4.32 4.32 0 1 1 0-8.64 4.32 4.32 0 0 1 0 8.64Zm8.48-11.24a1.56 1.56 0 1 1-3.11 0 1.56 1.56 0 0 1 3.11 0Z",
  YouTube:
    "M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42a2.51 2.51 0 0 0-1.77 1.77A26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z",
  Spotify:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.43a.62.62 0 0 1-.86.21c-2.35-1.44-5.3-1.76-8.79-.97a.62.62 0 1 1-.28-1.22c3.81-.87 7.09-.5 9.72 1.11.3.18.39.57.21.87Zm1.23-2.73a.78.78 0 0 1-1.07.26c-2.69-1.66-6.79-2.14-9.97-1.17a.78.78 0 1 1-.45-1.49c3.63-1.1 8.15-.57 11.24 1.33.36.22.48.7.25 1.07Zm.1-2.84c-3.23-1.92-8.55-2.1-11.63-1.16a.94.94 0 1 1-.54-1.79c3.54-1.08 9.42-.87 13.13 1.34a.94.94 0 0 1-.96 1.61Z",
  TikTok:
    "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.84-2.48V9.77a5.7 5.7 0 1 0 4.93 5.64V9.5a7.34 7.34 0 0 0 4.28 1.37V7.78a4.28 4.28 0 0 1-3.22-1.96Z",
};

function Glyph({ name }: { name: string }) {
  const path = ICONS[name];
  if (!path) return null;
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

/**
 * Verified destinations are linked. Platforms The Bush Boss uses but has not
 * supplied a URL for are named, not guessed at.
 */
export function SocialLinks({
  className,
  showPending = true,
}: {
  className?: string;
  showPending?: boolean;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      <ul className="flex flex-wrap items-center gap-3">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-4 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-gold hover:text-gold-ink"
            >
              <Glyph name={social.name} />
              {social.name}
            </a>
          </li>
        ))}

        {showPending &&
          pendingSocials.map((name) => (
            <li key={name}>
              <span
                title={`${name} link to be confirmed`}
                className="inline-flex items-center gap-3 border border-dashed border-border/70 px-4 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground/55"
              >
                <Glyph name={name} />
                {name}
              </span>
            </li>
          ))}
      </ul>

      {showPending && pendingSocials.length > 0 && (
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/65">
          Dimmed platforms are awaiting confirmed profile links.
        </p>
      )}
    </div>
  );
}
