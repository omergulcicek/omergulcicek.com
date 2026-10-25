import { CssDemoMount } from "@/features/blog/components/css-demos/CssDemoMount"

export function ClipPath() {
	return (
		<CssDemoMount widget="clip-path">
			<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
				<div className="blog-css-interactive-demo__preview">
					<div
						style={{ clipPath: "circle(40% at 50% 50%)" }}
						className="blog-css-interactive-demo__clip-path-preview"
					>
						<div className="text-center">
							<div className="text-2xl font-bold">Circle</div>
						</div>
					</div>
				</div>
			</div>
		</CssDemoMount>
	)
}
