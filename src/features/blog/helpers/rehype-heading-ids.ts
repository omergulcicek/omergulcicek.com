import { toSlug } from "@/helpers/to-slug"

/** The few hast shapes this plugin touches; the full types are not a direct dependency. */
type HastNode = {
  type: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

export type PostHeading = { id: string; text: string; level: 2 | 3 }

const LEVELS: Record<string, PostHeading["level"]> = { h2: 2, h3: 3 }

function textOf(node: HastNode): string {
  if (node.type === "text") return node.value ?? ""
  return (node.children ?? []).map(textOf).join("")
}

/**
 * Rehype plugin: gives every h2 and h3 an id from its text ("Neden Zustand?" → "neden-zustand")
 * and pushes it to `headings` in page order, for the table of contents. Repeated titles get
 * "-2", "-3", so every id stays unique.
 */
export function rehypeHeadingIds(headings: PostHeading[]) {
  return () => (tree: HastNode) => {
    const used = new Map<string, number>()

    function visit(node: HastNode) {
      const level = node.tagName ? LEVELS[node.tagName] : undefined
      if (node.type === "element" && level) {
        const text = textOf(node).trim()
        const base = toSlug(text) || "section"
        const count = (used.get(base) ?? 0) + 1
        used.set(base, count)
        const id = count === 1 ? base : `${base}-${count}`

        node.properties = { ...node.properties, id }
        headings.push({ id, text, level })
        return
      }
      for (const child of node.children ?? []) visit(child)
    }

    visit(tree)
  }
}
