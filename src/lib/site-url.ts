import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";

/**
 * Where the site thinks it lives.
 *
 * There is no registered domain yet, so nothing here may hardcode one — naming
 * a host we do not control in a canonical tag would tell search engines the
 * real version of this site is somewhere else.
 *
 * Resolution order:
 *  1. `VITE_SITE_URL`, once a domain exists. Pin it at build time so every page
 *     canonicalises to the same host no matter which URL served the request.
 *  2. The origin of the incoming request. Correct on localhost and on whatever
 *     preview URL a host hands out — each deployment self-references.
 *  3. Empty string, meaning "unknown": callers then omit the tag entirely
 *     rather than emit a guess.
 */
/** Injected by vite.config.ts from VITE_SITE_URL; "" when no domain is set. */
declare const __SITE_URL__: string;

const CONFIGURED_ORIGIN = (typeof __SITE_URL__ === "string" ? __SITE_URL__ : "")
  .trim()
  .replace(/\/+$/, "");

export const siteOrigin = createIsomorphicFn()
  .server((): string => {
    if (CONFIGURED_ORIGIN) return CONFIGURED_ORIGIN;
    try {
      return getRequestUrl().origin;
    } catch {
      // Outside a request (build-time prerender, tooling): claim no origin.
      return "";
    }
  })
  .client(
    (): string =>
      CONFIGURED_ORIGIN || (typeof window === "undefined" ? "" : window.location.origin),
  );

/**
 * Absolutises a root-relative path. Returns the path untouched while the
 * origin is unknown, so nothing ever points at an invented host.
 */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  const origin = siteOrigin();
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return origin ? `${origin}${path}` : path;
}

/** True once a URL is safe to publish in a canonical tag or structured data. */
export function hasKnownOrigin(): boolean {
  return siteOrigin() !== "";
}
