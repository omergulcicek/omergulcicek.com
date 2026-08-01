"use client"

import { LayoutGrid, List } from "lucide-react"

import { cardGridClass } from "@/components/shared/prose.styles"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedProjectCard, FeaturedProjectListItem } from "@/features/projects/components/featured-project-card"
import { ProjectsSectionHeading } from "@/features/projects/components/project-cards"
import { useProjectViewMode, type ProjectViewMode } from "@/features/projects/hooks/use-project-view-mode"
import type { Project } from "@/features/projects/types/project.types"

type ProjectSectionProps = {
	title: string
	projects: Project[]
	children?: React.ReactNode
}

export function ProjectSection({ title, projects, children }: ProjectSectionProps) {
	const { viewMode, setViewMode } = useProjectViewMode()

	return (
		<Tabs 
			value={viewMode} 
			onValueChange={(v) => setViewMode(v as ProjectViewMode)}
			className="w-full flex flex-col gap-4 md:gap-6"
		>
			<div className="flex items-center justify-between mt-8 md:mt-12">
				<ProjectsSectionHeading className="mt-0 md:mt-0">
					{title}
				</ProjectsSectionHeading>
				<TabsList>
					<TabsTrigger value="list" aria-label="List görünümü" title="List görünümü">
						<List className="size-4" />
					</TabsTrigger>
					<TabsTrigger value="grid" aria-label="Grid görünümü" title="Grid görünümü">
						<LayoutGrid className="size-4" />
					</TabsTrigger>
				</TabsList>
			</div>
			{children}
			<TabsContent value="grid" className="mt-0">
				<div className={cardGridClass}>
					{projects.map((project) => (
						<FeaturedProjectCard key={project.id} project={project} />
					))}
				</div>
			</TabsContent>
			<TabsContent value="list" className="mt-0">
				<div className="flex flex-col gap-1 md:gap-2">
					{projects.map((project) => (
						<FeaturedProjectListItem key={project.id} project={project} />
					))}
				</div>
			</TabsContent>
		</Tabs>
	)
}
