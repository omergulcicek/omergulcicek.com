import type { MDXComponents } from "mdx/types"

import { Title } from "@/ui/title"

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => <Title>{children}</Title>,
		h2: ({ children }) => <Title tag="h2">{children}</Title>,
		h3: ({ children }) => <Title tag="h3">{children}</Title>,
		img: (props) => <img {...props} loading="lazy" className="w-full" />,
		...components
	}
}
