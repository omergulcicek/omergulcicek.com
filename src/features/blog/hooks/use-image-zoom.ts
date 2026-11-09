import { useEffect } from "react"
import type { RefObject } from "react"

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

    import("medium-zoom")
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
      detach?.()
    }
  }, [ref])
}
