"use client"

import { useMemo } from "react"

import { useQueryState } from "nuqs"

import type {
	FilterSortPropsType,
	SortOptionType
} from "@/types/filter-sort-type"
import { tagsIconMap, techTags } from "@/constants"

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/ui"
import { IconBadge } from "@/widgets"

const SORT_OPTIONS: { value: SortOptionType; label: string }[] = [
	{ value: "default", label: "Varsayılan (En Yeni)" },
	{ value: "date-asc", label: "En Eski" },
	{ value: "title-asc", label: "Başlık (A→Z)" },
	{ value: "title-desc", label: "Başlık (Z→A)" }
]

export function FilterSort({ tags, currentTag }: FilterSortPropsType) {
	const [sortValue, setSortValue] = useQueryState("sort", {
		defaultValue: "default"
	})
	const [tagState, setTagState] = useQueryState("tag")

	const tagValue = tagState ?? currentTag ?? undefined
	const tagSelectValue = tagValue ?? "__all__"

	const { tech, others } = useMemo(() => {
		const unique = Array.from(new Set(tags)).filter(Boolean)

		const techSet = new Set(techTags)
		const techList = unique.filter((t) => techSet.has(t))
		const othersList = unique.filter((t) => !techSet.has(t))

		techList.sort((a, b) => techTags.indexOf(a) - techTags.indexOf(b))
		othersList.sort((a, b) => a.localeCompare(b))

		return { tech: techList, others: othersList }
	}, [tags])

	const sortSelectValue = (sortValue ?? "default") as string

	return (
		<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<div aria-label="Filter by tag" className="flex items-center gap-2">
				<span className="text-sm text-muted-foreground min-w-16">Kategori</span>
				<Select
					value={tagSelectValue}
					onValueChange={(value) => {
						if (value === "__all__") setTagState(null)
						else setTagState(value)
					}}
				>
					<SelectTrigger className="w-[200px]">
						<SelectValue placeholder="Tümü" />
					</SelectTrigger>
					<SelectContent className="max-h-[400px] overflow-y-auto">
						<SelectGroup>
							<SelectLabel>Genel</SelectLabel>
							<SelectItem value="__all__">Tümü</SelectItem>
						</SelectGroup>
						{tech.length > 0 && (
							<SelectGroup>
								<SelectLabel>Teknolojiler</SelectLabel>
								{tech.map((tag) => (
									<SelectItem key={tag} value={tag}>
										<IconBadge
											icon={
												tagsIconMap[tag]
													? (() => {
															const Icon = tagsIconMap[tag]
															return <Icon width={16} height={16} />
														})()
													: null
											}
											label={tag}
											simple
										/>
									</SelectItem>
								))}
							</SelectGroup>
						)}
						{others.length > 0 && (
							<SelectGroup>
								<SelectLabel>Kişisel</SelectLabel>
								{others.map((tag) => (
									<SelectItem key={tag} value={tag}>
										<IconBadge
											icon={
												tagsIconMap[tag]
													? (() => {
															const Icon = tagsIconMap[tag]
															return <Icon />
														})()
													: null
											}
											label={tag}
											simple
										/>
									</SelectItem>
								))}
							</SelectGroup>
						)}
					</SelectContent>
				</Select>
			</div>

			<div aria-label="Sort posts" className="flex items-center gap-2">
				<span className="text-sm text-muted-foreground min-w-16">Sırala</span>
				<Select
					value={sortSelectValue}
					onValueChange={(value) => {
						if (value === "default") {
							setSortValue(null)
						} else {
							setSortValue(value as SortOptionType)
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
		</div>
	)
}
