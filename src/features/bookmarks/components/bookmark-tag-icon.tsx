import type { ComponentType, SVGProps } from "react"
import {
	Building2,
	Clapperboard,
	CircleDot,
	Earth,
	Feather,
	FlaskConical,
	Gamepad2,
	Globe,
	Landmark,
	Layers,
	Lightbulb,
	Moon,
	Newspaper,
	Popcorn,
	Puzzle,
	ScrollText,
	Sprout,
	Swords,
	Trophy,
	User,
	Video
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
	"Felsefe ve Düşünce": {
		icon: Lightbulb,
		iconClassName: "text-indigo-600 dark:text-indigo-400"
	},
	İslam: {
		icon: Moon,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	"Kur'an-ı Kerim ve Meal": {
		icon: Moon,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	Tefsir: {
		icon: ScrollText,
		iconClassName: "text-emerald-700 dark:text-emerald-300"
	},
	"Akaid ve İlmihal": {
		icon: Landmark,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	"Hadis ve Sünnet": {
		icon: Feather,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	Siyer: {
		icon: ScrollText,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	"Tasavvuf": {
		icon: Lightbulb,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	"İslam Düşüncesi": {
		icon: Lightbulb,
		iconClassName: "text-teal-700 dark:text-teal-300"
	},
	"Tarih": {
		icon: Landmark,
		iconClassName: "text-amber-700 dark:text-amber-400"
	},
	"Genel Türk Tarihi": {
		icon: Landmark,
		iconClassName: "text-amber-700 dark:text-amber-400"
	},
	"Osmanlı Tarihi": {
		icon: Landmark,
		iconClassName: "text-amber-800 dark:text-amber-300"
	},
	"Hatırat ve Anı": {
		icon: ScrollText,
		iconClassName: "text-amber-700 dark:text-amber-400"
	},
	Roma: {
		icon: Landmark,
		iconClassName: "text-stone-600 dark:text-stone-300"
	},
	Cumhuriyet: {
		icon: Landmark,
		iconClassName: "text-red-600 dark:text-red-400"
	},
	"Şehir Tarihi": {
		icon: Building2,
		iconClassName: "text-amber-700 dark:text-amber-400"
	},
	"Kültür, Mitoloji ve Dünya Medeniyetleri": {
		icon: Earth,
		iconClassName: "text-amber-700 dark:text-amber-400"
	},
	Diğerleri: {
		icon: Layers,
		iconClassName: "text-zinc-600 dark:text-zinc-400"
	},
	Bilim: {
		icon: FlaskConical,
		iconClassName: "text-fuchsia-600 dark:text-fuchsia-400"
	},
	"Anı ve Biyografi": {
		icon: ScrollText,
		iconClassName: "text-zinc-600 dark:text-zinc-400"
	},
	"Kişisel Gelişim": {
		icon: Sprout,
		iconClassName: "text-lime-600 dark:text-lime-400"
	},
	Edebiyat: {
		icon: Feather,
		iconClassName: "text-orange-600 dark:text-orange-400"
	},
	"Dünya Edebiyatı": {
		icon: Earth,
		iconClassName: "text-sky-600 dark:text-sky-400"
	},
	"Bilim Felsefesi": {
		icon: FlaskConical,
		iconClassName: "text-fuchsia-600 dark:text-fuchsia-400"
	},
	Bulmaca: {
		icon: Puzzle,
		iconClassName: "text-amber-600 dark:text-amber-400"
	},
	"Siyaset ve Toplum": {
		icon: Landmark,
		iconClassName: "text-indigo-600 dark:text-indigo-400"
	},
	"İlmihal ve Dua": {
		icon: Moon,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
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
	},
	Futbol: {
		icon: Trophy,
		iconClassName: "text-emerald-600 dark:text-emerald-400"
	},
	Oyun: {
		icon: Gamepad2,
		iconClassName: "text-violet-600 dark:text-violet-400"
	},
	Spor: {
		icon: CircleDot,
		iconClassName: "text-lime-600 dark:text-lime-400"
	},
	Dövüş: {
		icon: Swords,
		iconClassName: "text-orange-600 dark:text-orange-400"
	},
	"Dizi ve Belgesel": {
		icon: Video,
		iconClassName: "text-sky-600 dark:text-sky-400"
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
