import { socials } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}>
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
          >
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
