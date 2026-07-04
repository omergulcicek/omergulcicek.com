import { useSyncExternalStore } from "react"

import { BOOKMARK_GRID_COLUMN_COUNT } from "@/features/bookmarks/constants/bookmarks.constants"

const BOOKMARK_GRID_MEDIA_QUERY = "(min-width: 768px)"

function subscribeToBookmarkGridColumnCount(onStoreChange: () => void) {
	const mediaQuery = window.matchMedia(BOOKMARK_GRID_MEDIA_QUERY)
	mediaQuery.addEventListener("change", onStoreChange)

	return () => {
		mediaQuery.removeEventListener("change", onStoreChange)
	}
}

function getBookmarkGridColumnCountSnapshot() {
	return window.matchMedia(BOOKMARK_GRID_MEDIA_QUERY).matches
		? BOOKMARK_GRID_COLUMN_COUNT.desktop
		: BOOKMARK_GRID_COLUMN_COUNT.mobile
}

function getBookmarkGridColumnCountServerSnapshot() {
	return BOOKMARK_GRID_COLUMN_COUNT.mobile
}

export function useBookmarkGridColumnCount() {
	return useSyncExternalStore(
		subscribeToBookmarkGridColumnCount,
		getBookmarkGridColumnCountSnapshot,
		getBookmarkGridColumnCountServerSnapshot
	)
}
