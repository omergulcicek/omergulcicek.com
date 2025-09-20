import { Section } from "@/widgets"

export function AboutSkills() {
	return (
		<Section title="Hakkımda">
			<div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed">
				<p>
					Modern web uygulamalarının farklı katmanlarında deneyime sahip bir
					<strong className="font-medium">
						{" "}
						Senior Frontend Engineer
					</strong>{" "}
					olarak,
					<strong> React</strong> ve <strong> Next.js</strong> ekosisteminde
					ölçeklenebilir ve sürdürülebilir çözümler geliştiriyorum.
					<strong> TypeScript</strong> ile tip güvenliğini en baştan sağlayarak,
					uzun vadede bakım maliyeti düşük ve güvenilir sistemler kurmaya
					odaklanıyorum.
				</p>

				<p>
					<strong> Tailwind CSS</strong> ve <strong> shadcn/ui</strong> ile
					hızlı ve tutarlı arayüzler tasarlarken, <strong> Zustand</strong> ve
					<strong> Redux</strong> gibi state yönetim araçlarını projelere
					ihtiyaca göre entegre ediyorum. API katmanında
					<strong> TanStack Query</strong> kullanarak cache, background sync ve
					data fetching stratejileriyle performansı artırıyorum. Bileşen odaklı
					geliştirme süreçlerinde <strong> Storybook</strong> ile bağımsız,
					tekrar kullanılabilir component yapıları oluşturuyorum.
				</p>

				<p>
					Uygulama performansını sürekli geliştirmek için bundle analizleri,
					<strong> Core Web Vitals</strong> takibi ve{" "}
					<strong> code splitting</strong> stratejileri uyguluyorum. Form
					yönetiminde
					<strong> React Hook Form</strong> ile kullanıcı deneyimini
					sadeleştiriyor,
					<strong> Zod</strong> ile runtime validation süreçlerini yönetiyorum.
					Ayrıca <strong> Vercel</strong> üzerinde CI/CD süreçleri tasarlayarak
					hızlı ve güvenilir deployment sağlıyorum.
				</p>

				<p>
					Teknik liderlik rollerimde ekip yönetimi, kod kalitesi standartlarının
					belirlenmesi ve uzun vadeli teknik kararların alınmasında aktif
					sorumluluklar üstlendim. Kariyerimin ilerleyen dönemlerinde
					<strong> Frontend Architect</strong> rolüne odaklanarak, büyük ölçekli
					projelerde frontend mimarilerini şekillendirmeyi ve teknoloji
					stratejileri geliştirmeyi hedefliyorum.
				</p>
			</div>
		</Section>
	)
}
