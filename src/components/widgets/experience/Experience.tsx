"use client"

import Image from "next/image"
import Link from "next/link"

import { ArrowButton, JobSeekingBadge, Section, TagsBadge } from "@/widgets"

import { experienceData } from "@/data"

interface ExperienceProps {
	showAll?: boolean
	title?: string
	showButton?: boolean
}

export function Experience({
	showAll = false,
	showButton = false,
	title = "Deneyim"
}: ExperienceProps) {
	const experiences = showAll ? experienceData : experienceData.slice(0, 3)
	const showTags = !showButton && experiences.length > 0

	return (
		<Section title={title} type="h2" titleAddon={<JobSeekingBadge />}>
			<div className="flex flex-col gap-2">
				<p className="text-sm text-muted-foreground mb-10">
					8 yılı aşkın tecrübemle, React ekosisteminde AI destekli ve yüksek
					performanslı mimariler kurgulayarak sürdürülebilir kullanıcı
					deneyimleri inşa ediyorum.
				</p>
				<div className="flex flex-col gap-8 mt-4">
					{experiences.map((experience) => (
						<div key={experience.company} className="flex gap-6 items-start">
							<span className="text-xs text-muted-foreground tabular-nums shrink-0 pt-0.5 min-w-28 md:min-w-32">
								{experience.period}
							</span>
							<div className="flex flex-col gap-2 min-w-0">
								<div className="flex items-center gap-2 flex-wrap">
									<span className="font-medium text-foreground">
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
									<span className="font-medium text-foreground">
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
				<div className="flex justify-center mt-6">
					<Link href="/experiences">
						<ArrowButton text="Tüm deneyimleri göster" />
					</Link>
				</div>
			)}
		</Section>
	)
}
