import Link from "next/link"

import { Link as LinkIcon } from "lucide-react"

// import { Button } from "@/ui"
import { Section } from "@/widgets"

import { PROJECTS } from "@/data"

export function Projects() {
	return (
		<Section title="Projeler" type="h2">
			<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
				{PROJECTS.slice(0, 3).map((project) => (
					<li key={project.title}>
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-start gap-4 border border-border text-sm font-medium hover:bg-neutral-50 transition-colors p-4 md:p-8 rounded-lg"
						>
							<div>
								<h3 className="text-base font-semibold">{project.title}</h3>
								<p className="text-sm text-muted-foreground">
									{project.description}
								</p>
							</div>

							<div className="flex items-center gap-2">
								<LinkIcon className="size-4" />
								<span className="underline underline-offset-4 text-blue-500">
									{project.link.replace("https://", "")}
								</span>
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
