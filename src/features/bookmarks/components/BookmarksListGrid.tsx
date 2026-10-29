"use client"

import { AnimatePresence, m } from "motion/react"

import { BookmarkListRow } from "@/features/bookmarks/components/BookmarkListRow"
import { BookmarksEmptyState } from "@/features/bookmarks/components/BookmarksEmptyState"
import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"
import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"
import {
	MOTION_ENTER_OFFSET_Y,
	MOTION_FILTER_ENTER,
	MOTION_FILTER_EXIT,
	MOTION_SOFT_FADE
} from "@/lib/motion/motion.constants"
import { useMotionEnvironment } from "@/lib/motion/use-motion-environment"

type BookmarksListGridProps = {
	bookmarks: readonly Bookmark[]
	filterKey: string
}

export function BookmarksListGrid({ bookmarks, filterKey }: BookmarksListGridProps) {
	const { shouldUseSoftMotion } = useMotionEnvironment()
	const enterTransition = shouldUseSoftMotion ? MOTION_SOFT_FADE : MOTION_FILTER_ENTER
	const exitTransition = shouldUseSoftMotion ? MOTION_SOFT_FADE : MOTION_FILTER_EXIT
	const motionOffsetY = shouldUseSoftMotion ? 0 : MOTION_ENTER_OFFSET_Y

	return (
		<AnimatePresence mode="wait" initial={false}>
			{bookmarks.length === 0 ? (
				<m.div
					key={`empty-${filterKey}`}
					initial={{ opacity: 0, y: motionOffsetY }}
					animate={{ opacity: 1, y: 0, transition: enterTransition }}
					exit={{
						opacity: 0,
						y: -motionOffsetY,
						transition: exitTransition
					}}
				>
					<BookmarksEmptyState />
				</m.div>
			) : (
				<m.ul
					key={filterKey}
					role="list"
					aria-label={BOOKMARK_UI.listAriaLabel}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: enterTransition }}
					exit={{
						opacity: 0,
						transition: exitTransition
					}}
					className="grid grid-cols-2 gap-x-3 gap-y-4 overflow-visible md:grid-cols-5"
				>
					{bookmarks.map((bookmark) => (
						<li key={bookmark.id}>
							<BookmarkListRow bookmark={bookmark} />
						</li>
					))}
				</m.ul>
			)}
		</AnimatePresence>
	)
}
