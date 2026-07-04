"use client"

import { AnimatePresence, motion } from "motion/react"

import { BookmarkListRow } from "@/features/bookmarks/components/bookmark-list-row"
import { BookmarksEmptyState } from "@/features/bookmarks/components/bookmarks-empty-state"
import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"
import { getDiagonalGridStaggerDelay } from "@/features/bookmarks/helpers/get-diagonal-grid-stagger-delay"
import { useBookmarkGridColumnCount } from "@/features/bookmarks/hooks/use-bookmark-grid-column-count"
import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"
import {
	MOTION_DIAGONAL_STAGGER_STEP,
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
	const columnCount = useBookmarkGridColumnCount()
	const enterTransition = shouldUseSoftMotion ? MOTION_SOFT_FADE : MOTION_FILTER_ENTER
	const exitTransition = shouldUseSoftMotion ? MOTION_SOFT_FADE : MOTION_FILTER_EXIT
	const motionOffsetY = shouldUseSoftMotion ? 0 : MOTION_ENTER_OFFSET_Y
	const staggerStep = shouldUseSoftMotion ? 0 : MOTION_DIAGONAL_STAGGER_STEP

	return (
		<AnimatePresence mode="wait" initial={false}>
			{bookmarks.length === 0 ? (
				<motion.div
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
				</motion.div>
			) : (
				<motion.div
					key={filterKey}
					aria-label={BOOKMARK_UI.listAriaLabel}
					exit={{
						opacity: 0,
						transition: exitTransition
					}}
					className="grid grid-cols-2 gap-x-4 gap-y-6 overflow-visible md:grid-cols-5 md:gap-x-4 md:gap-y-5"
				>
					{bookmarks.map((bookmark, index) => (
						<motion.div
							key={bookmark.id}
							initial={{ opacity: 0, y: motionOffsetY }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									...enterTransition,
									delay: getDiagonalGridStaggerDelay(
										index,
										columnCount,
										staggerStep
									)
								}
							}}
						>
							<BookmarkListRow bookmark={bookmark} />
						</motion.div>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	)
}
