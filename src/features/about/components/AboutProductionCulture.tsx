"use client"

import { GitHubCalendar } from "react-github-calendar"
import { useTheme } from "next-themes"

import { Section } from "@/shared"

export function AboutProductionCulture() {
	const { theme } = useTheme()

	return (
		<Section title="Üretim Kültürü" type="h2">
			<p>
				Güncel frontend yaklaşımlarını pratik araçlara dönüştüren{" "}
				<span className="text-primary">açık kaynak projeler</span>{" "}
				geliştiriyorum. Özellikle <span className="text-primary">Nizam</span>{" "}
				gibi modern <span className="text-primary">Next.js boilerplate</span>{" "}
				yapıları ve çeşitli yardımcı araçlar üzerinde çalışarak açık kaynak
				kültürüne katkı sağlıyorum.
			</p>

			<p>
				Kişisel blogumda deneyimlerimi, modern frontend tekniklerini paylaşarak
				toplulukla etkileşim kuruyorum.
			</p>

			<div className="py-4">
				<GitHubCalendar
					username="omergulcicek"
					colorScheme={theme === "dark" ? "dark" : "light"}
					labels={{
						months: [
							"Oca",
							"Şub",
							"Mar",
							"Nis",
							"May",
							"Haz",
							"Tem",
							"Ağu",
							"Eyl",
							"Eki",
							"Kas",
							"Ara"
						],
						totalCount: "Son yıl içerisinde {{count}} katkı",
						legend: {
							less: "Az",
							more: "Çok"
						}
					}}
					blockSize={8}
					weekStart={1}
				/>
			</div>
		</Section>
	)
}
