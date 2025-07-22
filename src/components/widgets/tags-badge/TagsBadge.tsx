import {
	BookMarked,
	Clapperboard,
	CodeXml,
	Cpu,
	History,
	MessageCircle,
	PersonStanding,
	Popcorn,
	Target,
	TentTree
} from "lucide-react"

import { Badge } from "@/ui"

import {
	Css,
	Framer,
	Git,
	GitHub,
	GraphQL,
	Html,
	JavaScript,
	MJML,
	Nextjs,
	NPM,
	ReactHookForm,
	ReactIcon,
	Shadcn,
	Storybook,
	StyledComponents,
	TailwindCss,
	TanStack,
	TypeScript,
	Zod,
	Zustand
} from "@/icons"

interface TagsBadgeProps {
	tags?: string[]
}

const tagsIconMap: Record<
	string,
	React.ComponentType<{ className?: string }>
> = {
	React: ReactIcon,
	"Next.js": Nextjs,
	TypeScript: TypeScript,
	"Tailwind CSS": TailwindCss,
	"shadcn/ui": Shadcn,
	CSS: Css,
	HTML: Html,
	JavaScript: JavaScript,
	Git: Git,
	GraphQL: GraphQL,
	Storybook: Storybook,
	"React Hook Form": ReactHookForm,
	Zustand: Zustand,
	Zod: Zod,
	TanStack: TanStack,
	Framer: Framer,
	GitHub: GitHub,
	NPM: NPM,
	"Styled Components": StyledComponents,
	MJML: MJML,
	Değerlendirme: History,
	Tatil: TentTree,
	Frontend: CodeXml,
	Kitap: BookMarked,
	Hedefler: Target,
	Film: Popcorn,
	Kişisel: PersonStanding,
	Toplum: MessageCircle,
	Teknoloji: Cpu,
	Dizi: Clapperboard
}

export function TagsBadge({ tags }: TagsBadgeProps) {
	if (!tags || tags.length === 0) {
		return null
	}

	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag) => {
				const IconComponent = tagsIconMap[tag]

				return (
					<Badge
						key={tag}
						variant="secondary"
						className="flex items-center gap-1"
					>
						{IconComponent && <IconComponent className="size-3" />}
						{tag}
					</Badge>
				)
			})}
		</div>
	)
}
