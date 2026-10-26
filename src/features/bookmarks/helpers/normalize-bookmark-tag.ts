export const BOOKMARK_TAG_LOCALE = "tr"

/** Case- and dot-insensitive form of a tag so URL values and labels compare equal in Turkish. */
export function normalizeBookmarkTagValue(value: string) {
	return value
		.normalize("NFC")
		.replace(/̇/g, "")
		.toLocaleLowerCase(BOOKMARK_TAG_LOCALE)
}
