/**
 * Page copy for the Turkish-only site. Follow the writing-voice skill when editing.
 * Sentences that contain inline links are split into pieces so components only compose them.
 */
export const SITE_COPY = {
	home: {
		hero: {
			architecture: "React ve TanStack ile arayüz mimarisi kuruyorum.",
			virastack: {
				link: "ViraStack",
				suffix: "'in",
				after:
					" kurucusuyum. Burada frontend geliştiriciler için açık kaynak şablonlar, paketler ve ücretsiz rehberler hazırlıyorum."
			},
			ai: "Kod kurallarımı ViraStack AI'da topladım. Yapay zekâyla da aynı kurallarla çalışıyorum.",
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
		paragraphs: [
			["Merhaba, ben Ömer. Trabzonluyum, Sakarya'da yaşıyorum."],
			[
				{ emphasis: "2017" },
				"'den beri frontend geliştiriyorum. Kariyerime ",
				{
					link: "company",
					text: "Ziraat Teknoloji",
					logo: "ziraat-icon",
					experienceId: "ziraat"
				},
				"'de başladım. Ardından ",
				{
					link: "company",
					text: "Turkcell",
					logo: "turkcell",
					experienceId: "turkcell"
				},
				" ve ",
				{
					link: "company",
					text: "Fibabanka",
					logo: "fibabanka",
					experienceId: "alisgidis"
				},
				" dahil ",
				{ link: "experiences", text: "farklı şirketlerde" },
				" çalıştım."
			],
			[
				"İki şirkette frontend projelerini sıfırdan başlattım ve mimari kararları aldım. Bu şirketlerde takımlara da liderlik ettim. Kodluyoruz'da eğitmenlik yaptım."
			],
			[
				"Son zamanlarda frontend projelerini hızlandıran şablonlar, AI kuralları ve ücretsiz eğitim rehberleri sunduğum ",
				{ link: "virastack", text: "ViraStack" },
				" üzerinde çalışıyorum. Öğrendiklerimi ",
				{ link: "blog", text: "blogda" },
				" paylaşıyorum. Kullandığım teknolojileri, donanımımı ve AI çalışma akışımı da ",
				{ link: "setup", text: "tek sayfada" },
				" topladım."
			],
			[
				"İş dışında okumayı seviyorum. Evdeki ",
				{ link: "library", text: "kitaplığımın listesini" },
				" de burada tutuyorum."
			]
		],
		workTogether: {
			id: "birlikte-calisalim",
			title: "Birlikte çalışalım",
			before: "Geliştirme, danışmanlık ya da frontend eğitimi için ",
			link: "bana yazabilirsin",
			after: ". İlk görüşme ücretsiz."
		},
		interestsTitle: "İlgi alanları"
	},
	experiences: {
		title: "Deneyimler",
		ongoing: "Günümüz",
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
			"Bir frontend projesine başlarken gereken parçalar tek yerde: şablonlar, AI kuralları, erişilebilir form paketleri ve ücretsiz rehberler.",
		virastackLinks: {
			before: "Tüm araçlar ",
			site: "ViraStack",
			middle: " sitesinde, kaynak kodları ",
			github: "GitHub",
			after: "'da."
		},
		openSource: {
			title: "Açık kaynak",
			intro: "Projelerimi açık kaynakta, deneyimlerimi blogda paylaşıyorum.",
			calendar: {
				before: "Son bir yılda ",
				link: "GitHub",
				after: "'a yaptığım katkılar:"
			}
		}
	},
	blog: {
		title: "Blog",
		intro: "React, Next.js, TanStack ve frontend mimarisi üzerine teknik yazılar."
	},
	notes: {
		title: "Notlar",
		intro: "Deneyimler, yıl değerlendirmeleri, kitaplar ve düşünceler."
	},
	journey: {
		title: "Yolculuk",
		intro: "Yıllara göre işimde ve hayatımda öne çıkanlar."
	},
	setup: {
		title: "Kurulum",
		intro: "Kod yazarken kullandığım araçlar ve teknolojiler.",
		toolsTitle: "Araçlar",
		stackTitle: "Teknolojiler",
		assistant: {
			before: "Yapay zekâyla kod yazarken ",
			link: "Claude Code",
			afterLink:
				" kullanıyorum. Mimari kararlar gibi dikkat isteyen karmaşık işlerde ",
			opus: "Opus",
			afterOpus:
				"'u seçiyorum. İyi tanımlanmış günlük görevlerde ve hata düzeltmede daha hızlı ve ucuz olan ",
			sonnet: "Sonnet",
			after: "'le ilerliyorum."
		},
		agent: {
			before: "Ajanın uyduğu kod kurallarını ",
			virastackAi: "ViraStack AI",
			afterVirastackAi:
				"'da topladım. Arayüz tarafında iki skill paketi daha kullanıyorum: animasyon ve etkileşim için ",
			emilSkills: "emilkowalski/skills",
			afterEmilSkills: ", yüzey ve erişilebilirlik detayları için ",
			jakubSkills: "jakubkrehel/skills",
			after: "."
		},
		computer: "2021'den beri aynı M1 MacBook Pro'yu kullanıyorum."
	},
	notFound: {
		title: "Sayfa bulunamadı",
		description: "Aradığın sayfa taşınmış ya da hiç olmamış olabilir.",
		homeCta: "Ana sayfa",
		blogCta: "Blog"
	},
	meta: {
		home: "React ve TanStack ile arayüz mimarisi kuran Ömer Gülçiçek'in blogu, projeleri ve ViraStack çalışmaları.",
		about:
			"Sakarya'da yaşayan frontend mühendisi Ömer Gülçiçek'i, işlerini ve ilgi alanlarını tanı.",
		experiences:
			"2017'den beri çalıştığım şirketleri, rollerimi ve özgeçmişimi burada bulabilirsin.",
		projects: "ViraStack araçlarını ve kişisel uygulamalarımı burada topladım.",
		journey: "Yıllara göre işimde ve hayatımda neler değiştiğini burada tutuyorum.",
		setup: "Kod yazarken kullandığım araçları ve teknolojileri burada listeliyorum.",
		blog: "React, Next.js, TanStack ve frontend mimarisi üzerine yazdığım teknik yazılar.",
		notes:
			"Yıl değerlendirmelerimi, deneyimlerimi, okuduğum kitapları ve düşüncelerimi burada paylaşıyorum.",
		bookmarks:
			"Takip ettiğim frontend kaynaklarını, blogları ve okuma listemi burada topluyorum."
	},
	footer: {
		builtWith: {
			virastack: "ViraStack",
			tanstackStart: "TanStack Start",
			tailwind: "Tailwind CSS",
			and: " ve ",
			shadcn: "shadcn/ui",
			after: " ile geliştirildi."
		},
		sourceCode: {
			before: "Kaynak kod ",
			link: "GitHub",
			after: "'da."
		}
	}
} as const
