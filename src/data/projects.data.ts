import {
	CalendarDays,
	Command,
	PaintbrushVertical,
	RectangleEllipsis,
	Scale,
	SquareLibrary,
	TextCursorInput
} from "lucide-react"

export const projectsData = [
	{
		icon: Scale,
		image: "/projects/kaide.png",
		title: "Kaide",
		description:
			"AI-native AGENTS ve kural setleri üzerine kurulu modern React mimari kiti.",
		link: "https://github.com/omergulcicek/kaide",
		tags: ["AI", "Architecture", "React", "Cursor"],
		color: "bg-orange-100"
	},
	{
		icon: Command,
		image: "/projects/nizam.png",
		title: "Nizam",
		description:
			"Modern Next.js projeleri için açık kaynak bir başlangıç şablonu.",
		link: "https://github.com/omergulcicek/nizam",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack"],
		color: "bg-blue-100"
	},
	{
		icon: TextCursorInput,
		image: "/projects/forms.png",
		title: "@omergulcicek/forms",
		description:
			"TypeScript desteği ile React Hook Form için akıllı maskeleme ve doğrulama",
		link: "https://github.com/omergulcicek/forms",
		tags: ["React", "TypeScript", "React Hook Form"],
		color: "bg-green-100"
	},
	{
		icon: RectangleEllipsis,
		image: "/projects/password.png",
		title: "@omergulcicek/password-input",
		description: "Şifre girişlerine göster/gizle geçişi ekleyen React hook'u",
		link: "https://github.com/omergulcicek/password-input",
		tags: ["React", "TypeScript", "Lucide"],
		color: "bg-red-100"
	},
	{
		icon: CalendarDays,
		image: "/projects/calendar.png",
		title: "Rûznâme",
		description: "Takvim abonelikleri için ücretsiz açık kaynak takvimler",
		link: "https://github.com/omergulcicek/calendar",
		tags: ["Frontend"],
		color: "bg-purple-100"
	},
	{
		icon: PaintbrushVertical,
		image: "/projects/turkuaz.png",
		title: "Turkuaz",
		description: "Hızlı ve kolay web sayfaları geliştirin",
		link: "https://github.com/omergulcicek/turkuaz",
		tags: ["CSS"],
		color: "bg-teal-100"
	},
	{
		icon: SquareLibrary,
		image: "/projects/turkcedokuman.png",
		title: "Türkçe Doküman",
		description: "Yazılım geliştirme için Türkçe kaynaklar",
		link: "https://github.com/omergulcicek/turkcedokuman.com",
		tags: ["Blog"],
		color: "bg-slate-100"
	}
]
