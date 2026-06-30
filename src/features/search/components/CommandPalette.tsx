import { useEffect, useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import { Bookmark, ExternalLink, FolderOpen, Mail, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/components/ui/command"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import {
	SEARCH_ACTIONS,
	SEARCH_BOOKMARK_CATEGORIES,
	SEARCH_PAGES,
	SEARCH_PROJECTS
} from "@/features/search/constants/search.constants"

export function CommandPalette() {
	const [open, setOpen] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen((current) => !current)
			}
		}

		document.addEventListener("keydown", onKeyDown)
		return () => document.removeEventListener("keydown", onKeyDown)
	}, [])

	const runCommand = (command: () => void) => {
		setOpen(false)
		command()
	}

	return (
		<>
			<Button
				type="button"
				variant="outline"
				size="sm"
				onClick={() => setOpen(true)}
				className="h-8 gap-2 rounded-full px-2 font-medium shadow-sm"
				aria-label="Arama paletini aç"
			>
				<Search className="text-muted-foreground size-4" />
				<kbd className="bg-background text-muted-foreground pointer-events-none hidden h-5 items-center gap-0.5 rounded border px-1.5 font-mono text-xs font-medium sm:inline-flex">
					<span>⌘</span>
					<span>K</span>
				</kbd>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder={SITE_CONTENT.commandPalettePlaceholder} />
				<CommandList>
					<CommandEmpty>{SITE_CONTENT.commandPaletteEmpty}</CommandEmpty>
					<CommandGroup heading={SITE_CONTENT.commandGroups.pages}>
						{SEARCH_PAGES.map((page) => (
							<CommandItem
								key={page.href}
								value={`${page.label} ${page.href}`}
								onSelect={() =>
									runCommand(() => {
										void navigate({ to: page.href })
									})
								}
							>
								<page.icon className="mr-2 size-4" />
								{page.label}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading={SITE_CONTENT.commandGroups.projects}>
						{SEARCH_PROJECTS.map((project) => (
							<CommandItem
								key={project.id}
								value={`${project.title} ${project.description}`}
								onSelect={() =>
									runCommand(() => {
										window.open(project.href, "_blank", "noopener,noreferrer")
									})
								}
							>
								<FolderOpen className="mr-2 size-4" />
								<div className="flex min-w-0 flex-1 flex-col">
									<span>{project.title}</span>
									<span className="text-muted-foreground truncate text-xs">
										{project.description}
									</span>
								</div>
								<ExternalLink className="ml-2 size-4 shrink-0" />
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading={SITE_CONTENT.commandGroups.bookmarks}>
						{SEARCH_BOOKMARK_CATEGORIES.map((category) => (
							<CommandItem
								key={category.id}
								value={`${category.title} ${category.description}`}
								onSelect={() =>
									runCommand(() => {
										void navigate({ to: category.href })
									})
								}
							>
								<Bookmark className="mr-2 size-4" />
								<div className="flex min-w-0 flex-1 flex-col">
									<span>{category.title}</span>
									<span className="text-muted-foreground truncate text-xs">
										{category.description}
									</span>
								</div>
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading={SITE_CONTENT.commandGroups.actions}>
						{SEARCH_ACTIONS.map((action) => (
							<CommandItem
								key={action.href}
								value={action.label}
								onSelect={() =>
									runCommand(() => {
										window.open(action.href, "_blank", "noopener,noreferrer")
									})
								}
							>
								<Mail className="mr-2 size-4" />
								{action.label}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}
