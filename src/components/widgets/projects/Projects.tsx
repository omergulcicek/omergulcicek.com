import Link from "next/link"

import { ChevronRight } from "lucide-react"

// import { Button } from "@/ui"
import { Section, TagsBadge } from "@/widgets"

import { PROJECTS } from "@/data"

export function Projects() {
	return (
		<Section title="Projeler" type="h2">
			<ul className="grid gap-x-6 md:gap-x-12 gap-y-4 md:grid-cols-2">
				{PROJECTS.map((project) => (
					<li key={project.title}>
						<Link
							className="-mx-4 flex flex-col items-start p-4 transition-colors hover:bg-gray-50 sm:rounded-xl"
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h3 className="text-base md:text-lg font-semibold">
								{project.title}
							</h3>

							<p className="my-3 text-base text-gray-700">
								{project.description}
							</p>

							<TagsBadge tags={project.tags} />

							<div
								aria-hidden="true"
								className="mt-3 text-sm text-blue-600 underline underline-offset-4 flex items-center gap-1"
							>
								<span>Detayları gör</span>
								<ChevronRight className="size-4" />
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
