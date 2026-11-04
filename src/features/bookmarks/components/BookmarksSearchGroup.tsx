import { useNavigate } from "@tanstack/react-router"
import { Bookmark } from "lucide-react"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { useCommandPalette } from "@/hooks/use-command-palette"

import { CommandPaletteResultText } from "@/components/shared/command-palette/CommandPaletteResultText"
import { CommandGroup, CommandItem } from "@/components/ui/command"
import { BOOKMARK_CATEGORIES } from "@/features/bookmarks/constants/bookmarks.constants"

export function BookmarksSearchGroup() {
	const { runCommand } = useCommandPalette()
	const navigate = useNavigate()

	return (
		<CommandGroup heading={SITE_CONTENT.commandGroups.bookmarks}>
			{BOOKMARK_CATEGORIES.map((category) => (
				<CommandItem
					key={category.id}
					value={`${category.title} ${category.description}`}
					onSelect={() =>
						runCommand(() => {
							void navigate({
								to: "/bookmarks",
								search: { category: category.id },
								viewTransition: false
							})
						})
					}
				>
					<Bookmark className="size-3.5 text-muted-foreground" />
					<CommandPaletteResultText
						title={category.title}
						description={category.description}
					/>
				</CommandItem>
			))}
		</CommandGroup>
	)
}
