import type { ReactNode } from "react"

import { BlogMaskFieldMeta } from "@/features/blog/components/blog-mask-field-meta"

function BlogMaskInteractiveMount({ children }: { children: ReactNode }) {
	return (
		<div
			className="blog-widget-mount blog-mask-interactive-mount not-prose"
			data-blog-widget="vira-mask-demo"
		>
			{children}
		</div>
	)
}

function BlogMaskInteractiveFallback() {
	return (
		<div className="blog-mask-interactive-demo blog-mask-interactive-demo--fallback">
			<div className="blog-mask-interactive-demo__field">
				<label className="blog-mask-interactive-demo__label">Kart numarası</label>
				<input
					className="blog-mask-interactive-demo__input"
					placeholder="0000 0000 0000 0000"
					readOnly
					tabIndex={-1}
					aria-hidden
				/>
				<BlogMaskFieldMeta rawValue="" value="" />
			</div>
			<div className="blog-mask-interactive-demo__row">
				<div className="blog-mask-interactive-demo__field">
					<label className="blog-mask-interactive-demo__label">Son kullanma</label>
					<input
						className="blog-mask-interactive-demo__input"
						placeholder="12/28"
						readOnly
						tabIndex={-1}
						aria-hidden
					/>
					<BlogMaskFieldMeta rawValue="" value="" />
				</div>
				<div className="blog-mask-interactive-demo__field">
					<label className="blog-mask-interactive-demo__label">CVV</label>
					<input
						className="blog-mask-interactive-demo__input"
						placeholder="123"
						readOnly
						tabIndex={-1}
						aria-hidden
					/>
					<BlogMaskFieldMeta rawValue="" value="" />
				</div>
			</div>
		</div>
	)
}

export function ViraMaskDemo() {
	return (
		<BlogMaskInteractiveMount>
			<BlogMaskInteractiveFallback />
		</BlogMaskInteractiveMount>
	)
}
