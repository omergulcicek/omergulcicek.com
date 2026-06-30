import { GitHubIcon } from "@/components/icons"
import { Container } from "@/components/shared/Container"
import { OpenToWorkBadge } from "@/components/shared/open-to-work-badge"
import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import {
	ProseIconLink,
	ProseLink,
	ProseRouterLink
} from "@/components/shared/prose-link"
import {
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { ABOUT_CONTENT } from "@/features/about/constants/about.constants"
import { STACK_ITEMS } from "@/features/about/constants/stack.constants"
import { GitHubContributionCalendar } from "@/features/about/components/github-contribution-calendar"
import { HobbyList } from "@/features/about/components/hobby-list"
import { StackStrip } from "@/features/home/components/StackStrip"
import { cn } from "@/lib/utils"

export function AboutPage() {
	return (
		<div className="flex flex-col gap-12 py-10 md:gap-16 md:py-16">
			<Container className="flex flex-col gap-12 md:gap-16">
				<section className="flex flex-col gap-4">
					<div className="flex flex-wrap items-center gap-3">
						<SectionHeading>{ABOUT_CONTENT.title}</SectionHeading>
						<OpenToWorkBadge />
					</div>

					<div className={proseFlowClass}>
						<p className={proseParagraphClass}>
							Merhaba, ben Ömer. Sakarya&apos;da yaşayan, Trabzonlu bir yazılım
							mühendisiyim.
						</p>
						<p className={proseParagraphClass}>
							Detaylara ve kaliteye <em>büyük bir tutku</em> duyuyorum; işimle
							insanlara faydalı olmayı ve deneyimlerine değer katmayı seviyorum.
							Şu aralar kişisel projelerimin yanı sıra{" "}
							<ProseLink href={EXTERNAL_LINKS.virastack}>ViraStack</ProseLink>{" "}
							ekosistemine odaklanıyorum.
						</p>
						<p className={proseParagraphClass}>
							Yıllardır farklı ölçeklerde frontend projelerinde çalışıyorum;{" "}
							<ProseEmphasis>
								mimari, performans ve geliştirici deneyimine
							</ProseEmphasis>{" "}
							önem veriyorum. Ekibin daha güvenle ilerlemesini sağlamayı da
							önemsiyorum. Yapay zekâyı da bu disiplinin içinde,{" "}
							<em>bilinçli ve kontrollü</em> şekilde kullanıyorum.
						</p>
					</div>
				</section>
			</Container>

			<StackStrip items={STACK_ITEMS} />

			<section className="flex flex-col gap-6 md:gap-8">
				<Container className="flex flex-col gap-4">
					<SectionHeading>Üretim Kültürü</SectionHeading>
					<div className={proseFlowClass}>
						<p className={proseParagraphClass}>
							Projelerimi açık kaynakta, tecrübelerimi blogda paylaşıyorum.
						</p>
						<p className={proseParagraphClass}>
							Son bir yıldaki{" "}
							<ProseIconLink
								href={EXTERNAL_LINKS.github}
								icon={
									<GitHubIcon className="size-3.5 shrink-0 text-[#181717] dark:text-[#f0f6fc]" />
								}
							>
								GitHub
							</ProseIconLink>{" "}
							katkılarım:
						</p>
					</div>
				</Container>

				<GitHubContributionCalendar />
			</section>

			<Container className="flex flex-col gap-12 md:gap-16">
				<section className="flex flex-col gap-6">
					<SectionHeading>Hobiler</SectionHeading>
					<HobbyList />
				</section>

				<ul className={cn("flex flex-col", proseFlowClass)}>
					<li className={proseParagraphClass}>
						<ProseRouterLink to="/experiences">Deneyimlerim</ProseRouterLink> —
						kariyer geçmişi ve CV
					</li>
					<li className={proseParagraphClass}>
						<ProseRouterLink to="/services">Hizmetler</ProseRouterLink> —
						geliştirme, Danışmanlık ve frontend eğitimi
					</li>
				</ul>
			</Container>
		</div>
	)
}
