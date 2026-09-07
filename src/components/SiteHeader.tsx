import { useEffect, useState } from "react";

import { ActionLink } from "@/components/ui/action-link";
import { BRAND, LINKS, navLinks } from "@/lib/site-content";
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="display text-base tracking-[0.1em] text-foreground sm:text-lg"
        >
          {BRAND.name}
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[0.64rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gilt"
                >
                  {link.label}
                </a>
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
            className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gilt xl:hidden"
          >
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
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.label} className="border-b border-border/70">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="text-[0.6rem] tracking-[0.2em] text-gilt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-3xl text-foreground">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ActionLink href={LINKS.booking} className="mt-8 w-full" onClick={() => setOpen(false)}>
          Book The Bush Boss
        </ActionLink>
      </div>
    </header>
  );
}
