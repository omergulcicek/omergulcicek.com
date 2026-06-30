export type Experience = {
	company: string
	icon: string
	role: string
	period: string
	summary: string
	technologies: string[]
}

export const EXPERIENCES: Experience[] = [
	{
		company: "Machinarium",
		icon: "machinarium",
		role: "Frontend Team Lead",
		period: "Ağu 25 – Kas 25",
		summary:
			"10 kişilik frontend ekibine teknik liderlik ettim; AI destekli kod standartları ve ortak bileşen kütüphanesiyle PIM, CMS ve OMS panellerindeki teknik borcu ve kod tutarsızlığını giderdim.",
		technologies: [
			"React",
			"Next.js",
			"TypeScript",
			"TanStack Query",
			"Tailwind CSS"
		]
	},
	{
		company: "Alışgidiş",
		icon: "alisgidis",
		role: "Senior Frontend Engineer",
		period: "Mar 24 – Haz 25",
		summary:
			"alisgidis.com FE mimarisini sıfırdan kurdum; takım lideri olarak tasarım-backend koordinasyonunu yönetip UI kütüphanesi ve Lighthouse ile hız ve SEO performansını artırdım.",
		technologies: [
			"React",
			"Next.js",
			"TypeScript",
			"TanStack Query",
			"Tailwind CSS"
		]
	},
	{
		company: "Gordion",
		icon: "gordion",
		role: "Senior Frontend Engineer",
		period: "Oca 22 – Şub 24",
		summary:
			"Otel, uçak bileti ve kültür turu rezervasyon sayfalarını geliştirdim; merkezi UI Kit ve GraphQL entegrasyonuyla teknik borcu azaltıp ekipler arası tutarlılığı sağladım.",
		technologies: [
			"React",
			"Next.js",
			"GraphQL",
			"Styled Components",
			"Tailwind CSS"
		]
	},
	{
		company: "HangiKredi",
		icon: "hangikredi",
		role: "Frontend Developer",
		period: "Eyl 20 – Oca 22",
		summary:
			"hangikredi.com geliştirmesinde Figma tasarımlarını koda döktüm; performans iyileştirmeleri ve yeniden kullanılabilir JS kütüphaneleriyle kod tekrarını azalttım.",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
	},
	{
		company: "Kodluyoruz",
		icon: "kodluyoruz",
		role: "Frontend Eğitmeni",
		period: "Ara 20 – Şub 21",
		summary:
			"30 öğrenciye Frontend 101 eğitimi verdim; HTML, CSS, JavaScript, Git ve React konularında uygulamalı dersler yürüttüm, sektörel tecrübe aktarımı ve sorulara yanıt verdim.",
		technologies: ["HTML", "CSS", "JavaScript", "Git", "React"]
	},
	{
		company: "Akinon",
		icon: "akinon",
		role: "Frontend Developer",
		period: "Haz 19 – Kas 19",
		summary:
			"Vakko, A101 ve birçok e-ticaret sitesi için Zeplin tasarımlarını modüler bileşenlerle koda döktüm; component dokümantasyonuyla süreci sürdürülebilir kıldım.",
		technologies: [
			"HTML",
			"CSS",
			"LESS",
			"JavaScript",
			"jQuery",
			"ES6",
			"Jinja"
		]
	},
	{
		company: "Turkcell",
		icon: "turkcell",
		role: "Frontend Developer",
		period: "Tem 18 – Kas 18",
		summary:
			"Canlı sistemdeki kritik arayüz hatalarına anında müdahale ederek ekibin geliştirmeye kesintisiz devam etmesini sağladım.",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
	},
	{
		company: "Ziraat Teknoloji",
		icon: "ziraat",
		role: "Frontend Developer",
		period: "Tem 17 – Haz 18",
		summary:
			"Kendo UI tabanlı kurumsal admin panelini uçtan uca geliştirdim; arayüzü tam responsive hale getirerek kullanılabilirliği artırdım.",
		technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Kendo UI"]
	}
]

export const CV_FILES = {
	tr: {
		href: "/omergulcicek_cv.pdf",
		downloadName: "omergulcicek_cv.pdf"
	},
	en: {
		href: "/omergulcicek_eng_cv.pdf",
		downloadName: "omergulcicek_eng_cv.pdf"
	}
} as const

export type CvLocale = keyof typeof CV_FILES

export const DEFAULT_CV_LOCALE: CvLocale = "tr"

export function getHomeExperiences() {
	return EXPERIENCES.slice(0, 3)
}
