"use client"

import { Section } from "@/shared"

export function AboutIntro() {
	return (
		<Section title="Hakkımda">
			<p>
				Merhaba, ben <span className="text-primary">Ömer</span>. Aslen{" "}
				<span className="text-primary">Trabzon</span>luyum ve{" "}
				<span className="text-primary">Sakarya</span>da yaşıyorum.{" "}
				<span className="text-primary">1993 doğumluyum</span> ve{" "}
				<span className="text-primary">Yazılım Mühendisliği</span> mezunuyum.{" "}
				<span className="text-primary">Senior/Lead Frontend Engineer</span>{" "}
				olarak çalışıyorum.
			</p>
		</Section>
	)
}
