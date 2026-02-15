export type SortOptionType =
	| "default"
	| "date-desc"
	| "date-asc"
	| "title-asc"
	| "title-desc"

export interface FilterSortPropsType {
	tags: string[]
	currentTag?: string | null
}
