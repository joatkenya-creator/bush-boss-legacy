import { SocialLinks } from "@/components/SocialLinks";
import { navLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display text-2xl text-cream">The Bush Boss</p>
          <p className="mt-3 text-sm italic text-muted-foreground">
            One Man. Three Gifts. One Mission.
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Fabian Stennett — musician, author and cultural speaker amplifying
            the Maroon story.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Navigate</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Follow</h2>
          <SocialLinks className="mt-5 flex-col gap-y-3" />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} The Bush Boss. All rights reserved.</p>
          <p>Gangunjah Nevadye &middot; Fabian Stennett</p>
        </div>
      </div>
    </footer>
  );
}
