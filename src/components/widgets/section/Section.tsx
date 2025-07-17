export function Section({
	title,
	children
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<section className="flex flex-col gap-10">
			<h2 className="text-2xl font-medium tracking-tight">{title}</h2>

			{children}
		</section>
	)
}
