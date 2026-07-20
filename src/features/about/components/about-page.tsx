import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import {
	ProseRouterLink
} from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion.client"
import { VirastackLink } from "@/components/shared/virastack-link"
import {
	bleedSectionClass,
	pageSectionClass,
	pageShellClass,
	pageStackGapClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ABOUT_CONTENT } from "@/features/about/constants/about.constants"
import { BentoInterests } from "@/features/about/components/bento-interests"
import { cn } from "@/lib/utils"

export function AboutPage() {
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

			<StaggerItem>
				<section className={pageSectionClass}>
					<Container>
						<SectionHeading>İlgi Alanları</SectionHeading>
					</Container>
					<div className={bleedSectionClass}>
						<BentoInterests />
					</div>
				</section>
			</StaggerItem>

			<StaggerItem>
				<Container className={cn("flex flex-col", pageStackGapClass)}>
					<ul className={cn("flex flex-col", proseFlowClass)}>
						<li className={proseParagraphClass}>
							<ProseRouterLink to="/experiences">Deneyimlerim</ProseRouterLink> —
							kariyer geçmişi ve CV
						</li>
						<li className={proseParagraphClass}>
							<ProseRouterLink to="/journey">Yolculuk</ProseRouterLink> —
							iş, proje ve hayat anıları
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
