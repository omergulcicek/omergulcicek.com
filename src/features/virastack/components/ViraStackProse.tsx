import type { ReactNode } from "react"

/** Body paragraphs of a section, in the about page's reading style. */
export function ViraStackProse({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4 text-base text-pretty text-foreground">{children}</div>
}
