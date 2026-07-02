import { describe, expect, it } from "vitest"

import { Route as AboutRoute } from "@/routes/about"
import { Route as BookmarksRoute } from "@/routes/bookmarks"
import { Route as ExperiencesRoute } from "@/routes/experiences"
import { Route as IndexRoute } from "@/routes/index"
import { Route as JourneyRoute } from "@/routes/journey"
import { Route as NotFoundRoute } from "@/routes/$"
import { Route as ProjectsRoute } from "@/routes/projects"
import { Route as ServicesRoute } from "@/routes/services"
import { Route as StackRoute } from "@/routes/stack"
import { Route as WorkspaceRoute } from "@/routes/workspace"
import { Route as BlogIndexRoute } from "@/routes/blog/index"
import { Route as BlogSlugRoute } from "@/routes/blog/$slug"
import { Route as MdxSandboxRoute } from "@/routes/dev/mdx-sandbox"

const ROUTES = [
	AboutRoute,
	BookmarksRoute,
	ExperiencesRoute,
	IndexRoute,
	JourneyRoute,
	NotFoundRoute,
	ProjectsRoute,
	ServicesRoute,
	StackRoute,
	WorkspaceRoute,
	BlogIndexRoute,
	BlogSlugRoute,
	MdxSandboxRoute
] as const

describe("route modules", () => {
	it("exports configured routes for all static pages", () => {
		for (const route of ROUTES) {
			expect(route).toBeDefined()
			expect(route.options).toBeDefined()
		}
	})
})
