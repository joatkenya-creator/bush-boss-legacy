import { useId, useState } from "react";

import { cn } from "@/lib/utils";

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
        className="w-full border border-border bg-transparent px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-gold focus-visible:outline-none"
      />
      <button
        type="submit"
        className="w-full bg-gold px-7 py-4 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-gold-foreground transition-colors hover:bg-cream hover:text-ink"
      >
        Join the Movement
      </button>
      <p aria-live="polite" className="min-h-5 text-xs text-muted-foreground">
        {done ? "Thank you — you're on the list." : ""}
      </p>
    </form>
  );
}
