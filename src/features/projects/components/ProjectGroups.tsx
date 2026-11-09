import { ProjectCard } from "@/features/projects/components/ProjectCard"
import { getProjectSections } from "@/features/projects/helpers/get-project-sections"
import { useProjectStats } from "@/features/projects/hooks/use-project-stats"

export function ProjectGroups() {
  const { data: stats } = useProjectStats()

  return (
    <div className="flex flex-col gap-12">
      {getProjectSections().map(({ id, title, projects }) => (
        <section key={id} aria-labelledby={id} className="flex flex-col gap-4">
          {/* scroll-mt clears the sticky header when the TOC jumps here. */}
          <h2 id={id} className="scroll-mt-24 text-sm font-medium text-muted-foreground">
            {title}
          </h2>
          {/* p-1 keeps the outer ring of each card inside the grid. */}
          <ul className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.id} className="p-1">
                <ProjectCard project={project} stats={stats[project.id]} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
