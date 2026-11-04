import { useNavigate } from "@tanstack/react-router"
import { Quote } from "lucide-react"

import { useCommandPalette } from "@/hooks/use-command-palette"

import { CommandPaletteResultText } from "@/components/shared/command-palette/CommandPaletteResultText"
import { CommandGroup, CommandItem } from "@/components/ui/command"
import { BLOG_SECTION_LIST } from "@/features/blog/constants/blog.constants"
import { mapPostsToSearchItems } from "@/features/blog/helpers/map-posts-to-search-items"
import { useBlogSearchPosts } from "@/features/blog/hooks/use-blog-search-posts"

/** One command palette group per blog section; posts load only while the palette is open. */
export function BlogSearchGroups() {
	const { open, runCommand } = useCommandPalette()
	const navigate = useNavigate()
	const blogPosts = useBlogSearchPosts(open)

	return BLOG_SECTION_LIST.map((section) => (
		<CommandGroup key={section.category} heading={section.title}>
			{mapPostsToSearchItems(blogPosts, section.category).map((post) => (
				<CommandItem
					key={post.slug}
					value={`${post.title} ${post.description} ${post.tags.join(" ")}`}
					onSelect={() =>
						runCommand(() => {
							void navigate({
								to:
									section.category === "personal"
										? "/notlar/$slug"
										: "/blog/$slug",
								params: { slug: post.slug },
								viewTransition: false
							})
						})
					}
				>
					<Quote className="size-3.5 text-muted-foreground" />
					<CommandPaletteResultText
						title={post.title}
						description={post.description}
					/>
				</CommandItem>
			))}
		</CommandGroup>
	))
}
