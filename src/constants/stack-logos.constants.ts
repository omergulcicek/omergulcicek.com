import { VIRASTACK_LOGO } from "@/lib/media/build-static-thumb-image"

export type StackLogoEntry =
	| {
			kind: "image"
			src: string
			srcSet?: string
			width: number
			height: number
			/** Person avatars render as circles; product logos keep their shape. */
			round?: boolean
			/** Single-color marks that need inverting on the dark theme. */
			invertOnDark?: boolean
	  }
	| { kind: "theme"; light: string; dark: string }

/**
 * Stack logos are static files under public/logos/stack so the home marquee does
 * not inline ~130 KB of SVG markup into every server-rendered page.
 */
const STACK_LOGO_DIR = "/logos/stack"

function svgLogo(id: string, options?: { invertOnDark?: boolean }): StackLogoEntry {
	return {
		kind: "image",
		src: `${STACK_LOGO_DIR}/${id}.svg`,
		width: 56,
		height: 56,
		...options
	}
}

function themeLogo(id: string): StackLogoEntry {
	return {
		kind: "theme",
		light: `${STACK_LOGO_DIR}/${id}-light.svg`,
		dark: `${STACK_LOGO_DIR}/${id}-dark.svg`
	}
}

/** Logo for each stack item id in `STACK_ITEMS`; unknown ids fall back to initials. */
export const STACK_LOGOS: Record<string, StackLogoEntry> = {
	html: svgLogo("html"),
	css: svgLogo("css"),
	javascript: svgLogo("javascript"),
	typescript: svgLogo("typescript"),
	git: svgLogo("git"),
	figma: svgLogo("figma"),
	react: themeLogo("react"),
	nextjs: svgLogo("nextjs", { invertOnDark: true }),
	tailwind: svgLogo("tailwind"),
	tanstack: themeLogo("tanstack"),
	vite: svgLogo("vite"),
	"base-ui": themeLogo("base-ui"),
	shadcn: themeLogo("shadcn"),
	zod: svgLogo("zod"),
	supabase: svgLogo("supabase"),
	nodejs: svgLogo("nodejs"),
	postgresql: svgLogo("postgresql"),
	graphql: svgLogo("graphql"),
	zustand: {
		kind: "image",
		src: "/logos/zustand-56.webp",
		srcSet: "/logos/zustand-56.webp 1x, /logos/zustand-112.webp 2x",
		width: 56,
		height: 56
	},
	redux: svgLogo("redux"),
	claude: svgLogo("claude"),
	motion: themeLogo("motion"),
	"react-hook-form": {
		kind: "image",
		src: "/logos/react-hook-form.svg",
		width: 56,
		height: 56
	},
	storybook: svgLogo("storybook"),
	vitest: svgLogo("vitest"),
	playwright: svgLogo("playwright"),
	jquery: themeLogo("jquery"),
	bootstrap: svgLogo("bootstrap"),
	less: svgLogo("less"),
	jinja: svgLogo("jinja"),
	"kendo-ui": svgLogo("kendo-ui"),
	"styled-components": svgLogo("styled-components"),
	github: svgLogo("github", { invertOnDark: true }),
	npm: svgLogo("npm"),
	virastack: {
		kind: "image",
		src: VIRASTACK_LOGO.src,
		srcSet: VIRASTACK_LOGO.srcSet,
		width: VIRASTACK_LOGO.width,
		height: VIRASTACK_LOGO.height
	},
	"virastack-ai": {
		kind: "image",
		src: VIRASTACK_LOGO.src,
		srcSet: VIRASTACK_LOGO.srcSet,
		width: VIRASTACK_LOGO.width,
		height: VIRASTACK_LOGO.height
	},
	"emil-skills": {
		kind: "image",
		src: "/logos/emil-skills-56.webp",
		srcSet: "/logos/emil-skills-56.webp 1x, /logos/emil-skills-112.webp 2x",
		width: 56,
		height: 56,
		round: true
	},
	"jakub-skills": {
		kind: "image",
		src: "/logos/jakub-skills-56.webp",
		srcSet: "/logos/jakub-skills-56.webp 1x, /logos/jakub-skills-112.webp 2x",
		width: 56,
		height: 56,
		round: true
	}
}
