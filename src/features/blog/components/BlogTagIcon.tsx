import { cn } from "@/lib/utils"

import { StackLogo } from "@/components/shared/StackLogo"
import { ThemeAwareDualIcon } from "@/components/shared/ThemeAwareDualIcon"
import { BLOG_TAG_ICON_MAP } from "@/features/blog/constants/blog-tag-icons.constants"

type BlogTagIconProps = {
	tag: string
	className?: string
}

export function BlogTagIcon({ tag, className }: BlogTagIconProps) {
	const entry = BLOG_TAG_ICON_MAP[tag]

	if (!entry) {
		return null
	}

	if (entry.kind === "theme") {
		return (
			<ThemeAwareDualIcon
				light={entry.light}
				dark={entry.dark}
				className={className}
				label={tag}
			/>
		)
	}

	if (entry.kind === "stack") {
		return (
			<StackLogo stackId={entry.stackId} label={tag} className={className} />
		)
	}

	const Icon = entry.icon

	return (
		<Icon
			className={cn(
				className,
				entry.iconClassName,
				entry.invertOnDark && "dark:invert"
			)}
			aria-hidden
		/>
	)
}
