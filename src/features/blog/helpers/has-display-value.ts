/** Narrows an optional front-matter field to a value worth rendering. */
export function hasDisplayValue(
	value: string | number | undefined
): value is string | number {
	return value !== undefined && value !== ""
}
