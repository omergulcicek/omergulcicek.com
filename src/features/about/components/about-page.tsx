import { GitHubIcon } from "@/components/icons"
import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import {
	ProseIconLink,
	ProseRouterLink
} from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion.client"
import { VirastackLink } from "@/components/shared/virastack-link"
import {
	pageSectionClass,
	pageShellClass,
	pageStackGapClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { ABOUT_CONTENT } from "@/features/about/constants/about.constants"
import { GitHubContributionCalendar } from "@/features/about/components/github-contribution-calendar.client"
import { HobbyList } from "@/features/about/components/hobby-list"
import type { GitHubContribution } from "@/features/about/schemas/github-contribution.schema"
import { cn } from "@/lib/utils"

type AboutPageProps = {
	contributions: GitHubContribution[]
}

export function AboutPage({ contributions }: AboutPageProps) {
	return (
		<StaggerContainer className={pageShellClass}>
			<StaggerItem>
				<Container className={cn("flex flex-col", pageStackGapClass)}>
					<PageHeader title={ABOUT_CONTENT.title} className="vt-about-block">
						<div className={proseFlowClass}>
							<p className={proseParagraphClass}>
								Merhaba, ben Ömer. Sakarya&apos;da yaşayan, Trabzonlu bir yazılım
								mühendisiyim.
							</p>
							<p className={proseParagraphClass}>
								Detaylara ve kaliteye <em>büyük bir tutku</em> duyuyorum; işimle
								insanlara faydalı olmayı ve deneyimlerine değer katmayı seviyorum.
								Şu aralar kişisel projelerimin yanı sıra{" "}
								<VirastackLink>ViraStack</VirastackLink>{" "}
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
					</PageHeader>
				</Container>
			</StaggerItem>

			<StaggerItem className={pageSectionClass}>
				<Container className={pageSectionClass}>
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

				<GitHubContributionCalendar contributions={contributions} />
			</StaggerItem>

			<StaggerItem>
				<Container className={cn("flex flex-col", pageStackGapClass)}>
					<section className={pageSectionClass}>
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
			</StaggerItem>
		</StaggerContainer>
	)
}
