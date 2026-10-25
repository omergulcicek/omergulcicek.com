import { BookOpen, Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/features/projects/types/project.types"
import { projectIconClass, projectIconStroke, PROJECT_VISUALS } from "@/features/projects/constants/project-visuals.constants"

export function FeaturedProjectVisual({
	project,
	isComingSoon
}: {
	project: Project
	isComingSoon: boolean
}) {
	const visual = PROJECT_VISUALS[project.id]
	const mutedClass = isComingSoon ? "opacity-45 saturate-50" : undefined

	if (!visual) {
		return (
			<BookOpen
				className={cn(
					projectIconClass,
					"text-muted-foreground",
					mutedClass
				)}
				strokeWidth={projectIconStroke}
				aria-hidden
			/>
		)
	}

	if (visual.kind === "lab") {
		return (
			<Icon
				iconNode={visual.iconNode}
				className={cn(projectIconClass, project.color, visual.className, mutedClass)}
				strokeWidth={projectIconStroke}
				aria-hidden
			/>
		)
	}

	if (visual.kind === "svg") {
		const ProjectSvg = visual.Icon

		return <ProjectSvg className={cn(project.color, visual.className, mutedClass)} />
	}

	const LucideProjectIcon = visual.Icon

	return (
		<LucideProjectIcon
			className={cn(projectIconClass, project.color, visual.className, mutedClass)}
			strokeWidth={projectIconStroke}
			aria-hidden
		/>
	)
}
