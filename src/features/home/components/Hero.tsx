import { Mail } from "lucide-react"

import { GitHubIcon } from "@/components/icons"
import { ProseIconLink, ProseLink } from "@/components/shared/prose-link"
import { proseFlowClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { SocialLinks } from "@/components/shared/SocialLinks"
import { EXTERNAL_LINKS, SITE_CONTENT } from "@/constants/site-content.constants"
import { cn } from "@/lib/utils"

export function Hero() {
	return (
		<section className="flex flex-col gap-4">
			<figure className="relative aspect-square w-full overflow-hidden rounded-xl ring-1 ring-border ring-offset-3 ring-offset-background">
				<img
					src="/omergulcicek.JPG"
					alt={SITE_CONTENT.displayName}
					width={672}
					height={672}
					fetchPriority="high"
					decoding="async"
					className="absolute inset-0 size-full object-cover object-bottom select-none"
				/>
			</figure>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
					<h1 className="text-foreground text-base font-semibold">
						{SITE_CONTENT.displayName}
					</h1>
					<p className="text-muted-foreground text-base font-normal">
						{SITE_CONTENT.jobTitle}
					</p>
				</div>
				<SocialLinks className="sm:shrink-0" />
			</div>
			<div className={cn("text-base", proseFlowClass)}>
				<p className={proseParagraphClass}>
					Detaylara ve kaliteye <em>büyük bir tutku</em> duyuyorum; projelerim
					aracılığıyla insanlara faydalı olup onların deneyimlerine değer
					katmayı seviyorum.{" "}
					<ProseLink href={EXTERNAL_LINKS.virastack}>ViraStack</ProseLink> ile
					frontend geliştiriciler için şablonlardan paketlere uzanan açık kaynak
					bir ekosistem inşa ediyorum.
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
		</section>
	)
}
