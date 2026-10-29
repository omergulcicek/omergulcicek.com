import { ProjectDescription } from "@/features/projects/components/ProjectDescription"
import { getProjectStatusFlags } from "@/features/projects/helpers/project-status.helpers"
import { ChevronRight } from "lucide-react"
import { cardTitleClass } from "@/components/shared/prose.styles"
import { getInteractiveCardClassName, interactiveCardChevronClass } from "@/components/shared/interactive-card.styles"
import { cn } from "@/lib/utils"
import { withOutboundUtm } from "@/lib/outbound-url"
import type { Project } from "@/features/projects/types/project.types"
import { ProjectTitle } from "@/features/projects/components/ProjectTitle"
import { ProjectStatusBadge } from "@/features/projects/components/ProjectStatusBadge"
import { FeaturedProjectVisual } from "@/features/projects/components/FeaturedProjectVisual"

type FeaturedProjectCardProps = {
	project: Project
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
	const { isComingSoon, isArchived, hasBadge } = getProjectStatusFlags(
		project.status
	)
	const statusBadge = hasBadge ? (
		<ProjectStatusBadge status={project.status} />
	) : null

	return (
		<a
			href={withOutboundUtm(project.href)}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				getInteractiveCardClassName(isComingSoon),
				isArchived && "border-dashed"
			)}
		>
			<div className="flex h-20 items-center justify-center md:h-28">
				<FeaturedProjectVisual project={project} isComingSoon={isComingSoon} />
			</div>
			<div className="flex flex-col gap-1.5 md:gap-2">
				<div className="flex items-start justify-between gap-2 md:gap-3">
					<ProjectTitle
						project={project}
						id={project.id}
						className={cn(
							cardTitleClass,
							isComingSoon && "text-muted-foreground"
						)}
					/>
					{statusBadge ?? (
						<ChevronRight
							className={interactiveCardChevronClass}
							aria-hidden
						/>
					)}
				</div>
				<p className="text-muted-foreground text-pretty text-xs leading-relaxed md:text-sm">
					<ProjectDescription description={project.description} />
				</p>
			</div>
		</a>
	)
}
