import { cn } from "@/utils"

export const StackItem = ({ img, name }: { img: string; name: string }) => {
	return (
		<figure
			className={cn(
				"relative flex flex-col items-center justify-between gap-2 p-4 cursor-default w-32 h-28 transition hover:scale-105"
			)}
		>
			<img width="44" height="44" className="size-11" alt={name} src={img} />
			<figcaption className="text-sm text-center">{name}</figcaption>
		</figure>
	)
}
