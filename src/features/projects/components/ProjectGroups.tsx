import { ProjectCard } from "@/features/projects/components/ProjectCard"
import { getProjectSections } from "@/features/projects/helpers/get-project-sections"
import { useProjectStats } from "@/features/projects/hooks/use-project-stats"

export function ProjectGroups() {
  const { data: stats } = useProjectStats()

  return (
    <div className="flex flex-col gap-12">
      {getProjectSections().map(({ id, title, projects }) => (
        <section key={id} aria-labelledby={id} className="flex flex-col gap-6">
          <h2 id={id} className="text-xl font-semibold text-foreground">
            {title}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} stats={stats[project.id]} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
