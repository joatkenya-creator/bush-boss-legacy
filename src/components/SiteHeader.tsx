import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ActionLink } from "@/components/ui/action-link";
import { LINKS, navLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="display text-base tracking-[0.1em] text-foreground sm:text-lg"
        >
          The Bush Boss
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-gold" }}
                  className="text-[0.64rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ActionLink
            href={LINKS.booking}
            className="hidden px-5 py-3 text-[0.6rem] sm:inline-flex"
          >
            Book The Bush Boss
          </ActionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold xl:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-px w-5 bg-current transition-transform duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-5 bg-current transition-transform duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="grain fixed inset-0 top-0 z-40 flex flex-col bg-background px-5 pb-10 pt-24 sm:px-8 xl:hidden"
      >
        <span className="grain-overlay" aria-hidden="true" />
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li key={link.label} className="border-b border-border/70">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="text-[0.6rem] tracking-[0.2em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-3xl text-foreground">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ActionLink
          href={LINKS.booking}
          className="mt-8 w-full"
          onClick={() => setOpen(false)}
        >
          Book The Bush Boss
        </ActionLink>
      </div>
    </header>
  );
}
