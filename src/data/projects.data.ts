import {
	CalendarDays,
	Command,
	PaintbrushVertical,
	RectangleEllipsis,
	SquareLibrary,
	TextCursorInput
} from "lucide-react"

export const projectsData = [
	{
		icon: Command,
		image: "/projects/nizam.png",
		title: "Nizam - Next.js 16 Boilerplate",
		description:
			"Modern Next.js projeleri için açık kaynak bir başlangıç şablonu.",
		link: "https://nizam-boilerplate.vercel.app/tr",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack"],
		color: "bg-blue-100"
	},
	{
		icon: TextCursorInput,
		image: "/projects/forms.png",
		title: "@omergulcicek/forms",
		description:
			"TypeScript desteği ile React Hook Form için akıllı maskeleme ve doğrulama",
		link: "https://omergulcicek-forms.vercel.app/",
		tags: ["React", "TypeScript", "React Hook Form"],
		color: "bg-green-100"
	},
	{
		icon: RectangleEllipsis,
		image: "/projects/password.png",
		title: "@omergulcicek/password-input",
		description: "Şifre girişlerine göster/gizle geçişi ekleyen React hook'u",
		link: "https://omergulcicek-password-input.vercel.app/",
		tags: ["React", "TypeScript", "Lucide"],
		color: "bg-red-100"
	},
	{
		icon: CalendarDays,
		image: "/projects/calendar.png",
		title: "calendar",
		description: "Takvim abonelikleri için ücretsiz açık kaynak takvimler",
		link: "https://omergulcicek-calendar.vercel.app/",
		tags: ["Frontend"],
		color: "bg-purple-100"
	},
	{
		icon: PaintbrushVertical,
		image: "/projects/turkuaz.png",
		title: "Turkuaz",
		description: "Hızlı ve kolay web sayfaları geliştirin",
		link: "https://turkuazcss.com/",
		tags: ["CSS"],
		color: "bg-teal-100"
	},
	{
		icon: SquareLibrary,
		image: "/projects/turkcedokuman.png",
		title: "Türkçe Doküman",
		description: "Yazılım geliştirme için Türkçe kaynaklar",
		link: "https://turkcedokuman.com/",
		tags: ["Blog"],
		color: "bg-orange-100"
	}
]
