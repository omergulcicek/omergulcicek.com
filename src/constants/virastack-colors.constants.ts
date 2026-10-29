import {
	Compass,
	GraduationCap,
	MapPin,
	Rocket,
	Sparkles,
	SquareAsterisk,
	TextCursorInput,
	type LucideIcon
} from "lucide-react"

/**
 * Single source for ViraStack product icons and colors (follows virastack.com).
 * `textClass` covers light and dark themes; `dotClass` and `hex` are the fixed brand color
 * (dots, glow, OG, badges). Full class names keep Tailwind's scanner happy.
 */
export const VIRASTACK_PRODUCTS = {
	academy: {
		Icon: GraduationCap,
		textClass: "text-sky-600 dark:text-sky-500",
		dotClass: "bg-sky-500",
		hex: "#00a6f4"
	},
	start: {
		Icon: Rocket,
		textClass: "text-green-600 dark:text-green-500",
		dotClass: "bg-green-500",
		hex: "#00c950"
	},
	ai: {
		Icon: Sparkles,
		textClass: "text-fuchsia-600 dark:text-fuchsia-500",
		dotClass: "bg-fuchsia-500",
		hex: "#e131fa"
	},
	mask: {
		Icon: TextCursorInput,
		textClass: "text-indigo-500",
		dotClass: "bg-indigo-500",
		hex: "#605efe"
	},
	password: {
		Icon: SquareAsterisk,
		textClass: "text-pink-600 dark:text-pink-500",
		dotClass: "bg-pink-500",
		hex: "#f6339a"
	},
	address: {
		Icon: MapPin,
		textClass: "text-red-600 dark:text-red-500",
		dotClass: "bg-red-500",
		hex: "#fb2c36"
	},
	guide: {
		Icon: Compass,
		textClass: "text-amber-600 dark:text-amber-400",
		dotClass: "bg-amber-400",
		hex: "#ffb900"
	}
} as const satisfies Record<
	string,
	{ Icon: LucideIcon; textClass: string; dotClass: string; hex: string }
>

/** The ViraStack brand itself (logo mark), not a product. */
export const VIRASTACK_BRAND = {
	textClass: "text-teal-600 dark:text-teal-500",
	dotClass: "bg-teal-500",
	hexLight: "#009689",
	hexDark: "#00baa6"
} as const

export type VirastackProductId = keyof typeof VIRASTACK_PRODUCTS

export function isVirastackProductId(id: string): id is VirastackProductId {
	return id in VIRASTACK_PRODUCTS
}
