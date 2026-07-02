import type { BlogCssInteractiveDemoProps } from "@/features/blog/types/blog-css-interactive.types"

export function BlogCssInteractiveDemo({
	controls,
	preview,
	code,
	caniuseHref
}: BlogCssInteractiveDemoProps) {
	return (
		<div className="blog-css-interactive-demo">
			<div className="blog-css-interactive-demo__controls">{controls}</div>
			<div className="blog-css-interactive-demo__preview">{preview}</div>
			<div className="blog-css-interactive-demo__code">{code}</div>
			<p className="blog-css-interactive-demo__footnote">
				Güncel tarayıcı desteğini takip etmek için{" "}
				<a href={caniuseHref} target="_blank" rel="noopener noreferrer">
					caniuse
				</a>{" "}
				adresini ziyaret edebilirsiniz.
			</p>
		</div>
	)
}
