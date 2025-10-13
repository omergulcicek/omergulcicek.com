import Link from "next/link"

import { USER } from "@/constants"

import { Section, Socials } from "@/widgets"

export function AboutContact() {
	return (
		<Section title="İletişim" type="h2">
			<div className="flex flex-col gap-4">
				<p className="text-muted-foreground">
					Benimle iletişime geçmek için{" "}
					<Link
						href={`mailto:${USER.email}`}
						className="inline-flex items-center gap-2 text-primary underline font-medium underline-offset-4"
					>
						{USER.email}
					</Link>{" "}
					adresim üzerinden iletişime geçebilirsiniz.
				</p>

				<Socials />
			</div>
		</Section>
	)
}
