import { cn } from "@/lib/utils"
import { BOOKMARK_TAG_ICON_MAP } from "@/features/bookmarks/constants/bookmark-tag-icons.constants"

type BookmarkTagIconProps = {
	tag: string
	className?: string
}

export function BookmarkTagIcon({ tag, className }: BookmarkTagIconProps) {
	const entry = BOOKMARK_TAG_ICON_MAP[tag]

	if (!entry) {
		return null
	}

	const Icon = entry.icon

	return (
		<Icon className={cn(className, entry.iconClassName)} aria-hidden />
	)
}
