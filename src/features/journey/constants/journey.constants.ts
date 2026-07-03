import type { JourneyYearGroup } from "@/features/journey/types/journey.types"

export const JOURNEY_CONTENT = {
	pageTitle: "Yolculuk",
	pageDescription: "Yıllara göre iş, proje ve hayat anılarım."
} as const

export const JOURNEY_TIMELINE: JourneyYearGroup[] = [
	{
		year: 2025,
		entries: [
			{
				id: "2025-virastack",
				title: "ViraStack'i kurdum",
				description:
					"Açık kaynak frontend işlerimi tek çatı altında topladım; şablonlardan paketlere uzanan bir yol haritası çıkardım.",
				imageSrc: "/img/journey/2025-virastack.jpeg",
				imageAlt: "ViraStack logosu"
			},
			{
				id: "2025-renault-clio",
				title: "Renault Clio araba aldım",
				description:
					"Aktif olarak kullandığım ilk aracım oldu; ulaşım rutinimin bir parçası haline geldi."
			},
			{
				id: "2025-sakarya",
				title: "Sakarya'ya taşındım",
				description:
					"Yeşillikler içinde bir ev aldık; İstanbul'un kaosundan sessiz huzurlu bir yaşamı tercih ettim."
			},
			{
				id: "2025-evlilik",
				title: "İki kızıl evlendik",
				description: "Aynı renkte buluşup hayatımızı birleştirme kararı aldık, seni seviyorum kızıl sultanım ❤️",
				imageSrc: "/img/journey/2025-evlilik.png",
				imageAlt: "Nişan"
			}
		]
	},
	{
		year: 2022,
		entries: [
			{
				id: "2022-ilk-ev",
				title: "İstanbul'da ilk evimi aldım",
				description:
					"İçinde yaşamadım ama ilk kez ev sahibi oldum; kiracıya verdim."
			}
		]
	},
	{
		year: 2021,
		entries: [
			{
				id: "2021-macbook",
				title: "İlk Apple MacBook bilgisayarım",
				description: "M1 işlemcili; hâlâ aktif olarak kullanmaya devam ediyorum.",
				imageSrc: "/img/journey/2021-macbook.jpg",
				imageAlt: "Macbook Pro M1"
			}
		]
	},
	{
		year: 2020,
		entries: [
			{
				id: "2020-polo",
				title: "İlk arabam Volkswagen Polo oldu",
				description:
					"İstanbul trafiğinde araba sürmeye pek sıcak bakmadığım için neredeyse hiç kullanmadım.",
				imageSrc: "/img/journey/2020-polo.jpg",
				imageAlt: "Volkswagen Polo 1.6 TDI Comfortline"
			}
		]
	},
	{
		year: 2019,
		entries: [
			{
				id: "2019-askerlik",
				title: "Bedelli askerliği bitirdim",
				description:
					"Ankara Mamak'ta tamamladım; disiplinli düzene harika uyum sağladım ve hoş zaman geçirdim.",
				imageSrc: "/img/journey/2019-askerlik.jpeg",
				imageAlt: "Askerlik künyem"
			}
		]
	},
	{
		year: 2017,
		entries: [
			{
				id: "2017-ziraat",
				title: "Ziraat Teknoloji'de işe başladım",
				description: "İlk yazılım işim; frontend'e burada adım attım.",
				imageSrc: "/img/journey/2017-ziraat.jpeg",
				imageAlt: "Ziraat Teknoloji"
			}
		]
	},
	{
		year: 2016,
		entries: [
			{
				id: "2016-turkuaz",
				title: "İlk açık kaynak projem: Turkuaz",
				description:
					"Kendi CSS kütüphanemi yazdım; ilk açık kaynak projem, ilk göz ağrım oldu.",
				imageSrc: "/img/journey/2016-turkuaz.png",
				imageAlt: "Turkuaz CSS"
			}
		]
	},
	{
		year: 2012,
		entries: [
			{
				id: "2012-universite",
				title: "Yazılım mühendisliğine başladım",
				description:
					"Hayallerimi gerçekleştirmek için ilk adımı attım."
			}
		]
	},
	{
		year: 1993,
		entries: [
			{
				id: "1993-dogum",
				title: "Dünyaya geldim",
				description: "7 Şubat'ta İstanbul'da doğdum."
			}
		]
	}
]
