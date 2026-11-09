import type { ReactNode } from "react"

type MdxIslandProps = {
  /** A key of ISLANDS in island-registry.ts. */
  name: string
  /** Plain JSON: it is written into the HTML and parsed again in the browser. */
  props: Record<string, string | number | boolean>
  /** The component rendered on the server, so the first paint already shows it. */
  children: ReactNode
}

/**
 * A spot in the server-rendered post where an interactive component takes over in the
 * browser. useMdxIslands finds it by `data-island`, loads the component and renders it here
 * with the same props, replacing the identical static markup.
 */
export function MdxIsland({ name, props, children }: MdxIslandProps) {
  return (
    <div data-island={name} data-props={JSON.stringify(props)}>
      {children}
    </div>
  )
}
