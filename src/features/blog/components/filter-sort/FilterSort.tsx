"use client"

import { useQueryState } from "nuqs"

import { useFilterSortTags } from "@/features/blog/hooks/use-filter-sort-tags"
import type { FilterSortPropsType } from "@/features/blog/types/filter-sort.types"

import { FilterSortSortSelect } from "./FilterSortSortSelect"
import { FilterSortTagSelect } from "./FilterSortTagSelect"

export function FilterSort({ tags, currentTag }: FilterSortPropsType) {
	const [sortValue, setSortValue] = useQueryState("sort", {
		defaultValue: "default"
	})
	const [tagState, setTagState] = useQueryState("tag")

	const tagValue = tagState ?? currentTag ?? undefined
	const tagSelectValue = tagValue ?? "__all__"

	const { vitrin, librariesAndToolsList, others } = useFilterSortTags(tags)

	const sortSelectValue = (sortValue ?? "default") as string

	return (
		<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<FilterSortTagSelect
				tagSelectValue={tagSelectValue}
				setTagState={setTagState}
				vitrin={vitrin}
				librariesAndToolsList={librariesAndToolsList}
				others={others}
			/>
			<FilterSortSortSelect
				sortSelectValue={sortSelectValue}
				setSortValue={setSortValue}
			/>
		</div>
	)
}
