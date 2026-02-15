"use client"

import Image from "next/image"
import Link from "next/link"

import { slugify } from "@/helpers/slugify"

import { Heading } from "@/components/ui/typography"
import { ArrowButton, JobSeekingBadge, Section, TagsBadge } from "@/shared"
import { experienceData } from "@/features/experience/data/experience.data"

interface ExperienceProps {
	showAll?: boolean
	title?: string
	showButton?: boolean
}

export function Experience({
	showAll = false,
	showButton = false
}: ExperienceProps) {
	const experiences = showAll ? experienceData : experienceData.slice(0, 3)
	const showTitle = showButton && experiences.length > 0
	const showTags = !showButton && experiences.length > 0

	return (
		<div className="flex flex-col gap-4">
			{showTitle && (
				<Heading id={slugify("Deneyimler")} as={"h2"}>
					Deneyimler
				</Heading>
			)}

			<div className="flex flex-col gap-2">
				<p className="text-muted-foreground">
					8 yılı aşkın tecrübemle, React ekosisteminde AI destekli ve yüksek
					performanslı mimariler kurgulayarak sürdürülebilir kullanıcı
					deneyimleri inşa ediyorum.
				</p>
				<div className="flex flex-col gap-6 md:gap-8 mt-10">
					{experiences.map((experience) => (
						<div
							key={experience.company}
							className="flex flex-col sm:flex-row sm:gap-6 gap-2 items-stretch sm:items-start"
						>
							<span className="text-sm text-muted-foreground tabular-nums shrink-0 pt-0.5 sm:min-w-24 order-first sm:order-0">
								{experience.period}
							</span>
							<div className="flex flex-col gap-2 min-w-0 flex-1">
								<div className="flex items-center gap-2 flex-wrap my-1 md:my-0">
									<span className="font-medium text-foreground text-base">
										{experience.role}
									</span>
									<span className="text-muted-foreground text-sm">·</span>
									<figure className="size-6 border rounded overflow-hidden shrink-0">
										<Image
											src={`/company/${experience.icon}.jpeg`}
											alt={experience.company}
											width={24}
											height={24}
											loading="lazy"
											quality={100}
										/>
									</figure>
									<span className="font-medium text-foreground text-base">
										{experience.company}
									</span>
								</div>

								{showTags && <TagsBadge tags={experience.technologies} />}

								<p className="text-sm text-muted-foreground leading-relaxed">
									{experience.responsibilities}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{showButton && (
				<div className="flex justify-center mt-4 md:mt-6">
					<Link href="/experiences">
						<ArrowButton text="Tüm deneyimleri göster" />
					</Link>
				</div>
			)}
		</div>
	)
}
