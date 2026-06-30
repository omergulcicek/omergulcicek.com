import {
	surfaceCardClass,
	surfaceCardIconFrameClass
} from "@/components/shared/interactive-card.styles"
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
		<article className={cn(surfaceCardClass, "flex items-start gap-3 sm:gap-4")}>
			<div className={surfaceCardIconFrameClass}>
				<img
					src={`/company/${experience.icon}.jpeg`}
					alt=""
					width={24}
					height={24}
					loading="lazy"
					decoding="async"
					className="image-outline size-6 overflow-hidden rounded object-cover"
				/>
			</div>
			<div className="min-w-0 flex-1">
				<p className="text-base leading-relaxed font-medium">
					{experience.role}
				</p>
				<p className="mt-0.5 text-sm leading-relaxed">
					<span className="font-medium">{experience.company}</span>
					<span className="text-muted-foreground"> · </span>
					<span className="text-muted-foreground tabular-nums">
						{experience.period}
					</span>
				</p>
				<p className="text-muted-foreground mt-1.5 text-pretty text-sm leading-relaxed">
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
