import { TechnologyBadges } from "@/features/experiences/components/technology-badges"
import type { Experience } from "@/features/experiences/constants/experiences.constants"

type ExperienceItemProps = {
	experience: Experience
	showTechnologies?: boolean
}

const experienceCardClass =
	"flex items-start gap-3 rounded-xl border border-border bg-[#fff] p-4 ring-1 ring-border ring-offset-4 ring-offset-[#fcfcfc] dark:bg-[#0b0b0b] dark:ring-offset-[#0f0f0f] sm:gap-4"

export function ExperienceItem({
	experience,
	showTechnologies = false
}: ExperienceItemProps) {
	return (
		<article className={experienceCardClass}>
			<div className="mt-0.5 shrink-0 rounded-lg border border-border/60 bg-muted/40 p-1.5">
				<img
					src={`/company/${experience.icon}.jpeg`}
					alt=""
					width={24}
					height={24}
					loading="lazy"
					decoding="async"
					className="size-6 overflow-hidden rounded object-cover"
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
				<p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
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
