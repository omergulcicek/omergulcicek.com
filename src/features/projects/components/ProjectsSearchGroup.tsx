import { ExternalLink, FolderOpen } from "lucide-react"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { useCommandPalette } from "@/hooks/use-command-palette"
import { withOutboundUtm } from "@/helpers/outbound-url"

import { CommandPaletteResultText } from "@/components/shared/command-palette/CommandPaletteResultText"
import { CommandGroup, CommandItem } from "@/components/ui/command"
import { PROJECTS } from "@/features/projects/constants/projects.constants"
import { getProjectDescriptionText } from "@/features/projects/helpers/project-description.helpers"

export function ProjectsSearchGroup() {
	const { runCommand } = useCommandPalette()

	return (
		<CommandGroup heading={SITE_CONTENT.commandGroups.projects}>
			{PROJECTS.map((project) => {
				const description = getProjectDescriptionText(project.description)

				return (
					<CommandItem
						key={project.id}
						value={`${project.title} ${description}`}
						onSelect={() =>
							runCommand(() => {
								window.open(
									withOutboundUtm(project.href),
									"_blank",
									"noopener,noreferrer"
								)
							})
						}
					>
						<FolderOpen className="size-3.5 text-muted-foreground" />
						<CommandPaletteResultText
							title={project.title}
							description={description}
						/>
						<ExternalLink className="ml-auto size-3.5 shrink-0 text-muted-foreground" />
					</CommandItem>
				)
			})}
		</CommandGroup>
	)
}
