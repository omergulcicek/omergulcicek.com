import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

// import { Button } from "@/ui"
import { Section } from "@/widgets"

import { PROJECTS } from "@/data"

export function Projects() {
	return (
		<Section title="Projeler" type="h2">
			<ul className="flex flex-col items-start -mx-6">
				{PROJECTS.map((project) => (
					<li key={project.title} className="w-full">
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-between leading-6 rounded hover:bg-neutral-50 transition px-6 py-3 w-full group"
						>
							<div className="flex items-center gap-4">
								<figure
									className={cn(
										"rounded-lg p-1 size-10 inline-flex items-center justify-center shadow",
										project.color
									)}
								>
									<project.icon className="size-5" />
								</figure>
								<div className="flex flex-col text-base">
									<strong className="font-medium">{project.title}</strong>
									<p className="text-muted-foreground">{project.description}</p>
								</div>
							</div>

							<ArrowUpRight className="absolute right-0 size-5 text-muted-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-200" />
						</Link>
					</li>
				))}
			</ul>

			{/* <div className="flex justify-center">
				<Link href="/projects">
					<Button variant="outline">Tüm projeleri göster</Button>
				</Link>
			</div> */}
		</Section>
	)
}
