import type { ComponentType, SVGProps } from "react"

import { Chrome } from "@/components/ui/svgs/chrome"
import { CursorLight } from "@/components/ui/svgs/cursorLight"
import { cn } from "@/lib/utils"

type BookmarkTagIconProps = {
	tag: string
	className?: string
}

const BOOKMARK_TAG_ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
	Chrome: Chrome,
	Cursor: CursorLight
}

const BOOKMARK_TAG_ICON_CLASS_MAP: Record<string, string> = {
	Cursor: "text-[#181717] dark:text-white"
}

export function hasBookmarkTagIcon(tag: string) {
	return tag in BOOKMARK_TAG_ICON_MAP
}

export function BookmarkTagIcon({ tag, className }: BookmarkTagIconProps) {
	const Icon = BOOKMARK_TAG_ICON_MAP[tag]

	if (!Icon) {
		return null
	}

	return (
		<Icon
			className={cn(className, BOOKMARK_TAG_ICON_CLASS_MAP[tag])}
			aria-hidden
		/>
	)
}
