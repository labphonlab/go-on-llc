/**
 * Base-aware internal links.
 *
 * The site is built twice over: once for the apex custom domain
 * (`base = "/"`) and once for the GitHub Pages project path
 * (`base = "/go-on-llc/"`, via SITE_BASE). Root-absolute hrefs like
 * "/about" 404 under the latter, so every internal link goes through u().
 */
const BASE = import.meta.env.BASE_URL;

const isExternal = (path: string) =>
  /^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith("//") || path.startsWith("#");

export function u(path = "/"): string {
  if (isExternal(path)) return path;
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  const rest = path.startsWith("/") ? path : `/${path}`;
  return `${base}${rest}`;
}
