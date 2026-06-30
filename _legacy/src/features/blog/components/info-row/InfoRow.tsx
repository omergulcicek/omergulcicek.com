import Link from "next/link"

export function InfoRow({
	label,
	value,
	link
}: {
	label: string
	value: string | number | undefined
	link?: string
}) {
	if (value === undefined || value === "") return null
	return (
		<div className="flex items-center gap-x-2">
			<span className="text-muted-foreground basis-24 md:basis-48">
				{label}
			</span>
			{link ? (
				<Link href={link} target="_blank" rel="noopener noreferrer">
					{value}
				</Link>
			) : (
				<span>{value}</span>
			)}
		</div>
	)
}
