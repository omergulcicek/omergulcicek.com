/** Demo names accepted by the `css-demo` MDX island; kept apart from `CssDemo.tsx` for Fast Refresh. */
export const CSS_DEMOS = [
  "corner-shape",
  "clip-path",
  "picker-icon",
  "sibling-index",
  "stretch",
  "text-box"
] as const

export type CssDemoName = (typeof CSS_DEMOS)[number]
