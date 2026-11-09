import { useEffect, useRef } from "react"

/**
 * Marks an element below the fold as hidden, then shown once it scrolls into view; the CSS on
 * `[data-reveal]` animates the change. Elements already on screen, and pages without JavaScript,
 * are never hidden.
 */
export function useRevealOnScroll<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!enabled || !element) return
    if (element.getBoundingClientRect().top < window.innerHeight) return

    element.dataset.reveal = "hidden"
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        element.dataset.reveal = "shown"
        observer.disconnect()
      },
      { rootMargin: "0px 0px -15% 0px" }
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [enabled])

  return ref
}
