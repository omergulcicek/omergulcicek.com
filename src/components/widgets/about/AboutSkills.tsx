import { Section } from "@/widgets"

export function AboutSkills() {
	return (
		<Section title="Hakkımda">
			<div className="flex flex-col gap-4 text-base leading-relaxed text-neutral-600">
				<p>
					Modern web uygulamalarının farklı katmanlarında deneyime sahip bir{" "}
					<span className="text-black font-medium">
						Senior Frontend Engineer
					</span>{" "}
					olarak, <span className="text-black font-medium">React</span> ve{" "}
					<span className="text-black font-medium">Next.js</span> ekosisteminde
					ölçeklenebilir ve sürdürülebilir çözümler geliştiriyorum.{" "}
					<span className="text-black font-medium">TypeScript</span> ile tip
					güvenliğini en baştan sağlayarak, uzun vadeli bakım maliyeti düşük ve
					güvenilir sistemler kurmaya odaklanıyorum.
				</p>

				<p>
					<span className="text-black font-medium">Tailwind CSS</span> ve{" "}
					<span className="text-black font-medium">shadcn/ui</span> ile hızlı ve
					tutarlı arayüzler tasarlarken,{" "}
					<span className="text-black font-medium">Zustand</span> ve{" "}
					<span className="text-black font-medium">Redux</span> gibi state
					yönetim araçlarını ihtiyaca göre projelere entegre ediyorum. API
					katmanında{" "}
					<span className="text-black font-medium">TanStack Query</span>{" "}
					kullanarak cache, background sync ve data fetching stratejileriyle
					performansı artırıyorum.{" "}
					<span className="text-black font-medium">Storybook</span> ile
					bağımsız, tekrar kullanılabilir component yapıları tasarlayarak ekibin
					geliştirme hızını artırıyorum.
				</p>

				<p>
					Performans tarafında bundle analizleri,{" "}
					<span className="text-black font-medium">Core Web Vitals</span> metrik
					takibi ve{" "}
					<span className="text-black font-medium">code splitting</span>{" "}
					stratejileri uygulayarak kullanıcı deneyimini sürekli iyileştiriyorum.{" "}
					<span className="text-black font-medium">React Hook Form</span> ile
					form süreçlerini sadeleştiriyor,{" "}
					<span className="text-black font-medium">Zod</span> ile runtime
					validation yönetiyorum.{" "}
					<span className="text-black font-medium">Vercel</span> üzerinde CI/CD
					süreçleri kurarak güvenilir ve hızlı deployment sağlıyorum.
				</p>

				<p>
					Teknik katkılarımın yanında ekiplerde{" "}
					<span className="text-black font-medium">code review</span>{" "}
					süreçlerini standartlaştırıyor,{" "}
					<span className="text-black font-medium">
						junior/mid geliştiricilere mentorluk
					</span>{" "}
					yaparak bilgi paylaşımını teşvik ediyorum. Ürün, tasarım ve Backend
					ekipleriyle yakın çalışarak iş hedeflerini teknik çözümlere dönüştürme
					konusunda aktif rol alıyorum.
				</p>

				<p>
					Açık kaynak projelere katkıda bulunuyor, blog yazılarıyla
					deneyimlerimi aktarıyorum. Uzun vadede{" "}
					<span className="text-black font-medium">Frontend Architect</span>{" "}
					rolüne odaklanarak, büyük ölçekli projelerde frontend mimarilerini
					şekillendirmeyi ve teknoloji stratejileri geliştirmeyi hedefliyorum.
				</p>
			</div>
		</Section>
	)
}
