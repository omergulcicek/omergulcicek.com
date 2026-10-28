/** Brand order and colors follow virastack.com; full class names keep Tailwind's scanner happy. */
export const VIRASTACK_PRODUCT_DOTS = [
	{ id: "academy", name: "Academy", dotClass: "bg-green-500", textClass: "text-green-600 dark:text-green-500" },
	{ id: "start", name: "Start", dotClass: "bg-teal-500", textClass: "text-teal-600 dark:text-teal-500" },
	{ id: "ai", name: "AI", dotClass: "bg-fuchsia-500", textClass: "text-fuchsia-600 dark:text-fuchsia-500" },
	{ id: "mask", name: "Mask", dotClass: "bg-indigo-500", textClass: "text-indigo-600 dark:text-indigo-400" },
	{ id: "password", name: "Password", dotClass: "bg-rose-500", textClass: "text-rose-600 dark:text-rose-500" },
	{ id: "guide", name: "Guide", dotClass: "bg-amber-400", textClass: "text-amber-600 dark:text-amber-400" }
] as const

export const VIRASTACK_PRODUCT_DOTS_STEP_MS = 650

export const VIRASTACK_PRODUCT_DOTS_LABEL =
	"ViraStack ürünleri sırayla vurgulanıyor: Academy, Start, AI, Mask, Password, Guide"
