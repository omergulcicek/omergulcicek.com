"use client"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/ui"
import { getValidatedSortOption } from "@/features/blog/helpers/blog-helpers"
import type { SortOptionType } from "@/features/blog/types/filter-sort.types"

const SORT_OPTIONS: { value: SortOptionType; label: string }[] = [
	{ value: "default", label: "Varsayılan (En Yeni)" },
	{ value: "date-asc", label: "En Eski" },
	{ value: "title-asc", label: "Başlık (A→Z)" },
	{ value: "title-desc", label: "Başlık (Z→A)" }
]

interface FilterSortSortSelectProps {
	sortSelectValue: string
	setSortValue: (value: SortOptionType | null) => void
}

export function FilterSortSortSelect({
	sortSelectValue,
	setSortValue
}: FilterSortSortSelectProps) {
	return (
		<div aria-label="Sort posts" className="flex items-center gap-2">
			<span className="text-sm text-muted-foreground min-w-16">Sırala</span>
			<Select
				value={sortSelectValue}
				onValueChange={(value) => {
					if (value === "default") {
						setSortValue(null)
					} else {
						setSortValue(getValidatedSortOption(value))
					}
				}}
			>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Sırala" />
				</SelectTrigger>
				<SelectContent>
					{SORT_OPTIONS.map((opt) => (
						<SelectItem key={opt.value} value={opt.value}>
							{opt.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
