import Link from "next/link"

import { Code, Users } from "lucide-react"

import { Section } from "@/widgets"

export function AboutServices() {
	return (
		<Section title="Hizmetlerim" type="h2">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
					<div className="flex items-center gap-2">
						<Code className="size-4 text-blue-500" />
						<h3 className="text-lg font-semibold">Freelance Geliştirme</h3>
					</div>
					<p className="text-sm text-muted-foreground">
						React ve Next.js ile modern web uygulamaları geliştiriyorum. İş
						fırsatlarına açığım, freelance projeler için mail atabilirsiniz.
					</p>
				</div>

				<div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
					<div className="flex items-center gap-2">
						<Users className="size-4 text-purple-500" />
						<h3 className="text-lg font-semibold">Özel Dersler</h3>
					</div>
					<p className="text-sm text-muted-foreground">
						Birebir yada grupça özel ders veriyorum. Daha önce{" "}
						<Link
							href="https://kodluyoruz.org"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-4"
						>
							kodluyoruz.org
						</Link>{" "}
						bünyesinde kalabalık bir gruba eğitim tecrübem bulunuyor. Birebir
						yada grupça özel ders talepleriniz için mail atabilirsiniz.
					</p>
				</div>
			</div>
		</Section>
	)
}
