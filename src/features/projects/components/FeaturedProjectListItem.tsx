import { ProjectDescription } from "@/features/projects/components/ProjectDescription"
import { ChevronRight } from "lucide-react"

import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

import { interactiveCardChevronClass } from "@/components/shared/interactive-card.styles"
import { cardTitleClass } from "@/components/shared/prose.styles"
import { ProjectStatusBadge } from "@/features/projects/components/ProjectStatusBadge"
import { ProjectTitle } from "@/features/projects/components/ProjectTitle"
import { getProjectStatusFlags } from "@/features/projects/helpers/project-status.helpers"
import type { Project } from "@/features/projects/types/project.types"

type FeaturedProjectListItemProps = {
	project: Project
}

export function FeaturedProjectListItem({
	project
}: FeaturedProjectListItemProps) {
	const { isComingSoon, hasBadge } = getProjectStatusFlags(project.status)
	const statusBadge = hasBadge ? (
		<ProjectStatusBadge status={project.status} />
	) : null

	return (
		<a
			href={withOutboundUtm(project.href)}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex flex-col md:flex-row md:items-center gap-1 md:gap-4 py-2"
		>
			<div className="flex items-center gap-2 md:gap-3 shrink-0 md:w-[240px]">
				<ProjectTitle
					project={project}
					id={`${project.id}-list`}
					className={cn(
						cardTitleClass,
						isComingSoon && "text-muted-foreground",
						"truncate md:text-sm"
					)}
				/>
				{statusBadge}
			</div>
			<div className="flex items-center gap-3 min-w-0 flex-1 justify-between md:justify-start">
				<p className="text-muted-foreground truncate text-left text-xs md:text-sm">
					<ProjectDescription description={project.description} />
				</p>
				{!statusBadge && (
					<ChevronRight
						className={cn(
							interactiveCardChevronClass,
							"hidden md:block ml-auto"
						)}
						aria-hidden
					/>
				)}
			</div>
		</a>
	)
}
