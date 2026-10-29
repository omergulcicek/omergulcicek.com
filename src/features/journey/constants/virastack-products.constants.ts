import { VIRASTACK_PRODUCTS } from "@/constants/virastack-colors.constants"

/** Brand order follows virastack.com; icons and colors come from `virastack-colors.constants.ts`. */
export const VIRASTACK_PRODUCT_DOTS = [
	{ id: "academy", name: "Academy", ...VIRASTACK_PRODUCTS.academy },
	{ id: "start", name: "Start", ...VIRASTACK_PRODUCTS.start },
	{ id: "ai", name: "AI", ...VIRASTACK_PRODUCTS.ai },
	{ id: "mask", name: "Mask", ...VIRASTACK_PRODUCTS.mask },
	{ id: "password", name: "Password", ...VIRASTACK_PRODUCTS.password },
	{ id: "guide", name: "Guide", ...VIRASTACK_PRODUCTS.guide }
] as const

export const VIRASTACK_PRODUCT_DOTS_STEP_MS = 650

export const VIRASTACK_PRODUCT_DOTS_LABEL =
	"ViraStack ürünleri sırayla vurgulanıyor: Academy, Start, AI, Mask, Password, Guide"
