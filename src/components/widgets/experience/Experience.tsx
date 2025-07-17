import Image from "next/image"

import { EXPERIENCE } from "@/constants/experience"

import { Badge, Button } from "@/ui"

export function Experience() {
	return (
		<section className="flex flex-col gap-10">
			<h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

			<div className="flex flex-col gap-2">
				{EXPERIENCE.slice(0, 2).map((experience) => (
					<div
						key={experience.company}
						className="flex gap-3 items-start not-first:border-t border-gray-200 border-dashed py-2"
					>
						<figure className="size-6 mt-1.5">
							<Image
								src={`/company/${experience.icon}.jpeg`}
								alt={experience.company}
								width={24}
								height={24}
								quality={100}
							/>
						</figure>
						<div className="flex flex-col w-full">
							<div className="flex items-center justify-between">
								<h3 className="font-medium text-base">{experience.company}</h3>
								<div className="flex flex-col items-end gap-0.5">
									<span className="text-xs text-muted-foreground tabular-nums">
										{experience.date}
									</span>
									<span className="text-xs text-muted-foreground tabular-nums">
										{experience.workType}
									</span>
								</div>
							</div>
							<p className="text-sm text-muted-foreground">{experience.role}</p>
							<p className="text-sm text-muted-foreground hidden">
								{experience.description}
							</p>

							<ul className="flex flex-wrap gap-2 mt-2">
								{experience.technologies.map((technology) => (
									<Badge key={technology} variant="secondary">
										{technology}
									</Badge>
								))}
							</ul>

							<ol className="flex flex-col gap-1 mt-2 list-disc list-inside text-sm text-muted-foreground">
								{experience.responsibilities?.map((responsibility) => (
									<li
										key={responsibility}
										className="text-sm text-muted-foreground"
									>
										{responsibility}
									</li>
								))}
							</ol>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center">
				<Button variant="outline">Show all work experiences</Button>
			</div>
		</section>
	)
}
