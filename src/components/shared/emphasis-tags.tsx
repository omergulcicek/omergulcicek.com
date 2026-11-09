/**
 * Emphasis tags for messages rendered with RichMessage (home hero, about page), each mapped to the HTML element whose meaning
 * fits: `<b>` keywords a skimming reader should catch (attention, not importance), `<em>` stress
 * that shifts how a sentence reads, `<i>` an idiom or a play on words. Keep them rare: one or
 * two per paragraph.
 */
export const emphasisTags = {
  b: (chunk: string) => <b className="font-semibold text-foreground">{chunk}</b>,
  em: (chunk: string) => <em>{chunk}</em>,
  i: (chunk: string) => <i>{chunk}</i>
}
