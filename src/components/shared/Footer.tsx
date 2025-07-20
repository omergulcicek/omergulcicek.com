import Balancer from "react-wrap-balancer"

import { SITE } from "@/constants/site"
import { USER } from "@/constants/user"

import { Container } from "@/shared"
import { LinkPreview } from "@/ui"

export function Footer() {
	return (
		<header className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 min-h-56">
			<Container>
				<div className="flex items-center justify-center">
					<Balancer className="text-muted-foreground text-sm">
						<LinkPreview
							url={USER.socials.github}
							className="text-muted-foreground underline underline-offset-4 font-medium"
						>
							{USER.username}
						</LinkPreview>{" "}
						tarafından geliştirildi. Kaynak kod{" "}
						<LinkPreview
							url={SITE.repository}
							className="text-muted-foreground underline underline-offset-4 font-medium"
						>
							GitHub
						</LinkPreview>
						&apos;da mevcuttur.
					</Balancer>
				</div>
			</Container>
		</header>
	)
}
