import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { hreflangLinks } from "@/helpers/localized-url"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { projectStatsQueryOptions } from "@/features/projects/api/project.queries"
import { ProjectGroups } from "@/features/projects/components/ProjectGroups"
import { ProjectsToc } from "@/features/projects/components/ProjectsToc"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/projects")({
  head: () => ({
    meta: [
      { title: m.projects_title() },
      { name: "description", content: m.projects_description() }
    ],
    links: hreflangLinks("/projects")
  }),
  loader: ({ context }) => context.queryClient.query(projectStatsQueryOptions()),
  component: ProjectsPage
})

function ProjectsPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.projects_title()} description={m.projects_description()} />
      <ProjectGroups />
      <ProjectsToc />
    </div>
  )
}
