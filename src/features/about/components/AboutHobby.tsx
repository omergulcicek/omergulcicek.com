import { useId } from "react"
import type { ReactNode } from "react"

type AboutHobbyProps = { title: string; children: ReactNode }

/** One hobby on the about page: a section of its own, its heading over the photos and text. */
export function AboutHobby({ title, children }: AboutHobbyProps) {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-4">
      <h2 id={headingId} className="text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-base text-pretty text-foreground">{children}</div>
    </section>
  )
}
