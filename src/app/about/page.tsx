import { Container } from "@/shared"
import { AboutContact, AboutHobbies, AboutSkills, Experience } from "@/widgets"

export default function About() {
	return (
		<Container>
			<AboutSkills />
			<AboutHobbies />
			<Experience showAll />
			{/* <AboutServices /> */}
			<AboutContact />
		</Container>
	)
}
