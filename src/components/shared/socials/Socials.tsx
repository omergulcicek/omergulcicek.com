import Link from "next/link"

import { SOCIALS } from "@/constants/socials.constants"

import { cn } from "@/lib/utils"

import { Button } from "@/ui"

export function Socials({ className }: { className?: string }) {
	return (
		<nav className={cn("flex items-center mt-1 md:mt-0", className)}>
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
