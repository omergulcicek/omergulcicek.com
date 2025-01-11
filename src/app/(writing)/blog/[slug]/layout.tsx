import { Container } from "@/shared/container"

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Container>
			<article className="prose-sm md:prose-base lg:prose-lg prose-h1:text-2xl prose-h1:md:text-4xl prose-h1:xl:text-5xl prose-h1:font-semibold prose-h1:mb-6 prose-h1:md:mb-10 prose-h2:text-xl prose-h2:md:text-3xl prose-h2:xl:text-3xl prose-h2:font-semibold prose-h2:my-3 prose-h2:xl:mt-10 prose-h3:text-base prose-h3:md:text-xl prose-h3:xl:text-2xl prose-h3:font-semibold prose-h3:my-2 prose-h3:md:mb-4 prose-h3:xl:mt-8 prose-p:text-base prose-p:md:text-lg prose-p:md:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-a:text-blue-600 prose-a:underline prose-figure:m-0 prose-blockquote:bg-muted prose-blockquote:px-5 prose-blockquote:py-1 prose-blockquote:font-mono prose-blockquote:text-base prose-blockquote:rounded max-w-4xl mx-auto mt-16 md:mt-28 flex flex-col gap-5">
				{children}
			</article>
		</Container>
	)
}
