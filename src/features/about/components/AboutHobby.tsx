import { useId } from "react"
import type { ReactNode } from "react"

type AboutHobbyProps = { title: string; children: ReactNode }

/** One hobby on the about page: a section of its own, its heading over the photos and text. */
export function AboutHobby({ title, children }: AboutHobbyProps) {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-4">
      <h2 id={headingId} className="text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-base leading-7 text-pretty text-foreground/80">
        {children}
      </div>
    </section>
  )
}
