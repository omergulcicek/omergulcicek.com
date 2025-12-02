"use client"

import { Container } from "@/shared"
import { ProjectCard, Section } from "@/widgets"

import { projectsData } from "@/data"

export default function Projects() {
	return (
		<Container>
			<Section title="Projeler">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
					{projectsData.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>
			</Section>
		</Container>
	)
}
