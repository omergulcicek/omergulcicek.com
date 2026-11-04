import { BlogSearchGroups } from "@/features/blog/components/BlogSearchGroups"
import { BookmarksSearchGroup } from "@/features/bookmarks/components/BookmarksSearchGroup"
import { ProjectsSearchGroup } from "@/features/projects/components/ProjectsSearchGroup"

/**
 * Composes the feature groups of the command palette. Features never import each
 * other, so the route layer wires them into the shared palette; `__root.tsx` loads
 * this module lazily to keep the search data out of the entry bundle.
 */
export function CommandPaletteGroups() {
	return (
		<>
			<BlogSearchGroups />
			<ProjectsSearchGroup />
			<BookmarksSearchGroup />
		</>
	)
}
