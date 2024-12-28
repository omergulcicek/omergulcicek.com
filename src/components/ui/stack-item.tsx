import { cn } from "@/utils"
import { getIcon } from "@/utils/get-icon"

export const StackItem = ({ img, name }: { img: string; name: string }) => {
	return (
		<figure
			className={cn(
				"relative flex flex-col items-center justify-between gap-2 p-4 cursor-default md:w-32 md:h-28 transition hover:scale-105"
			)}
		>
			{getIcon(img)}
			<figcaption className="text-sm text-center whitespace-nowrap hidden md:inline-flex">
				{name}
			</figcaption>
		</figure>
	)
}
