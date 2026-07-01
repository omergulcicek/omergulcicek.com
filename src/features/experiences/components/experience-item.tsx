import {
	interactiveListRowBleedClass,
	interactiveListRowClass,
	surfaceCardIconFrameClass
} from "@/components/shared/interactive-card.styles"
import { OptimizedImage } from "@/components/shared/optimized-image"
import { TechnologyBadges } from "@/features/experiences/components/technology-badges"
import type { Experience } from "@/features/experiences/constants/experiences.constants"
import { cn } from "@/lib/utils"

type ExperienceItemProps = {
	experience: Experience
	showTechnologies?: boolean
}

export function ExperienceItem({
	experience,
	showTechnologies = false
}: ExperienceItemProps) {
	return (
		<article
			className={cn(
				interactiveListRowClass,
				"relative flex cursor-default items-start gap-2.5 md:gap-4",
				interactiveListRowBleedClass
			)}
		>
			<div className={surfaceCardIconFrameClass}>
				<OptimizedImage
					src={`/company/${experience.icon}.jpeg`}
					alt=""
					width={24}
					height={24}
					className="image-outline size-6 overflow-hidden rounded object-cover"
				/>
			</div>
			<div className="min-w-0 flex-1">
				<p className="text-balance text-sm leading-relaxed font-medium md:text-base">
					{experience.role}
				</p>
				<p className="mt-0.5 text-xs leading-relaxed md:text-sm">
					<span className="font-medium">{experience.company}</span>
					<span className="text-muted-foreground"> · </span>
					<span className="text-muted-foreground tabular-nums">
						{experience.period}
					</span>
				</p>
				<p className="text-muted-foreground mt-1 text-pretty text-xs leading-relaxed md:mt-1.5 md:text-sm">
					{experience.summary}
				</p>
				{showTechnologies ? (
					<TechnologyBadges
						tags={experience.technologies}
						className="mt-2"
					/>
				) : null}
			</div>
		</article>
	)
}
