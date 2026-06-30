import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import { ProseLink } from "@/components/shared/prose-link"
import { HOBBIES } from "@/features/about/constants/about.constants"
import { cn } from "@/lib/utils"

const hobbyAvatarClass =
	"size-12 shrink-0 overflow-hidden rounded-full ring-1 ring-border ring-offset-3 ring-offset-background"

const cellClass = "py-2 align-middle first:pr-3"

export function HobbyList() {
	return (
		<table className="w-full border-collapse">
			<caption className="sr-only">Hobiler</caption>
			<tbody>
				{HOBBIES.map((hobby) => (
					<tr key={hobby.id}>
						<td className={cn(cellClass, "w-16 min-w-16")}>
							<figure className={hobbyAvatarClass}>
								<img
									src={hobby.avatar}
									alt=""
									width={48}
									height={48}
									loading="lazy"
									decoding="async"
									className="size-full object-cover"
								/>
							</figure>
						</td>
						<td className={cn(cellClass, "whitespace-nowrap pr-2")}>
							<ProseEmphasis>{hobby.title}</ProseEmphasis>
						</td>
						<td
							className={cn(cellClass, "text-muted-foreground w-px pr-2")}
							aria-hidden
						>
							—
						</td>
						<td className={cn(cellClass, "text-base leading-relaxed")}>
							<span>{hobby.text}</span>
							{hobby.href ? (
								<>
									{" "}
									<ProseLink href={hobby.href}>
										{hobby.href.replace(/^https?:\/\//, "")}
									</ProseLink>
								</>
							) : null}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
