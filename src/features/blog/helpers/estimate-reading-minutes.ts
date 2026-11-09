/** A common reading pace for Turkish and English prose. */
const WORDS_PER_MINUTE = 200
/** Code is read slower than prose; a line counts as this many words. */
const WORDS_PER_CODE_LINE = 4

/**
 * Minutes to read a post from its MDX: prose words at 200 a minute, code by its lines.
 * JSX tags and markdown syntax are left out of the word count. Never less than a minute.
 */
export function estimateReadingMinutes(mdx: string) {
  let codeLines = 0
  const prose = mdx
    .replace(/^```[^\n]*\n([\s\S]*?)^```/gm, (_, code: string) => {
      codeLines += code.split("\n").filter((line) => line.trim() !== "").length
      return " "
    })
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`[\]()!|-]/g, " ")

  const words = prose.split(/\s+/).filter(Boolean).length

  return Math.max(1, Math.round((words + codeLines * WORDS_PER_CODE_LINE) / WORDS_PER_MINUTE))
}
