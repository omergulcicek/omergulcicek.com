export type StackItem = {
	id: string
	label: string
	svglSlug: string
}

export const STACK_ITEMS: StackItem[] = [
	{ id: "html", label: "HTML", svglSlug: "html5" },
	{ id: "css", label: "CSS", svglSlug: "css" },
	{ id: "javascript", label: "JavaScript", svglSlug: "javascript" },
	{ id: "typescript", label: "TypeScript", svglSlug: "typescript" },
	{ id: "git", label: "Git", svglSlug: "git" },
	{ id: "react", label: "React", svglSlug: "react" },
	{ id: "nextjs", label: "Next.js", svglSlug: "nextjs" },
	{ id: "tailwind", label: "Tailwind CSS", svglSlug: "tailwind-css" },
	{ id: "shadcn", label: "shadcn/ui", svglSlug: "shadcnui" },
	{ id: "tanstack", label: "TanStack", svglSlug: "tanstack" },
	{ id: "zod", label: "Zod", svglSlug: "zod" },
	{ id: "zustand", label: "Zustand", svglSlug: "zustand" },
	{ id: "graphql", label: "GraphQL", svglSlug: "graphql" },
	{ id: "supabase", label: "Supabase", svglSlug: "supabase" },
	{ id: "vite", label: "Vite", svglSlug: "vite" },
	{ id: "framer", label: "Framer Motion", svglSlug: "framer" },
	{ id: "react-hook-form", label: "React Hook Form", svglSlug: "react-hook-form" },
	{ id: "storybook", label: "Storybook", svglSlug: "storybook" },
	{ id: "cursor", label: "Cursor", svglSlug: "cursor" },
	{ id: "virastack", label: "ViraStack", svglSlug: "virastack" }
]

const HOME_STACK_IDS = [
	"javascript",
	"typescript",
	"git",
	"react",
	"nextjs",
	"tailwind",
	"tanstack",
	"vite",
	"shadcn",
	"zod",
	"zustand",
	"supabase",
	"graphql",
	"framer",
	"react-hook-form",
	"storybook",
	"cursor",
	"virastack"
] as const

export const HOME_STACK_ITEMS = HOME_STACK_IDS.map(
	(id) => STACK_ITEMS.find((item) => item.id === id)!
)
