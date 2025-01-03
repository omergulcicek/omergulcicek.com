import BlurFade from "@/ui/blur-fade"

export const WorkpaceItem = ({ data }: any) => {
	return (
		<>
			<div className="grid grid-cols-2 gap-4">
				{data.map(({ title, description, image }: any, index: number) => (
					<BlurFade key={title} delay={0.25 + index * 0.05} duration={0.1}>
						<div
							className="relative flex flex-col items-center gap-5 shadow-sm border rounded-md p-8"
							key={title}
						>
							<figure className="size-32 overflow-hidden mx-auto">
								<img
									src={`/img/workspace/${image}.png`}
									alt={title}
									className="absolute size-32 rounded-md object-contain"
								/>
							</figure>

							<div className="flex flex-col items-start">
								<strong className="font-medium">{title}</strong>
								<span className="text-secondary-foreground">{description}</span>
							</div>
						</div>
					</BlurFade>
				))}
			</div>
		</>
	)
}
