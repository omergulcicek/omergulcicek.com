/** The few hast shapes this plugin touches; the full types are not a direct dependency. */
type HastNode = {
  type: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

function isBackref(node: HastNode) {
  return node.properties?.dataFootnoteBackref !== undefined
}

/**
 * Rehype plugin: removes the "↩" links GFM adds after each footnote, and the space before
 * them. The sources list reads like a book's bibliography; the numbers in the text still
 * link down to it.
 */
export function rehypeStripFootnoteBackrefs() {
  return (tree: HastNode) => {
    function visit(node: HastNode) {
      if (!node.children) return
      const kept = node.children.filter((child) => !isBackref(child))
      if (kept.length !== node.children.length) {
        const last = kept.at(-1)
        if (last?.type === "text" && last.value !== undefined) last.value = last.value.trimEnd()
        node.children = kept
      }
      for (const child of node.children) visit(child)
    }

    visit(tree)
  }
}
