export type SortOptionType =
	| "date-desc"
	| "date-asc"
	| "title-asc"
	| "title-desc"

export interface FilterSortPropsType {
	tags: string[]
	currentSort: SortOptionType
	currentTag?: string | null
}
