import {
	Compass,
	GraduationCap,
	MapPin,
	Package,
	Rocket,
	Sparkles,
	SquareAsterisk,
	TextCursorInput,
	type LucideIcon
} from "lucide-react"

/**
 * Single source for ViraStack product icons and colors (follows virastack.com).
 * `textClass` covers light and dark themes; `dotClass` and `hexDark` are the fixed brand color
 * (dots, glow, OG, badges); `virastack` is the brand mark itself. Full class names keep Tailwind's scanner happy.
 */
export const VIRASTACK_PRODUCTS = {
	virastack: {
		Icon: Package,
		textClass: "text-teal-600 dark:text-teal-500",
		dotClass: "bg-teal-500",
		hexLight: "#009689",
		hexDark: "#00baa6"
	},
	academy: {
		Icon: GraduationCap,
		textClass: "text-sky-600 dark:text-sky-500",
		dotClass: "bg-sky-500",
		hexLight: "#0084d1",
		hexDark: "#00a6f4"
	},
	start: {
		Icon: Rocket,
		textClass: "text-green-600 dark:text-green-500",
		dotClass: "bg-green-500",
		hexLight: "#00a63e",
		hexDark: "#00c950"
	},
	ai: {
		Icon: Sparkles,
		textClass: "text-fuchsia-600 dark:text-fuchsia-500",
		dotClass: "bg-fuchsia-500",
		hexLight: "#c800de",
		hexDark: "#e131fa"
	},
	mask: {
		Icon: TextCursorInput,
		textClass: "text-indigo-500 dark:text-indigo-500",
		dotClass: "bg-indigo-500",
		hexLight: "#605efe",
		hexDark: "#605efe"
	},
	password: {
		Icon: SquareAsterisk,
		textClass: "text-pink-600 dark:text-pink-500",
		dotClass: "bg-pink-500",
		hexLight: "#e60076",
		hexDark: "#f6339a"
	},
	address: {
		Icon: MapPin,
		textClass: "text-red-600 dark:text-red-500",
		dotClass: "bg-red-500",
		hexLight: "#e7000b",
		hexDark: "#fb2c36"
	},
	guide: {
		Icon: Compass,
		textClass: "text-amber-600 dark:text-amber-400",
		dotClass: "bg-amber-400",
		hexLight: "#e17100",
		hexDark: "#ffb900"
	}
} as const satisfies Record<
	string,
	{
		Icon: LucideIcon
		textClass: string
		dotClass: string
		hexLight: string
		hexDark: string
	}
>

export type VirastackProductId = keyof typeof VIRASTACK_PRODUCTS

export function isVirastackProductId(id: string): id is VirastackProductId {
	return id in VIRASTACK_PRODUCTS
}
