import { pageSectionClass } from "@/components/shared/prose.styles"
import { SocialLinks } from "@/components/shared/SocialLinks"
import { HeroContentMotion } from "@/features/home/components/HeroContentMotion"
import { HERO_IMAGE } from "@/constants/hero-image.constants"
import { HeroTitleRow } from "@/features/home/components/HeroTitleRow"
import { HeroBody } from "@/features/home/components/HeroBody"

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
			<HeroContentMotion
				titleRow={<HeroTitleRow />}
				socialLinks={<SocialLinks />}
				body={<HeroBody />}
			/>
		</section>
	)
}
