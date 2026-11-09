import { ArrowUpRightIcon, DownloadIcon, StarIcon } from "lucide-react"
import { cn } from "cn"

import type { Me } from "@/schemas/me.schema"

import { localize } from "@/helpers/localize"

import { RichMessage } from "@/components/shared/RichMessage"
import { linkedCardClass, surfaceDoubleFrameClass } from "@/components/shared/surface.styles"
import { PROJECT_ICONS } from "@/features/projects/constants/project-icons.constants"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

const BRAND = "ViraStack"

/**
 * Cards in the ViraStack group drop the brand prefix: the group heading already says it, and
 * "Mask" alone is what tells the cards apart. me.json keeps the full title for every other context.
 */
function getCardTitle({ group, title }: Pick<Project, "group" | "title">) {
  return group === "virastack" && title.startsWith(`${BRAND} `)
    ? title.slice(BRAND.length + 1)
    : title
}

type Project = Me["projects"][number]

// Small star counts read as noise rather than proof.
const MIN_STARS_SHOWN = 10

function getStatusLabel(status: string) {
  if (status === "paused") return m.project_status_paused()
  if (status === "archived") return m.project_status_archived()
  return null
}

/**
 * Double-frame rule: every card keeps the frame, because it is the site's signature, not a
 * link cue. A linked card adds an arrow that is always visible (touch has no hover) and
 * strengthens frame, background and arrow on hover and focus. A card without a link stays still.
 */
type ProjectCardProps = {
  project: Project
  /** Live numbers; a missing field hides that number. */
  stats?: { stars?: number; downloads?: number }
}

export function ProjectCard({ project, stats }: ProjectCardProps) {
  const locale = getLocale()
  const status = getStatusLabel(project.status)
  const stars =
    stats?.stars !== undefined && stats.stars >= MIN_STARS_SHOWN
      ? stats.stars.toLocaleString(locale)
      : null
  const downloads = stats?.downloads ? stats.downloads.toLocaleString(locale) : null

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {PROJECT_ICONS.get(project.id)}
          <h3 className="text-base font-semibold">{getCardTitle(project)}</h3>
        </div>
        {project.href ? (
          <ArrowUpRightIcon
            aria-hidden
            className="size-4 shrink-0 text-muted-foreground transition-[color,translate] duration-150 ease-out group-hover:text-foreground group-focus-visible:text-foreground motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          />
        ) : null}
      </div>
      <p className="flex-1 text-sm leading-6 text-pretty text-muted-foreground">
        {/* Only commands and file names are marked up: they are typed as written. */}
        <RichMessage
          message={localize(project.description)}
          tags={{
            code: (chunk) => (
              <code className="rounded-sm bg-muted px-1 py-0.5 font-mono text-[0.8125rem] text-foreground">
                {chunk}
              </code>
            )
          }}
        />
      </p>
      {stars || downloads || status ? (
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {stars ? (
            <span className="inline-flex items-center gap-1">
              <StarIcon aria-hidden className="size-3.5" />
              <span className="font-mono">{stars}</span>
              <span className="sr-only">{m.project_stars()}</span>
            </span>
          ) : null}
          {status ? <span>{status}</span> : null}
          {/* ml-auto pins downloads to the bottom-right corner, even when they are alone on the row. */}
          {downloads ? (
            <span className="ml-auto inline-flex items-center gap-1">
              <DownloadIcon aria-hidden className="size-3.5" />
              <span className="font-mono">{downloads}</span>
              <span>{m.project_downloads_period()}</span>
            </span>
          ) : null}
        </p>
      ) : null}
    </>
  )

  const base = cn("flex h-full flex-col gap-2 bg-background p-4", surfaceDoubleFrameClass)

  if (!project.href) return <div className={base}>{content}</div>

  return (
    <a href={project.href} target="_blank" rel="noreferrer" className={cn(base, linkedCardClass)}>
      {content}
    </a>
  )
}
