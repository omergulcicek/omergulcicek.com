import {
	Nextjs,
	ReactHookForm,
	ReactIcon,
	Redux,
	Shadcn,
	Storybook,
	TailwindCss,
	TanStack,
	TypeScript,
	Vercel,
	Zod,
	Zustand
} from "@/components/icons"
import { Section } from "@/widgets"

export function AboutSkills() {
	return (
		<Section title="Hakkımda">
			<div className="flex flex-col gap-4 text-base leading-7 text-neutral-500">
				<p>
					Modern web uygulamalarının farklı katmanlarında deneyime sahip bir{" "}
					<span className="text-primary">Senior Frontend Engineer</span> olarak,{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						React <ReactIcon className="size-5" />
					</span>{" "}
					ve{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						Next.js <Nextjs className="size-5" />
					</span>{" "}
					ekosisteminde ölçeklenebilir ve sürdürülebilir çözümler
					geliştiriyorum.{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						TypeScript <TypeScript className="size-5" />
					</span>{" "}
					ile tip güvenliğini en baştan sağlayarak, uzun vadeli bakım maliyeti
					düşük ve güvenilir sistemler kurmaya odaklanıyorum.
				</p>

				<p>
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						Tailwind CSS <TailwindCss className="size-5" />
					</span>{" "}
					ve{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						shadcn/ui <Shadcn className="size-5" />
					</span>{" "}
					ile hızlı ve tutarlı arayüzler tasarlarken,{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						Zustand <Zustand className="size-5" />
					</span>{" "}
					ve{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						Redux <Redux className="size-5" />
					</span>{" "}
					gibi state yönetim araçlarını ihtiyaca göre projelere entegre
					ediyorum. API katmanında{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						TanStack Query <TanStack className="size-5" />
					</span>{" "}
					kullanarak cache, background sync ve data fetching stratejileriyle
					performansı artırıyorum.{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						Storybook <Storybook className="size-5" />
					</span>{" "}
					ile bağımsız, tekrar kullanılabilir component yapıları tasarlayarak
					ekibin geliştirme hızını artırıyorum.
				</p>

				<p>
					Performans tarafında bundle analizleri,{" "}
					<span className="text-primary">Core Web Vitals</span> metrik takibi ve{" "}
					<span className="text-primary">code splitting</span> stratejileri
					uygulayarak kullanıcı deneyimini sürekli iyileştiriyorum.{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						React Hook Form <ReactHookForm className="size-5" />
					</span>{" "}
					ile form süreçlerini sadeleştiriyor,{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						Zod <Zod className="size-5" />
					</span>{" "}
					ile runtime validation yönetiyorum.{" "}
					<span className="text-primary inline-flex items-center gap-1.5 mr-1.5">
						Vercel <Vercel className="size-5" />
					</span>{" "}
					üzerinde CI/CD süreçleri kurarak güvenilir ve hızlı deployment
					sağlıyorum.
				</p>

				<p>
					Teknik katkılarımın yanında ekiplerde{" "}
					<span className="text-primary">code review</span> süreçlerini
					standartlaştırıyor,{" "}
					<span className="text-primary">
						junior/mid geliştiricilere mentorluk
					</span>{" "}
					yaparak bilgi paylaşımını teşvik ediyorum. Ürün, tasarım ve Backend
					ekipleriyle yakın çalışarak iş hedeflerini teknik çözümlere dönüştürme
					konusunda aktif rol alıyorum.
				</p>

				<p>
					Açık kaynak projelere katkıda bulunuyor, blog yazılarıyla
					deneyimlerimi aktarıyorum. Uzun vadede{" "}
					<span className="text-primary">Frontend Architect</span> rolüne
					odaklanarak, büyük ölçekli projelerde frontend mimarilerini
					şekillendirmeyi ve teknoloji stratejileri geliştirmeyi hedefliyorum.
				</p>
			</div>
		</Section>
	)
}
