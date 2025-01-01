import { Container } from "@/shared/container"

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Container>
			<article className="prose-sm md:prose-base lg:prose-lg prose-h1:mb-2 prose-h2:mb-0 prose-h2:mt-8 prose-h2:font-medium prose-p:my-3 prose-ul:list-disc prose-a:text-blue-600 prose-a:underline prose-figure:m-0 max-w-4xl mx-auto mt-16 md:mt-28 flex flex-col gap-14">
				{children}
			</article>
		</Container>
	)
}
