import type { ComponentType, SVGProps } from "react"
import {
	BookMarked,
	Bot,
	Brain,
	Clapperboard,
	Milestone,
	Rocket,
	Sparkles,
	Wrench
} from "lucide-react"

import { ThemeAwareDualIcon } from "@/components/shared/theme-aware-dual-icon"
import { StackLogo } from "@/features/stack/components/stack-logo"
import { CssOld } from "@/components/ui/svgs/cssOld"
import { Html5 } from "@/components/ui/svgs/html5"
import { Javascript } from "@/components/ui/svgs/javascript"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Tanstack } from "@/components/ui/svgs/tanstack"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Virastack } from "@/components/ui/svgs/virastack"
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
	| {
			kind: "stack"
			stackId: string
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
	CSS: { kind: "icon", icon: CssOld },
	HTML: { kind: "icon", icon: Html5 },
	JavaScript: { kind: "icon", icon: Javascript },
	Supabase: { kind: "icon", icon: Supabase },
	"Yıl Değerlendirmesi": {
		kind: "icon",
		icon: Milestone,
		iconClassName: "text-amber-500 dark:text-amber-400"
	},
	"Film ve Dizi": {
		kind: "icon",
		icon: Clapperboard,
		iconClassName: "text-rose-500 dark:text-rose-400"
	},
	Kitap: {
		kind: "icon",
		icon: BookMarked,
		iconClassName: "text-orange-600 dark:text-orange-400"
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
	},
	Araç: {
		kind: "icon",
		icon: Wrench,
		iconClassName: "text-amber-600 dark:text-amber-400"
	}
}

export function BlogTagIcon({ tag, className }: BlogTagIconProps) {
	const entry = BLOG_TAG_ICON_MAP[tag]

	if (!entry) {
		return null
	}

	if (entry.kind === "theme") {
		return (
			<ThemeAwareDualIcon
				light={entry.light}
				dark={entry.dark}
				className={className}
				label={tag}
			/>
		)
	}

	if (entry.kind === "stack") {
		return (
			<StackLogo stackId={entry.stackId} label={tag} className={className} />
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
