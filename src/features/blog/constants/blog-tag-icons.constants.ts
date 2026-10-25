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

import { CssOld } from "@/components/ui/svgs/cssOld"
import { Git } from "@/components/ui/svgs/git"
import { Github } from "@/components/ui/svgs/github"
import { Html5 } from "@/components/ui/svgs/html5"
import { Javascript } from "@/components/ui/svgs/javascript"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Npm } from "@/components/ui/svgs/npm"
import { Playwright } from "@/components/ui/svgs/playwright"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi"
import { ShadcnUiDark } from "@/components/ui/svgs/shadcnUiDark"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { TanstackDark } from "@/components/ui/svgs/tanstackDark"
import { TanstackLight } from "@/components/ui/svgs/tanstackLight"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Virastack } from "@/components/ui/svgs/virastack"
import { Vite } from "@/components/ui/svgs/vite"
import { Vitest } from "@/components/ui/svgs/vitest"

export type BlogTagIconEntry =
	| {
			kind: "icon"
			icon: ComponentType<SVGProps<SVGSVGElement>>
			invertOnDark?: boolean
			iconClassName?: string
	  }
	| {
			kind: "theme"
			light: ComponentType<SVGProps<SVGSVGElement>>
			dark: ComponentType<SVGProps<SVGSVGElement>>
	  }
	| {
			kind: "stack"
			stackId: string
	  }

export const BLOG_TAG_ICON_MAP: Record<string, BlogTagIconEntry> = {
	React: { kind: "theme", light: ReactLight, dark: ReactDark },
	"Next.js": { kind: "icon", icon: NextjsIconDark, invertOnDark: true },
	TanStack: { kind: "theme", light: TanstackLight, dark: TanstackDark },
	"TanStack Query": { kind: "theme", light: TanstackLight, dark: TanstackDark },
	"TanStack Start": { kind: "theme", light: TanstackLight, dark: TanstackDark },
	ViraStack: { kind: "icon", icon: Virastack },
	TypeScript: { kind: "icon", icon: Typescript },
	Git: { kind: "icon", icon: Git },
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
	CSS: { kind: "icon", icon: CssOld },
	HTML: { kind: "icon", icon: Html5 },
	JavaScript: { kind: "icon", icon: Javascript },
	"Tailwind CSS": { kind: "icon", icon: Tailwindcss },
	"shadcn/ui": { kind: "theme", light: ShadcnUi, dark: ShadcnUiDark },
	Supabase: { kind: "icon", icon: Supabase },
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
	Vite: { kind: "icon", icon: Vite },
	Vitest: { kind: "icon", icon: Vitest },
	Playwright: {
		kind: "icon",
		icon: Playwright,
		iconClassName: "dark:brightness-200"
	},
	GitHub: { kind: "icon", icon: Github },
	npm: { kind: "icon", icon: Npm },
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
