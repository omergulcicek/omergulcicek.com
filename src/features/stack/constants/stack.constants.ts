export type StackItem = {
	id: string
	label: string
	svglSlug: string
	order: number
	href: string
}

export type StackCategory = {
	id: string
	label: string
	itemIds: readonly string[]
}

export const STACK_ITEMS: StackItem[] = [
	{
		id: "typescript",
		label: "TypeScript",
		svglSlug: "typescript",
		order: 100,
		href: "https://www.typescriptlang.org/"
	},
	{
		id: "javascript",
		label: "JavaScript",
		svglSlug: "javascript",
		order: 101,
		href: "https://developer.mozilla.org/docs/Web/JavaScript"
	},
	{
		id: "html",
		label: "HTML",
		svglSlug: "html5",
		order: 102,
		href: "https://developer.mozilla.org/docs/Web/HTML"
	},
	{
		id: "css",
		label: "CSS",
		svglSlug: "css",
		order: 103,
		href: "https://developer.mozilla.org/docs/Web/CSS"
	},
	{
		id: "git",
		label: "Git",
		svglSlug: "git",
		order: 104,
		href: "https://git-scm.com/"
	},
	{
		id: "react",
		label: "React",
		svglSlug: "react",
		order: 200,
		href: "https://react.dev/"
	},
	{
		id: "nextjs",
		label: "Next.js",
		svglSlug: "nextjs",
		order: 201,
		href: "https://nextjs.org/"
	},
	{
		id: "vite",
		label: "Vite",
		svglSlug: "vite",
		order: 202,
		href: "https://vite.dev/"
	},
	{
		id: "tanstack",
		label: "TanStack",
		svglSlug: "tanstack",
		order: 203,
		href: "https://tanstack.com/"
	},
	{
		id: "tailwind",
		label: "Tailwind CSS",
		svglSlug: "tailwind-css",
		order: 204,
		href: "https://tailwindcss.com/"
	},
	{
		id: "radix",
		label: "Radix UI",
		svglSlug: "radix-ui",
		order: 205,
		href: "https://www.radix-ui.com/"
	},
	{
		id: "shadcn",
		label: "shadcn/ui",
		svglSlug: "shadcnui",
		order: 206,
		href: "https://ui.shadcn.com/"
	},
	{
		id: "motion",
		label: "Motion",
		svglSlug: "motion",
		order: 207,
		href: "https://motion.dev/"
	},
	{
		id: "react-hook-form",
		label: "React Hook Form",
		svglSlug: "react-hook-form",
		order: 208,
		href: "https://react-hook-form.com/"
	},
	{
		id: "zustand",
		label: "Zustand",
		svglSlug: "zustand",
		order: 209,
		href: "https://zustand.docs.pmnd.rs/"
	},
	{
		id: "redux",
		label: "Redux",
		svglSlug: "redux",
		order: 210,
		href: "https://redux.js.org/"
	},
	{
		id: "zod",
		label: "Zod",
		svglSlug: "zod",
		order: 211,
		href: "https://zod.dev/"
	},
	{
		id: "storybook",
		label: "Storybook",
		svglSlug: "storybook",
		order: 212,
		href: "https://storybook.js.org/"
	},
	{
		id: "nodejs",
		label: "Node.js",
		svglSlug: "nodejs",
		order: 300,
		href: "https://nodejs.org/"
	},
	{
		id: "postgresql",
		label: "PostgreSQL",
		svglSlug: "postgresql",
		order: 301,
		href: "https://www.postgresql.org/"
	},
	{
		id: "supabase",
		label: "Supabase",
		svglSlug: "supabase",
		order: 302,
		href: "https://supabase.com/"
	},
	{
		id: "graphql",
		label: "GraphQL",
		svglSlug: "graphql",
		order: 303,
		href: "https://graphql.org/"
	},
	{
		id: "figma",
		label: "Figma",
		svglSlug: "figma",
		order: 400,
		href: "https://www.figma.com/"
	},
	{
		id: "cursor",
		label: "Cursor",
		svglSlug: "cursor",
		order: 500,
		href: "https://cursor.com/"
	},
	{
		id: "gemini",
		label: "Gemini",
		svglSlug: "gemini",
		order: 501,
		href: "https://gemini.google.com/"
	},
	{
		id: "virastack",
		label: "ViraStack",
		svglSlug: "virastack",
		order: 502,
		href: "https://virastack.com/"
	}
]

export const STACK_CATEGORIES: StackCategory[] = [
	{
		id: "languages",
		label: "Languages",
		itemIds: ["typescript", "javascript", "git"]
	},
	{
		id: "frontend",
		label: "Frontend",
		itemIds: [
			"react",
			"nextjs",
			"vite",
			"tanstack",
			"tailwind",
			"radix",
			"shadcn",
			"motion",
			"react-hook-form",
			"zustand",
			"redux",
			"zod",
			"storybook"
		]
	},
	{
		id: "backend",
		label: "Backend",
		itemIds: ["nodejs", "postgresql", "supabase", "graphql"]
	},
	{
		id: "design",
		label: "Design",
		itemIds: ["figma"]
	},
	{
		id: "ai",
		label: "AI",
		itemIds: ["cursor", "gemini", "virastack"]
	}
]

const STACK_ITEM_BY_ID = new Map(
	STACK_ITEMS.map((item) => [item.id, item] as const)
)

export function getStackItemsByIds(ids: readonly string[]): StackItem[] {
	return ids.map((id) => {
		const item = STACK_ITEM_BY_ID.get(id)
		if (!item) {
			throw new Error(`Unknown stack item id: ${id}`)
		}
		return item
	})
}

function getCategoryOrder(items: StackItem[]): number {
	if (items.length === 0) {
		throw new Error("Stack category must contain at least one item")
	}

	return Math.min(...items.map((item) => item.order))
}

export const STACK_CATEGORY_SECTIONS = [...STACK_CATEGORIES]
	.map((category) => {
		const items = [...getStackItemsByIds(category.itemIds)].sort(
			(a, b) => a.order - b.order
		)

		return {
			...category,
			order: getCategoryOrder(items),
			items
		}
	})
	.sort((a, b) => a.order - b.order)

const HOME_STACK_IDS = [
	"javascript",
	"typescript",
	"git",
	"figma",
	"react",
	"nextjs",
	"tailwind",
	"tanstack",
	"vite",
	"radix",
	"shadcn",
	"zod",
	"zustand",
	"redux",
	"nodejs",
	"postgresql",
	"supabase",
	"graphql",
	"motion",
	"react-hook-form",
	"storybook",
	"cursor",
	"gemini",
	"virastack"
] as const

export const HOME_STACK_ITEMS = getStackItemsByIds(HOME_STACK_IDS)
