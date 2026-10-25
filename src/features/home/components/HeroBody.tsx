import { Mail } from "lucide-react"
import { GitHubIcon } from "@/components/shared/icons"
import { ProseIconLink } from "@/components/shared/ProseIconLink"
import { ProseLink } from "@/components/shared/ProseLink"
import { VirastackLink } from "@/components/shared/VirastackLink"
import { proseFlowClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { cn } from "@/lib/utils"

export function HeroBody() {
	const { hero } = SITE_COPY.home

	return (
		<div className={cn("text-base", proseFlowClass)}>
			<p className={proseParagraphClass}>
				{hero.architecture} <VirastackLink>{hero.virastack.link}</VirastackLink>
				{hero.virastack.after}
			</p>
			<p className={proseParagraphClass}>{hero.ai}</p>
			<p className={proseParagraphClass}>
				{hero.contact.before}
				<ProseIconLink
					href={EXTERNAL_LINKS.email}
					icon={<Mail className="size-3.5 shrink-0" strokeWidth={2} />}
				>
					{hero.contact.email}
				</ProseIconLink>
				{hero.contact.separator}
				<ProseLink href={EXTERNAL_LINKS.linkedin}>{hero.contact.linkedin}</ProseLink>
				{hero.contact.or}
				<ProseLink href={EXTERNAL_LINKS.x}>{hero.contact.x}</ProseLink>
				{hero.contact.after}
				<ProseIconLink
					href={EXTERNAL_LINKS.github}
					icon={
						<GitHubIcon className="size-3.5 shrink-0 text-brand-github" />
					}
				>
					{hero.contact.github}
				</ProseIconLink>
				{hero.contact.end}
			</p>
		</div>
	)
}
