/** Double frame for cards and images: a border, a gap in the page color, then a ring. Carried over from v10. */
export const surfaceDoubleFrameClass =
  "rounded-xl border border-border ring-1 ring-border ring-offset-4 ring-offset-background"

/**
 * Hover and focus for a card that is a link, on top of surfaceDoubleFrameClass: both rings
 * and the fill strengthen. Shared by project cards, the CV card and previous/next posts.
 */
export const linkedCardClass =
  "group outline-none transition-[background-color,border-color,box-shadow] duration-150 ease-out hover:border-foreground/20 hover:bg-accent/40 hover:ring-foreground/20 focus-visible:border-foreground/30 focus-visible:ring-foreground/40"

/** The same frame for small images such as 32-40px logos, with a tighter gap. */
export const surfaceDoubleFrameSmClass =
  "rounded-lg border border-border ring-1 ring-border ring-offset-2 ring-offset-background"

/**
 * Reading width for every page but home (which uses all of main): lines stay near 75
 * characters. Left-aligned, not centered, so titles start at the same x on every page and
 * the fixed PageToc on the right never reaches the text.
 */
export const readingWidthClass = "w-full max-w-2xl"

/**
 * The one text-link style: a brand-colored underline at half strength, full on hover. The text
 * keeps its own color and the underline is always there, so a link never relies on color alone.
 * Rails and nav are navigation, not text links, and use pageRailLinkClass instead.
 */
export const textLinkClass =
  "rounded-sm underline decoration-brand/50 underline-offset-4 transition-[text-decoration-color,color] duration-150 ease-out outline-none hover:decoration-brand focus-visible:ring-[3px] focus-visible:ring-ring/50"

/**
 * The same link for titles in a list (blog, notes): the underline only appears on hover. A
 * list of titles reads as links by its layout, and 100 underlines would turn into noise.
 */
export const titleLinkClass =
  "rounded-sm underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-150 ease-out outline-none hover:decoration-brand focus-visible:ring-[3px] focus-visible:ring-ring/50"

/** A single frame for media in grids and lists, where the double frame would turn to noise. */
export const mediaFrameClass = "rounded-lg border border-border shadow-xs"

/** Links in the right rail (PageRail): muted, full color on hover and when current. */
export const pageRailLinkClass =
  "rounded-sm text-muted-foreground transition-colors duration-150 ease-out outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
