import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"

export function BookmarksEmptyState() {
	return (
		<p className="text-muted-foreground text-sm leading-relaxed">
			{BOOKMARK_UI.emptyState}
		</p>
	)
}
