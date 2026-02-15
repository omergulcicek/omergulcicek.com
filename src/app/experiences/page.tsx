import { Container, JobSeekingBadge, Section } from "@/shared"
import { Experience } from "@/features/experience"

export default function ExperiencesPage() {
	return (
		<Container>
			<Section title="Deneyimler" titleAddon={<JobSeekingBadge />}>
				<Experience showAll />
			</Section>
		</Container>
	)
}
