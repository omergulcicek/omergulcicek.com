import { useEffect } from "react"
import type { RefObject } from "react"

// Kept outside the hook: React Compiler skips any hook that calls `import()` directly.
const loadMediumZoom = () => import("medium-zoom")

/**
 * Medium-style zoom on the post's figure images. medium-zoom works on DOM nodes, which fits
 * the server-rendered post HTML; it loads on demand, so pages without images never fetch it.
 */
export function useImageZoom(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = ref.current
    const images = container?.querySelectorAll<HTMLImageElement>("figure > img")
    if (!images || images.length === 0) return

    let detach: (() => void) | undefined
    let cancelled = false

    // medium-zoom sizes the zoom from the clone's naturalWidth before the full file replaces
    // the srcset's smaller pick, so the image opened at its inline size. Dropping srcset as the
    // zoom opens (before medium-zoom clones it) leaves only the full-size file to measure.
    function showFullSize(event: Event) {
      if (!(event.currentTarget instanceof HTMLImageElement)) return
      event.currentTarget.removeAttribute("srcset")
      event.currentTarget.removeAttribute("sizes")
    }
    for (const image of images) image.addEventListener("medium-zoom:open", showFullSize)

    loadMediumZoom()
      .then(({ default: mediumZoom }) => {
        if (cancelled) return
        // The theme token, not a color read once: the overlay follows a theme switched later too.
        const zoom = mediumZoom(images, { margin: 24, background: "var(--background)" })
        detach = () => zoom.detach()
      })
      .catch((error: unknown) => {
        // Without zoom the images still show at full width, so only report it.
        console.error(new Error("Could not load image zoom", { cause: error }))
      })

    return () => {
      cancelled = true
      for (const image of images) image.removeEventListener("medium-zoom:open", showFullSize)
      detach?.()
    }
  }, [ref])
}
