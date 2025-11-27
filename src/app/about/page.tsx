import { Container } from "@/shared"
import {
	AboutContact,
	AboutHobbies,
	AboutIntro,
	AboutProductionCulture,
	AboutServices,
	AboutTechnicalApproach,
	AboutVision,
	Experience
} from "@/widgets"

export default function About() {
	return (
		<Container className="leading-7 [&_p]:text-neutral-500">
			<AboutIntro />
			<AboutTechnicalApproach />
			<AboutProductionCulture />
			<Experience showAll />
			<AboutServices />
			<AboutHobbies />
			<AboutVision />
			<AboutContact />
		</Container>
	)
}
