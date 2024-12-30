import Link from "next/link"

export const WorkpaceItem = ({ data }: any) => {
	return (
		<>
			<div className="grid grid-cols-1 gap-y-4">
				{data.map(({ title, subTitle, description, image }: any) => (
					<div className="grid grid-cols-4 gap-5 shadow-sm border rounded-md p-8">
						<div className="col-span-3 flex flex-col gap-3">
							<div className="flex flex-col items-start">
								<Link href="/" className="font-medium text-blue-400">
									{title}
								</Link>
								<span>{subTitle}</span>
							</div>
							<p className="text-secondary-foreground">{description}</p>
						</div>
						<figure className="col-span-1">
							<img src={image} alt={title} className="size-32 rounded-md" />
						</figure>
					</div>
				))}
			</div>
		</>
	)
}
