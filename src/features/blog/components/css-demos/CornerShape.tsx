import { CssDemoMount } from "@/features/blog/components/css-demos/CssDemoMount"

export function CornerShape() {
	return (
		<CssDemoMount widget="corner-shape">
			<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
				<div className="blog-css-interactive-demo__preview">
					<div className="blog-css-interactive-demo__corner-shape-preview">
						Preview: scoop
					</div>
				</div>
			</div>
		</CssDemoMount>
	)
}
