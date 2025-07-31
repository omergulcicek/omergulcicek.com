import Link from "next/link"

import { ExternalLink } from "lucide-react"

import { Badge } from "@/ui"
// import { Button } from "@/ui"
import { Section } from "@/widgets"

import { PROJECTS } from "@/data"

export function Projects() {
	return (
		<Section title="Projeler" type="h2">
			<ul className="grid gap-x-6 md:gap-x-12 gap-y-4 md:grid-cols-2">
				{PROJECTS.slice(0, 3).map((project) => (
					<li key={project.title}>
						<Link
							className="-mx-4 flex flex-col items-start p-4 transition-colors hover:bg-gray-50 sm:rounded-xl"
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2 className="text-base md:text-lg font-semibold">
								{project.title}
							</h2>
							<p className="mt-3 text-base text-gray-700">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-1.5 mt-3">
								{project.tags.map((tag) => (
									<Badge variant="outline" key={tag}>
										{tag}
									</Badge>
								))}
							</div>
							<div
								aria-hidden="true"
								className="mt-3 text-sm md:text-base font-semibold flex items-center gap-2"
							>
								<span>Detayları gör</span>
								<ExternalLink className="size-4" />
							</div>
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
