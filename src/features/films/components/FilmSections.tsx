import { cn } from "cn"

import { PageToc } from "@/components/shared/PageToc"
import { FilmCard } from "@/features/films/components/FilmCard"
import { getFilmSections } from "@/features/films/helpers/get-film-sections"

export function FilmSections() {
  const sections = getFilmSections()

  return (
    <>
      <PageToc items={sections.map(({ id, title }) => ({ id, label: title }))} />
      <div className="flex flex-col gap-12">
        {sections.map(({ id, kind, title, films }) => (
          <section key={id} aria-labelledby={id} className="flex flex-col gap-4">
            {/* scroll-mt clears the sticky header when the TOC jumps here. */}
            <h2 id={id} className="scroll-mt-24 text-sm font-medium text-muted-foreground">
              {title}
            </h2>
            <ul
              className={cn(
                "grid gap-x-4 gap-y-8",
                kind === "video" ? "sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
              )}
            >
              {films.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
