import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

const CONTENT_DIR = path.join(process.cwd(), "src", "content")

function slugToRouteParam(slug: string) {
	return slug.replace(/^\//, "")
}

export function getBlogPrerenderRoutes(): string[] {
	const routes = ["/blog"]

	if (!fs.existsSync(CONTENT_DIR)) {
		return routes
	}

	for (const fileName of fs.readdirSync(CONTENT_DIR)) {
		if (!fileName.endsWith(".mdx")) {
			continue
		}

		const raw = fs.readFileSync(path.join(CONTENT_DIR, fileName), "utf8")
		const { data } = matter(raw)

		if (data.published !== true) {
			continue
		}

		if (typeof data.slug !== "string" || data.slug.length === 0) {
			continue
		}

		routes.push(`/blog/${slugToRouteParam(data.slug)}`)
	}

	return routes
}
