import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type Tag = "div" | "section" | "li" | "article" | "header" | "figure" | "aside";

/**
 * @param immediate Render visible from the first paint instead of waiting to
 *   scroll into view. Use it for above-the-fold content: a reveal that starts
 *   at `opacity: 0` leaves the hero blank until React hydrates, which on a slow
 *   connection is a long look at an empty page.
 */
function useInView<T extends HTMLElement>(immediate = false) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;

    // No observer (or reduced motion): show immediately, never trap content.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      // threshold 0 + a negative bottom margin: fires as soon as the element
      // crosses 80px above the fold, and stays correct for blocks taller than
      // the viewport (which a ratio threshold can never satisfy).
      { threshold: 0, rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  return { ref, shown };
}

/** Fade-and-rise reveal used for text blocks and grouped content. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  immediate,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
  /** Skip the scroll trigger — for content that is already on screen. */
  immediate?: boolean;
}) {
  const { ref, shown } = useInView<HTMLDivElement>(immediate);
  const Component = as as ElementType;

  return (
    <Component
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

/**
 * Image reveal: the frame wipes open from the bottom while the picture settles
 * back from a slight scale. Used sparingly, on the lead image of a section.
 */
export function RevealImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  priority,
  sizes,
  children,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  /** Eager-load the image and skip the scroll trigger — above-the-fold art. */
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
}) {
  const { ref, shown } = useInView<HTMLElement>(priority);

  return (
    /*
     * The observed element and the clipped element must be different: a
     * `clip-path` that collapses the box to zero area also collapses what
     * IntersectionObserver measures, so an element that masks itself can never
     * observe its own way back into view.
     */
    <figure ref={ref} className={cn("grain relative isolate overflow-hidden", className)}>
      <span className={cn("block size-full image-mask", shown && "image-mask-in")}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "size-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-cinematic)]",
            shown ? "scale-100" : "scale-[1.06]",
            imgClassName,
          )}
        />
      </span>
      <span className="grain-overlay" aria-hidden="true" />
      {children}
    </figure>
  );
}
