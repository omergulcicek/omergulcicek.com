import { Container, JobSeekingBadge, Section } from "@/shared"
import { Experience } from "@/features/experience"

export default function ExperiencesPage() {
	return (
		<Container>
			<Section
				title="Deneyimler"
				titleAddon={<JobSeekingBadge />}
				className="pt-10 md:pt-24"
			>
				<Experience showAll />
			</Section>
		</Container>
	)
}
