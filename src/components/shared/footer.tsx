"use client"

import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover"
import { cn } from "@/utils"
import { motion } from "framer-motion"
import { Check, Copy, Mail, Send } from "lucide-react"

import Container from "@/shared/container"
import { Button } from "@/ui/button"
import { LinkHover as Link } from "@/ui/link"

export default function Footer({
	className
}: {
	className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
	const [isCopy, setIsCopy] = useState(false)

	function changeCopyText() {
		setIsCopy(true)

		setTimeout(() => {
			setIsCopy(false)
		}, 1000)
	}

	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1, duration: 1 }}
			className={cn("mt-20 md:mt-40 flex w-full py-20", className)}
		>
			<Container className="px-4 md:px-0 max-w-sm md:max-w-3xl">
				<div className="flex flex-col gap-2 md:gap-1 text-base md:text-base leading-relaxed text-tertiary-foreground">
					<p>
						<Link
							href="https://nextjs.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="dark:hover:text-white"
						>
							Next.js
						</Link>
						{", "}
						<Link
							href="https://www.typescriptlang.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="dark:hover:text-white"
						>
							TypeScript
						</Link>
						{", "}
						<Link
							href="https://tailwindcss.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="dark:hover:text-white"
						>
							Tailwind CSS
						</Link>
						{", "}
						<Link
							href="https://ui.shadcn.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="dark:hover:text-white"
						>
							shadcn/ui
						</Link>
						{" ve "}
						<Link
							href="https://magicui.design/"
							target="_blank"
							rel="noopener noreferrer"
							className="dark:hover:text-white"
						>
							Magic UI
						</Link>{" "}
						ile geliştirildi.
					</p>
					<p className="flex flex-wrap items-center justify-start md:gap-2">
						Bir selam söyleyin{" "}
						<Popover>
							<PopoverTrigger>
								<div className="inline-flex cursor-pointer items-center gap-1 transition hover:text-black dark:hover:text-white">
									<Mail size={14} />
									<span>iletisim@omergulcicek.com</span>
								</div>
							</PopoverTrigger>
							<PopoverContent className="grid grid-cols-2 gap-2">
								<Link
									href="mailto:iletisim@omergulcicek.com"
									className="col-span-1"
								>
									<Button variant="outline" size="sm" className="w-full">
										<Send size={14} />
										<span className="ml-2 text-xs">Mail at</span>
									</Button>
								</Link>

								<CopyToClipboard text={"iletisim@omergulcicek.com"}>
									<Button
										variant="outline"
										size="sm"
										onClick={() => changeCopyText()}
										className="col-span-1 w-full"
									>
										{isCopy ? (
											<>
												<Check size={14} />
												<span className="ml-2 text-xs">Kopyalandı!</span>
											</>
										) : (
											<>
												<Copy size={14} />
												<span className="ml-2 text-xs">Kopyala</span>
											</>
										)}
									</Button>
								</CopyToClipboard>
							</PopoverContent>
						</Popover>
					</p>
					<p>
						<Link
							href="https://github.com/omergulcicek"
							target="_blank"
							rel="noopener noreferrer"
							className="dark:hover:text-white"
						>
							Beni GitHub'tan takip et
						</Link>
					</p>
					<p>© 2024 | Ömer Gülçiçek</p>
				</div>
			</Container>
		</motion.footer>
	)
}
