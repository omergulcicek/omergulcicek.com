import { CssDemoMount } from "@/features/blog/components/css-demos/CssDemoMount"

export function TextBox() {
	return (
		<CssDemoMount widget="text-box">
			<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
				<div className="blog-css-interactive-demo__preview">
					<div className="flex gap-4">
						<div className="blog-css-interactive-demo__text-box-image" />
						<h3 className="blog-css-interactive-demo__text-box-heading">
							Başlık Metni
						</h3>
					</div>
				</div>
			</div>
		</CssDemoMount>
	)
}
