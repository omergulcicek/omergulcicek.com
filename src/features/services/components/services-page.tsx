import { Mail } from "lucide-react"

import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import {
	ProseIconLink,
	ProseLink
} from "@/components/shared/prose-link"
import { proseFlowClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SERVICES_CONTENT } from "@/features/services/constants/services.constants"

export function ServicesPage() {
	return (
		<Container className="flex flex-col gap-12 py-10 md:gap-16 md:py-16">
			<PageHeader title={SERVICES_CONTENT.pageTitle} showOpenToWork>
				<p className={proseParagraphClass}>
					Geliştirme, Danışmanlık ve frontend eğitimi sunuyorum.
				</p>
			</PageHeader>

			<section className="flex flex-col gap-6">
				<SectionHeading>{SERVICES_CONTENT.developmentSectionTitle}</SectionHeading>
				<div className={proseFlowClass}>
					<p className={proseParagraphClass}>
						Her ölçekte site ve uygulama geliştirebilirim; sıfırdan kurulumdan
						mevcut ürünü güncellemeye, proje bazlı iyileştirmeye kadar.
					</p>
					<p className={proseParagraphClass}>
						Farklı ölçeklerde frontend projelerinde çalıştım;{" "}
						<ProseEmphasis>
							mimari, performans ve kod kalitesi
						</ProseEmphasis>{" "}
						konularında destek verebilirim. Proje kararlarında teknik
						yönlendirme ve code review ihtiyacınız varsa birlikte
						ilerleyebiliriz.
					</p>
				</div>
			</section>

			<section className="flex flex-col gap-6">
				<SectionHeading>{SERVICES_CONTENT.educationSectionTitle}</SectionHeading>
				<div className={proseFlowClass}>
					<p className={proseParagraphClass}>
						Birebir, küçük grup veya online eğitim verebilirim. Amacım sizi{" "}
						<ProseEmphasis>
							sektörde rahatça çalışabileceğiniz seviyeye
						</ProseEmphasis>{" "}
						getirmek.
					</p>
					<p className={proseParagraphClass}>
						Daha önce yüzlerce saat birebir ve grup dersi verdim.{" "}
						<ProseLink href={EXTERNAL_LINKS.kodluyoruz}>Kodluyoruz</ProseLink>
						&apos;ta frontend eğitmenliği yaptım. Tanışma görüşmesi{" "}
						<em>ücretsiz</em>; uygun görürsek seviyenize göre ders programına başlarız.
					</p>
				</div>
			</section>

			<p className={proseParagraphClass}>
				Geliştirme, Danışmanlık veya eğitim için projenizi{" "}
				<ProseIconLink
					href={EXTERNAL_LINKS.email}
					icon={<Mail className="size-3.5 shrink-0" strokeWidth={2} />}
				>
					e-posta
				</ProseIconLink>{" "}
				ile gönderin.
			</p>
		</Container>
	)
}
