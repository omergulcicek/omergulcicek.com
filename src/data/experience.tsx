import React from "react"
import Link from "next/link"

export const EXPERIENCE = [
	{
		company: "Alışgidiş",
		icon: "alisgidis",
		role: "Senior Frontend Engineer",
		description: "I worked on the Google Search team",
		date: "Mar 2024 - Haz 2025",
		workType: "Remote",
		technologies: [
			"React",
			"NextJS",
			"TypeScript",
			"TanStack Query",
			"Tailwind CSS"
		],
		responsibilities: (
			<>
				<p>
					- Led the development of{" "}
					<Link
						href="https://alisgidis.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline font-medium underline-offset-4"
					>
						alisgidis.com
					</Link>{" "}
					from the ground up, making key decisions on technologies,
					architecture, and project structure with a strong focus on performance
					and scalability.
				</p>
				<p>
					- Managed and guided a 5-person frontend team, providing technical
					leadership and ensuring code quality, consistency, and delivery
					timelines.
				</p>
				<p>
					- Implemented responsive, component-based UIs from Figma designs and
					organized internal knowledge-sharing sessions through technical
					presentations..
				</p>
			</>
		)
	},
	{
		company: "Gordion",
		icon: "gordion",
		role: "Senior Frontend Engineer",
		description: "I worked on the Apple Search team",
		date: "Oca 2022 - Şub 2024",
		workType: "Remote",
		technologies: [
			"React",
			"NextJS",
			"GraphQL",
			"Styled Components",
			"Tailwind CSS"
		],
		responsibilities: (
			<>
				<p>
					- Developed a fully dynamic frontend architecture powered entirely by
					backend-driven content, used in projects that secured partnerships
					with major clients like Turkish Airlines and Jolly Tur.
				</p>
				<p>
					- Designed and implemented the frontend architecture and UI kits for 3
					separate projects, establishing consistent and reusable component
					systems.
				</p>
				<p>
					- Translated Figma designs into responsive, component-based interfaces
					and conducted internal technical trainings and presentations to
					promote knowledge sharing.
				</p>
			</>
		)
	},
	{
		company: "HangiKredi",
		icon: "hangikredi",
		role: "Frontend Developer",
		description: "I worked on the Apple Search team",
		date: "Eyl 2020 - Oca 2022",
		workType: "Remote",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
	},
	{
		company: "Akinon",
		icon: "akinon",
		role: "Frontend Developer",
		description: "I worked on the Apple Search team",
		date: "Haz 2019 - Kas 2019",
		workType: "Onsite",
		technologies: [
			"HTML",
			"CSS",
			"LESS",
			"Javascript",
			"jQuery",
			"ES6",
			"Jinja"
		]
	},
	{
		company: "Turkcell",
		icon: "turkcell",
		role: "Frontend Developer",
		description: "I worked on the Apple Search team",
		date: "Tem 2018 - Kas 2018",
		workType: "Onsite",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
	},
	{
		company: "Ziraat Teknoloji",
		icon: "ziraat",
		role: "Frontend Developer",
		description: "I worked on the Apple Search team",
		date: "Tem 2017 - Haz 2018",
		workType: "Onsite",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Kendo UI"]
	}
]
