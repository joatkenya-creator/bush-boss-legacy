import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "quiet";
type Size = "default" | "sm" | "lg";

const base =
  "group/action inline-flex items-center justify-center gap-3 text-center font-medium uppercase tracking-[0.22em] transition-[background-color,color,border-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

const sizes: Record<Size, string> = {
  sm: "px-5 py-3 text-[0.6rem]",
  default: "px-7 py-4 text-[0.68rem]",
  lg: "px-9 py-5 text-[0.72rem]",
};

/**
 * Variants read from theme tokens only, so a link stays legible on whichever
 * ground it lands on (`.on-dark` / `.on-light`). Never hard-code cream or ink
 * here — that is what made the outline CTA invisible on the maroon section.
 */
const variants: Record<Variant, string> = {
  solid: "bg-gold text-gold-foreground hover:bg-cream hover:text-ink",
  outline: "border border-border text-foreground hover:border-gold hover:text-gold-ink",
  ghost: "border border-transparent text-muted-foreground hover:text-gold-ink",
  quiet: "px-0 py-1 text-[0.64rem] text-gold-ink hover:text-foreground",
};

/** The same classes for a non-anchor element (e.g. a dialog trigger button). */
export function actionLinkClasses(variant: Variant = "solid", size: Size = "default") {
  return cn(base, sizes[size], variants[variant]);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
};

type Props = CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    // `target`/`rel` are set by this component, never passed in.
    "href" | "className" | "target" | "rel"
  > & {
    /** Internal route — rendered with the router's <Link> for client nav. */
    to?: string;
    /** External or protocol URL (https:, mailto:) or an in-page #anchor. */
    href?: string;
    /** Force target="_blank". Inferred for http(s) hrefs when omitted. */
    external?: boolean;
  };

/**
 * The one call-to-action element on the site. Internal destinations use `to`,
 * everything else uses `href`; external links get safe rel attributes.
 */
export function ActionLink({
  variant = "solid",
  size = "default",
  className,
  to,
  href,
  external,
  children,
  ...rest
}: Props) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const isExternal = external ?? (href ? /^https?:\/\//.test(href) : false);

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      {...rest}
    >
      {children}
    </a>
  );
}
