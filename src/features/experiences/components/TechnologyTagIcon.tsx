import { cn } from "@/lib/utils"
import { TECHNOLOGY_ICON_MAP } from "@/features/experiences/constants/technology-icons.constants"

type TechnologyTagIconProps = {
	tag: string
	className?: string
}

export function TechnologyTagIcon({ tag, className }: TechnologyTagIconProps) {
	const entry = TECHNOLOGY_ICON_MAP[tag]

	if (!entry) {
		return null
	}

	if (entry.kind === "theme") {
		const LightIcon = entry.light
		const DarkIcon = entry.dark

		return (
			<>
				<LightIcon className={cn(className, "dark:hidden")} aria-hidden />
				<DarkIcon className={cn(className, "hidden dark:block")} aria-hidden />
			</>
		)
	}

	const Icon = entry.icon

	return (
		<Icon
			className={cn(className, entry.invertOnDark && "dark:invert")}
			aria-hidden
		/>
	)
}
