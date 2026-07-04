export function buildAvatarThumbPath(name: string): string {
	return `/media/avatars/${name}-96.webp`
}

export function buildCompanyLogoThumbPath(icon: string): string {
	return `/media/company/${icon}-48.webp`
}

export const VIRASTACK_LOGO = {
	src: "/logos/virastack-56.webp",
	srcSet: "/logos/virastack-56.webp 1x, /logos/virastack-112.webp 2x",
	width: 56,
	height: 56
} as const

export function buildAvatarThumbSources(name: string) {
	const path = buildAvatarThumbPath(name)
	return {
		src: path,
		sources: [
			{
				type: "image/webp",
				srcSet: path
			}
		] as const
	}
}
