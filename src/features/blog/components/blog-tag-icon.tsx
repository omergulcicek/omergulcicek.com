import type { ComponentType, SVGProps } from "react"
import {
	BookMarked,
	Bot,
	Brain,
	Clapperboard,
	CodeXml,
	Globe,
	Milestone,
	Popcorn,
	Rocket,
	Sparkles,
	TentTree
} from "lucide-react"

import { CssOld } from "@/components/ui/svgs/cssOld"
import { Github } from "@/components/ui/svgs/github"
import { Html5 } from "@/components/ui/svgs/html5"
import { Javascript } from "@/components/ui/svgs/javascript"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Npm } from "@/components/ui/svgs/npm"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi"
import { ShadcnUiDark } from "@/components/ui/svgs/shadcnUiDark"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Tanstack } from "@/components/ui/svgs/tanstack"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Virastack } from "@/components/ui/svgs/virastack"
import { Vite } from "@/components/ui/svgs/vite"
import { cn } from "@/lib/utils"

type BlogTagIconProps = {
	tag: string
	className?: string
}

type BlogTagIconEntry =
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

const BLOG_TAG_ICON_MAP: Record<string, BlogTagIconEntry> = {
	React: { kind: "theme", light: ReactLight, dark: ReactDark },
	"Next.js": { kind: "icon", icon: NextjsIconDark, invertOnDark: true },
	TanStack: { kind: "icon", icon: Tanstack },
	"TanStack Query": { kind: "icon", icon: Tanstack },
	"TanStack Start": { kind: "icon", icon: Tanstack },
	ViraStack: { kind: "icon", icon: Virastack },
	TypeScript: { kind: "icon", icon: Typescript },
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
	Vite: { kind: "icon", icon: Vite },
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

export function BlogTagIcon({ tag, className }: BlogTagIconProps) {
	const entry = BLOG_TAG_ICON_MAP[tag]

	if (!entry) {
		return null
	}

	if (entry.kind === "theme") {
		const LightIcon = entry.light
		const DarkIcon = entry.dark

		return (
			<>
				<LightIcon className={cn(className, "dark:hidden")} aria-hidden />
				<DarkIcon className={cn(className, "hidden dark:block")} aria-hidden />
			</>
		)
	}

	const Icon = entry.icon

	return (
		<Icon
			className={cn(
				className,
				entry.iconClassName,
				entry.invertOnDark && "dark:invert"
			)}
			aria-hidden
		/>
	)
}
