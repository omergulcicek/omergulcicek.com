import { Mail } from "lucide-react"

import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import {
	ProseIconLink,
	ProseLink,
	ProseRouterLink
} from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion"
import {
	pageSectionClass,
	pageShellClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SERVICES_CONTENT } from "@/features/services/constants/services.constants"

export function ServicesPage() {
	return (
		<Container>
			<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader
						title={SERVICES_CONTENT.pageTitle}
						showOpenToWork
						openToWorkLabel="Yeni projelere açığım"
						openToWorkPlacement="inline"
					>
						<p className={proseParagraphClass}>
							Geliştirme, danışmanlık ve frontend eğitimi sunuyorum.
						</p>
					</PageHeader>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading>{SERVICES_CONTENT.developmentSectionTitle}</SectionHeading>
					<div className={proseFlowClass}>
						<p className={proseParagraphClass}>
							Sıfırdan kurulum, mevcut ürünü güncelleme ve proje bazlı iyileştirme
							konularında destek veriyorum. Next.js veya TanStack Start ile{" "}
							<ProseEmphasis>proje mimarisi</ProseEmphasis> kurar, Lighthouse
							odaklı <ProseEmphasis>performans ve SEO</ProseEmphasis>{" "}
							iyileştirmesi yapar, kod standartları ve code review ile ekibin
							kalitesini yükseltirim. Tasarım sistemine uygun, dokümantasyonlu bir
							ortak UI kit de kurabilirim.
						</p>
						<p className={proseParagraphClass}>
							Önce ihtiyacı birlikte netleştiririz; görüşme <em>ücretsiz</em>.
							Ardından kapsamı, süreyi ve bütçeyi yazılı paylaşırım. İş bitince
							kodu ve dokümanı teslim eder, ekibinizin devralması için destek
							veririm.
						</p>
						<p className={proseParagraphClass}>
							Machinarium&apos;da 10 kişilik frontend ekibine teknik liderlik
							ettim ve ortak bileşen kütüphanesiyle teknik borcu azalttım.
							Alışgidiş&apos;te frontend mimarisini sıfırdan kurup Lighthouse ile
							hız ve SEO performansını artırdım. Ayrıntılar için{" "}
							<ProseRouterLink to="/experiences">Deneyimlerim</ProseRouterLink>{" "}
							sayfasına bakabilirsiniz.
						</p>
					</div>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading>{SERVICES_CONTENT.educationSectionTitle}</SectionHeading>
					<div className={proseFlowClass}>
						<p className={proseParagraphClass}>
							Birebir, küçük grup veya online eğitim veriyorum. Amacım sizi{" "}
							<ProseEmphasis>
								sektörde rahatça çalışabileceğiniz seviyeye
							</ProseEmphasis>{" "}
							getirmek.
						</p>
						<p className={proseParagraphClass}>
							<ProseLink href={EXTERNAL_LINKS.kodluyoruz}>Kodluyoruz</ProseLink>
							&apos;ta 30 öğrenciye Frontend 101 eğitimi verdim. Kendi hızınızda
							ilerlemek isterseniz{" "}
							<ProseLink href={EXTERNAL_LINKS.virastackAcademy}>
								ViraStack Academy
							</ProseLink>{" "}
							ücretsiz. Birebir ders için tanışma görüşmesi de{" "}
							<em>ücretsiz</em>.
						</p>
					</div>
				</StaggerItem>

				<StaggerItem>
					<p className={proseParagraphClass}>
						Geliştirme, danışmanlık veya eğitim için projenizi{" "}
						<ProseIconLink
							href={EXTERNAL_LINKS.emailServices}
							icon={<Mail className="size-3.5 shrink-0" strokeWidth={2} />}
						>
							e-posta
						</ProseIconLink>{" "}
						ile gönderin.
					</p>
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
