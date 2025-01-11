"use client"

import { useState } from "react"
import Link from "next/link"

import { formatDate, resCategories } from "@/utils"

import { SelectFilterWidget } from "@/widgets/select-filter"
import BlurFade from "@/ui/blur-fade"
import { Tag } from "@/ui/tag"
import { BlogPostTypes } from "@/types"

export function BlogList({
	data,
	articleCounts
}: {
	data: BlogPostTypes[]
	articleCounts: { personal: number; technical: number }
}) {
	if (!data) return

	const [value, setValue] = useState("Teknik")

	const listData = value
		? data.filter((e) => e.category === value || e.keywords?.includes(value))
		: data

	return (
		<section className="relative mt-6 md:mt-10">
			<SelectFilterWidget
				filters={resCategories(data)}
				value={value}
				setValue={setValue}
				articleCounts={articleCounts}
			/>

			<div className="flex flex-col gap-5">
				{listData.map(
					(
						{ folder, date, title, category, keywords, medium, path },
						index
					) => (
						<BlurFade key={title} delay={0.25 + index * 0.05} duration={0.1}>
							<div
								className="flex flex-col items-start gap-2 md:gap-1"
								key={folder}
							>
								<div className="flex flex-col md:flex-row items-start md:items-center gap-3 text-xs md:text-sm text-neutral-500 tabular-nums md:h-5">
									<span className="italic">{formatDate(date, false)}</span>
									<span className="hidden md:inline-block">·</span>
									{(category || keywords) && (
										<Tag text={keywords || [category]} setValue={setValue} />
									)}
								</div>
								<Link
									className="flex flex-col space-y-1 mb-4"
									href={`/blog${path}`}
								>
									<p className="tracking-tight text-base md:text-lg">{title}</p>
								</Link>
							</div>
						</BlurFade>
					)
				)}
			</div>
		</section>
	)
}
