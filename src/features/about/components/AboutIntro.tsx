"use client"

import { Section } from "@/shared"

export function AboutIntro() {
	return (
		<Section title="Hakkımda">
			<p>
				Merhaba, ben <span className="font-medium text-foreground">Ömer</span>.
				Aslen <span className="font-medium text-foreground">Trabzon</span>luyum
				ve <span className="font-medium text-foreground">Sakarya</span>da
				yaşıyorum.{" "}
				<span className="font-medium text-foreground">1993 doğumluyum</span> ve{" "}
				<span className="font-medium text-foreground">
					Yazılım Mühendisliği
				</span>{" "}
				mezunuyum.{" "}
				<span className="font-medium text-foreground">
					Senior/Lead Frontend Engineer
				</span>{" "}
				olarak çalışıyorum.
			</p>
		</Section>
	)
}
