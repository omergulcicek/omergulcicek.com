import Link from "next/link"

import { ExternalLink } from "lucide-react"

import { Button } from "@/ui"

import { PROJECTS } from "@/data/projects"

export function Projects() {
	return (
		<section className="flex flex-col gap-10">
			<h2 className="text-2xl font-medium">Projects</h2>

			<ul className="flex flex-col gap-6">
				{PROJECTS.slice(0, 3).map((project, index) => (
					<li
						key={project.title}
						className="flex items-center justify-start gap-4"
					>
						<span className="text-muted-foreground tabular-nums">
							0{index + 1}
						</span>
						<div>
							<h3 className="text-base font-medium">{project.title}</h3>
							<p className="text-sm text-muted-foreground">
								{project.description}
							</p>
						</div>

						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="active:scale-90 transition-transform ml-auto"
						>
							<ExternalLink className="size-4" />
						</Link>
					</li>
				))}
			</ul>

			<div className="flex justify-center">
				<Link href="/projects">
					<Button variant="outline">Show all projects</Button>
				</Link>
			</div>
		</section>
	)
}
