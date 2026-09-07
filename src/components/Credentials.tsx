import { ContentPending } from "@/components/ContentPending";
import { Reveal } from "@/components/Reveal";
import { credentials, speakingContexts } from "@/lib/site-content";
import { cn } from "@/lib/utils";

/**
 * Speaking credentials.
 *
 * Metrics with `value: null` are not rendered at all — an unverified number is
 * worse than no number. If nothing has been verified, the whole strip is
 * replaced by a note rather than a row of zeroes.
 */
export function Credentials() {
  const verified = credentials.filter(
    (metric): metric is { value: string; label: string } => metric.value != null,
  );
  const pending = credentials.filter((metric) => metric.value == null);

  /*
   * The hairline grid is drawn by a `bg-border` fill showing through 1px gaps,
   * so the columns must divide the verified metrics exactly — a fixed 4-up
   * grid holding one number would render three empty grey cells.
   */
  const columns =
    { 1: "grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3" }[verified.length] ??
    "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div>
      {verified.length > 0 ? (
        <dl className={cn("grid gap-px border border-border bg-border", columns)}>
          {verified.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 80} className="bg-background p-8 sm:p-10">
              <dt className="eyebrow">{metric.label}</dt>
              <dd className="display mt-4 text-5xl sm:text-6xl">{metric.value}</dd>
            </Reveal>
          ))}
        </dl>
      ) : (
        <ContentPending label="Credentials">
          Verified figures have not been supplied, so no metrics are published here yet.
        </ContentPending>
      )}

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="eyebrow">Where The Bush Boss speaks</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {speakingContexts.map((context) => (
              <li
                key={context}
                className="border border-border px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground"
              >
                {context}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            These are the kinds of rooms this work belongs in — not a list of past engagements.
            Confirmed hosts and dates are published only once verified.
          </p>
        </Reveal>

        {pending.length > 0 && (
          <Reveal delay={120}>
            <ContentPending label="Awaiting verified figures">
              {pending.map((metric) => metric.label).join(", ")} will appear here once The Bush Boss
              confirms them. Until then the site makes no claim.
            </ContentPending>
          </Reveal>
        )}
      </div>
    </div>
  );
}
