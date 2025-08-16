import Image from "next/image"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/ui"
import { Section, TagsBadge } from "@/widgets"

import { EXPERIENCE } from "@/data"

interface ExperienceProps {
	showAll?: boolean
	title?: string
}

export function Experience({
	showAll = false,
	title = "Deneyim"
}: ExperienceProps) {
	const experiences = showAll ? EXPERIENCE : EXPERIENCE.slice(0, 3)
	const defaultExperience = showAll ? "" : experiences[0].company

	return (
		<Section title={title} type="h2">
			<div className="flex flex-col gap-2">
				<Accordion
					type="single"
					collapsible
					className="w-full"
					defaultValue={defaultExperience}
				>
					{experiences.map((experience) => (
						<AccordionItem value={experience.company} key={experience.company}>
							<AccordionTrigger>
								<div className="flex items-center justify-between w-full">
									<div className="flex items-center gap-3">
										<figure className="size-6">
											<Image
												src={`/company/${experience.icon}.jpeg`}
												alt={experience.company}
												width={24}
												height={24}
												quality={100}
											/>
										</figure>
										<div className="flex flex-col">
											<strong className="text-sm font-medium">
												{experience.role}
											</strong>
											<h3 className="text-sm font-normal">
												{experience.company}
											</h3>
										</div>
									</div>
									<div className="flex flex-col items-end gap-0.5">
										<span className="text-xs text-muted-foreground tabular-nums">
											{experience.period}
										</span>
										<span className="text-xs text-muted-foreground tabular-nums">
											{experience.duration}
										</span>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 pl-10">
								<TagsBadge tags={experience.technologies} />

								<div className="flex flex-col gap-1 text-sm leading-relaxed text-muted-foreground">
									{experience.responsibilities}
								</div>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</Section>
	)
}
