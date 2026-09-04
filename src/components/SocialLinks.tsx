import { pendingSocials, socials } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
            >
              {social.name}
            </a>
          </li>
        ))}
      </ul>
      {pendingSocials.length > 0 && (
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/70">
          {pendingSocials.join(" · ")} — links to be confirmed
        </p>
      )}
    </div>
  );
}
