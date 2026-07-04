import { Mail } from "lucide-react"

import { GitHubIcon } from "@/components/icons"
import { ClientOnly } from "@/components/shared/client-only"
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
import { EXTERNAL_LINKS, SITE_CONTENT } from "@/constants/site-content.constants"
import { HeroContentMotion } from "@/features/home/components/hero-content-motion.client"
import { HERO_IMAGE } from "@/features/home/constants/hero-image.constants"
import { cn } from "@/lib/utils"

function HeroTitleRow() {
	return (
		<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
			<h1 className={pageTitleClass}>{SITE_CONTENT.displayName}</h1>
			<p className={heroSubtitleClass}>{SITE_CONTENT.jobTitle}</p>
		</div>
	)
}

function HeroBody() {
	return (
		<div className={cn("text-base", proseFlowClass)}>
			<p className={proseParagraphClass}>
				Detaylara ve kaliteye <em>büyük bir tutku</em> duyuyorum; projelerim
				aracılığıyla insanlara faydalı olup onların deneyimlerine değer
				katmayı seviyorum.{" "}
				<VirastackLink>ViraStack</VirastackLink> ile frontend
				geliştiriciler için şablonlardan paketlere uzanan açık kaynak bir
				ekosistem inşa ediyorum.
			</p>
			<p className={proseParagraphClass}>
				Bana <ProseLink href={EXTERNAL_LINKS.x}>@omergulcicek</ProseLink> ve{" "}
				<ProseIconLink
					href={EXTERNAL_LINKS.email}
					icon={<Mail className="size-3.5 shrink-0" strokeWidth={2} />}
				>
					e-posta
				</ProseIconLink>{" "}
				yoluyla ulaşabilir ya da{" "}
				<ProseIconLink
					href={EXTERNAL_LINKS.github}
					icon={
						<GitHubIcon className="size-3.5 shrink-0 text-[#181717] dark:text-[#f0f6fc]" />
					}
				>
					GitHub
				</ProseIconLink>
				&apos;daki kodlarıma göz atabilirsiniz.
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
						src={HERO_IMAGE.sources.jpeg}
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
