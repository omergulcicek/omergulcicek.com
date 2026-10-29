import { VIRASTACK_PRODUCT_COLORS } from "@/constants/virastack-colors.constants"

/** Brand order follows virastack.com; colors come from `virastack-colors.constants.ts`. */
export const VIRASTACK_PRODUCT_DOTS = [
	{ id: "academy", name: "Academy", ...VIRASTACK_PRODUCT_COLORS.academy },
	{ id: "start", name: "Start", ...VIRASTACK_PRODUCT_COLORS.start },
	{ id: "ai", name: "AI", ...VIRASTACK_PRODUCT_COLORS.ai },
	{ id: "mask", name: "Mask", ...VIRASTACK_PRODUCT_COLORS.mask },
	{ id: "password", name: "Password", ...VIRASTACK_PRODUCT_COLORS.password },
	{ id: "guide", name: "Guide", ...VIRASTACK_PRODUCT_COLORS.guide }
] as const

export const VIRASTACK_PRODUCT_DOTS_STEP_MS = 650

export const VIRASTACK_PRODUCT_DOTS_LABEL =
	"ViraStack ürünleri sırayla vurgulanıyor: Academy, Start, AI, Mask, Password, Guide"
