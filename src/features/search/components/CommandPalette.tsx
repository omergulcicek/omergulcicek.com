import { useNavigate } from "@tanstack/react-router"
import { Bookmark, ExternalLink, FolderOpen, Mail, Quote, Search } from "lucide-react"

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
import { useCommandPalette } from "@/features/search/components/command-palette-provider"
import {
	SEARCH_ACTIONS,
	SEARCH_BLOG_POSTS,
	SEARCH_BOOKMARK_CATEGORIES,
	SEARCH_PAGES,
	SEARCH_PROJECTS
} from "@/features/search/constants/search.constants"

export function CommandPaletteTrigger() {
	const { setOpen } = useCommandPalette()

	return (
		<Button
			type="button"
			variant="outline"
			size="sm"
			onClick={() => setOpen(true)}
			className="h-8 gap-2 rounded-full pr-2 pl-2.5 font-medium shadow-sm"
			aria-label="Arama paletini aç"
		>
			<Search className="text-muted-foreground size-4" />
			<kbd className="bg-background text-muted-foreground pointer-events-none hidden h-5 items-center gap-0.5 rounded border px-1.5 font-mono text-xs font-medium sm:inline-flex">
				<span>⌘</span>
				<span>K</span>
			</kbd>
		</Button>
	)
}

export function CommandPaletteDialog() {
	const { open, setOpen } = useCommandPalette()
	const navigate = useNavigate()

	const runCommand = (command: () => void) => {
		setOpen(false)
		command()
	}

	return (
		<CommandDialog
			open={open}
			onOpenChange={setOpen}
			title="Arama paleti"
			description="Sayfa, yazı veya eylem ara"
		>
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
									if (page.external) {
										window.open(page.href, "_blank", "noopener,noreferrer")
										return
									}

									void navigate({ to: page.href })
								})
							}
						>
							<page.icon className="mr-2 size-4" />
							{page.label}
							{page.external ? (
								<ExternalLink className="ml-auto size-4 shrink-0" />
							) : null}
						</CommandItem>
					))}
				</CommandGroup>
				<CommandGroup heading={SITE_CONTENT.commandGroups.blog}>
					{SEARCH_BLOG_POSTS.map((post) => (
						<CommandItem
							key={post.slug}
							value={`${post.title} ${post.description} ${post.tags.join(" ")}`}
							onSelect={() =>
								runCommand(() => {
									void navigate({
										to: "/blog/$slug",
										params: { slug: post.slug }
									})
								})
							}
						>
							<Quote className="mr-2 size-4" />
							<div className="flex min-w-0 flex-1 flex-col">
								<span>{post.title}</span>
								<span className="text-muted-foreground truncate text-xs">
									{post.description}
								</span>
							</div>
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
	)
}
