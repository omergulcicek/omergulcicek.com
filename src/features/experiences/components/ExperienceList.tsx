import { cn } from "@/lib/utils"

import { ExperienceItem } from "@/features/experiences/components/ExperienceItem"
import type { Experience } from "@/features/experiences/constants/experiences.constants"

type ExperienceListProps = {
	experiences: Experience[]
	showTechnologies?: boolean
	className?: string
}

export function ExperienceList({
	experiences,
	showTechnologies = false,
	className
}: ExperienceListProps) {
	return (
		<div className={cn("flex flex-col gap-4 md:gap-6", className)}>
			{experiences.map((experience) => (
				<ExperienceItem
					key={experience.company}
					experience={experience}
					showTechnologies={showTechnologies}
				/>
			))}
		</div>
	)
}
