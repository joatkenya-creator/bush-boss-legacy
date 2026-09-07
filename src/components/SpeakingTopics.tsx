import { Reveal } from "@/components/Reveal";
import { speakingTopics } from "@/lib/site-content";

/**
 * Speaking areas as an editorial index — numbered rows with a hairline rule,
 * rather than a three-column card deck.
 */
export function SpeakingTopics() {
  return (
    <ul className="border-t border-border">
      {speakingTopics.map((topic, i) => (
        <Reveal as="li" key={topic.title} delay={i * 60} className="group border-b border-border">
          <div className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10">
            <div className="flex items-baseline gap-4 sm:col-span-5">
              <span className="display text-xs text-gold-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl transition-colors duration-500 group-hover:text-gold-ink sm:text-3xl">
                {topic.title}
              </h3>
            </div>
            <p className="text-pretty leading-relaxed text-muted-foreground sm:col-span-5">
              {topic.description}
            </p>
            <p className="text-[0.62rem] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground/75 sm:col-span-2 sm:text-right">
              {topic.audience}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
