import { NewsletterForm } from "@/components/NewsletterForm";
import { SocialLinks } from "@/components/SocialLinks";
import { BRAND, navLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="on-dark grain border-t border-border">
      <span className="grain-overlay" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_0.7fr_1.2fr]">
        <div>
          <p className="display text-3xl text-foreground">{BRAND.name}</p>
          <p className="mt-4 text-sm italic text-muted-foreground">{BRAND.tagline}</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {BRAND.author} — musician, author and cultural speaker amplifying the Maroon story.
          </p>
          <SocialLinks className="mt-8" />
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Navigate</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gilt"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:booking@thebushboss.com"
                className="text-sm text-muted-foreground transition-colors hover:text-gilt"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Stay in the story</h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            New music, new books, new dates. No noise — only the mission.
          </p>
          <NewsletterForm className="mt-6" />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {new Date().getFullYear()} The Bush Boss. All rights reserved.</p>
          <p>Gangunjah Nevadye &middot; Fabian Stennett</p>
        </div>
      </div>
    </footer>
  );
}
