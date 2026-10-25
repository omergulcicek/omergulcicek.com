import { ClientOnly } from "@tanstack/react-router"
import { Mail } from "lucide-react"

import { GitHubIcon } from "@/components/icons"
import { ProseIconLink, ProseLink } from "@/components/shared/prose-link"
import { VirastackLink } from "@/components/shared/virastack-link"
import {
	pageSectionClass,
	heroSubtitleClass,
	pageTitleClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SocialLinks } from "@/components/shared/SocialLinks"
import { ME } from "@/constants/me.constants"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { HeroContentMotion } from "@/features/home/components/hero-content-motion"
import { HERO_IMAGE } from "@/features/home/constants/hero-image.constants"
import { cn } from "@/lib/utils"

function HeroTitleRow() {
	return (
		<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
			<h1 className={pageTitleClass}>{ME.personal.fullName}</h1>
			<p className={heroSubtitleClass}>{ME.personal.title}</p>
		</div>
	)
}

function HeroBody() {
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
						<GitHubIcon className="size-3.5 shrink-0 text-[#181717] dark:text-[#f0f6fc]" />
					}
				>
					{hero.contact.github}
				</ProseIconLink>
				{hero.contact.end}
			</p>
		</div>
	)
}

function HeroContentStatic() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<HeroTitleRow />
				<SocialLinks className="sm:shrink-0" />
			</div>
			<HeroBody />
		</div>
	)
}

export function Hero() {
	return (
		<section className={pageSectionClass}>
			<figure className="motion-enter-hero-image vt-hero-image relative size-54 shrink-0 overflow-hidden rounded-xl ring-1 ring-border ring-offset-3 ring-offset-background">
				<picture>
					<source
						type="image/webp"
						srcSet={`${HERO_IMAGE.sources.webp["1x"]} 1x, ${HERO_IMAGE.sources.webp["2x"]} 2x`}
					/>
					<img
						src={HERO_IMAGE.sources.webp["1x"]}
						alt={HERO_IMAGE.alt}
						width={HERO_IMAGE.width}
						height={HERO_IMAGE.height}
						fetchPriority="high"
						loading="eager"
						decoding="async"
						sizes={`${HERO_IMAGE.width}px`}
						className="image-outline absolute inset-0 size-full object-cover object-bottom select-none"
					/>
				</picture>
			</figure>
			<ClientOnly fallback={<HeroContentStatic />}>
				<HeroContentMotion
					titleRow={<HeroTitleRow />}
					socialLinks={<SocialLinks />}
					body={<HeroBody />}
				/>
			</ClientOnly>
		</section>
	)
}
