import type { BookmarkChipLabel } from "@/features/bookmarks/constants/bookmarks.constants"

type BookmarkChipLabelProps = {
	label: BookmarkChipLabel
}

export function BookmarkChipLabelText({ label }: BookmarkChipLabelProps) {
	return (
		<>
			<span className="md:hidden">{label.mobile}</span>
			<span className="hidden md:inline">{label.desktop}</span>
		</>
	)
}
