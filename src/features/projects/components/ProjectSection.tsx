"use client"

import { LayoutGrid, List } from "lucide-react"

import { cn } from "@/lib/utils"
import {
	cardGridClass,
	pageSectionClass,
	sectionHeadingSpacingClass
} from "@/components/shared/prose.styles"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedProjectCard } from "@/features/projects/components/FeaturedProjectCard"
import { FeaturedProjectListItem } from "@/features/projects/components/FeaturedProjectListItem"
import { ProjectsSectionHeading } from "@/features/projects/components/ProjectsSectionHeading"
import {
	isProjectViewMode,
	useProjectViewMode
} from "@/features/projects/hooks/use-project-view-mode"
import type { Project } from "@/features/projects/types/project.types"
import { PROJECTS_UI } from "@/features/projects/constants/projects.constants"

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
			onValueChange={(value) => {
				if (isProjectViewMode(value)) {
					setViewMode(value)
				}
			}}
			className={cn("w-full", pageSectionClass)}
		>
			<div className={cn("flex items-center justify-between", sectionHeadingSpacingClass)}>
				<ProjectsSectionHeading className="mt-0 md:mt-0">
					{title}
				</ProjectsSectionHeading>
				<TabsList>
					<TabsTrigger value="list" aria-label={PROJECTS_UI.viewListLabel} title={PROJECTS_UI.viewListLabel}>
						<List className="size-4" />
					</TabsTrigger>
					<TabsTrigger value="grid" aria-label={PROJECTS_UI.viewGridLabel} title={PROJECTS_UI.viewGridLabel}>
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
