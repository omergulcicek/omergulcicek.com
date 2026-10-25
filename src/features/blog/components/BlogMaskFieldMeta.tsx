type BlogMaskFieldMetaProps = {
	rawValue: string
	value: string
}

export function BlogMaskFieldMeta({ rawValue, value }: BlogMaskFieldMetaProps) {
	return (
		<div className="blog-mask-interactive-demo__meta">
			<span>rawValue: {rawValue || "—"}</span>
			<span>value: {value || "—"}</span>
		</div>
	)
}
