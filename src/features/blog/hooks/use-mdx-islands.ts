import { useEffect } from "react"
import type { RefObject } from "react"

import { createRoot } from "react-dom/client"
import type { Root } from "react-dom/client"

import { ISLANDS } from "@/features/blog/components/mdx/islands/island-registry"

/**
 * Brings the post's interactive MDX components to life. They sit in server HTML set with
 * `dangerouslySetInnerHTML`, outside React's tree, so each one gets a small root of its own.
 * A root renders over the identical static markup, so nothing visibly changes on load.
 */
export function useMdxIslands(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = ref.current
    if (!container) return

    const roots: Root[] = []
    let cancelled = false

    for (const element of container.querySelectorAll<HTMLElement>("[data-island]")) {
      const load = ISLANDS.get(element.dataset.island ?? "")
      if (!load) continue

      load()
        .then((render) => {
          if (cancelled) return
          const root = createRoot(element)
          root.render(render(JSON.parse(element.dataset.props ?? "{}")))
          roots.push(root)
        })
        .catch((error: unknown) => {
          // The static markup stays on the page, so the post still reads; only report it.
          console.error(
            new Error(`Could not start the ${element.dataset.island} demo`, { cause: error })
          )
        })
    }

    return () => {
      cancelled = true
      for (const root of roots) root.unmount()
    }
  }, [ref])
}
