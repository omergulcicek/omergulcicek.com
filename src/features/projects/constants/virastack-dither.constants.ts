import type { DitherCanvasParams } from "@its-thepoe/dither-react"

export const VIRASTACK_DITHER_IMAGE_SRC = "/logos/virastack-dither.png?v=3"

export const VIRASTACK_DITHER_DISPLAY_PX = 80

export const VIRASTACK_DITHER_GRID_SIZE = 56

export const VIRASTACK_DITHER_PARAMS = {
	algorithm: "floyd-steinberg",
	scale: 0.9,
	dotScale: 0.55,
	invert: true,
	image: {
		threshold: 70,
		contrast: 0.25,
		gamma: 1,
		blur: 0.5,
		highlightsCompression: 0
	},
	dither: {
		errorStrength: 1,
		serpentine: true
	},
	shape: {
		cornerRadius: 0.08
	}
} as const satisfies Partial<DitherCanvasParams>
