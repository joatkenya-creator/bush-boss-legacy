import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ActionLink } from "@/components/ui/action-link";
import { BRAND } from "@/lib/site-content";
import { personSchema, websiteSchema } from "@/lib/structured-data";

function NotFoundComponent() {
  return (
    <div className="on-dark grain flex min-h-svh items-center justify-center px-5 py-32">
      <span className="grain-overlay" aria-hidden="true" />
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-6 text-5xl sm:text-6xl">This path leads nowhere.</h1>
        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
          The page you are looking for has moved or never existed. The story is still where you left
          it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ActionLink to="/">Return Home</ActionLink>
          <ActionLink to="/story" variant="outline">
            Explore the Story
          </ActionLink>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="on-dark grain flex min-h-svh items-center justify-center px-5 py-32">
      <span className="grain-overlay" aria-hidden="true" />
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-6 text-4xl sm:text-5xl">This page didn&rsquo;t load.</h1>
        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
          A problem on our end interrupted the page. Try again, or head back to the beginning.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-gold px-7 py-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gold-foreground transition-colors hover:bg-cream hover:text-ink"
          >
            Try Again
          </button>
          <ActionLink to="/" variant="outline">
            Go Home
          </ActionLink>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#171714" },
      {
        title: `${BRAND.name} | Jamaican Music, Maroon Culture & History`,
      },
      {
        name: "description",
        content:
          "The Bush Boss — Jamaican reggae music and conscious rap, books on Jamaican history, and cultural speaking amplifying the Jamaican Maroons.",
      },
      { name: "author", content: BRAND.author },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: BRAND.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        // Fraunces (editorial display) + Work Sans (body) — matches styles.css.
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Scroll reveals start hidden and are opened by JS. Without it, show
            everything rather than serving a page of invisible content. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.image-mask{clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-5 focus:py-3 focus:text-[0.68rem] focus:uppercase focus:tracking-[0.22em] focus:text-gold-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main id="main">
        <Outlet />
      </main>

      <SiteFooter />

      <JsonLd data={[websiteSchema(), personSchema()]} />
    </QueryClientProvider>
  );
}
