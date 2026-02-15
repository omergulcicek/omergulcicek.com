"use client"

import { Container, Section } from "@/shared"
import { ProjectCard, projectsData } from "@/features/projects"

export default function Projects() {
	return (
		<Container>
			<Section title="Projeler">
				<p className="text-muted-foreground">
					Frontend alanında açık kaynak paketler, performans odaklı boilerplate
					yapılar ve topluluk projelerim.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-10">
					{projectsData.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>
			</Section>
		</Container>
	)
}
