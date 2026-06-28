"use client"

import { tagsIconMap } from "@/constants"

import { IconBadge } from "@/shared"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/ui"

interface FilterSortTagSelectProps {
	tagSelectValue: string
	setTagState: (value: string | null) => void
	vitrin: string[]
	librariesAndToolsList: string[]
	others: string[]
}

function TagItem({ tag }: { tag: string }) {
	const Icon = tagsIconMap[tag]

	return (
		<SelectItem value={tag}>
			<IconBadge
				icon={Icon ? <Icon width={16} height={16} /> : null}
				label={tag}
				simple
			/>
		</SelectItem>
	)
}

export function FilterSortTagSelect({
	tagSelectValue,
	setTagState,
	vitrin,
	librariesAndToolsList,
	others
}: FilterSortTagSelectProps) {
	return (
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
					{vitrin.length > 0 && (
						<SelectGroup>
							<SelectLabel>Vitrin</SelectLabel>
							{vitrin.map((tag) => (
								<TagItem key={tag} tag={tag} />
							))}
						</SelectGroup>
					)}
					{librariesAndToolsList.length > 0 && (
						<SelectGroup>
							<SelectLabel>Kütüphane & Araçlar</SelectLabel>
							{librariesAndToolsList.map((tag) => (
								<TagItem key={tag} tag={tag} />
							))}
						</SelectGroup>
					)}
					{others.length > 0 && (
						<SelectGroup>
							<SelectLabel>Kişisel</SelectLabel>
							{others.map((tag) => (
								<TagItem key={tag} tag={tag} />
							))}
						</SelectGroup>
					)}
				</SelectContent>
			</Select>
		</div>
	)
}
