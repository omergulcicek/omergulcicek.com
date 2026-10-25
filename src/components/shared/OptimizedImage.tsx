import type { CSSProperties } from "react"

export type OptimizedImageSource = {
	type: string
	srcSet: string
	media?: string
}

type OptimizedImageProps = {
	src: string
	alt: string
	width: number
	height: number
	className?: string
	style?: CSSProperties
	sizes?: string
	loading?: "lazy" | "eager"
	decoding?: "async" | "sync" | "auto"
	fetchPriority?: "high" | "low" | "auto"
	sources?: readonly OptimizedImageSource[]
}

export function OptimizedImage({
	src,
	alt,
	width,
	height,
	className,
	style,
	sizes,
	loading = "lazy",
	decoding = "async",
	fetchPriority,
	sources
}: OptimizedImageProps) {
	const image = (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			loading={loading}
			decoding={decoding}
			{...(sizes ? { sizes } : {})}
			{...(fetchPriority ? { fetchPriority } : {})}
			className={className}
			style={style}
		/>
	)

	if (!sources?.length) {
		return image
	}

	return (
		<picture>
			{sources.map((source) => (
				<source
					key={`${source.type}-${source.srcSet}-${source.media ?? ""}`}
					type={source.type}
					srcSet={source.srcSet}
					{...(source.media ? { media: source.media } : {})}
				/>
			))}
			{image}
		</picture>
	)
}
