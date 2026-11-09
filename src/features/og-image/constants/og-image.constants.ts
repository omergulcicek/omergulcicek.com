/** Share cards are 1200×630, the size X, LinkedIn and Facebook all crop to. */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const

/*
 * The site's dark theme as plain hex: Satori draws outside the browser, so CSS variables and
 * Tailwind classes do not reach it. Keep these in step with src/styles/tailwind.css.
 */
export const OG_COLORS = {
  background: "#0a0a0a",
  surface: "#111111",
  border: "#2b2b2b",
  foreground: "#fafafa",
  muted: "#a1a1a1"
} as const
