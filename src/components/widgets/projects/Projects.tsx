"use client"

import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { ArrowButton, ProjectCard, Section } from "@/widgets"

import { projectsData } from "@/data"

export function Projects() {
	return (
		<Section title="Projeler" type="h2">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
				{projectsData.slice(0, 2).map((project, index) => (
					<ProjectCard key={project.title} project={project} index={index} />
				))}
			</div>

			<div className="flex justify-center mt-10">
				<Link href="/projects">
					<ArrowButton text="Tüm projeleri göster" />
				</Link>
			</div>
		</Section>
	)
}
