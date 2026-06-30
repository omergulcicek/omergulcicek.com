import type { ComponentType, SVGProps } from "react"
import {
	BookMarked,
	Bot,
	Clapperboard,
	CodeXml,
	Milestone,
	PersonStanding,
	TentTree
} from "lucide-react"

import { CssOld } from "@/components/ui/svgs/cssOld"
import { Javascript } from "@/components/ui/svgs/javascript"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
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
	JavaScript: { kind: "icon", icon: Javascript },
	"Tailwind CSS": { kind: "icon", icon: Tailwindcss },
	"shadcn/ui": { kind: "theme", light: ShadcnUi, dark: ShadcnUiDark },
	Supabase: { kind: "icon", icon: Supabase },
	Vite: { kind: "icon", icon: Vite },
	"Yıl Özeti": {
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
	Seyahat: {
		kind: "icon",
		icon: TentTree,
		iconClassName: "text-emerald-500 dark:text-emerald-400"
	},
	Kişisel: {
		kind: "icon",
		icon: PersonStanding,
		iconClassName: "text-indigo-500 dark:text-indigo-400"
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
