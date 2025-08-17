import { Section } from "@/widgets"

export function AboutSkills() {
	return (
		<Section title="Hakkımda">
			<div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed">
				<p>
					Modern web uygulamalarının tüm katmanlarında derinlemesine deneyime
					sahip bir Senior Frontend Engineer olarak, <strong>React</strong> ve{" "}
					<strong>Next.js</strong> ekosisteminde üst düzey çözümler
					geliştiriyor, ölçeklenebilir ve sürdürülebilir mimariler kuruyorum.{" "}
					<strong>TypeScript</strong> ile tip güvenliğini en baştan garanti
					altına alarak, uzun vadede bakım maliyeti düşük sistemler inşa
					ediyorum.
				</p>

				<p>
					<strong>Tailwind CSS</strong> ve <strong>shadcn/ui</strong> ile hızlı
					ve tutarlı kullanıcı arayüzleri geliştirirken,{" "}
					<strong>Zustand</strong> başta olmak üzere <strong>Redux</strong> gibi
					state yönetim araçlarında da yetkinim. <strong>TanStack Query</strong>{" "}
					ile API katmanında cache ve background sync gibi performans
					optimizasyonları sağlıyorum. Component bazlı geliştirme süreçlerinde{" "}
					<strong>Storybook</strong> kullanarak bağımsız, tekrar kullanılabilir
					bileşenler tasarlıyorum.
				</p>

				<p>
					Bundle analizleri, <strong>Core Web Vitals</strong> metrik takibi ve{" "}
					<strong>code splitting</strong> stratejileriyle uygulama performansını
					sürekli iyileştiriyorum. Form yönetiminde{" "}
					<strong>React Hook Form</strong> ile kullanıcı deneyimini
					sadeleştiriyor. <strong>Zod</strong> ile runtime validation
					süreçlerini yönetiyorum. Ayrıca <strong>Vercel</strong> ile modern
					platformlarla CI/CD süreçlerini yönetiyorum.
				</p>

				<p>
					Son olarak, teknik liderlik rollerimde ekip yönetimi, kod kalitesi
					standartlarının belirlenmesi ve uzun vadeli teknik kararların
					alınmasında aktif sorumluluklar üstlendim. Kariyerimin ilerleyen
					dönemlerinde Frontend Architect rolüne odaklanarak, büyük ölçekli
					projelerde frontend mimarilerini şekillendirmeyi ve teknoloji
					stratejileri geliştirmeyi hedefliyorum.
				</p>
			</div>
		</Section>
	)
}
