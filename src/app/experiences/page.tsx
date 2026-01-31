import { Container } from "@/shared"
import { Experience, JobSeekingBadge, Section } from "@/widgets"

export default function ExperiencesPage() {
	return (
		<Container>
			<Section title="Deneyimler" titleAddon={<JobSeekingBadge />}>
				<Experience showAll />
			</Section>
		</Container>
	)
}
