import { SITE } from "@/constants/site.constants"

import { Container } from "@/shared"
import { LinkPreview } from "@/ui"

export function Footer() {
	return (
		<footer className="border-t mt-20">
			<Container className="py-12 md:py-16">
				<div className="flex flex-col items-center gap-2 text-muted-foreground text-sm text-center">
					<p>
						<LinkPreview
							url="https://virastack.com"
							className="text-muted-foreground underline underline-offset-4"
						>
							ViraStack
						</LinkPreview>
						,{" "}
						<LinkPreview
							url="https://nextjs.org/"
							className="text-muted-foreground underline underline-offset-4"
						>
							Next.js
						</LinkPreview>
						,{" "}
						<LinkPreview
							url="https://tailwindcss.com/"
							className="text-muted-foreground underline underline-offset-4"
						>
							Tailwind CSS
						</LinkPreview>
						,{" "}
						<LinkPreview
							url="https://ui.shadcn.com/"
							className="text-muted-foreground underline underline-offset-4"
						>
							shadcn/ui
						</LinkPreview>{" "}
						ile geliştirildi.
					</p>

					<p>
						Kaynak kod{" "}
						<LinkPreview
							url={SITE.repository}
							className="text-muted-foreground underline underline-offset-4"
						>
							GitHub
						</LinkPreview>
						&apos;da mevcuttur.
					</p>
					<p>© {new Date().getFullYear()} | Ömer Gülçiçek</p>
				</div>
			</Container>
		</footer>
	)
}
