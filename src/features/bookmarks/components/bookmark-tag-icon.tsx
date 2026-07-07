import type { ComponentType, SVGProps } from "react"
import {
	BookOpen,
	Building2,
	Castle,
	Clapperboard,
	Crown,
	Earth,
	Globe,
	Moon,
	Newspaper,
	Popcorn,
	User
} from "lucide-react"

import { Npm } from "@/components/ui/svgs/npm"
import { Youtube } from "@/components/ui/svgs/youtube"
import { cn } from "@/lib/utils"

type BookmarkTagIconProps = {
	tag: string
	className?: string
}

type BookmarkTagIconEntry = {
	icon: ComponentType<SVGProps<SVGSVGElement>>
	iconClassName?: string
}

const BOOKMARK_TAG_ICON_MAP: Record<string, BookmarkTagIconEntry> = {
	Siteler: {
		icon: Globe,
		iconClassName: "text-cyan-600 dark:text-cyan-400"
	},
	npm: { icon: Npm },
	Youtube: { icon: Youtube },
	Dizi: {
		icon: Clapperboard,
		iconClassName: "text-rose-500 dark:text-rose-400"
	},
	Film: {
		icon: Popcorn,
		iconClassName: "text-rose-500 dark:text-rose-400"
	},
	"Dünya Tarihi": {
		icon: Earth,
		iconClassName: "text-sky-600 dark:text-sky-400"
	},
	İslam: {
		icon: Moon,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	Osmanlı: {
		icon: Castle,
		iconClassName: "text-amber-700 dark:text-amber-400"
	},
	Cumhuriyet: {
		icon: Crown,
		iconClassName: "text-red-600 dark:text-red-400"
	},
	Edebiyat: {
		icon: BookOpen,
		iconClassName: "text-orange-600 dark:text-orange-400"
	},
	Kişi: {
		icon: User,
		iconClassName: "text-violet-600 dark:text-violet-400"
	},
	Yayın: {
		icon: Newspaper,
		iconClassName: "text-sky-600 dark:text-sky-400"
	},
	Kurum: {
		icon: Building2,
		iconClassName: "text-zinc-600 dark:text-zinc-400"
	}
}

export function BookmarkTagIcon({ tag, className }: BookmarkTagIconProps) {
	const entry = BOOKMARK_TAG_ICON_MAP[tag]

	if (!entry) {
		return null
	}

	const Icon = entry.icon

	return (
		<Icon className={cn(className, entry.iconClassName)} aria-hidden />
	)
}
