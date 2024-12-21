"use client"

import { useState } from "react"
import Link from "next/link"

import { formatDate } from "@/utils"
import { Trash } from "lucide-react"

import Container from "@/shared/container"
import { SelectFilter } from "@/widgets/select-filter"
import { MediumIcon } from "@/ui/medium"
import { Tag } from "@/ui/tag"
import { BlogPostTypes } from "@/types"

export function BlogList({ data }: { data: BlogPostTypes[] }) {
	if (!data) return

	const [value, setValue] = useState("")

	const categories = [...new Set(data.map((e) => e.category))]

	const subCategories = [...new Set(data.map((e) => e.subCategories))]
		.filter((category): category is string => category !== undefined)
		.sort()

	const resCategories = [...categories, ...subCategories]

	const listData = value
		? data.filter((e) => e.category === value || e.subCategories === value)
		: data

	return (
		<Container className="relative mt-20">
			<div className="absolute top-0 -right-60 flex flex-col items-center justify-end">
				<SelectFilter
					filters={resCategories}
					value={value}
					setValue={setValue}
				/>
				{value && (
					<button
						className="flex items-center gap-2 text-sm leading-9 text-tertiary-foreground hover:text-black cursor-pointer transition"
						onClick={() => setValue("")}
					>
						<Trash size={12} />
						<span>Temizle</span>
					</button>
				)}
			</div>

			<div className="flex flex-col gap-5">
				{listData.map(
					({ folder, date, title, category, subCategories, medium, path }) => (
						<div className="flex flex-col items-start gap-1" key={folder}>
							<div className="flex items-center gap-2 text-sm text-tertiary-foreground tabular-nums">
								<span className="italic">{formatDate(date, false)}</span> ·
								{(category || subCategories) && (
									<Tag text={subCategories || category} setValue={setValue} />
								)}
								{medium && (
									<>
										·
										<MediumIcon path={medium} />
									</>
								)}
							</div>
							<Link
								className="flex flex-col space-y-1 mb-4"
								href={`/blog/${path}`}
							>
								<p className="tracking-tight text-lg">{title}</p>
							</Link>
						</div>
					)
				)}
			</div>
		</Container>
	)
}
