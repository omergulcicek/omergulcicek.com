import Link from "next/link"

import { SOCIALS } from "@/constants/socials"

import { Button } from "@/ui"

export function Socials() {
	return (
		<nav className="flex items-center mt-1 md:mt-2">
			{SOCIALS.map((social) => (
				<Link
					key={social.title}
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						variant="ghost"
						aria-label={`${social.title} profilini ziyaret et`}
					>
						<social.icon className="size-4" />
					</Button>
				</Link>
			))}
		</nav>
	)
}
