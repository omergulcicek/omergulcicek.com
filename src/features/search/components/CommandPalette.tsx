import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { Bookmark, ExternalLink, FolderOpen, Quote, Search } from "lucide-react"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { withOutboundUtm } from "@/lib/outbound-url"
import { clearedRouteSearch } from "@/lib/router/cleared-route-search"

import { Button } from "@/components/ui/button"
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/components/ui/command"
import { blogPostsQueryOptions } from "@/features/blog/api/get-blog-posts.api"
import { BLOG_SECTION_LIST } from "@/features/blog/constants/blog.constants"
import { mapPostsToSearchItems } from "@/features/blog/helpers/map-posts-to-search-items"
import type { BlogCategory } from "@/features/blog/types/blog.types"
import { useCommandPalette } from "@/features/search/components/command-palette-provider"
import {
	SEARCH_ACTIONS,
	SEARCH_BOOKMARK_CATEGORIES,
	SEARCH_PAGES,
	SEARCH_PROJECTS
} from "@/features/search/constants/search.constants"

/** Header search button: icon on mobile, label and ⌘K hint from `sm` up. */
export function CommandPaletteTrigger() {
	const { setOpen } = useCommandPalette()

	return (
		<Button
			type="button"
			variant="outline"
			size="sm"
			onClick={() => setOpen(true)}
			aria-label={SITE_CONTENT.searchTriggerAria}
			className="text-muted-foreground hover:text-foreground h-8 gap-1.5 rounded-lg border-border/70 px-2.5 text-sm font-normal shadow-none"
		>
			<Search className="size-4 shrink-0" aria-hidden />
			<span className="hidden sm:inline">{SITE_CONTENT.searchTriggerLabel}</span>
			<kbd className="bg-muted text-muted-foreground pointer-events-none hidden h-5 items-center gap-0.5 rounded border px-1 font-mono text-[11px] font-medium leading-none sm:inline-flex">
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
	const searchSections = BLOG_SECTION_LIST.map((section) => ({
		section,
		posts: mapPostsToSearchItems(blogPosts, section.category)
	}))
	const openPost = (category: BlogCategory, slug: string) => {
		if (category === "personal") {
			void navigate({
				to: "/notlar/$slug",
				params: { slug },
				viewTransition: false
			})
			return
		}

		void navigate({
			to: "/blog/$slug",
			params: { slug },
			viewTransition: false
		})
	}

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
							<page.icon className="size-3.5 text-muted-foreground" />
							{page.label}
							{page.external ? (
								<ExternalLink className="ml-auto size-3.5 shrink-0 text-muted-foreground" />
							) : null}
						</CommandItem>
					))}
				</CommandGroup>
				{searchSections.map(({ section, posts }) => (
					<CommandGroup key={section.category} heading={section.title}>
						{posts.map((post) => (
							<CommandItem
								key={post.slug}
								value={`${post.title} ${post.description} ${post.tags.join(" ")}`}
								onSelect={() =>
									runCommand(() => openPost(section.category, post.slug))
								}
							>
								<Quote className="size-3.5 text-muted-foreground" />
								<div className="flex min-w-0 flex-1 flex-col">
									<span>{post.title}</span>
									<span className="truncate text-[11px] text-muted-foreground">
										{post.description}
									</span>
								</div>
							</CommandItem>
						))}
					</CommandGroup>
				))}
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
							<FolderOpen className="size-3.5 text-muted-foreground" />
							<div className="flex min-w-0 flex-1 flex-col">
								<span>{project.title}</span>
								<span className="truncate text-[11px] text-muted-foreground">
									{project.description}
								</span>
							</div>
							<ExternalLink className="ml-auto size-3.5 shrink-0 text-muted-foreground" />
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
										search: {
											category: category.categoryId
										},
										viewTransition: false
									})
								})
							}
						>
							<Bookmark className="size-3.5 text-muted-foreground" />
							<div className="flex min-w-0 flex-1 flex-col">
								<span>{category.title}</span>
								<span className="truncate text-[11px] text-muted-foreground">
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
