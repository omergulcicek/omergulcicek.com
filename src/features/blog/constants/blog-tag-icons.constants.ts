import type { ComponentType, SVGProps } from "react"
import {
	BookMarked,
	Bot,
	Brain,
	Clapperboard,
	CodeXml,
	Gauge,
	Globe,
	Layers,
	Milestone,
	Popcorn,
	Rocket,
	ShieldCheck,
	Sparkles,
	TentTree
} from "lucide-react"

export type BlogTagIconEntry =
	| {
			kind: "icon"
			icon: ComponentType<SVGProps<SVGSVGElement>>
			iconClassName?: string
	  }
	| {
			/** Brand logos are static files in `STACK_LOGOS`, not inlined SVG markup. */
			kind: "stack"
			stackId: string
			iconClassName?: string
	  }

export const BLOG_TAG_ICON_MAP: Record<string, BlogTagIconEntry> = {
	React: { kind: "stack", stackId: "react" },
	"Next.js": { kind: "stack", stackId: "nextjs" },
	TanStack: { kind: "stack", stackId: "tanstack" },
	"TanStack Query": { kind: "stack", stackId: "tanstack" },
	"TanStack Start": { kind: "stack", stackId: "tanstack" },
	ViraStack: { kind: "stack", stackId: "virastack" },
	TypeScript: { kind: "stack", stackId: "typescript" },
	Git: { kind: "stack", stackId: "git" },
	"Web Performansı": {
		kind: "icon",
		icon: Gauge,
		iconClassName: "text-orange-500 dark:text-orange-400"
	},
	"Yapay Zekâ": {
		kind: "icon",
		icon: Bot,
		iconClassName: "text-violet-500 dark:text-violet-400"
	},
	Frontend: {
		kind: "icon",
		icon: CodeXml,
		iconClassName: "text-sky-500 dark:text-sky-400"
	},
	CSS: { kind: "stack", stackId: "css" },
	HTML: { kind: "stack", stackId: "html" },
	JavaScript: { kind: "stack", stackId: "javascript" },
	"Tailwind CSS": { kind: "stack", stackId: "tailwind" },
	"shadcn/ui": { kind: "stack", stackId: "shadcn" },
	Supabase: { kind: "stack", stackId: "supabase" },
	Zustand: { kind: "stack", stackId: "zustand" },
	"React Hook Form": { kind: "stack", stackId: "react-hook-form" },
	Zod: { kind: "stack", stackId: "zod" },
	Mimari: {
		kind: "icon",
		icon: Layers,
		iconClassName: "text-sky-600 dark:text-sky-400"
	},
	"Auth ve Güvenlik": {
		kind: "icon",
		icon: ShieldCheck,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	Vite: { kind: "stack", stackId: "vite" },
	Vitest: { kind: "stack", stackId: "vitest" },
	Playwright: {
		kind: "stack",
		stackId: "playwright",
		iconClassName: "dark:brightness-200"
	},
	GitHub: { kind: "stack", stackId: "github" },
	npm: { kind: "stack", stackId: "npm" },
	"Yıl Değerlendirmesi": {
		kind: "icon",
		icon: Milestone,
		iconClassName: "text-amber-500 dark:text-amber-400"
	},
	Kitap: {
		kind: "icon",
		icon: BookMarked,
		iconClassName: "text-orange-600 dark:text-orange-400"
	},
	Dizi: {
		kind: "icon",
		icon: Clapperboard,
		iconClassName: "text-rose-500 dark:text-rose-400"
	},
	Film: {
		kind: "icon",
		icon: Popcorn,
		iconClassName: "text-rose-500 dark:text-rose-400"
	},
	Seyahat: {
		kind: "icon",
		icon: TentTree,
		iconClassName: "text-emerald-500 dark:text-emerald-400"
	},
	"Site Yenileme": {
		kind: "icon",
		icon: Globe,
		iconClassName: "text-cyan-600 dark:text-cyan-400"
	},
	Deneyim: {
		kind: "icon",
		icon: Sparkles,
		iconClassName: "text-teal-600 dark:text-teal-400"
	},
	Düşünce: {
		kind: "icon",
		icon: Brain,
		iconClassName: "text-indigo-500 dark:text-indigo-400"
	},
	Proje: {
		kind: "icon",
		icon: Rocket,
		iconClassName: "text-fuchsia-500 dark:text-fuchsia-400"
	}
}
