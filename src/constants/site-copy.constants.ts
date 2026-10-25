/**
 * Page copy for the Turkish-only site. Approved source: `docs/redesign/copy.md`.
 * Sentences that contain inline links are split into pieces so components only compose them.
 */
export const SITE_COPY = {
	home: {
		hero: {
			architecture: "React ve TanStack ile arayüz mimarisi kuruyorum.",
			virastack: {
				link: "ViraStack",
				after:
					"'in kurucusuyum: frontend geliştiriciler için açık kaynak şablonlar, paketler ve ücretsiz rehberler."
			},
			ai: "Yapay zekâyı net kurallarla çalıştırıyorum. Hızlı ilerliyorum, düzenden ödün vermiyorum.",
			contact: {
				before: "Bana ",
				email: "e-posta",
				separator: ", ",
				linkedin: "LinkedIn",
				or: " veya ",
				x: "X",
				after: "'ten ulaşabilirsin. Kodlarım ",
				github: "GitHub",
				end: "'da."
			}
		}
	},
	contactCta: {
		title: "Birlikte çalışalım",
		description: "Proje, danışmanlık ya da eğitim için yaz.",
		button: "E-posta gönder"
	},
	about: {
		title: "Hakkımda",
		intro: [
			"Merhaba, ben Ömer. Sakarya'da yaşıyorum, Trabzonluyum.",
			"Yazılım mühendisliği okudum. 2017'den beri frontend yazıyorum."
		],
		focus: {
			before:
				"İki ekipte frontend mimarisini sıfırdan kurdum ve takımı yönettim. Şimdi ",
			link: "ViraStack",
			after: "'e odaklanıyorum."
		},
		principlesTitle: "Nasıl çalışırım",
		workTogether: {
			id: "birlikte-calisalim",
			title: "Birlikte çalışmak",
			before: "Geliştirme, danışmanlık ya da frontend eğitimi için bana ",
			link: "yazabilirsin",
			after: ". İlk görüşme ücretsiz."
		},
		interestsTitle: "İlgi Alanları",
		links: {
			ariaLabel: "İletişim bağlantıları",
			email: "E-posta",
			resume: "Özgeçmiş",
			github: "GitHub"
		}
	},
	experiences: {
		title: "Deneyimler",
		intro:
			"2017'den beri React ekosisteminde ürün geliştiriyorum. Son yıllarda ekip yönettim, mimari kurdum."
	},
	projects: {
		title: "Projeler",
		intro: {
			link: "ViraStack",
			after: " ekosistemi ve kişisel uygulamalarım."
		},
		virastackIntro:
			"Bir frontend projesine başlarken gereken parçalar tek yerde: şablonlar, AI kuralları, erişilebilir form paketleri ve ücretsiz rehberler."
	},
	journey: {
		title: "Yolculuk",
		intro: "Yıllara göre iş, proje ve hayat."
	},
	setup: {
		title: "Kurulum",
		intro: "Kod yazarken kullandıklarım.",
		toolsTitle: "Araçlar",
		stackTitle: "Teknolojiler",
		assistant: {
			before: "Günlük aracım ",
			link: "Claude Code",
			after: ". Opus ile mimari kararlar, Sonnet ile hızlı işler."
		},
		agent: {
			before: "Ajanı ",
			virastackAi: "ViraStack AI",
			afterVirastackAi: " kurallarıyla mimari için, ",
			emilSkills: "emilkowalski/skills",
			afterEmilSkills: " ile animasyon için, ",
			jakubSkills: "jakubkrehel/skills",
			after: " ile arayüz cilası için yönlendiriyorum."
		},
		computer: "Bilgisayarım M1 MacBook Pro."
	},
	notFound: {
		title: "Sayfa bulunamadı",
		description: "Aradığın sayfa taşınmış ya da hiç olmamış olabilir.",
		homeCta: "Ana sayfa",
		blogCta: "Blog"
	},
	meta: {
		home: "React ve TanStack ile arayüz mimarisi kuran frontend mühendisi. ViraStack kurucusu.",
		about:
			"Sakarya'da yaşayan frontend mühendisi. Nasıl çalıştığım ve ilgi alanlarım.",
		experiences: "2017'den bugüne frontend deneyimim ve özgeçmişim.",
		projects: "ViraStack araçları ve kişisel uygulamalarım.",
		journey: "Yıllara göre iş, proje ve hayat.",
		setup: "Kod yazarken kullandığım araçlar ve teknolojiler.",
		blog: "React, Next.js, TanStack ve frontend mimarisi üzerine yazılar.",
		bookmarks:
			"Takip ettiğim frontend kaynakları, bloglar ve okuma listesi."
	}
} as const
