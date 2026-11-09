import { localizeHref } from "@/paraglide/runtime.js"
import type { Locale } from "@/paraglide/runtime.js"

/**
 * A link inside a post, moved under the post's language: `/blog/x` in an English post becomes
 * `/en/blog/x`. Posts store links without a prefix so v10, which reads the same content and
 * has no `/en`, can follow them too. External links, anchors and files stay as written.
 */
export function localizePostLink(href: string | undefined, locale: Locale) {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return href
  // A dot in the last segment means a file (`/omergulcicek_cv.pdf`), which lives outside locales.
  const lastSegment = href.split(/[?#]/)[0]?.split("/").pop() ?? ""
  if (lastSegment.includes(".")) return href

  return localizeHref(href, { locale })
}
