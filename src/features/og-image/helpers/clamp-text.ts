/** Shortens text to `max` characters at the last whole word, so a card never ends mid-word. */
export function clampText(value: string, max: number) {
  if (value.length <= max) return value

  const cut = value.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(" ")
  // A single very long word is cut where it is rather than leaving almost nothing.
  const kept = lastSpace > max / 2 ? cut.slice(0, lastSpace) : cut

  return `${kept.replace(/[\s,.:;·-]+$/, "")}…`
}
