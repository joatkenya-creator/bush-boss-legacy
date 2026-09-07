import { useId, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Newsletter capture.
 *
 * No mailing-list provider has been supplied, so this does not pretend to
 * subscribe anyone — it confirms locally and tells the visitor plainly that
 * the list opens soon. Wire the submit handler to the real provider (or point
 * `action` at it) when one is chosen.
 */
export function NewsletterForm({ className }: { className?: string }) {
  const id = useId();
  const [done, setDone] = useState(false);

  return (
    <form
      className={cn("space-y-3", className)}
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reset();
        setDone(true);
      }}
    >
      <label htmlFor={id} className="eyebrow block">
        Email address
      </label>
      <input
        id={id}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        className="w-full border border-border bg-transparent px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:border-gold focus-visible:outline-none"
      />
      <button
        type="submit"
        className="w-full bg-gold px-7 py-4 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-gold-foreground transition-colors hover:bg-cream hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Join the Movement
      </button>
      <p aria-live="polite" className="min-h-8 text-xs leading-relaxed text-muted-foreground">
        {done ? "Thank you — the mailing list opens shortly and you'll be on it." : ""}
      </p>
    </form>
  );
}
