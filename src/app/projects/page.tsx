"use client"

import Link from "next/link"

import { Container, Section } from "@/shared"
import { ProjectCard, projectsData } from "@/features/projects"

export default function Projects() {
	return (
		<Container>
			<Section title="Projeler">
				<p className="text-muted-foreground">
					Açık kaynak projelerimi{" "}
					<Link
						href="https://github.com/virastack"
						rel="noopener noreferrer"
						target="_blank"
						className="text-primary underline font-medium underline-offset-4"
					>
						ViraStack
					</Link>{" "}
					adlı bir GitHub organizasyonu altında topladım.
				</p>
				<p className="text-muted-foreground">
					ViraStack, React ve Next.js ekosistemini yüksek disiplinli
					standartlarla bir araya getiren modern Frontend ekosistemidir;
					karmaşık yapılandırmalar yerine ürünleşmiş mimariler sunarak her
					ölçekte hızlı, ölçeklenebilir ve sürdürülebilir bir geliştirme zemini
					sağlar.
				</p>
				<p className="text-muted-foreground">
					Yapay zekâ uyumlu protokoller ve hazır başlangıç kitleriyle
					geliştirici üretkenliğini artırmayı hedefler. Aşağıda ViraStack
					depolarının yanı sıra kişisel repolarımda sürdürdüğüm birkaç projeyi
					de bulabilirsiniz.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-10">
					{projectsData.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>
			</Section>
		</Container>
	)
}
