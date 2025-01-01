export const WorkpaceItem = ({ data }: any) => {
	return (
		<>
			<div className="grid grid-cols-2 gap-4">
				{data.map(({ title, description, image }: any) => (
					<div className="relative flex flex-col items-center gap-5 shadow-sm border rounded-md p-8">
						<figure className="size-32 overflow-hidden mx-auto">
							<img
								src={image}
								alt={title}
								className="absolute size-32 rounded-md object-contain"
							/>
						</figure>

						<div className="flex flex-col items-start">
							<strong className="font-medium">{title}</strong>
							<span className="text-secondary-foreground">{description}</span>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
