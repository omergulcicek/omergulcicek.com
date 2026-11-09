/** The few hast shapes this plugin touches; the full types are not a direct dependency. */
type HastText = { type: "text"; value: string }
type HastElement = {
  type: "element"
  tagName: string
  properties: Record<string, unknown>
  children: HastNode[]
}
type HastNode = HastElement | HastText | { type: string; children?: HastNode[] }
type HastParent = { children?: HastNode[] }

function isElement(node: HastNode, tagName?: string): node is HastElement {
  return (
    node.type === "element" && (tagName === undefined || (node as HastElement).tagName === tagName)
  )
}

function isBlank(node: HastNode) {
  return node.type === "text" && (node as HastText).value.trim() === ""
}

/** A paragraph whose only content is one image, the shape `![alt](src)` alone on a line makes. */
function getLoneImage(node: HastNode) {
  if (!isElement(node, "p")) return null
  const content = node.children.filter((child) => !isBlank(child))
  const [only] = content

  return content.length === 1 && only && isElement(only, "img") ? only : null
}

/** Looks up an image's pixel size by its `src`; null when it is unknown. */
export type GetImageSize = (src: string) => { width: number; height: number } | null

function toFigure(image: HastElement, getSize?: GetImageSize): HastElement {
  const alt = typeof image.properties.alt === "string" ? image.properties.alt.trim() : ""
  image.properties.loading = "lazy"
  image.properties.decoding = "async"

  // Width and height reserve the image's box before it loads, so the text below never jumps.
  const src = image.properties.src
  const size = typeof src === "string" ? getSize?.(src) : null
  if (size) {
    image.properties.width = size.width
    image.properties.height = size.height
  }

  const children: HastNode[] = [image]
  if (alt) {
    // The alt text already reaches screen readers (and search), so the visible caption is hidden from them.
    children.push({
      type: "element",
      tagName: "figcaption",
      properties: { ariaHidden: "true" },
      children: [{ type: "text", value: alt }]
    })
  }

  return { type: "element", tagName: "figure", properties: {}, children }
}

function visit(parent: HastParent, getSize?: GetImageSize) {
  if (!parent.children) return

  parent.children = parent.children.map((child) => {
    const image = getLoneImage(child)
    if (image) return toFigure(image, getSize)
    visit(child as HastParent, getSize)
    return child
  })
}

/**
 * Rehype plugin: an image alone in its paragraph becomes a `figure`, with its alt text as a
 * Medium-style caption underneath, and its pixel size when `getSize` knows it. Images inside
 * text are left alone.
 */
export function rehypeFigureCaptions(getSize?: GetImageSize) {
  return () => (tree: HastParent) => {
    visit(tree, getSize)
  }
}
