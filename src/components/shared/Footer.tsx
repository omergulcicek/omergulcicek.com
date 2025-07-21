import { SITE } from "@/constants/site"

import { Container } from "@/shared"
import { LinkPreview } from "@/ui"

export function Footer() {
	return (
		<footer className="border-t">
			<Container className="py-12">
				<div className="flex flex-col gap-2 text-muted-foreground text-sm">
					<p>
						<LinkPreview
							url="https://nextjs.org/"
							className="text-muted-foreground underline underline-offset-4"
						>
							Next.js
						</LinkPreview>
						,{" "}
						<LinkPreview
							url="https://www.typescriptlang.org/"
							className="text-muted-foreground underline underline-offset-4"
						>
							TypeScript
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
					<p>© 2025 | Ömer Gülçiçek</p>
				</div>
			</Container>
		</footer>
	)
}
