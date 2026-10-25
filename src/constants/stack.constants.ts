import { ME } from "@/constants/me.constants"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"

export type StackItem = {
	id: string
	label: string
	description: string
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
		description: "Tip güvenliği",
		order: 100,
		href: "https://www.typescriptlang.org/"
	},
	{
		id: "javascript",
		label: "JavaScript",
		description: "Web'in dili",
		order: 101,
		href: "https://developer.mozilla.org/docs/Web/JavaScript"
	},
	{
		id: "html",
		label: "HTML",
		description: "Sayfa yapısı",
		order: 102,
		href: "https://developer.mozilla.org/docs/Web/HTML"
	},
	{
		id: "css",
		label: "CSS",
		description: "Stil",
		order: 103,
		href: "https://developer.mozilla.org/docs/Web/CSS"
	},
	{
		id: "git",
		label: "Git",
		description: "Sürüm kontrolü",
		order: 104,
		href: "https://git-scm.com/"
	},
	{
		id: "react",
		label: "React",
		description: "Arayüz kütüphanesi",
		order: 200,
		href: "https://react.dev/"
	},
	{
		id: "nextjs",
		label: "Next.js",
		description: "React framework'ü",
		order: 201,
		href: "https://nextjs.org/"
	},
	{
		id: "vite",
		label: "Vite",
		description: "Derleme aracı",
		order: 202,
		href: "https://vite.dev/"
	},
	{
		id: "tanstack",
		label: "TanStack",
		description: "Router, Query, Start",
		order: 203,
		href: "https://tanstack.com/"
	},
	{
		id: "tailwind",
		label: "Tailwind CSS",
		description: "Utility-first CSS",
		order: 204,
		href: "https://tailwindcss.com/"
	},
	{
		id: "base-ui",
		label: "Base UI",
		description: "Erişilebilir bileşenler",
		order: 205,
		href: "https://base-ui.com/"
	},
	{
		id: "shadcn",
		label: "shadcn/ui",
		description: "Bileşen seti",
		order: 206,
		href: "https://ui.shadcn.com/"
	},
	{
		id: "motion",
		label: "Motion",
		description: "Animasyon",
		order: 207,
		href: "https://motion.dev/"
	},
	{
		id: "react-hook-form",
		label: "React Hook Form",
		description: "Form yönetimi",
		order: 208,
		href: "https://react-hook-form.com/"
	},
	{
		id: "zustand",
		label: "Zustand",
		description: "Client state",
		order: 209,
		href: "https://zustand.docs.pmnd.rs/"
	},
	{
		id: "redux",
		label: "Redux",
		description: "Global state",
		order: 210,
		href: "https://redux.js.org/"
	},
	{
		id: "zod",
		label: "Zod",
		description: "Şema doğrulama",
		order: 211,
		href: "https://zod.dev/"
	},
	{
		id: "storybook",
		label: "Storybook",
		description: "Bileşen kataloğu",
		order: 212,
		href: "https://storybook.js.org/"
	},
	{
		id: "nodejs",
		label: "Node.js",
		description: "Sunucu ortamı",
		order: 300,
		href: "https://nodejs.org/"
	},
	{
		id: "postgresql",
		label: "PostgreSQL",
		description: "Veritabanı",
		order: 301,
		href: "https://www.postgresql.org/"
	},
	{
		id: "supabase",
		label: "Supabase",
		description: "Backend servisi",
		order: 302,
		href: "https://supabase.com/"
	},
	{
		id: "graphql",
		label: "GraphQL",
		description: "API sorgu dili",
		order: 303,
		href: "https://graphql.org/"
	},
	{
		id: "vitest",
		label: "Vitest",
		description: "Unit ve bileşen testi",
		order: 350,
		href: "https://vitest.dev/"
	},
	{
		id: "playwright",
		label: "Playwright",
		description: "Uçtan uca test",
		order: 351,
		href: "https://playwright.dev/"
	},
	{
		id: "figma",
		label: "Figma",
		description: "Tasarım",
		order: 400,
		href: "https://www.figma.com/"
	},
	{
		id: "claude",
		label: "Claude Code",
		description: "AI kod asistanı",
		order: 501,
		href: "https://claude.com/claude-code"
	},
	{
		id: "virastack",
		label: "ViraStack",
		description: "Frontend ekosistemi",
		order: 503,
		href: EXTERNAL_LINKS.virastack
	},
	{
		id: "virastack-ai",
		label: "ViraStack AI",
		description: "AI kod kuralları",
		order: 503,
		href: `${EXTERNAL_LINKS.virastack}/ai`
	},
	{
		id: "emil-skills",
		label: "emilkowalski/skills",
		description: "Animasyon ve etkileşim skill'leri",
		order: 504,
		href: "https://github.com/emilkowalski/skills"
	},
	{
		id: "jakub-skills",
		label: "jakubkrehel/skills",
		description: "Arayüz ve erişilebilirlik skill'leri",
		order: 505,
		href: "https://github.com/jakubkrehel/skills"
	}
]

export const STACK_CATEGORIES: StackCategory[] = ME.stack.categories

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

export const HOME_STACK_ITEMS = getStackItemsByIds(ME.stack.home)
