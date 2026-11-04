import { ChevronRight } from "lucide-react"

import { withOutboundUtm } from "@/helpers/outbound-url"
import { cn } from "@/lib/utils"

import { interactiveCardChevronClass } from "@/components/shared/interactive-card.styles"
import { cardTitleClass } from "@/components/shared/prose.styles"
import { ProjectDescription } from "@/features/projects/components/ProjectDescription"
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
			className="group flex flex-col gap-1 py-2"
		>
			<div className="flex items-center gap-2 md:gap-3">
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
			<p className="text-muted-foreground text-left text-xs text-pretty md:text-sm">
				<ProjectDescription description={project.description} />
			</p>
		</a>
	)
}
