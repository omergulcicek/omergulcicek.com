import { Fragment } from "react"
import type { ReactNode } from "react"

type RichMessageProps = {
  /** Localized text with `<name>text</name>` tags, such as `localize(me.hero.intro)`. */
  message: string
  /** One renderer per tag name; a tag without a renderer prints as written. */
  tags: Record<string, (chunk: string) => ReactNode>
}

const TAG_PATTERN = /<(\w+)>(.*?)<\/\1>/g

/** Renders the tags inside a message, so a link can sit wherever each language puts it. */
export function RichMessage({ message, tags }: RichMessageProps) {
  const nodes: ReactNode[] = []
  let cursor = 0

  for (const match of message.matchAll(TAG_PATTERN)) {
    const [whole, name, chunk] = match
    const render = name ? tags[name] : undefined

    nodes.push(message.slice(cursor, match.index))
    nodes.push(
      <Fragment key={match.index}>{render && chunk !== undefined ? render(chunk) : whole}</Fragment>
    )
    cursor = match.index + whole.length
  }

  nodes.push(message.slice(cursor))

  return nodes
}
