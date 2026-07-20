import { ExternalLink } from "lucide-react"

import { ProseLink } from "@/components/shared/prose-link"
import { SectionHeading } from "@/components/shared/SectionHeading"

import type { Project } from "@/features/projects/types/project.types"

export function ArchiveProjectList({ projects }: { projects: Project[] }) {
	return (
		<ul className="flex flex-col gap-2">
			{projects.map((project) => (
				<li key={project.id}>
					<ProseLink
						href={project.href}
						variant="muted"
						className="inline-flex items-center gap-1.5"
					>
						{project.title}
						<ExternalLink className="size-3.5" aria-hidden />
					</ProseLink>
				</li>
			))}
		</ul>
	)
}

export function ProjectsSectionHeading({
	children,
	className
}: {
	children: string
	className?: string
}) {
	return <SectionHeading className={className}>{children}</SectionHeading>
}
