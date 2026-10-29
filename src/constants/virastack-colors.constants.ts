/**
 * Single source for ViraStack product colors (follows virastack.com).
 * Full class names keep Tailwind's scanner happy; change a product color here only.
 */
export const VIRASTACK_PRODUCT_COLORS = {
	academy: { dotClass: "bg-sky-500", textClass: "text-sky-600 dark:text-sky-500" },
	start: { dotClass: "bg-green-500", textClass: "text-green-600 dark:text-green-500" },
	ai: { dotClass: "bg-fuchsia-500", textClass: "text-fuchsia-600 dark:text-fuchsia-500" },
	mask: { dotClass: "bg-indigo-500", textClass: "text-indigo-600 dark:text-indigo-500" },
	password: { dotClass: "bg-teal-500", textClass: "text-teal-600 dark:text-teal-500" },
	address: { dotClass: "bg-red-500", textClass: "text-red-600 dark:text-red-500" },
	guide: { dotClass: "bg-amber-400", textClass: "text-amber-700 dark:text-amber-400" }
} as const

export type VirastackProductId = keyof typeof VIRASTACK_PRODUCT_COLORS

export function isVirastackProductId(id: string): id is VirastackProductId {
	return id in VIRASTACK_PRODUCT_COLORS
}
