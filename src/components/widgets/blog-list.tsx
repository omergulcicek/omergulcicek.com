"use client"

import { useState } from "react"
import Link from "next/link"

import { formatDate, resCategories } from "@/utils"

import { SelectFilterWidget } from "@/widgets/select-filter"
import BlurFade from "@/ui/blur-fade"
import { MediumIcon } from "@/ui/medium"
import { Tag } from "@/ui/tag"
import { BlogPostTypes } from "@/types"

export function BlogList({ data }: { data: BlogPostTypes[] }) {
	if (!data) return

	const [value, setValue] = useState("")

	const listData = value
		? data.filter((e) => e.category === value || e.keywords?.includes(value))
		: data

	return (
		<section className="relative mt-6 md:mt-20">
			<div className="md:absolute top-0 -right-60 flex flex-col items-center justify-end mb-10 md:mb-0">
				<SelectFilterWidget
					filters={resCategories(data)}
					value={value}
					setValue={setValue}
				/>
			</div>

			<div className="flex flex-col gap-5">
				{listData.map(
					(
						{ folder, date, title, category, keywords, medium, path },
						index
					) => (
						<BlurFade key={title} delay={0.25 + index * 0.05} duration={0.1}>
							<div className="flex flex-col items-start md:gap-1" key={folder}>
								<div className="flex items-center gap-2 text-xs md:text-sm text-neutral-500 tabular-nums">
									<span className="italic">{formatDate(date, false)}</span> ·
									{(category || keywords) && (
										<Tag text={keywords || [category]} setValue={setValue} />
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
