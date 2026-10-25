import { useNavigate } from "@tanstack/react-router"
import { Bookmark, ExternalLink, FolderOpen, Quote } from "lucide-react"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { withOutboundUtm } from "@/lib/outbound-url"
import { clearedRouteSearch } from "@/lib/router/cleared-route-search"

import {
	SEARCH_ACTIONS,
	SEARCH_BOOKMARK_CATEGORIES,
	SEARCH_PAGES,
	SEARCH_PROJECTS
} from "@/components/shared/command-palette/command-palette.constants"
import { useCommandPalette } from "@/components/shared/command-palette/use-command-palette"
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/components/ui/command"
import {
	BLOG_SECTION_LIST,
	mapPostsToSearchItems,
	useBlogSearchPosts
} from "@/features/blog"
import type { BlogCategory } from "@/features/blog"

export function CommandPaletteDialog() {
	const { open, setOpen } = useCommandPalette()
	const navigate = useNavigate()
	const blogPosts = useBlogSearchPosts(open)
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
			title={SITE_CONTENT.commandPaletteTitle}
			description={SITE_CONTENT.commandPaletteDescription}
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
