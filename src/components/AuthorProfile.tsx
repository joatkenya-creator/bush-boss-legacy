import authorPortrait from "@/assets/author-portrait.jpg";

import { ContentPending } from "@/components/ContentPending";
import { Reveal, RevealImage } from "@/components/Reveal";
import { ActionLink } from "@/components/ui/action-link";
import { BRAND, authorProfile, authorProfileFields } from "@/lib/site-content";

/**
 * The author profile. Each field renders real copy when supplied and an
 * explicit placeholder when not — the biography is never invented.
 */
export function AuthorProfile({ compact }: { compact?: boolean }) {
  const fields = compact ? authorProfileFields.slice(0, 3) : authorProfileFields;
  const anyContent = authorProfileFields.some((field) => authorProfile[field.key]);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <RevealImage
          src={authorPortrait}
          alt={`Portrait of ${BRAND.author}, author and cultural speaker`}
          width={1024}
          height={1280}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="aspect-[4/5] border border-border"
        />
        <Reveal delay={120}>
          <p className="mt-6 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/75">
            Portrait — replace with an official photograph of {BRAND.author}
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-7">
        <Reveal>
          <p className="eyebrow">The Author</p>
          <h2 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl">{BRAND.author}</h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed">
            The author behind the books and the cultural storyteller behind the message. Under his
            own name, {BRAND.author} writes the Maroon story down; as {BRAND.artist} he sets it to
            music; as {BRAND.name} he carries it to the stage.
          </p>
        </Reveal>

        <dl className="mt-12 space-y-8">
          {fields.map((field, i) => {
            const value = authorProfile[field.key];
            return (
              <Reveal key={field.key} delay={i * 70}>
                <dt className="eyebrow">{field.label}</dt>
                <dd className="mt-3">
                  {value ? (
                    <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
                      {value}
                    </p>
                  ) : (
                    <p className="max-w-xl border-l border-dashed border-border pl-4 text-sm leading-relaxed text-muted-foreground/75">
                      To be supplied by {BRAND.author}.
                    </p>
                  )}
                </dd>
              </Reveal>
            );
          })}
        </dl>

        {!anyContent && (
          <Reveal delay={200} className="mt-10">
            <ContentPending label="Biography pending">
              Nothing above has been invented. Each field appears the moment verified copy is added
              to <code className="font-sans">authorProfile</code> in{" "}
              <code className="font-sans">src/lib/site-content.ts</code>.
            </ContentPending>
          </Reveal>
        )}

        {compact && (
          <Reveal delay={240} className="mt-10">
            <ActionLink to="/story" variant="outline">
              Read the Full Story
            </ActionLink>
          </Reveal>
        )}
      </div>
    </div>
  );
}
