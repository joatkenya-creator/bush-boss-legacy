import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ActionLink } from "@/components/ui/action-link";
import { BRAND, LINKS, navLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

/**
 * Sticky navigation. Every page opens on a dark, full-bleed hero, so the bar
 * is always on the obsidian palette — transparent over the hero, then settling
 * into a blurred ink bar once the page scrolls.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the overlay on navigation. */
  useEffect(() => setOpen(false), [pathname]);

  /* Lock the page behind the full-screen menu. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "on-dark fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled && !open
          ? "border-b border-border/60 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
        <Link
          to="/"
          className="display text-sm uppercase tracking-[0.26em] text-foreground transition-colors hover:text-gold-ink sm:text-base"
        >
          {BRAND.name}
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "!text-gold-ink" }}
                  className="relative text-[0.62rem] uppercase tracking-[0.26em] text-muted-foreground transition-colors hover:text-gold-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ActionLink href={LINKS.booking} size="sm" className="hidden lg:inline-flex">
            Book The Bush Boss
          </ActionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold-ink xl:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-px w-5 bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-5 bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Full-screen mobile / tablet menu */}
      <div
        id="site-menu"
        hidden={!open}
        /* No `grain` here: that utility sets `position: relative`, which outranks
           `fixed` and would dock the overlay under the bar instead of over the page. */
        className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-5 pb-12 pt-28 sm:px-8 xl:hidden"
      >
        <span className="grain-overlay" aria-hidden="true" />
        <nav aria-label="Site" className="flex-1">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.label} className="border-b border-border/60">
                <Link
                  to={link.to}
                  className="flex items-baseline gap-5 py-5 text-foreground transition-colors hover:text-gold-ink"
                >
                  <span className="text-[0.6rem] tracking-[0.24em] text-gold-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-3xl sm:text-4xl">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 space-y-3">
          <ActionLink href={LINKS.booking} className="w-full">
            Book The Bush Boss
          </ActionLink>
          <p className="text-center text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
            {BRAND.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}
