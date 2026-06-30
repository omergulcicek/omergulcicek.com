import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ExperienceList } from "@/features/experiences/components/experience-list"
import { ResumeModal } from "@/features/experiences/components/resume-modal"
import { EXPERIENCES } from "@/features/experiences/constants/experiences.constants"

export function ExperiencesPage() {
	return (
		<Container className="flex flex-col gap-10 py-10 md:gap-12 md:py-16">
			<PageHeader title="Deneyimler" showOpenToWork>
				<p className="text-base leading-relaxed">
					8 yılı aşkın tecrübemle,{" "}
					<span className="text-primary">React</span> ekosisteminde{" "}
					<span className="text-primary">AI destekli</span> ve yüksek
					performanslı mimariler kurgulayarak sürdürülebilir kullanıcı
					deneyimleri inşa ediyorum.
				</p>
			</PageHeader>

			<div>
				<ResumeModal />
			</div>

			<ExperienceList experiences={EXPERIENCES} showTechnologies />
		</Container>
	)
}
