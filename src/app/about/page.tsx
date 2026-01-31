import { Container } from "@/shared"
import {
	AboutContact,
	AboutHobbies,
	AboutIntro,
	AboutProductionCulture,
	AboutServices,
	AboutTechnicalApproach,
	AboutVision
} from "@/widgets"

export default function About() {
	return (
		<Container className="leading-7 [&_p]:text-muted-foreground">
			<AboutIntro />
			<AboutTechnicalApproach />
			<AboutProductionCulture />
			<AboutServices />
			<AboutHobbies />
			<AboutVision />
			<AboutContact />
		</Container>
	)
}
