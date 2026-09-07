// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";

/*
 * VITE_SITE_URL is resolved here, not in app code, because `loadEnv` reads both
 * `.env` files and real build-time environment variables — the Lovable config's
 * own VITE_* injection only sees `.env` files, so a host that sets the variable
 * in its build environment would otherwise be ignored. The result is handed to
 * the app as `__SITE_URL__` (see `src/lib/site-url.ts`), which keeps the server
 * and client bundles agreeing on one value.
 *
 * A sitemap has to list absolute URLs, so it cannot be generated before the
 * site has a domain. Rather than ship one full of guessed URLs, the sitemap is
 * emitted only once VITE_SITE_URL is set — then it covers every page below.
 */
const env = loadEnv(
  process.env["NODE_ENV"] === "development" ? "development" : "production",
  process.cwd(),
  "",
);
const siteUrl = (env["VITE_SITE_URL"] ?? "").trim().replace(/\/+$/, "");

const pages = [
  { path: "/", sitemap: { priority: 1.0, changefreq: "weekly" as const } },
  { path: "/story", sitemap: { priority: 0.8, changefreq: "monthly" as const } },
  { path: "/music", sitemap: { priority: 0.9, changefreq: "weekly" as const } },
  { path: "/books", sitemap: { priority: 0.9, changefreq: "weekly" as const } },
  {
    path: "/speaking",
    sitemap: { priority: 0.9, changefreq: "monthly" as const },
  },
  {
    path: "/maroon-heritage",
    sitemap: { priority: 0.8, changefreq: "monthly" as const },
  },
  { path: "/media", sitemap: { priority: 0.7, changefreq: "weekly" as const } },
  {
    path: "/contact",
    sitemap: { priority: 0.6, changefreq: "yearly" as const },
  },
];

export default defineConfig({
  vite: {
    define: {
      __SITE_URL__: JSON.stringify(siteUrl),
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(siteUrl
      ? {
          pages,
          sitemap: {
            enabled: true,
            outputPath: "sitemap.xml",
            host: siteUrl,
          },
        }
      : {}),
  },
});
