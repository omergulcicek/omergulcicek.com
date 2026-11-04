import type { BlogCssCustomProperties } from "@/features/blog/types/blog-css-interactive.types"

/** Types an inline style that carries CSS custom properties or properties newer than csstype. */
export function blogStyle(
	style: BlogCssCustomProperties
): BlogCssCustomProperties {
	return style
}
