import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

type BlogInfoRowProps = {
	label: string
	value: string | number
	href?: string
	className?: string
}

export function BlogInfoRow({
	label,
	value,
	href,
	className
}: BlogInfoRowProps) {
	return (
		<div className={cn("blog-info-row", className)}>
			<dt className="blog-info-row__label">{label}</dt>
			<dd className="blog-info-row__value">
				{href ? (
					<a
						href={withOutboundUtm(href)}
						target="_blank"
						rel="noopener noreferrer"
					>
						{value}
					</a>
				) : (
					<span>{value}</span>
				)}
			</dd>
		</div>
	)
}
