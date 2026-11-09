import type { ReactNode } from "react"

/** Body paragraphs of a section, in the about page's reading style. */
export function ViraStackProse({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 text-base leading-7 text-pretty text-foreground/80">
      {children}
    </div>
  )
}
