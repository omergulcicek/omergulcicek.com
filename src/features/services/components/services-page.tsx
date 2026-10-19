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
import { cn } from "@/lib/utils"
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
							konularında destek veriyorum. Somut olarak:
						</p>
						<ul className={cn("flex flex-col", proseFlowClass)}>
							<li className={proseParagraphClass}>
								<ProseEmphasis>Mimari:</ProseEmphasis> Next.js veya TanStack Start
								ile proje yapısı, state ve veri katmanı kurulumu.
							</li>
							<li className={proseParagraphClass}>
								<ProseEmphasis>Performans ve kalite:</ProseEmphasis> Lighthouse
								odaklı hız ve SEO iyileştirmesi, kod standartları ve code review.
							</li>
							<li className={proseParagraphClass}>
								<ProseEmphasis>Bileşen kütüphanesi:</ProseEmphasis> Tasarım
								sistemine uygun, dokümantasyonlu ortak UI kit.
							</li>
						</ul>
					</div>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading>{SERVICES_CONTENT.processSectionTitle}</SectionHeading>
					<ul className={cn("flex flex-col", proseFlowClass)}>
						<li className={proseParagraphClass}>
							<ProseEmphasis>1. Tanışma:</ProseEmphasis> İhtiyacı birlikte
							netleştiririz. Görüşme <em>ücretsiz</em>.
						</li>
						<li className={proseParagraphClass}>
							<ProseEmphasis>2. Kapsam ve teklif:</ProseEmphasis> Yapılacak işi,
							süreyi ve bütçeyi yazılı olarak paylaşırım.
						</li>
						<li className={proseParagraphClass}>
							<ProseEmphasis>3. Teslim:</ProseEmphasis> Kodu ve dokümanı
							teslim ederim, ekibinizin devralması için gerekli desteği veririm.
						</li>
					</ul>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading>{SERVICES_CONTENT.referencesSectionTitle}</SectionHeading>
					<div className={proseFlowClass}>
						<p className={proseParagraphClass}>
							Machinarium&apos;da 10 kişilik frontend ekibine teknik liderlik
							ettim; ortak bileşen kütüphanesiyle teknik borcu azalttım.
							Alışgidiş&apos;te frontend mimarisini sıfırdan kurdum ve
							Lighthouse ile hız ve SEO performansını artırdım.
						</p>
						<p className={proseParagraphClass}>
							Ayrıntılar için{" "}
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
