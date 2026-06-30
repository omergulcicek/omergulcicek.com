import { Section } from "@/shared"
import { AnimatedTestimonials } from "@/ui"
import { hobbiesData } from "@/features/about/data/hobbies.data"

export function AboutHobbies() {
	return (
		<Section title="İlgi Alanlarım" type="h2">
			<AnimatedTestimonials testimonials={hobbiesData} autoplay />
		</Section>
	)
}
