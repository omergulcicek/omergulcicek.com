import { isRedirect } from "@tanstack/react-router"
import { describe, expect, it } from "vitest"

import { Route as AboutRoute } from "@/routes/about"
import { Route as AcademyIndexRoute } from "@/routes/academy/index"
import { Route as AcademySplatRoute } from "@/routes/academy/$"
import { Route as BookmarksRoute } from "@/routes/bookmarks"
import { Route as ExperiencesRoute } from "@/routes/experiences"
import { Route as IndexRoute } from "@/routes/index"
import { Route as JourneyRoute } from "@/routes/journey"
import { Route as NotFoundRoute } from "@/routes/$"
import { Route as ProjectsRoute } from "@/routes/projects"
import { Route as ServicesRoute } from "@/routes/services"
import { Route as SetupRoute } from "@/routes/setup"
import { Route as StackRoute } from "@/routes/stack"
import { Route as WorkspaceRoute } from "@/routes/workspace"
import { Route as BlogIndexRoute } from "@/routes/blog/index"
import { Route as BlogSlugRoute } from "@/routes/blog/$slug"
import { Route as NotesIndexRoute } from "@/routes/notlar/index"
import { Route as NotesSlugRoute } from "@/routes/notlar/$slug"
import { Route as MdxSandboxRoute } from "@/routes/dev/mdx-sandbox"

const ROUTES = [
	AboutRoute,
	AcademyIndexRoute,
	AcademySplatRoute,
	BookmarksRoute,
	ExperiencesRoute,
	IndexRoute,
	JourneyRoute,
	NotFoundRoute,
	ProjectsRoute,
	ServicesRoute,
	SetupRoute,
	StackRoute,
	WorkspaceRoute,
	BlogIndexRoute,
	BlogSlugRoute,
	NotesIndexRoute,
	NotesSlugRoute,
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

describe("legacy routes", () => {
	it("redirects /services to the work-together section on /about", () => {
		let thrown: unknown

		try {
			ServicesRoute.options.beforeLoad?.({} as never)
		} catch (error) {
			thrown = error
		}

		expect(isRedirect(thrown)).toBe(true)
		expect(thrown).toMatchObject({
			options: { to: "/about", hash: "birlikte-calisalim", statusCode: 301 }
		})
	})

	it.each([
		["/academy", AcademyIndexRoute],
		["/academy/*", AcademySplatRoute]
	])("redirects %s to ViraStack Academy", (_path, route) => {
		let thrown: unknown

		try {
			route.options.beforeLoad?.({} as never)
		} catch (error) {
			thrown = error
		}

		expect(isRedirect(thrown)).toBe(true)
		expect(thrown).toMatchObject({
			options: { href: "https://virastack.com/academy", statusCode: 301 }
		})
	})

	it.each([
		["personal", "/notlar"],
		["technical", "/blog"]
	] as const)("redirects /blog?category=%s to %s", (category, to) => {
		let thrown: unknown

		try {
			BlogIndexRoute.options.beforeLoad?.({ search: { category } } as never)
		} catch (error) {
			thrown = error
		}

		expect(isRedirect(thrown)).toBe(true)
		expect(thrown).toMatchObject({ options: { to, statusCode: 301 } })
	})
})
