/**
 * "5 Kas" in lists, "5 Kasım 2026" on a post page. A fixed time zone keeps the server and
 * the browser on the same day, so hydration matches.
 */
export function formatPostDate(iso: string, locale: string, style: "short" | "long") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: style === "short" ? "short" : "long",
    year: style === "long" ? "numeric" : undefined,
    timeZone: "Europe/Istanbul"
  }).format(new Date(iso))
}
