import { VirastackProductName } from "@/features/projects/components/VirastackProductName"
import type { Project } from "@/features/projects/types/project.types"

export function ProjectTitle({
	project,
	className,
	id
}: {
	project: Project
	className?: string
	id?: string
}) {
	return (
		<h3 id={id} className={className}>
			{project.group === "virastack" ? (
				<VirastackProductName projectId={project.id} title={project.title} />
			) : (
				project.title
			)}
		</h3>
	)
}
