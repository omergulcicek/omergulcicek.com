import { heroSubtitleClass, pageTitleClass } from "@/components/shared/prose.styles"
import { ME } from "@/constants/me.constants"

export function HeroTitleRow() {
	return (
		<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
			<h1 className={pageTitleClass}>{ME.personal.fullName}</h1>
			<p className={heroSubtitleClass}>{ME.personal.title}</p>
		</div>
	)
}
