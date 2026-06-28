"use client"

import Link from "next/link"

import { Container, Section } from "@/shared"
import { ProjectCard, projectsData } from "@/features/projects"

export default function Projects() {
	return (
		<Container>
			<Section title="Projeler" className="pt-10 md:pt-24">
				<p className="text-muted-foreground text-base leading-relaxed md:text-lg">
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
				<p className="text-muted-foreground text-base leading-relaxed md:text-lg">
					ViraStack, <span className="text-primary">React</span> ve{" "}
					<span className="text-primary">Next.js</span> ekosistemini yüksek
					disiplinli standartlarla bir araya getiren modern{" "}
					<span className="text-primary">Frontend ekosistemidir</span>; karmaşık
					yapılandırmalar yerine ürünleşmiş mimariler sunarak her ölçekte hızlı,
					ölçeklenebilir ve sürdürülebilir bir geliştirme zemini sağlar.
				</p>
				<p className="text-muted-foreground text-base leading-relaxed md:text-lg">
					<span className="text-primary">Yapay zekâ uyumlu protokoller</span> ve
					hazır başlangıç kitleriyle geliştirici üretkenliğini artırmayı
					hedefler. Aşağıda ViraStack depolarının yanı sıra kişisel repolarımda
					sürdürdüğüm birkaç projeyi de bulabilirsiniz.
				</p>
				<div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 mt-10">
					{projectsData.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>
			</Section>
		</Container>
	)
}
