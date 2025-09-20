import { Section } from "@/widgets"

export function AboutSkills() {
	return (
		<Section title="Hakkımda">
			<div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed">
				<p>
					Modern web uygulamalarının farklı katmanlarında deneyime sahip bir{" "}
					<strong>Senior Frontend Engineer</strong> olarak,{" "}
					<strong>React</strong> ve <strong>Next.js</strong> ekosisteminde
					ölçeklenebilir ve sürdürülebilir çözümler geliştiriyorum.{" "}
					<strong>TypeScript</strong> ile tip güvenliğini en baştan sağlayarak,
					uzun vadeli bakım maliyeti düşük ve güvenilir sistemler kurmaya
					odaklanıyorum.
				</p>

				<p>
					<strong>Tailwind CSS</strong> ve <strong>shadcn/ui</strong> ile hızlı
					ve tutarlı arayüzler tasarlarken, <strong>Zustand</strong> ve{" "}
					<strong>Redux</strong> gibi state yönetim araçlarını ihtiyaca göre
					projelere entegre ediyorum. API katmanında{" "}
					<strong>TanStack Query</strong> kullanarak cache, background sync ve
					data fetching stratejileriyle performansı artırıyorum.{" "}
					<strong>Storybook</strong> ile bağımsız, tekrar kullanılabilir
					component yapıları tasarlayarak ekibin geliştirme hızını artırıyorum.
				</p>

				<p>
					Performans tarafında bundle analizleri,{" "}
					<strong>Core Web Vitals</strong> metrik takibi ve{" "}
					<strong>code splitting</strong> stratejileri uygulayarak kullanıcı
					deneyimini sürekli iyileştiriyorum. <strong>React Hook Form</strong>{" "}
					ile form süreçlerini sadeleştiriyor, <strong>Zod</strong> ile runtime
					validation yönetiyorum. <strong>Vercel</strong> üzerinde CI/CD
					süreçleri kurarak güvenilir ve hızlı deployment sağlıyorum.
				</p>

				<p>
					Teknik katkılarımın yanında ekiplerde <strong>code review</strong>{" "}
					süreçlerini standartlaştırıyor,{" "}
					<strong>junior/mid geliştiricilere mentorluk</strong> yaparak bilgi
					paylaşımını teşvik ediyorum. Ürün, tasarım ve Backend ekipleriyle
					yakın çalışarak iş hedeflerini teknik çözümlere dönüştürme konusunda
					aktif rol alıyorum.
				</p>

				<p>
					Açık kaynak projelere katkıda bulunuyor, blog yazılarıyla
					deneyimlerimi aktarıyorum. Uzun vadede{" "}
					<strong>Frontend Architect</strong> rolüne odaklanarak, büyük ölçekli
					projelerde frontend mimarilerini şekillendirmeyi ve teknoloji
					stratejileri geliştirmeyi hedefliyorum.
				</p>
			</div>
		</Section>
	)
}
