import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { Bookmark, ExternalLink, FolderOpen, Quote, Search } from "lucide-react"

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
import { blogPostsQueryOptions } from "@/features/blog/api/get-blog-posts.api"
import { mapPostsToSearchItems } from "@/features/blog/helpers/map-posts-to-search-items"
import { useCommandPalette } from "@/features/search/components/command-palette-provider"
import { withOutboundUtm } from "@/lib/outbound-url"
import { clearedRouteSearch } from "@/lib/router/cleared-route-search"
import {
	SEARCH_ACTIONS,
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
			className="h-8 gap-2 rounded-full pr-2 pl-2.5 font-medium shadow-sm mr-2"
		>
			<Search className="text-muted-foreground size-4" />
			<kbd className="bg-background text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-0.5 rounded border px-1.5 font-mono text-xs font-medium">
				<span>⌘</span>
				<span>K</span>
			</kbd>
		</Button>
	)
}

export function CommandPaletteDialog() {
	const { open, setOpen } = useCommandPalette()
	const navigate = useNavigate()
	const { data: blogPosts = [] } = useQuery({
		...blogPostsQueryOptions(),
		enabled: open
	})
	const searchBlogPosts = mapPostsToSearchItems(blogPosts)

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
										window.open(
											withOutboundUtm(page.href),
											"_blank",
											"noopener,noreferrer"
										)
										return
									}

									void navigate({
										to: page.href,
										search: clearedRouteSearch,
										viewTransition: false
									})
								})
							}
						>
							<page.icon className="size-3.5 text-black" />
							{page.label}
							{page.external ? (
								<ExternalLink className="ml-auto size-3.5 shrink-0 text-black" />
							) : null}
						</CommandItem>
					))}
				</CommandGroup>
				<CommandGroup heading={SITE_CONTENT.commandGroups.blog}>
					{searchBlogPosts.map((post) => (
						<CommandItem
							key={post.slug}
							value={`${post.title} ${post.description} ${post.tags.join(" ")}`}
							onSelect={() =>
								runCommand(() => {
									void navigate({
										to: "/blog/$slug",
										params: { slug: post.slug },
										viewTransition: false
									})
								})
							}
						>
							<Quote className="size-3.5 text-black" />
							<div className="flex min-w-0 flex-1 flex-col">
								<span>{post.title}</span>
								<span className="truncate text-[11px] text-black">
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
									window.open(
										withOutboundUtm(project.href),
										"_blank",
										"noopener,noreferrer"
									)
								})
							}
						>
							<FolderOpen className="size-3.5 text-black" />
							<div className="flex min-w-0 flex-1 flex-col">
								<span>{project.title}</span>
								<span className="truncate text-[11px] text-black">
									{project.description}
								</span>
							</div>
							<ExternalLink className="ml-auto size-3.5 shrink-0 text-black" />
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
									void navigate({
										to: "/bookmarks",
										search: { category: category.categoryId },
										viewTransition: false
									})
								})
							}
						>
							<Bookmark className="size-3.5 text-black" />
							<div className="flex min-w-0 flex-1 flex-col">
								<span>{category.title}</span>
								<span className="truncate text-[11px] text-black">
									{category.description}
								</span>
							</div>
						</CommandItem>
					))}
				</CommandGroup>
				<CommandGroup heading={SITE_CONTENT.commandGroups.actions}>
					{SEARCH_ACTIONS.map((action) => {
						const ActionIcon = action.icon

						return (
							<CommandItem
								key={action.href}
								value={action.label}
								onSelect={() =>
									runCommand(() => {
										window.open(
											withOutboundUtm(action.href),
											"_blank",
											"noopener,noreferrer"
										)
									})
								}
							>
								<ActionIcon className={action.iconClassName} />
								{action.label}
							</CommandItem>
						)
					})}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	)
}
