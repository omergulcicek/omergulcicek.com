import { useEffect } from "react"
import type { RefObject } from "react"

const COPIED_MS = 2000
/** The sticky header plus some air, so a block scrolled back into view is not hidden under it. */
const HEADER_OFFSET_PX = 96

async function copyCode(button: HTMLButtonElement, timers: Set<number>) {
  // Copies the whole block, also while it is collapsed.
  const code = button.closest("figure")?.querySelector("pre")?.textContent
  if (code == null) return

  try {
    await navigator.clipboard.writeText(code)
  } catch (error) {
    // Clipboard access can be denied; the code stays selectable, so only report it.
    console.error(new Error("Could not copy the code block", { cause: error }))
    return
  }

  const { copyLabel = "", copiedLabel = "" } = button.dataset
  button.dataset.copied = ""
  button.setAttribute("aria-label", copiedLabel)
  button.title = copiedLabel

  const timer = window.setTimeout(() => {
    delete button.dataset.copied
    button.setAttribute("aria-label", copyLabel)
    button.title = copyLabel
    timers.delete(timer)
  }, COPIED_MS)
  timers.add(timer)
}

function toggleCode(button: HTMLButtonElement) {
  const figure = button.closest("figure")
  if (!figure) return

  const expanded = !("expanded" in figure.dataset)
  if (expanded) figure.dataset.expanded = ""
  else delete figure.dataset.expanded

  button.setAttribute("aria-expanded", String(expanded))
  const text = button.querySelector("[data-expand-text]")
  if (text) {
    text.textContent = (expanded ? button.dataset.collapseLabel : button.dataset.expandLabel) ?? ""
  }

  if (expanded) return
  // Collapsing a long block can leave the reader far below it; bring its top back into view.
  // Measured a frame later, after the browser's scroll anchoring has moved the page.
  window.requestAnimationFrame(() => {
    const top = figure.getBoundingClientRect().top
    if (top < HEADER_OFFSET_PX) window.scrollBy({ top: top - HEADER_OFFSET_PX })
  })
}

/**
 * Wires the copy and show-all buttons BlogCodeBlock renders into server HTML. One delegated
 * listener on the container, because the buttons live in `dangerouslySetInnerHTML`, outside React.
 */
export function useCodeBlockActions(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = ref.current
    if (!container) return

    const timers = new Set<number>()

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return

      const copy = event.target.closest<HTMLButtonElement>("button[data-copy-code]")
      if (copy) {
        void copyCode(copy, timers)
        return
      }

      const toggle = event.target.closest<HTMLButtonElement>("button[data-expand-code]")
      if (toggle) toggleCode(toggle)
    }

    container.addEventListener("click", handleClick)
    return () => {
      container.removeEventListener("click", handleClick)
      for (const timer of timers) window.clearTimeout(timer)
    }
  }, [ref])
}
