import { Mail } from "lucide-react"

import { GitHubIcon } from "@/components/icons"
import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import {
	ProseIconLink,
	ProseLink,
	ProseRouterLink
} from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion"
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
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { CV_FILES } from "@/features/experiences/constants/experiences.constants"
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
								Merhaba, ben Ömer. Sakarya&apos;da yaşayan Trabzonlu bir yazılım
								mühendisiyim.
							</p>
							<p className={proseParagraphClass}>
								Yazılım mühendisliği altyapımla frontend geliştirmeye{" "}
								<em>bütüncül bir disiplinle</em> yaklaşıyorum. Bir ürünü önce
								kullanıcının, ardından kodun gözüyle değerlendiririm. Kişisel
								projelerimin yanı sıra kurucusu olduğum{" "}
								<VirastackLink>ViraStack</VirastackLink> ile ekosisteme
								odaklanıyorum.
							</p>
							<p className={proseParagraphClass}>
								Farklı ölçeklerdeki frontend projelerinde;{" "}
								<ProseEmphasis>
									mimari sağlamlık, yüksek performans ve geliştirici deneyimine
									(DX)
								</ProseEmphasis>{" "}
								önem veriyorum. Ekibin daha güvenle ilerlemesini sağlamayı;
								yapay zekâyı da bu süreçte <em>bilinçli ve kontrollü</em> bir
								kaldıraç olarak kullanmayı benimsiyorum.
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
							geliştirme, danışmanlık ve frontend eğitimi
						</li>
					</ul>
					<p className={proseParagraphClass}>
						Benimle{" "}
						<ProseIconLink
							href={EXTERNAL_LINKS.email}
							icon={<Mail className="size-3.5 shrink-0" strokeWidth={2} />}
						>
							e-posta
						</ProseIconLink>{" "}
						yoluyla iletişime geçebilir,{" "}
						<ProseLink href={CV_FILES.tr.href}>özgeçmişimi</ProseLink>{" "}
						indirebilir ya da{" "}
						<ProseIconLink
							href={EXTERNAL_LINKS.github}
							icon={
								<GitHubIcon className="size-3.5 shrink-0 text-[#181717] dark:text-[#f0f6fc]" />
							}
						>
							GitHub
						</ProseIconLink>
						&apos;daki projelerime göz atabilirsiniz.
					</p>
				</Container>
			</StaggerItem>
		</StaggerContainer>
	)
}
