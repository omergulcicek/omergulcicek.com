import { AnimatedTestimonials } from "@/ui"
import { Section } from "@/widgets"

import { hobbiesData } from "@/data"

export function AboutHobbies() {
	return (
		<Section title="İlgi Alanlarım" type="h2">
			<AnimatedTestimonials testimonials={hobbiesData} autoplay />
		</Section>
	)
}
