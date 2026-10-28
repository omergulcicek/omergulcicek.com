import { cn } from "@/lib/utils"

import { StackLogo } from "@/components/shared/StackLogo"
import { BLOG_TAG_ICON_MAP } from "@/features/blog/constants/blog-tag-icons.constants"

type BlogTagIconProps = {
	tag: string
	className?: string
}

/** Decorative: every tag icon sits next to the tag's visible name. */
export function BlogTagIcon({ tag, className }: BlogTagIconProps) {
	const entry = BLOG_TAG_ICON_MAP[tag]

	if (!entry) {
		return null
	}

	if (entry.kind === "stack") {
		return (
			<StackLogo
				stackId={entry.stackId}
				label={tag}
				className={cn(className, entry.iconClassName)}
				decorative
			/>
		)
	}

	const Icon = entry.icon

	return <Icon className={cn(className, entry.iconClassName)} aria-hidden />
}
