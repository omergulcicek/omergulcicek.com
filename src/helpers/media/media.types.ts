export type MediaBleed = "none" | "wide" | "full"

export type MediaTransformOptions = {
	width?: number
	quality?: number
	format?: "origin"
}

export type GetMediaUrlOptions = {
	transform?: MediaTransformOptions
}

export type GetMediaSrcSetOptions = {
	widths: Array<{ width: number; quality?: number }>
}
