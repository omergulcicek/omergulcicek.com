type BookmarkCategoryAccentProps = {
	accent: string
}

export function BookmarkCategoryAccent({ accent }: BookmarkCategoryAccentProps) {
	return (
		<span
			className="size-3 shrink-0 rounded-full"
			style={{ backgroundColor: accent }}
			aria-hidden
		/>
	)
}
