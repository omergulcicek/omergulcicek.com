import {
	BookOpen,
	Camera,
	ChessPawn,
	Clapperboard,
	Footprints,
	Gamepad2,
	MicVocal,
	Palette,
	Shirt,
	Tv,
	type LucideIcon
} from "lucide-react"

export const HOBBY_COLORS: Record<string, string> = {
	photography: "bg-sky-50 dark:bg-sky-500/10",
	chess: "bg-zinc-50 dark:bg-zinc-500/10",
	walk: "bg-orange-50 dark:bg-orange-500/10",
	book: "bg-teal-50 dark:bg-teal-500/10"
}

export const HOBBY_ICONS: Record<
	string,
	{ Icon: LucideIcon; className: string }
> = {
	photography: {
		Icon: Camera,
		className: "text-sky-600 dark:text-sky-400"
	},
	chess: {
		Icon: ChessPawn,
		className: "text-zinc-600 dark:text-zinc-400"
	},
	walk: {
		Icon: Footprints,
		className: "text-orange-600 dark:text-orange-400"
	},
	book: {
		Icon: BookOpen,
		className: "text-teal-600 dark:text-teal-400"
	}
}

export const FAVORITE_COLORS: Record<string, string> = {
	team: "bg-emerald-50 dark:bg-emerald-500/10",
	game: "bg-violet-50 dark:bg-violet-500/10",
	musician: "bg-stone-50 dark:bg-stone-500/10",
	movie: "bg-amber-50 dark:bg-amber-500/10",
	series: "bg-rose-50 dark:bg-rose-500/10",
	color: "bg-cyan-50 dark:bg-cyan-500/10"
}

export const FAVORITE_ICONS: Record<
	string,
	{ Icon: LucideIcon; className: string }
> = {
	team: {
		Icon: Shirt,
		className: "text-emerald-600 dark:text-emerald-400"
	},
	game: {
		Icon: Gamepad2,
		className: "text-violet-600 dark:text-violet-400"
	},
	musician: {
		Icon: MicVocal,
		className: "text-stone-600 dark:text-stone-400"
	},
	movie: {
		Icon: Clapperboard,
		className: "text-amber-600 dark:text-amber-400"
	},
	series: {
		Icon: Tv,
		className: "text-rose-600 dark:text-rose-400"
	},
	color: {
		Icon: Palette,
		className: "text-cyan-600 dark:text-cyan-400"
	}
}
