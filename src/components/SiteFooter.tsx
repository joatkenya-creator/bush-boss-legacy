import { Link } from "@tanstack/react-router";

import { NewsletterForm } from "@/components/NewsletterForm";
import { SocialLinks } from "@/components/SocialLinks";
import { BRAND, navLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="on-dark grain relative isolate border-t border-border">
      <span className="grain-overlay" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.25fr_0.75fr_1.1fr]">
        <div>
          <p className="display text-3xl uppercase tracking-[0.08em] sm:text-4xl">{BRAND.name}</p>
          <p className="mt-4 text-sm italic text-gold-ink/90">{BRAND.tagline}</p>
          <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            {BRAND.author} — musician, author and cultural speaker amplifying Jamaican Maroon
            heritage.
          </p>
          <SocialLinks className="mt-8" />
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Navigate</h2>
          <ul className="mt-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-gold-ink"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Stay in the story</h2>
          <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            New music, new books, new dates. No noise — only the mission.
          </p>
          <NewsletterForm className="mt-6" />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/80 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>
            {BRAND.artist} &middot; {BRAND.author}
          </p>
        </div>
      </div>
    </footer>
  );
}
