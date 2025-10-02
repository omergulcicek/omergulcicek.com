import {
	CalendarDays,
	Command,
	RectangleEllipsis,
	TextCursorInput
} from "lucide-react"

export const PROJECTS = [
	{
		icon: Command,
		title: "Next.js Boilerplate",
		description: "TypeScript ve Tailwind CSS ile modern Next.js 15 şablonu",
		link: "https://nextjs15-boilerplate.vercel.app/en",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack"],
		color: "bg-blue-100"
	},
	{
		icon: TextCursorInput,
		title: "@omergulcicek/forms",
		description:
			"TypeScript desteği ile React Hook Form için akıllı maskeleme ve doğrulama",
		link: "https://github.com/omergulcicek/forms",
		tags: ["React", "TypeScript", "React Hook Form"],
		color: "bg-green-100"
	},
	{
		icon: RectangleEllipsis,
		title: "@omergulcicek/password-input",
		description: "Şifre girişlerine göster/gizle geçişi ekleyen React hook'u",
		link: "https://github.com/omergulcicek/password-input",
		tags: ["React", "TypeScript", "Lucide"],
		color: "bg-red-100"
	},
	{
		icon: CalendarDays,
		title: "calendar",
		description: "Takvim abonelikleri için ücretsiz açık kaynak takvimler",
		link: "https://calendar.omergulcicek.com/",
		tags: ["Frontend"],
		color: "bg-purple-100"
	}
]
