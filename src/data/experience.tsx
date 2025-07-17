import React from "react"
import Link from "next/link"

export const EXPERIENCE = [
	{
		company: "Alışgidiş",
		icon: "alisgidis",
		role: "Senior Frontend Engineer",
		period: "Mar 2024 - Haz 2025",
		duration: "1 yıl 4 ay",
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
		period: "Oca 2022 - Şub 2024",
		duration: "2 yıl 2 ay",
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
		period: "Eyl 2020 - Oca 2022",
		duration: "1 yıl 5 ay",
		workType: "Remote",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
		responsibilities: (
			<>
				<p>
					- Contributed to the development of{" "}
					<Link
						href="https://hangikredi.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline font-medium underline-offset-4"
					>
						hangikredi.com
					</Link>{" "}
					, transforming Figma designs into responsive, high-performance user
					interfaces.
				</p>
				<p>
					- Implemented performance optimizations and refactored codebase by
					introducing reusable JavaScript helper functions to improve
					maintainability.
				</p>
				<p>
					- Delivered internal technical presentations to promote best practices
					and strengthen frontend development standards across the team.
				</p>
			</>
		)
	},
	{
		company: "Akinon",
		icon: "akinon",
		role: "Frontend Developer",
		period: "Haz 2019 - Kas 2019",
		duration: "6 ay",
		workType: "Onsite",
		technologies: [
			"HTML",
			"CSS",
			"LESS",
			"Javascript",
			"jQuery",
			"ES6",
			"Jinja"
		],
		responsibilities: (
			<>
				<p>
					- Developed responsive, component-based user interfaces for major
					e-commerce clients including Vakko, Faraway, Kemal Tanca, Desa, and
					A101, based on designs provided via Zeplin.
				</p>
				<p>
					- Built all sections with a modular architecture to ensure scalability
					and reusability across projects.
				</p>
				<p>
					- Created comprehensive documentation for the developed components to
					support maintainability and team-wide adoption.
				</p>
			</>
		)
	},
	{
		company: "Turkcell",
		icon: "turkcell",
		role: "Frontend Developer",
		period: "Tem 2018 - Kas 2018",
		duration: "5 ay",
		workType: "Onsite",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
		responsibilities: (
			<>
				<p>
					- Resolved all frontend issues reported by the team in real time,
					ensuring uninterrupted development and fast feedback cycles.
				</p>
			</>
		)
	},
	{
		company: "Ziraat Teknoloji",
		icon: "ziraat",
		role: "Frontend Developer",
		period: "Tem 2017 - Haz 2018",
		duration: "1 yıl",
		workType: "Onsite",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Kendo UI"],
		responsibilities: (
			<>
				<p>
					- Worked on the development of an admin panel project using the Kendo
					UI framework.
				</p>
				<p>
					- Refactored the entire UI to be fully responsive, enhancing usability
					across all screen sizes.
				</p>
			</>
		)
	}
]
