import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"

function bookmarkImage(id: string) {
	return `/img/bookmarks/${id}.webp`
}

export const LIBRARY_BOOKMARKS: Bookmark[] = [
	{
		id: "library-maksim-gorki-ekmegimi-kazanirken",
		title: "Ekmeğimi Kazanırken",
		url: "https://www.kitapyurdu.com/kitap/ekmegimi-kazanirken/634852.html",
		author: "Maksim Gorki",
		imageUrl: bookmarkImage("library-maksim-gorki-ekmegimi-kazanirken"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-maksim-gorki-cocuklugum",
		title: "Çocukluğum",
		url: "https://www.kitapyurdu.com/kitap/cocuklugum/343544.html",
		author: "Maksim Gorki",
		imageUrl: bookmarkImage("library-maksim-gorki-cocuklugum"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-maksim-gorki-benim-universitelerim",
		title: "Benim Üniversitelerim",
		url: "https://www.kitapyurdu.com/kitap/benim-universitelerim/634851.html",
		author: "Maksim Gorki",
		imageUrl: bookmarkImage("library-maksim-gorki-benim-universitelerim"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-maksim-gorki-ana",
		title: "Ana",
		url: "https://www.kitapyurdu.com/kitap/ana/688607.html",
		author: "Maksim Gorki",
		imageUrl: bookmarkImage("library-maksim-gorki-ana"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-anonim-gilgamis-destani",
		title: "Gılgamış Destanı",
		url: "https://www.kitapyurdu.com/kitap/gilgamis-destani/660175.html",
		author: "Anonim",
		imageUrl: bookmarkImage("library-anonim-gilgamis-destani"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-goethe-genc-wertherin-acilari",
		title: "Genç Werther'in Acıları",
		url: "https://www.kitapyurdu.com/kitap/genc-wertherin-acilari/595105.html",
		author: "Goethe",
		imageUrl: bookmarkImage("library-goethe-genc-wertherin-acilari"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-goethe-faust",
		title: "Faust",
		url: "https://www.kitapyurdu.com/kitap/faust/451798.html",
		author: "Goethe",
		imageUrl: bookmarkImage("library-goethe-faust"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-george-orwell-1984",
		title: "1984",
		url: "https://www.kitapyurdu.com/kitap/1984/704527.html",
		author: "George Orwell",
		imageUrl: bookmarkImage("library-george-orwell-1984"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-georges-politzer-felsefenin-temel-ilkeleri",
		title: "Felsefenin Temel İlkeleri",
		url: "https://www.kitapyurdu.com/kitap/felsefenin-temel-ilkeleri/702081.html",
		author: "Georges Politzer",
		imageUrl: bookmarkImage("library-georges-politzer-felsefenin-temel-ilkeleri"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-niccolo-machiavelli-prens",
		title: "Prens",
		url: "https://www.kitapyurdu.com/kitap/prens/579471.html",
		author: "Niccolò Machiavelli",
		imageUrl: bookmarkImage("library-niccolo-machiavelli-prens"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-friedrich-nietzsche-boyle-buyurdu-zerdust",
		title: "Böyle Buyurdu Zerdüşt",
		url: "https://www.kitapyurdu.com/kitap/boyle-buyurdu-zerdust/564152.html",
		author: "Friedrich Nietzsche",
		imageUrl: bookmarkImage("library-friedrich-nietzsche-boyle-buyurdu-zerdust"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-friedrich-nietzsche-deccal-hristiyan-karsiti",
		title: "Deccal / Hristiyan Karşıtı",
		url: "https://www.kitapyurdu.com/kitap/deccal/299383.html",
		author: "Friedrich Nietzsche",
		imageUrl: bookmarkImage("library-friedrich-nietzsche-deccal-hristiyan-karsiti"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-friedrich-nietzsche-ecce-homo",
		title: "Ecce Homo",
		url: "https://www.kitapyurdu.com/kitap/ecce-homo/649258.html",
		author: "Friedrich Nietzsche",
		imageUrl: bookmarkImage("library-friedrich-nietzsche-ecce-homo"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-friedrich-nietzsche-insanca-pek-insanca-i",
		title: "İnsanca Pek İnsanca I",
		url: "https://www.kitapyurdu.com/kitap/insanca-pek-insanca-2-kitap/117950.html",
		author: "Friedrich Nietzsche",
		imageUrl: bookmarkImage("library-friedrich-nietzsche-insanca-pek-insanca-i"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-friedrich-nietzsche-insanca-pek-insanca-ii",
		title: "İnsanca Pek İnsanca II",
		url: "https://www.kitapyurdu.com/kitap/insanca-pek-insanca-2-kitap/117950.html",
		author: "Friedrich Nietzsche",
		imageUrl: bookmarkImage("library-friedrich-nietzsche-insanca-pek-insanca-ii"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-friedrich-nietzsche-putlarin-alacakaranligi",
		title: "Putların Alacakaranlığı",
		url: "https://www.kitapyurdu.com/kitap/putlarin-alacakaranligi/49144.html",
		author: "Friedrich Nietzsche",
		imageUrl: bookmarkImage("library-friedrich-nietzsche-putlarin-alacakaranligi"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-friedrich-nietzsche-wagner-olayi",
		title: "Wagner Olayı",
		url: "https://www.kitapyurdu.com/kitap/wagner-olayi/2151.html",
		author: "Friedrich Nietzsche",
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-rudolf-steiner-gercek-ve-bilim",
		title: "Gerçek ve Bilim",
		url: "https://www.kitapyurdu.com/kitap/gercek-ve-bilim/107355.html",
		author: "Rudolf Steiner",
		imageUrl: bookmarkImage("library-rudolf-steiner-gercek-ve-bilim"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-walter-horatio-pater-platon-ve-platonculuk",
		title: "Platon ve Platonculuk",
		author: "Walter Horatio Pater",
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-mary-shelley-frankenstein",
		title: "Frankenstein",
		url: "https://www.kitapyurdu.com/kitap/frankenstein/48489.html",
		author: "Mary Shelley",
		imageUrl: bookmarkImage("library-mary-shelley-frankenstein"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-kazuo-ishiguro-beni-asla-birakma",
		title: "Beni Asla Bırakma",
		url: "https://www.kitapyurdu.com/kitap/beni-asla-birakma/91683.html",
		author: "Kazuo Ishiguro",
		imageUrl: bookmarkImage("library-kazuo-ishiguro-beni-asla-birakma"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jane-austen-ask-ve-gurur",
		title: "Aşk ve Gurur",
		url: "https://www.kitapyurdu.com/kitap/ask-ve-gurur/722624.html",
		author: "Jane Austen",
		imageUrl: bookmarkImage("library-jane-austen-ask-ve-gurur"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jack-london-vahsetin-cagrisi",
		title: "Vahşetin Çağrısı",
		url: "https://www.kitapyurdu.com/kitap/vahsetin-cagrisi/564212.html",
		author: "Jack London",
		imageUrl: bookmarkImage("library-jack-london-vahsetin-cagrisi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jack-london-meksikali",
		title: "Meksikalı",
		url: "https://www.kitapyurdu.com/kitap/meksikali/107400.html",
		author: "Jack London",
		imageUrl: bookmarkImage("library-jack-london-meksikali"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jack-london-ademden-once",
		title: "Adem'den Önce",
		url: "https://www.kitapyurdu.com/kitap/ademden-once/564138.html",
		author: "Jack London",
		imageUrl: bookmarkImage("library-jack-london-ademden-once"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-alfred-adler-yasamla-ilgili-sorunlar",
		title: "Yaşamla İlgili Sorunlar",
		author: "Alfred Adler",
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-alfred-adler-yasam-bilgisi",
		title: "Yaşam Bilgisi",
		author: "Alfred Adler",
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-sigmund-freud-totem-ve-tabu",
		title: "Totem ve Tabu",
		url: "https://www.kitapyurdu.com/kitap/totem-ve-tabu/585827.html",
		author: "Sigmund Freud",
		imageUrl: bookmarkImage("library-sigmund-freud-totem-ve-tabu"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-sigmund-freud-sevgi-ve-cinsellik-uzerine",
		title: "Sevgi ve Cinsellik Üzerine",
		url: "https://www.kitapyurdu.com/kitap/sevgi-ve-cinsellik-uzerine/107313.html",
		author: "Sigmund Freud",
		imageUrl: bookmarkImage("library-sigmund-freud-sevgi-ve-cinsellik-uzerine"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-sigmund-freud-ket-vurma-belirti-ve-korku",
		title: "Ket Vurma Belirti ve Korku",
		author: "Sigmund Freud",
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-sigmund-freud-ruya-yorumlari-i",
		title: "Rüya Yorumları - I",
		url: "https://www.kitapyurdu.com/kitap/ruya-yorumlari-1/82768.html",
		author: "Sigmund Freud",
		imageUrl: bookmarkImage("library-sigmund-freud-ruya-yorumlari-i"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-sigmund-freud-ruya-yorumlari-ii",
		title: "Rüya Yorumları - II",
		url: "https://www.kitapyurdu.com/kitap/ruya-yorumlari-1/82768.html",
		author: "Sigmund Freud",
		imageUrl: bookmarkImage("library-sigmund-freud-ruya-yorumlari-ii"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-sigmund-freud-gunluk-hayatin-psikopatolojisi",
		title: "Günlük Hayatın Psikopatolojisi",
		url: "https://www.kitapyurdu.com/kitap/gunluk-yasamin-psikopatolojisi/733058.html",
		author: "Sigmund Freud",
		imageUrl: bookmarkImage("library-sigmund-freud-gunluk-hayatin-psikopatolojisi"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-gustave-le-bon-devrim-psikolojisi",
		title: "Devrim Psikolojisi",
		url: "https://www.kitapyurdu.com/kitap/devrimin-psikolojisi-kitle-zihni-uzerine-tarihin-gozden-gecirilmesi/254329.html",
		author: "Gustave Le Bon",
		imageUrl: bookmarkImage("library-gustave-le-bon-devrim-psikolojisi"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Kuram"
	},
	{
		id: "library-montaigne-denemeler",
		title: "Denemeler",
		url: "https://www.kitapyurdu.com/kitap/denemeler-2-cilt/564157.html",
		author: "Montaigne",
		imageUrl: bookmarkImage("library-montaigne-denemeler"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-nikolay-gogol-olu-canlar",
		title: "Ölü Canlar",
		url: "https://www.kitapyurdu.com/kitap/olu-canlar/106916.html",
		author: "Nikolay Gogol",
		imageUrl: bookmarkImage("library-nikolay-gogol-olu-canlar"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-mihail-bulgakov-genc-bir-doktorun-anilari",
		title: "Genç Bir Doktorun Anıları",
		url: "https://www.kitapyurdu.com/kitap/genc-bir-doktorun-anilari/358569.html",
		author: "Mihail Bulgakov",
		imageUrl: bookmarkImage("library-mihail-bulgakov-genc-bir-doktorun-anilari"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-lu-sin-ciglik",
		title: "Çığlık",
		url: "https://www.kitapyurdu.com/kitap/ciglik/19809.html",
		author: "Lu Sin",
		imageUrl: bookmarkImage("library-lu-sin-ciglik"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-ivan-goncarov-oblomov",
		title: "Oblomov",
		url: "https://www.kitapyurdu.com/kitap/oblomov/447271.html",
		author: "İvan Gonçarov",
		imageUrl: bookmarkImage("library-ivan-goncarov-oblomov"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-stendhal-kirmizi-ve-siyah",
		title: "Kırmızı ve Siyah",
		url: "https://www.kitapyurdu.com/kitap/kirmizi-ve-siyah/622745.html",
		author: "Stendhal",
		imageUrl: bookmarkImage("library-stendhal-kirmizi-ve-siyah"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-paulo-coelho-hac",
		title: "Hac",
		url: "https://www.kitapyurdu.com/kitap/hac/634974.html",
		author: "Paulo Coelho",
		imageUrl: bookmarkImage("library-paulo-coelho-hac"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-paulo-coelho-mektup",
		title: "Mektup",
		url: "https://www.kitapyurdu.com/kitap/mektub/657585.html",
		author: "Paulo Coelho",
		imageUrl: bookmarkImage("library-paulo-coelho-mektup"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-gabriel-garcia-marquez-benim-huzunlu-orospularim",
		title: "Benim Hüzünlü Orospularım",
		url: "https://www.kitapyurdu.com/kitap/benim-huzunlu-orospularim/69246.html",
		author: "Gabriel García Márquez",
		imageUrl: bookmarkImage("library-gabriel-garcia-marquez-benim-huzunlu-orospularim"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-gabriel-garcia-marquez-kirmizi-pazartesi",
		title: "Kırmızı Pazartesi",
		url: "https://www.kitapyurdu.com/kitap/kirmizi-pazartesi-ciltli-baski/517225.html",
		author: "Gabriel García Márquez",
		imageUrl: bookmarkImage("library-gabriel-garcia-marquez-kirmizi-pazartesi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-virginia-woolf-kendine-ait-bir-oda",
		title: "Kendine Ait Bir Oda",
		url: "https://www.kitapyurdu.com/kitap/kendine-ait-bir-oda/564181.html",
		author: "Virginia Woolf",
		imageUrl: bookmarkImage("library-virginia-woolf-kendine-ait-bir-oda"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-victor-hugo-sefiller-v",
		title: "Sefiller V",
		url: "https://www.kitapyurdu.com/kitap/sefiller-v-cilt/107446.html",
		author: "Victor Hugo",
		imageUrl: bookmarkImage("library-victor-hugo-sefiller-v"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-victor-hugo-sefiller-iv",
		title: "Sefiller IV",
		url: "https://www.kitapyurdu.com/kitap/sefiller-iv-cilt/107445.html",
		author: "Victor Hugo",
		imageUrl: bookmarkImage("library-victor-hugo-sefiller-iv"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-victor-hugo-sefiller-iii",
		title: "Sefiller III",
		url: "https://www.kitapyurdu.com/kitap/sefiller-iii-cilt/107507.html",
		author: "Victor Hugo",
		imageUrl: bookmarkImage("library-victor-hugo-sefiller-iii"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-victor-hugo-sefiller-ii",
		title: "Sefiller II",
		url: "https://www.kitapyurdu.com/kitap/sefiller-ii-cilt/107508.html",
		author: "Victor Hugo",
		imageUrl: bookmarkImage("library-victor-hugo-sefiller-ii"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-victor-hugo-sefiller-i",
		title: "Sefiller I",
		url: "https://www.kitapyurdu.com/kitap/sefiller-i-cilt/107509.html",
		author: "Victor Hugo",
		imageUrl: bookmarkImage("library-victor-hugo-sefiller-i"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-victor-hugo-bir-idam-mahkumunun-son-gunu",
		title: "Bir İdam Mahkûmunun Son Günü",
		url: "https://www.kitapyurdu.com/kitap/bir-idam-mahkumunun-son-gunu/626202.html",
		author: "Victor Hugo",
		imageUrl: bookmarkImage("library-victor-hugo-bir-idam-mahkumunun-son-gunu"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-ivan-turgenyev-devrimden-once",
		title: "Devrimden Önce",
		url: "https://www.kitapyurdu.com/kitap/devrimden-once/107437.html",
		author: "İvan Turgenyev",
		imageUrl: bookmarkImage("library-ivan-turgenyev-devrimden-once"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-ivan-turgenyev-babalar-ve-ogullar",
		title: "Babalar ve Oğullar",
		url: "https://www.kitapyurdu.com/kitap/babalar-ve-ogullar/85393.html",
		author: "İvan Turgenyev",
		imageUrl: bookmarkImage("library-ivan-turgenyev-babalar-ve-ogullar"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-william-golding-sineklerin-tanrisi",
		title: "Sineklerin Tanrısı",
		url: "https://www.kitapyurdu.com/kitap/sineklerin-tanrisi-karton-kapak/39615.html",
		author: "William Golding",
		imageUrl: bookmarkImage("library-william-golding-sineklerin-tanrisi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-sir-arthur-conan-doyle-suphe-asla-uyumaz",
		title: "Şüphe Asla Uyumaz",
		url: "https://www.kitapyurdu.com/kitap/suphe-asla-uyumaz/605893.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage("library-sir-arthur-conan-doyle-suphe-asla-uyumaz"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-sir-arthur-conan-doyle-suc-detayda-saklidir",
		title: "Suç Detayda Saklıdır",
		url: "https://www.kitapyurdu.com/kitap/suc-detayda-saklidir/605890.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage("library-sir-arthur-conan-doyle-suc-detayda-saklidir"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-sir-arthur-conan-doyle-gercekler-kanit-ister",
		title: "Gerçekler Kanıt İster",
		url: "https://www.kitapyurdu.com/kitap/gercekler-kanit-ister/605894.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage("library-sir-arthur-conan-doyle-gercekler-kanit-ister"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-sir-arthur-conan-doyle-aklin-suphesi-sucun-gercegidir",
		title: "Aklın Şüphesi Suçun Gerçeğidir",
		url: "https://www.kitapyurdu.com/kitap/aklin-suphesi-sucun-gercegidir/605892.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage("library-sir-arthur-conan-doyle-aklin-suphesi-sucun-gercegidir"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-sir-arthur-conan-doyle-akil-oyunlarinin-golgesinde",
		title: "Akıl Oyunlarının Gölgesinde",
		url: "https://www.kitapyurdu.com/kitap/akil-oyunlarinin-golgesinde/605891.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage("library-sir-arthur-conan-doyle-akil-oyunlarinin-golgesinde"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-gustave-flaubert-madam-bovary",
		title: "Madam Bovary",
		url: "https://www.kitapyurdu.com/kitap/madam-bovary/569238.html",
		author: "Gustave Flaubert",
		imageUrl: bookmarkImage("library-gustave-flaubert-madam-bovary"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-alexandre-dumas-uc-silahsorler",
		title: "Üç Silahşörler",
		url: "https://www.kitapyurdu.com/kitap/uc-silahsorler/495899.html",
		author: "Alexandre Dumas",
		imageUrl: bookmarkImage("library-alexandre-dumas-uc-silahsorler"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-alexandre-dumas-kamelyali-kadin",
		title: "Kamelyalı Kadın",
		url: "https://www.kitapyurdu.com/kitap/kamelyali-kadin-ciltsiz/84593.html",
		author: "Alexandre Dumas",
		imageUrl: bookmarkImage("library-alexandre-dumas-kamelyali-kadin"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-aleksandr-puskin-yuzbasinin-kizi",
		title: "Yüzbaşının Kızı",
		url: "https://www.kitapyurdu.com/kitap/yuzbasinin-kizi/763110.html",
		author: "Aleksandr Puşkin",
		imageUrl: bookmarkImage("library-aleksandr-puskin-yuzbasinin-kizi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-anton-cehov-hikayelerden-bir-demet",
		title: "Hikâyelerden Bir Demet",
		url: "https://www.kitapyurdu.com/kitap/hikayelerden-bir-demet/72157.html",
		author: "Anton Çehov",
		imageUrl: bookmarkImage("library-anton-cehov-hikayelerden-bir-demet"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-anton-cehov-kadin-oykuleri",
		title: "Kadın Öyküleri",
		url: "https://www.kitapyurdu.com/kitap/kadin-oykuleri/542111.html",
		author: "Anton Çehov",
		imageUrl: bookmarkImage("library-anton-cehov-kadin-oykuleri"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-anatole-france-kirmizi-zambak",
		title: "Kırmızı Zambak",
		url: "https://www.kitapyurdu.com/kitap/kirmizi-zambak/619932.html",
		author: "Anatole France",
		imageUrl: bookmarkImage("library-anatole-france-kirmizi-zambak"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-honore-de-balzac-goriot-baba",
		title: "Goriot Baba",
		url: "https://www.kitapyurdu.com/kitap/goriot-baba/429074.html",
		author: "Honoré de Balzac",
		imageUrl: bookmarkImage("library-honore-de-balzac-goriot-baba"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-honore-de-balzac-vadideki-zambak",
		title: "Vadideki Zambak",
		url: "https://www.kitapyurdu.com/kitap/vadideki-zambak/415377.html",
		author: "Honoré de Balzac",
		imageUrl: bookmarkImage("library-honore-de-balzac-vadideki-zambak"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-brittainy-c-cherry-yuz-karasi",
		title: "Yüz Karası",
		url: "https://www.kitapyurdu.com/kitap/yuz-karasi/634819.html",
		author: "Brittainy C. Cherry",
		imageUrl: bookmarkImage("library-brittainy-c-cherry-yuz-karasi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-cengiz-aytmatov-beyaz-gemi",
		title: "Beyaz Gemi",
		url: "https://www.kitapyurdu.com/kitap/beyaz-gemi/14375.html",
		author: "Cengiz Aytmatov",
		imageUrl: bookmarkImage("library-cengiz-aytmatov-beyaz-gemi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-cengiz-aytmatov-gun-olur-asra-bedel",
		title: "Gün Olur Asra Bedel",
		url: "https://www.kitapyurdu.com/kitap/gun-olur-asra-bedel/583383.html",
		author: "Cengiz Aytmatov",
		imageUrl: bookmarkImage("library-cengiz-aytmatov-gun-olur-asra-bedel"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-charlotte-bronte-jane-eyre-1",
		title: "Jane Eyre - 1",
		url: "https://www.kitapyurdu.com/kitap/jane-eyre/442981.html",
		author: "Charlotte Brontë",
		imageUrl: bookmarkImage("library-charlotte-bronte-jane-eyre-1"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-charlotte-bronte-jane-eyre-2",
		title: "Jane Eyre - 2",
		url: "https://www.kitapyurdu.com/kitap/jane-eyre/442981.html",
		author: "Charlotte Brontë",
		imageUrl: bookmarkImage("library-charlotte-bronte-jane-eyre-2"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-charles-dickens-iki-sehrin-hikayesi",
		title: "İki Şehrin Hikâyesi",
		url: "https://www.kitapyurdu.com/kitap/iki-sehrin-hikayesi/570974.html",
		author: "Charles Dickens",
		imageUrl: bookmarkImage("library-charles-dickens-iki-sehrin-hikayesi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-karamazov-kardesler",
		title: "Karamazov Kardeşler",
		url: "https://www.kitapyurdu.com/kitap/karamazov-kardesler2/114026.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-karamazov-kardesler"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-beyaz-geceler",
		title: "Beyaz Geceler",
		url: "https://www.kitapyurdu.com/kitap/beyaz-geceler/554881.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-beyaz-geceler"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-budala-1",
		title: "Budala - 1",
		url: "https://www.kitapyurdu.com/kitap/budala2/114021.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-budala-1"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-budala-2",
		title: "Budala - 2",
		url: "https://www.kitapyurdu.com/kitap/budala2/114021.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-budala-2"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-yeraltindan-notlar",
		title: "Yeraltından Notlar",
		url: "https://www.kitapyurdu.com/kitap/yeraltindan-notlar/502160.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-yeraltindan-notlar"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-insanciklar",
		title: "İnsancıklar",
		url: "https://www.kitapyurdu.com/kitap/insanciklar-14-punto-serisi/661970.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-insanciklar"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-suc-ve-ceza",
		title: "Suç ve Ceza",
		url: "https://www.kitapyurdu.com/kitap/suc-ve-ceza-1/72588.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-suc-ve-ceza"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-suc-ve-ceza-ii",
		title: "Suç ve Ceza II",
		url: "https://www.kitapyurdu.com/kitap/suc-ve-ceza-iicilt/99781.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-suc-ve-ceza-ii"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-suc-ve-ceza-i",
		title: "Suç ve Ceza I",
		url: "https://www.kitapyurdu.com/kitap/suc-ve-ceza-i-cilt/107404.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-suc-ve-ceza-i"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-kumarbaz",
		title: "Kumarbaz",
		url: "https://www.kitapyurdu.com/kitap/kumarbaz/457969.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-kumarbaz"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-karamazov-kardesler-iii",
		title: "Karamazov Kardeşler III",
		url: "https://www.kitapyurdu.com/kitap/karamazov-kardesler-2-cilt/630220.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-karamazov-kardesler-iii"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-karamazov-kardesler-ii",
		title: "Karamazov Kardeşler II",
		url: "https://www.kitapyurdu.com/kitap/karamazov-kardesler-2-cilt/630220.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-karamazov-kardesler-ii"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-karamazov-kardesler-i",
		title: "Karamazov Kardeşler I",
		url: "https://www.kitapyurdu.com/kitap/karamazov-kardesler-2-cilt/630220.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-karamazov-kardesler-i"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-delikanli-ii",
		title: "Delikanlı II",
		url: "https://www.kitapyurdu.com/kitap/delikanli2/114030.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-delikanli-ii"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-fyodor-dostoyevski-delikanli-i",
		title: "Delikanlı I",
		url: "https://www.kitapyurdu.com/kitap/delikanli2/114030.html",
		author: "Fyodor Dostoyevski",
		imageUrl: bookmarkImage("library-fyodor-dostoyevski-delikanli-i"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-emile-zola-bir-ask-sayfasi",
		title: "Bir Aşk Sayfası",
		url: "https://www.kitapyurdu.com/kitap/bir-ask-sayfasi/399592.html",
		author: "Émile Zola",
		imageUrl: bookmarkImage("library-emile-zola-bir-ask-sayfasi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-emile-zola-germinal",
		title: "Germinal",
		url: "https://www.kitapyurdu.com/kitap/germinal/469095.html",
		author: "Émile Zola",
		imageUrl: bookmarkImage("library-emile-zola-germinal"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-emile-zola-meyhane-1",
		title: "Meyhane - 1",
		url: "https://www.kitapyurdu.com/kitap/meyhane/404073.html",
		author: "Émile Zola",
		imageUrl: bookmarkImage("library-emile-zola-meyhane-1"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-emile-zola-meyhane-2",
		title: "Meyhane - 2",
		url: "https://www.kitapyurdu.com/kitap/meyhane/404073.html",
		author: "Émile Zola",
		imageUrl: bookmarkImage("library-emile-zola-meyhane-2"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-mehmet-akif-ersoy-safahat",
		title: "Safahat",
		url: "https://www.kitapyurdu.com/kitap/safahat/703257.html",
		author: "Mehmet Âkif Ersoy",
		imageUrl: bookmarkImage("library-mehmet-akif-ersoy-safahat"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-yakup-kadri-karaosmanoglu-ankara",
		title: "Ankara",
		url: "https://www.kitapyurdu.com/kitap/ankara-butun-eserleri-10/18159.html",
		author: "Yakup Kadri Karaosmanoğlu",
		imageUrl: bookmarkImage("library-yakup-kadri-karaosmanoglu-ankara"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-yakup-kadri-karaosmanoglu-hukum-gecesi",
		title: "Hüküm Gecesi",
		url: "https://www.kitapyurdu.com/kitap/hukum-gecesi-butun-eserleri-3/18166.html",
		author: "Yakup Kadri Karaosmanoğlu",
		imageUrl: bookmarkImage("library-yakup-kadri-karaosmanoglu-hukum-gecesi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-yakup-kadri-karaosmanoglu-yaban",
		title: "Yaban",
		url: "https://www.kitapyurdu.com/kitap/yaban-butun-eserleri-1/18176.html",
		author: "Yakup Kadri Karaosmanoğlu",
		imageUrl: bookmarkImage("library-yakup-kadri-karaosmanoglu-yaban"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-resat-nuri-guntekin-calikusu",
		title: "Çalıkuşu",
		url: "https://www.kitapyurdu.com/kitap/calikusu/7419.html",
		author: "Reşat Nuri Güntekin",
		imageUrl: bookmarkImage("library-resat-nuri-guntekin-calikusu"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-halide-edib-adivar-turkun-atesle-imtihani",
		title: "Türk'ün Ateşle İmtihanı",
		url: "https://www.kitapyurdu.com/kitap/turkun-atesle-imtihani/102220.html",
		author: "Halide Edib Adıvar",
		imageUrl: bookmarkImage("library-halide-edib-adivar-turkun-atesle-imtihani"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-halide-edib-adivar-vurun-kahpeye",
		title: "Vurun Kahpeye",
		url: "https://www.kitapyurdu.com/kitap/vurun-kahpeye/94988.html",
		author: "Halide Edib Adıvar",
		imageUrl: bookmarkImage("library-halide-edib-adivar-vurun-kahpeye"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-halide-edib-adivar-sinekli-bakkal",
		title: "Sinekli Bakkal",
		url: "https://www.kitapyurdu.com/kitap/sinekli-bakkal/94987.html",
		author: "Halide Edib Adıvar",
		imageUrl: bookmarkImage("library-halide-edib-adivar-sinekli-bakkal"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-halide-edib-adivar-atesten-gomlek",
		title: "Ateşten Gömlek",
		url: "https://www.kitapyurdu.com/kitap/atesten-gomlek/94989.html",
		author: "Halide Edib Adıvar",
		imageUrl: bookmarkImage("library-halide-edib-adivar-atesten-gomlek"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ahmet-hamdi-tanpinar-19-asir-turk-edebiyati-tarihi",
		title: "19. Asır Türk Edebiyatı Tarihi",
		url: "https://www.kitapyurdu.com/kitap/on-dokuzuncu-asir-turk-edebiyati-tarihi/270322.html",
		author: "Ahmet Hamdi Tanpınar",
		imageUrl: bookmarkImage("library-ahmet-hamdi-tanpinar-19-asir-turk-edebiyati-tarihi"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-ahmet-hikmet-muftuoglu-haristan-ve-gulistan",
		title: "Haristan ve Gülistan",
		url: "https://www.kitapyurdu.com/kitap/haristan-ve-gulistan/606217.html",
		author: "Ahmet Hikmet Müftüoğlu",
		imageUrl: bookmarkImage("library-ahmet-hikmet-muftuoglu-haristan-ve-gulistan"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-fatma-aliye-udi",
		title: "Udî",
		url: "https://www.kitapyurdu.com/kitap/udi/49690.html",
		author: "Fatma Aliye",
		imageUrl: bookmarkImage("library-fatma-aliye-udi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-huseyin-rahmi-gurpinar-gulyabani",
		title: "Gulyabani",
		url: "https://www.kitapyurdu.com/kitap/gulyabani/435405.html",
		author: "Hüseyin Rahmi Gürpınar",
		imageUrl: bookmarkImage("library-huseyin-rahmi-gurpinar-gulyabani"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-huseyin-rahmi-gurpinar-murebbiye",
		title: "Mürebbiye",
		url: "https://www.kitapyurdu.com/kitap/murebbiye/597409.html",
		author: "Hüseyin Rahmi Gürpınar",
		imageUrl: bookmarkImage("library-huseyin-rahmi-gurpinar-murebbiye"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-huseyin-rahmi-gurpinar-sipsevdi",
		title: "Şıpsevdi",
		url: "https://www.kitapyurdu.com/kitap/sipsevdi/573634.html",
		author: "Hüseyin Rahmi Gürpınar",
		imageUrl: bookmarkImage("library-huseyin-rahmi-gurpinar-sipsevdi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-inci-enginun-yeni-turk-edebiyati-tanzimattan-cumhuriyete",
		title: "Yeni Türk Edebiyatı: Tanzimat'tan Cumhuriyet'e (1839-1923)",
		url: "https://www.kitapyurdu.com/kitap/tanzimattan-cumhuriyete-18391923-yeni-turk-edebiyati/79401.html",
		author: "İnci Enginün",
		imageUrl: bookmarkImage("library-inci-enginun-yeni-turk-edebiyati-tanzimattan-cumhuriyete"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-halid-ziya-usakligil-kirik-hayatlar",
		title: "Kırık Hayatlar",
		url: "https://www.kitapyurdu.com/kitap/kirik-hayatlar/569233.html",
		author: "Halid Ziya Uşaklıgil",
		imageUrl: bookmarkImage("library-halid-ziya-usakligil-kirik-hayatlar"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-halid-ziya-usakligil-mai-ve-siyah",
		title: "Mai ve Siyah",
		url: "https://www.kitapyurdu.com/kitap/mai-ve-siyah/396465.html",
		author: "Halid Ziya Uşaklıgil",
		imageUrl: bookmarkImage("library-halid-ziya-usakligil-mai-ve-siyah"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-halid-ziya-usakligil-nemide",
		title: "Nemide",
		url: "https://www.kitapyurdu.com/kitap/nemide/592360.html",
		author: "Halid Ziya Uşaklıgil",
		imageUrl: bookmarkImage("library-halid-ziya-usakligil-nemide"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-kenan-hulusi-koray-osmanoflar",
		title: "Osmanoflar",
		url: "https://www.kitapyurdu.com/kitap/osmanoflar/593286.html",
		author: "Kenan Hulusi Koray",
		imageUrl: bookmarkImage("library-kenan-hulusi-koray-osmanoflar"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-omer-seyfettin-ashab-i-kehfimiz",
		title: "Ashâb-ı Kehfimiz",
		url: "https://www.kitapyurdu.com/kitap/ashabi-kehfimiz/80101.html",
		author: "Ömer Seyfettin",
		imageUrl: bookmarkImage("library-omer-seyfettin-ashab-i-kehfimiz"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-recaizade-mahmud-ekrem-araba-sevdasi",
		title: "Araba Sevdası",
		url: "https://www.kitapyurdu.com/kitap/araba-sevdasi/579928.html",
		author: "Recaizade Mahmud Ekrem",
		imageUrl: bookmarkImage("library-recaizade-mahmud-ekrem-araba-sevdasi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-saffet-nezihi-zavalli-necdet",
		title: "Zavallı Necdet",
		url: "https://www.kitapyurdu.com/kitap/zavalli-necdet/602573.html",
		author: "Saffet Nezihi",
		imageUrl: bookmarkImage("library-saffet-nezihi-zavalli-necdet"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-samipasazade-sezai-serguzest",
		title: "Sergüzeşt",
		url: "https://www.kitapyurdu.com/kitap/serguzest/579990.html",
		author: "Samipaşazade Sezai",
		imageUrl: bookmarkImage("library-samipasazade-sezai-serguzest"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-abdulhak-sinasi-hisar-fahim-bey-ve-biz",
		title: "Fahim Bey ve Biz",
		url: "https://www.kitapyurdu.com/kitap/fahim-bey-ve-biz-kitap-boy/639777.html",
		author: "Abdülhak Şinasi Hisar",
		imageUrl: bookmarkImage("library-abdulhak-sinasi-hisar-fahim-bey-ve-biz"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-adalet-agaoglu-bir-dugun-gecesi",
		title: "Bir Düğün Gecesi",
		url: "https://www.kitapyurdu.com/kitap/bir-dugun-gecesi/696770.html",
		author: "Adalet Ağaoğlu",
		imageUrl: bookmarkImage("library-adalet-agaoglu-bir-dugun-gecesi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-bes-sehir-4787",
		title: "Beş Şehir",
		url: "https://www.kitapyurdu.com/kitap/bes-sehir/4787.html",
		author: "Ahmet Hamdi Tanpınar",
		imageUrl: bookmarkImage("library-bes-sehir-4787"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-ahmet-hamdi-tanpinar-huzur",
		title: "Huzur",
		url: "https://www.kitapyurdu.com/kitap/huzur/665700.html",
		author: "Ahmet Hamdi Tanpınar",
		imageUrl: bookmarkImage("library-ahmet-hamdi-tanpinar-huzur"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ahmet-hamdi-tanpinar-mahur-beste",
		title: "Mahur Beste",
		url: "https://www.kitapyurdu.com/kitap/mahur-beste/4838.html",
		author: "Ahmet Hamdi Tanpınar",
		imageUrl: bookmarkImage("library-ahmet-hamdi-tanpinar-mahur-beste"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-erdal-oz-yaralisin",
		title: "Yaralısın",
		url: "https://www.kitapyurdu.com/kitap/yaralisin/10138.html",
		author: "Erdal Öz",
		imageUrl: bookmarkImage("library-erdal-oz-yaralisin"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ihsan-oktay-anar-puslu-kitalar-atlasi",
		title: "Puslu Kıtalar Atlası",
		url: "https://www.kitapyurdu.com/kitap/puslu-kitalar-atlasi/1650.html",
		author: "İhsan Oktay Anar",
		imageUrl: bookmarkImage("library-ihsan-oktay-anar-puslu-kitalar-atlasi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-kemal-tahir-devlet-ana",
		title: "Devlet Ana",
		url: "https://www.kitapyurdu.com/kitap/devlet-ana/634507.html",
		author: "Kemal Tahir",
		imageUrl: bookmarkImage("library-kemal-tahir-devlet-ana"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-kemal-tahir-yol-ayrimi",
		title: "Yol Ayrımı",
		url: "https://www.kitapyurdu.com/kitap/yol-ayrimi/634518.html",
		author: "Kemal Tahir",
		imageUrl: bookmarkImage("library-kemal-tahir-yol-ayrimi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-kemal-tahir-karilar-kogusu",
		title: "Karılar Koğuşu",
		url: "https://www.kitapyurdu.com/kitap/karilar-kogusu-kod6d15/466602.html",
		author: "Kemal Tahir",
		imageUrl: bookmarkImage("library-kemal-tahir-karilar-kogusu"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-memduh-sevket-esendal-ayasli-ile-kiracilari",
		title: "Ayaşlı ile Kiracıları",
		url: "https://www.kitapyurdu.com/kitap/ayasli-ile-kiracilari/637892.html",
		author: "Memduh Şevket Esendal",
		imageUrl: bookmarkImage("library-memduh-sevket-esendal-ayasli-ile-kiracilari"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-oguz-atay-bir-bilim-adaminin-romani-mustafa-inan",
		title: "Bir Bilim Adamının Romanı: Mustafa İnan",
		url: "https://www.kitapyurdu.com/kitap/bir-bilim-adaminin-romani-butun-eserleri-5/18256.html",
		author: "Oğuz Atay",
		imageUrl: bookmarkImage("library-oguz-atay-bir-bilim-adaminin-romani-mustafa-inan"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-orhan-kemal-el-kizi",
		title: "El Kızı",
		url: "https://www.kitapyurdu.com/kitap/el-kizi/105360.html",
		author: "Orhan Kemal",
		imageUrl: bookmarkImage("library-orhan-kemal-el-kizi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-orhan-pamuk-benim-adim-kirmizi",
		title: "Benim Adım Kırmızı",
		url: "https://www.kitapyurdu.com/kitap/benim-adim-kirmizi/310999.html",
		author: "Orhan Pamuk",
		imageUrl: bookmarkImage("library-orhan-pamuk-benim-adim-kirmizi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-orhan-pamuk-kirmizi-sacli-kadin",
		title: "Kırmızı Saçlı Kadın",
		url: "https://www.kitapyurdu.com/kitap/kirmizi-sacli-kadin/386294.html",
		author: "Orhan Pamuk",
		imageUrl: bookmarkImage("library-orhan-pamuk-kirmizi-sacli-kadin"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-orhan-pamuk-masumiyet-muzesi",
		title: "Masumiyet Müzesi",
		url: "https://www.kitapyurdu.com/kitap/masumiyet-muzesi/317427.html",
		author: "Orhan Pamuk",
		imageUrl: bookmarkImage("library-orhan-pamuk-masumiyet-muzesi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-orhan-pamuk-sessiz-ev",
		title: "Sessiz Ev",
		url: "https://www.kitapyurdu.com/kitap/sessiz-ev/327886.html",
		author: "Orhan Pamuk",
		imageUrl: bookmarkImage("library-orhan-pamuk-sessiz-ev"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-peyami-safa-yalniziz",
		title: "Yalnızız",
		url: "https://www.kitapyurdu.com/kitap/yalniziz/643694.html",
		author: "Peyami Safa",
		imageUrl: bookmarkImage("library-peyami-safa-yalniziz"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-peyami-safa-sozde-kizlar",
		title: "Sözde Kızlar",
		url: "https://www.kitapyurdu.com/kitap/sozde-kizlar/14311.html",
		author: "Peyami Safa",
		imageUrl: bookmarkImage("library-peyami-safa-sozde-kizlar"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-peyami-safa-matmazel-noraliyanin-koltugu",
		title: "Matmazel Noraliya'nın Koltuğu",
		url: "https://www.kitapyurdu.com/kitap/matmazel-noraliyanin-koltugu/14303.html",
		author: "Peyami Safa",
		imageUrl: bookmarkImage("library-peyami-safa-matmazel-noraliyanin-koltugu"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-peyami-safa-dokuzuncu-hariciye-kogusu",
		title: "Dokuzuncu Hariciye Koğuşu",
		url: "https://www.kitapyurdu.com/kitap/dokuzuncu-hariciye-kogusu/641158.html",
		author: "Peyami Safa",
		imageUrl: bookmarkImage("library-peyami-safa-dokuzuncu-hariciye-kogusu"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-peyami-safa-cumbadan-rumbaya",
		title: "Cumbadan Rumbaya",
		url: "https://www.kitapyurdu.com/kitap/cumbadan-rumbaya/651912.html",
		author: "Peyami Safa",
		imageUrl: bookmarkImage("library-peyami-safa-cumbadan-rumbaya"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-peyami-safa-bir-tereddudun-romani",
		title: "Bir Tereddüdün Romanı",
		url: "https://www.kitapyurdu.com/kitap/bir-tereddudun-romani/28515.html",
		author: "Peyami Safa",
		imageUrl: bookmarkImage("library-peyami-safa-bir-tereddudun-romani"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-sabahattin-ali-kuyucakli-yusuf",
		title: "Kuyucaklı Yusuf",
		url: "https://www.kitapyurdu.com/kitap/kuyucakli-yusuf/569237.html",
		author: "Sabahattin Ali",
		imageUrl: bookmarkImage("library-sabahattin-ali-kuyucakli-yusuf"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-tarik-bugra-donemecte",
		title: "Dönemeçte",
		url: "https://www.kitapyurdu.com/kitap/donemecte-toplu-eserleri-4/59630.html",
		author: "Tarık Buğra",
		imageUrl: bookmarkImage("library-tarik-bugra-donemecte"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-tarik-bugra-ibisin-ruyasi",
		title: "İbiş'in Rüyası",
		url: "https://www.kitapyurdu.com/kitap/ibisin-ruyasi/14337.html",
		author: "Tarık Buğra",
		imageUrl: bookmarkImage("library-tarik-bugra-ibisin-ruyasi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Tiyatro"
	},
	{
		id: "library-tarik-bugra-osmancik",
		title: "Osmancık",
		url: "https://www.kitapyurdu.com/kitap/osmancik/14334.html",
		author: "Tarık Buğra",
		imageUrl: bookmarkImage("library-tarik-bugra-osmancik"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-yasar-kemal-agri-dagi-efsanesi",
		title: "Ağrı Dağı Efsanesi",
		url: "https://www.kitapyurdu.com/kitap/agridagi-efsanesi/57283.html",
		author: "Yaşar Kemal",
		imageUrl: bookmarkImage("library-yasar-kemal-agri-dagi-efsanesi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-yasar-kemal-filler-sultani-ile-kirmizi-sakalli-topal-karinca",
		title: "Filler Sultanı ile Kırmızı Sakallı Topal Karınca",
		url: "https://www.kitapyurdu.com/kitap/filler-sultani-ile-kirmizi-sakalli-topal-karinca/57295.html",
		author: "Yaşar Kemal",
		imageUrl: bookmarkImage("library-yasar-kemal-filler-sultani-ile-kirmizi-sakalli-topal-karinca"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-yasar-kemal-ince-memed-3",
		title: "İnce Memed 3",
		url: "https://www.kitapyurdu.com/kitap/ince-memed-3/57302.html",
		author: "Yaşar Kemal",
		imageUrl: bookmarkImage("library-yasar-kemal-ince-memed-3"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-yasar-kemal-yagmurcuk-kusu-kimsecik-1",
		title: "Yağmurcuk Kuşu / Kimsecik 1",
		url: "https://www.kitapyurdu.com/kitap/yagmurcuk-kusu-kimsecik-1/57318.html",
		author: "Yaşar Kemal",
		imageUrl: bookmarkImage("library-yasar-kemal-yagmurcuk-kusu-kimsecik-1"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-dilek-bilgic-esen-bir-kurt-sevdim",
		title: "Bir Kürt Sevdim",
		url: "https://www.kitapyurdu.com/kitap/bir-kurt-sevdim/572519.html",
		author: "Dilek Bilgiç Esen",
		imageUrl: bookmarkImage("library-dilek-bilgic-esen-bir-kurt-sevdim"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ahmet-umit-beyoglu-rapsodisi",
		title: "Beyoğlu Rapsodisi",
		url: "https://www.kitapyurdu.com/kitap/beyoglu-rapsodisi/523756.html",
		author: "Ahmet Ümit",
		imageUrl: bookmarkImage("library-ahmet-umit-beyoglu-rapsodisi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ahmed-gunbay-yildiz-sitem",
		title: "Sitem",
		url: "https://www.kitapyurdu.com/kitap/sitem/198.html",
		author: "Ahmed Günbay Yıldız",
		imageUrl: bookmarkImage("library-ahmed-gunbay-yildiz-sitem"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ali-betlik-alamut-kalesi",
		title: "Alamut Kalesi",
		url: "https://www.kitapyurdu.com/kitap/cennetin-fedaileri-alamut-kalesi/381136.html",
		author: "Ali Betlik",
		imageUrl: bookmarkImage("library-ali-betlik-alamut-kalesi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-elif-safak-iskender",
		title: "İskender",
		url: "https://www.kitapyurdu.com/kitap/iskender/258600.html",
		author: "Elif Şafak",
		imageUrl: bookmarkImage("library-elif-safak-iskender"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-kahraman-tazeoglu-kiyisizlar",
		title: "Kıyısızlar",
		url: "https://www.kitapyurdu.com/kitap/kiyisizlar/581454.html",
		author: "Kahraman Tazeoğlu",
		imageUrl: bookmarkImage("library-kahraman-tazeoglu-kiyisizlar"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-iskender-pala-abumrabum",
		title: "Abumrabum",
		url: "https://www.kitapyurdu.com/kitap/abumrabum/444618.html",
		author: "İskender Pala",
		imageUrl: bookmarkImage("library-iskender-pala-abumrabum"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-iskender-pala-babilde-olum-istanbulda-ask",
		title: "Babil'de Ölüm İstanbul'da Aşk",
		url: "https://www.kitapyurdu.com/kitap/babilde-olum-istanbulda-ask/62042.html",
		author: "İskender Pala",
		imageUrl: bookmarkImage("library-iskender-pala-babilde-olum-istanbulda-ask"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-iskender-pala-kitab-i-ask",
		title: "Kitâb-ı Aşk",
		url: "https://www.kitapyurdu.com/kitap/kitabi-ask-ciltli/269965.html",
		author: "İskender Pala",
		imageUrl: bookmarkImage("library-iskender-pala-kitab-i-ask"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-fernando-pessoa-huzursuzlugun-kitabi",
		title: "Huzursuzluğun Kitabı",
		url: "https://www.kitapyurdu.com/kitap/huzursuzlugun-kitabi/731316.html",
		author: "Fernando Pessoa",
		imageUrl: bookmarkImage("library-fernando-pessoa-huzursuzlugun-kitabi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-zulfu-livaneli-bir-kedi-bir-adam-bir-olum",
		title: "Bir Kedi, Bir Adam, Bir Ölüm",
		url: "https://www.kitapyurdu.com/kitap/bir-kedi-bir-adam-bir-olum/576001.html",
		author: "Zülfü Livaneli",
		imageUrl: bookmarkImage("library-zulfu-livaneli-bir-kedi-bir-adam-bir-olum"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-zulfu-livaneli-kaplanin-sirtinda",
		title: "Kaplanın Sırtında",
		url: "https://www.kitapyurdu.com/kitap/kaplanin-sirtinda/637501.html",
		author: "Zülfü Livaneli",
		imageUrl: bookmarkImage("library-zulfu-livaneli-kaplanin-sirtinda"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-zulfu-livaneli-serenad",
		title: "Serenad",
		url: "https://www.kitapyurdu.com/kitap/serenad/600068.html",
		author: "Zülfü Livaneli",
		imageUrl: bookmarkImage("library-zulfu-livaneli-serenad"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-piyon-321683",
		title: "Piyon",
		url: "https://www.kitapyurdu.com/kitap/piyon/321683.html",
		author: "Michael Sikkofield",
		imageUrl: bookmarkImage("library-piyon-321683"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-nazan-bekiroglu-nar-agaci",
		title: "Nar Ağacı",
		url: "https://www.kitapyurdu.com/kitap/nar-agaci/282405.html",
		author: "Nazan Bekiroğlu",
		imageUrl: bookmarkImage("library-nazan-bekiroglu-nar-agaci"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-selim-ileri-saz-caz-dugun-varyete",
		title: "Saz Caz Düğün Varyete",
		url: "https://www.kitapyurdu.com/kitap/saz-caz-dugun-varyete/346367.html",
		author: "Selim İleri",
		imageUrl: bookmarkImage("library-selim-ileri-saz-caz-dugun-varyete"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-alain-mutlu-olma-sanati",
		title: "Mutlu Olma Sanatı",
		url: "https://www.kitapyurdu.com/kitap/mutlu-olma-sanati/736895.html",
		author: "Alain",
		imageUrl: bookmarkImage("library-alain-mutlu-olma-sanati"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-busra-sanay-kardesini-dogurmak",
		title: "Kardeşini Doğurmak",
		url: "https://www.kitapyurdu.com/kitap/kardesini-dogurmak-turkiyede-ensest-gercegi/755616.html",
		author: "Büşra Sanay",
		imageUrl: bookmarkImage("library-busra-sanay-kardesini-dogurmak"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-jean-jacques-rousseau-toplum-sozlesmesi",
		title: "Toplum Sözleşmesi",
		url: "https://www.kitapyurdu.com/kitap/jeanjacques-rousseau-toplum-sozlesmesi/652518.html",
		author: "Jean-Jacques Rousseau",
		imageUrl: bookmarkImage("library-jean-jacques-rousseau-toplum-sozlesmesi"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-roberto-esposito-kisiler-ve-seyler",
		title: "Kişiler ve Şeyler",
		url: "https://www.kitapyurdu.com/kitap/beden-bakis-acisindan-kisiler-ve-seyler/658571.html",
		author: "Roberto Esposito",
		imageUrl: bookmarkImage("library-roberto-esposito-kisiler-ve-seyler"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-i-sami-akalin-edebiyat-terimleri-sozlugu",
		title: "Edebiyat Terimleri Sözlüğü",
		author: "İ. Sami Akalın",
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-terry-eagleton-edebiyat-olayi",
		title: "Edebiyat Olayı",
		url: "https://www.kitapyurdu.com/kitap/edebiyat-olayi/281001.html",
		author: "Terry Eagleton",
		imageUrl: bookmarkImage("library-terry-eagleton-edebiyat-olayi"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-ismail-hakki-aydin-vecizelerim",
		title: "Vecizelerim (Aforizmalar)",
		url: "https://www.kitapyurdu.com/kitap/vecizelerim/640686.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-vecizelerim"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-ismail-hakki-aydin-yasam-5-0-kuantik-dusunce-sarmali",
		title: "Yaşam 5.0: Kuantik Düşünce Sarmalı",
		url: "https://www.kitapyurdu.com/kitap/yasam-50-chatgpt-kuantik-dusunce-sarmali/655336.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-yasam-5-0-kuantik-dusunce-sarmali"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-ismail-hakki-aydin-homo-deyyus",
		title: "Homo Deyyus",
		url: "https://www.kitapyurdu.com/kitap/homo-deyyus-kiyamet-serisi-1/709752.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-homo-deyyus"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-ismail-hakki-aydin-ve-tanri-beyni-yaratti",
		title: "ve Tanrı Beyni Yarattı",
		url: "https://www.kitapyurdu.com/kitap/ve-tanri-beyni-yaratti-bilim-felsefesi-serisi-1/614142.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-ve-tanri-beyni-yaratti"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-ismail-hakki-aydin-frekansa-burundum-beyin-diye-gorundum",
		title: "Frekansa Büründüm Beyin Diye Göründüm",
		url: "https://www.kitapyurdu.com/kitap/frekansa-burundum-beyin-diye-gorundum/634222.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-frekansa-burundum-beyin-diye-gorundum"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-ismail-hakki-aydin-frekanslar-aleminde-kainat-beyne-kucuk-noron-kainata-buyuk",
		title: "Frekanslar Âleminde Kâinat Beyne Küçük, Nöron Kâinata Büyük",
		url: "https://www.kitapyurdu.com/kitap/frekanslar-aleminde-kainat-beyne-kucuk-noron-kainata-buyuk/677390.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-frekanslar-aleminde-kainat-beyne-kucuk-noron-kainata-buyuk"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-ismail-hakki-aydin-felsefe-karada-yuzme-denizde-yurume-sanatidir",
		title: "Felsefe Karada Yüzme Denizde Yürüme Sanatıdır",
		url: "https://www.kitapyurdu.com/kitap/felsefe-karada-yuzme-denizde-yurume-sanatidir/664622.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-felsefe-karada-yuzme-denizde-yurume-sanatidir"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-ismail-hakki-aydin-insan-endiseli-bir-damla-hem-parcacik-hem-dalga",
		title: "İnsan Endişeli Bir Damla Hem Parçacık Hem Dalga",
		url: "https://www.kitapyurdu.com/kitap/insan-endiseli-bir-damla-hem-parcacik-hem-dalga/645542.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-insan-endiseli-bir-damla-hem-parcacik-hem-dalga"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-murat-kurt-english-grammar-today",
		title: "English Grammar Today",
		url: "https://www.kitapyurdu.com/kitap/english-grammar-today-turkce-aciklamali-ingilizce-gramer/107773.html",
		author: "Murat Kurt",
		imageUrl: bookmarkImage("library-murat-kurt-english-grammar-today"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Dil"
	},
	{
		id: "library-yekta-sarac-klasik-edebiyat-bilgisi-bicim-olcu-kafiye",
		title: "Klasik Edebiyat Bilgisi: Biçim - Ölçü - Kafiye",
		url: "https://www.kitapyurdu.com/kitap/klasik-edebiyat-bilgisi-bicimolcukafiye/249984.html",
		author: "Yekta Saraç",
		imageUrl: bookmarkImage("library-yekta-sarac-klasik-edebiyat-bilgisi-bicim-olcu-kafiye"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-ismail-cetisli-bati-edebiyatinda-edebi-akimlar",
		title: "Batı Edebiyatında Edebî Akımlar",
		url: "https://www.kitapyurdu.com/kitap/bati-edebiyatinda-edebi-akimlar/74441.html",
		author: "İsmail Çetişli",
		imageUrl: bookmarkImage("library-ismail-cetisli-bati-edebiyatinda-edebi-akimlar"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-turk-dil-kurumu-yeni-tarama-sozlugu",
		title: "Yeni Tarama Sözlüğü",
		url: "https://www.kitapyurdu.com/kitap/yeni-tarama-sozlugu/13905.html",
		author: "Türk Dil Kurumu",
		imageUrl: bookmarkImage("library-turk-dil-kurumu-yeni-tarama-sozlugu"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Dil"
	},
	{
		id: "library-osmanli-turkcesi-kilavuzu1-106297",
		title: "Osmanlı Türkçesi Kılavuzu 1",
		url: "https://www.kitapyurdu.com/kitap/osmanli-turkcesi-kilavuzu1/106297.html",
		author: "Hayati Develi",
		imageUrl: bookmarkImage("library-osmanli-turkcesi-kilavuzu1-106297"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Dil"
	},
	{
		id: "library-osmanli-turkcesi-kilavuzu2-106298",
		title: "Osmanlı Türkçesi Kılavuzu 2",
		url: "https://www.kitapyurdu.com/kitap/osmanli-turkcesi-kilavuzu2/106298.html",
		author: "Hayati Develi",
		imageUrl: bookmarkImage("library-osmanli-turkcesi-kilavuzu2-106298"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Dil"
	},
	{
		id: "library-mustafa-ozkan-osmanli-turkcesi-1",
		title: "Osmanlı Türkçesi 1",
		url: "https://www.kitapyurdu.com/kitap/osmanli-turkcesi-1/671737.html",
		author: "Mustafa Özkan",
		imageUrl: bookmarkImage("library-mustafa-ozkan-osmanli-turkcesi-1"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Dil"
	},
	{
		id: "library-pinar-ulgen-orta-cag-avrupasinda-ask-tutku-entrika-ve-romantizm",
		title: "Orta Çağ Avrupa'sında Aşk, Tutku, Entrika ve Romantizm",
		url: "https://www.kitapyurdu.com/kitap/orta-cag-avrupasinda-ask-tutku-entrika-ve-romantizm/657630.html",
		author: "Pınar Ülgen",
		imageUrl: bookmarkImage("library-pinar-ulgen-orta-cag-avrupasinda-ask-tutku-entrika-ve-romantizm"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-emin-colasan-turgut-nereden-kosuyor",
		title: "Turgut Nereden Koşuyor?",
		url: "https://www.kitapyurdu.com/kitap/turgut-nereden-kosuyor-turgutun-seruveni/116968.html",
		author: "Emin Çölaşan",
		imageUrl: bookmarkImage("library-emin-colasan-turgut-nereden-kosuyor"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-koray-kamaci-derin-dunya-devleti-ve-ortadogu",
		title: "Derin Dünya Devleti ve Ortadoğu",
		url: "https://www.kitapyurdu.com/kitap/derin-dunya-devleti-ve-ortadogu/380693.html",
		author: "Koray Kamacı",
		imageUrl: bookmarkImage("library-koray-kamaci-derin-dunya-devleti-ve-ortadogu"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-onur-inal-peradan-beyogluna",
		title: "Pera'dan Beyoğlu'na",
		url: "https://www.kitapyurdu.com/kitap/peradan-beyogluna/84294.html",
		author: "Onur İnal",
		imageUrl: bookmarkImage("library-onur-inal-peradan-beyogluna"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-ramazan-sesen-ibn-fadlan-seyahatnamesi",
		title: "İbn Fadlan Seyahatnamesi",
		url: "https://www.kitapyurdu.com/kitap/ibn-fadlan-seyahatnamesi/143842.html",
		author: "Ramazan Şeşen",
		imageUrl: bookmarkImage("library-ramazan-sesen-ibn-fadlan-seyahatnamesi"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-ahmet-faik-ozbilge-fener-balat-ayvansaray",
		title: "Fener - Balat - Ayvansaray",
		url: "https://www.kitapyurdu.com/kitap/fener-balat-ayvansaray/125746.html",
		author: "Ahmet Faik Özbilge",
		imageUrl: bookmarkImage("library-ahmet-faik-ozbilge-fener-balat-ayvansaray"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-59-yuz-portreler-457862",
		title: "59 Yüz / Portreler",
		url: "https://www.kitapyurdu.com/kitap/59-yuz-portreler/457862.html",
		author: "Necmettin Asma",
		imageUrl: bookmarkImage("library-59-yuz-portreler-457862"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Biyografi"
	},
	{
		id: "library-kolektif-ahmet-emre-bilgili-sehir-ve-kultur-istanbul",
		title: "Şehir ve Kültür: İstanbul",
		url: "https://www.kitapyurdu.com/kitap/sehir-ve-kultur-istanbul/627493.html",
		author: "Ahmet Emre Bilgili",
		imageUrl: bookmarkImage("library-kolektif-ahmet-emre-bilgili-sehir-ve-kultur-istanbul"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-mehmet-kaplan-siir-tahlilleri-1",
		title: "Şiir Tahlilleri 1",
		url: "https://www.kitapyurdu.com/kitap/siir-tahlilleri-1-tanzimattan-cumhuriyete/659010.html",
		author: "Mehmet Kaplan",
		imageUrl: bookmarkImage("library-mehmet-kaplan-siir-tahlilleri-1"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-ramazan-korkmaz-yeni-turk-edebiyati-1839-2000",
		title: "Yeni Türk Edebiyatı 1839 - 2000",
		url: "https://www.kitapyurdu.com/kitap/yeni-turk-edebiyati-el-kitabi-18392000/69101.html",
		author: "Ramazan Korkmaz",
		imageUrl: bookmarkImage("library-ramazan-korkmaz-yeni-turk-edebiyati-1839-2000"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-muharrem-ergin-turk-dil-bilgisi",
		title: "Türk Dil Bilgisi",
		url: "https://www.kitapyurdu.com/kitap/turk-dil-bilgisi/516145.html",
		author: "Muharrem Ergin",
		imageUrl: bookmarkImage("library-muharrem-ergin-turk-dil-bilgisi"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Dil"
	},
	{
		id: "library-janos-eckmann-cagatayca-el-kitabi",
		title: "Çağatayca El Kitabı",
		url: "https://www.kitapyurdu.com/kitap/cagatayca-el-kitabi/430066.html",
		author: "Janos Eckmann",
		imageUrl: bookmarkImage("library-janos-eckmann-cagatayca-el-kitabi"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Dil"
	},
	{
		id: "library-ahmet-talat-onay-aciklamali-divan-siiri-sozlugu",
		title: "Açıklamalı Divan Şiiri Sözlüğü",
		url: "https://www.kitapyurdu.com/kitap/aciklamali-divan-siiri-sozlugu-eski-turk-edebiyatinda-mazmunlar-ve-izahi/140175.html",
		author: "Ahmet Talât Onay",
		imageUrl: bookmarkImage("library-ahmet-talat-onay-aciklamali-divan-siiri-sozlugu"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-mehmet-kaplan-turk-edebiyati-uzerinde-arastirmalar-1",
		title: "Türk Edebiyatı Üzerinde Araştırmalar 1",
		url: "https://www.kitapyurdu.com/kitap/turk-edebiyati-uzerinde-arastirmalar1/4764.html",
		author: "Mehmet Kaplan",
		imageUrl: bookmarkImage("library-mehmet-kaplan-turk-edebiyati-uzerinde-arastirmalar-1"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-mehmet-samsakci-siyaset-ve-roman",
		title: "Siyaset ve Roman",
		url: "https://www.kitapyurdu.com/kitap/siyaset-ve-roman-cok-partili-turkiye-ve-turk-romani/589031.html",
		author: "Mehmet Samsakçı",
		imageUrl: bookmarkImage("library-mehmet-samsakci-siyaset-ve-roman"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-metin-and-oyun-ve-bugu",
		title: "Oyun ve Bügü",
		url: "https://www.kitapyurdu.com/kitap/oyun-ve-bugu/54536.html",
		author: "Metin And",
		imageUrl: bookmarkImage("library-metin-and-oyun-ve-bugu"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-cem-dilcin-orneklerle-turk-siir-bilgisi",
		title: "Örneklerle Türk Şiir Bilgisi",
		url: "https://www.kitapyurdu.com/kitap/orneklerle-turk-siir-bilgisi-kod-11d14/526012.html",
		author: "Cem Dilçin",
		imageUrl: bookmarkImage("library-cem-dilcin-orneklerle-turk-siir-bilgisi"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-berna-moran-edebiyat-kuramlari-ve-elestiri",
		title: "Edebiyat Kuramları ve Eleştiri",
		url: "https://www.kitapyurdu.com/kitap/edebiyat-kuramlari-ve-elestiri/18187.html",
		author: "Berna Moran",
		imageUrl: bookmarkImage("library-berna-moran-edebiyat-kuramlari-ve-elestiri"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-mircea-eliade-mitlerin-ozellikleri",
		title: "Mitlerin Özellikleri",
		url: "https://www.kitapyurdu.com/kitap/mitlerin-ozellikleri/401752.html",
		author: "Mircea Eliade",
		imageUrl: bookmarkImage("library-mircea-eliade-mitlerin-ozellikleri"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-mehmet-tekin-roman-sanati-1",
		title: "Roman Sanatı 1",
		url: "https://www.kitapyurdu.com/kitap/roman-sanati-1/31981.html",
		author: "Mehmet Tekin",
		imageUrl: bookmarkImage("library-mehmet-tekin-roman-sanati-1"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-muharrem-ergin-orhun-abideleri",
		title: "Orhun Âbideleri",
		url: "https://www.kitapyurdu.com/kitap/orhun-abideleri/6410.html",
		author: "Muharrem Ergin",
		imageUrl: bookmarkImage("library-muharrem-ergin-orhun-abideleri"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-khaled-hosseini-ucurtma-avcisi",
		title: "Uçurtma Avcısı",
		url: "https://www.kitapyurdu.com/kitap/ucurtma-avcisi/100822.html",
		author: "Khaled Hosseini",
		imageUrl: bookmarkImage("library-khaled-hosseini-ucurtma-avcisi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-wilhelm-genazino-elden-dusme-dunya",
		title: "Elden Düşme Dünya",
		url: "https://www.kitapyurdu.com/kitap/elden-dusme-dunya/542230.html",
		author: "Wilhelm Genazino",
		imageUrl: bookmarkImage("library-wilhelm-genazino-elden-dusme-dunya"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jose-saramago-korluk",
		title: "Körlük",
		url: "https://www.kitapyurdu.com/kitap/korluk/648531.html",
		author: "José Saramago",
		imageUrl: bookmarkImage("library-jose-saramago-korluk"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-j-d-salinger-cavdar-tarlasinda-cocuklar",
		title: "Çavdar Tarlasında Çocuklar",
		url: "https://www.kitapyurdu.com/kitap/cavdar-tarlasinda-cocuklar/12236.html",
		author: "J. D. Salinger",
		imageUrl: bookmarkImage("library-j-d-salinger-cavdar-tarlasinda-cocuklar"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-john-boyne-cizgili-pijamali-cocuk",
		title: "Çizgili Pijamalı Çocuk",
		url: "https://www.kitapyurdu.com/kitap/cizgili-pijamali-cocuk/95889.html",
		author: "John Boyne",
		imageUrl: bookmarkImage("library-john-boyne-cizgili-pijamali-cocuk"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-antoine-de-saint-exupery-kucuk-prens",
		title: "Küçük Prens",
		url: "https://www.kitapyurdu.com/kitap/kucuk-prens/596485.html",
		author: "Antoine de Saint-Exupéry",
		imageUrl: bookmarkImage("library-antoine-de-saint-exupery-kucuk-prens"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jack-london-beyaz-dis",
		title: "Beyaz Diş",
		url: "https://www.kitapyurdu.com/kitap/beyaz-dis/564146.html",
		author: "Jack London",
		imageUrl: bookmarkImage("library-jack-london-beyaz-dis"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-john-steinbeck-fareler-ve-insanlar",
		title: "Fareler ve İnsanlar",
		url: "https://www.kitapyurdu.com/kitap/fareler-ve-insanlar/645168.html",
		author: "John Steinbeck",
		imageUrl: bookmarkImage("library-john-steinbeck-fareler-ve-insanlar"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-neval-el-seddavi-sifir-noktasindaki-kadin",
		title: "Sıfır Noktasındaki Kadın",
		url: "https://www.kitapyurdu.com/kitap/sifir-noktasindaki-kadin/5790.html",
		author: "Neval El Seddavi",
		imageUrl: bookmarkImage("library-neval-el-seddavi-sifir-noktasindaki-kadin"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jacques-cazotte-asik-seytan",
		title: "Aşık Şeytan",
		url: "https://www.kitapyurdu.com/kitap/asik-seytan-karton-kapak/513670.html",
		author: "Jacques Cazotte",
		imageUrl: bookmarkImage("library-jacques-cazotte-asik-seytan"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-yu-hua-yasamak",
		title: "Yaşamak",
		url: "https://www.kitapyurdu.com/kitap/yasamak/393974.html",
		author: "Yu Hua",
		imageUrl: bookmarkImage("library-yu-hua-yasamak"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-halil-cibran-ermisin-bahcesi",
		title: "Ermişin Bahçesi",
		url: "https://www.kitapyurdu.com/kitap/ermisin-bahcesi/409914.html",
		author: "Halil Cibran",
		imageUrl: bookmarkImage("library-halil-cibran-ermisin-bahcesi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-halil-cibran-meczup",
		title: "Meczup",
		url: "https://www.kitapyurdu.com/kitap/meczup/353880.html",
		author: "Halil Cibran",
		imageUrl: bookmarkImage("library-halil-cibran-meczup"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-halil-cibran-ermis",
		title: "Ermiş",
		url: "https://www.kitapyurdu.com/kitap/ermis/328908.html",
		author: "Halil Cibran",
		imageUrl: bookmarkImage("library-halil-cibran-ermis"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-halil-cibran-bir-gozyasi-bir-gulumseme",
		title: "Bir Gözyaşı, Bir Gülümseme",
		url: "https://www.kitapyurdu.com/kitap/bir-gozyasi-bir-gulumseme/638129.html",
		author: "Halil Cibran",
		imageUrl: bookmarkImage("library-halil-cibran-bir-gozyasi-bir-gulumseme"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-stefan-zweig-hayatin-mucizeleri",
		title: "Hayatın Mucizeleri",
		url: "https://www.kitapyurdu.com/kitap/hayatin-mucizeleri/533628.html",
		author: "Stefan Zweig",
		imageUrl: bookmarkImage("library-stefan-zweig-hayatin-mucizeleri"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-stefan-zweig-mecburiyet",
		title: "Mecburiyet",
		url: "https://www.kitapyurdu.com/kitap/mecburiyet/435436.html",
		author: "Stefan Zweig",
		imageUrl: bookmarkImage("library-stefan-zweig-mecburiyet"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-stefan-zweig-murebbiye",
		title: "Mürebbiye",
		url: "https://www.kitapyurdu.com/kitap/murebbiye/386477.html",
		author: "Stefan Zweig",
		imageUrl: bookmarkImage("library-stefan-zweig-murebbiye"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-stefan-zweig-kizil",
		title: "Kızıl",
		url: "https://www.kitapyurdu.com/kitap/kizil/460911.html",
		author: "Stefan Zweig",
		imageUrl: bookmarkImage("library-stefan-zweig-kizil"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-albert-camus-yabanci",
		title: "Yabancı",
		url: "https://www.kitapyurdu.com/kitap/yabanci/578753.html",
		author: "Albert Camus",
		imageUrl: bookmarkImage("library-albert-camus-yabanci"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-daniel-defoe-robinson-crusoe",
		title: "Robinson Crusoe",
		url: "https://www.kitapyurdu.com/kitap/robinson-crusoe/649626.html",
		author: "Daniel Defoe",
		imageUrl: bookmarkImage("library-daniel-defoe-robinson-crusoe"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jostein-gaarder-sofienin-dunyasi",
		title: "Sofie'nin Dünyası",
		url: "https://www.kitapyurdu.com/kitap/sofienin-dunyasi-cizgi-roman/688433.html",
		author: "Jostein Gaarder",
		imageUrl: bookmarkImage("library-jostein-gaarder-sofienin-dunyasi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-amin-maalouf-isik-bahceleri",
		title: "Işık Bahçeleri",
		url: "https://www.kitapyurdu.com/kitap/isik-bahceleri/59384.html",
		author: "Amin Maalouf",
		imageUrl: bookmarkImage("library-amin-maalouf-isik-bahceleri"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-amin-maalouf-semerkant",
		title: "Semerkant",
		url: "https://www.kitapyurdu.com/kitap/semerkant/12196.html",
		author: "Amin Maalouf",
		imageUrl: bookmarkImage("library-amin-maalouf-semerkant"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-amin-maalouf-empedoklesin-dostlari",
		title: "Empedokles'in Dostları",
		url: "https://www.kitapyurdu.com/kitap/empedoklesin-dostlari/570593.html",
		author: "Amin Maalouf",
		imageUrl: bookmarkImage("library-amin-maalouf-empedoklesin-dostlari"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-lev-tolstoy-anna-karenina",
		title: "Anna Karenina",
		url: "https://www.kitapyurdu.com/kitap/anna-karenina-i/495369.html",
		author: "Lev Tolstoy",
		imageUrl: bookmarkImage("library-lev-tolstoy-anna-karenina"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-lev-tolstoy-dirilis",
		title: "Diriliş",
		url: "https://www.kitapyurdu.com/kitap/dirilis/483440.html",
		author: "Lev Tolstoy",
		imageUrl: bookmarkImage("library-lev-tolstoy-dirilis"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-lev-tolstoy-haci-murat",
		title: "Hacı Murat",
		url: "https://www.kitapyurdu.com/kitap/haci-murat/601081.html",
		author: "Lev Tolstoy",
		imageUrl: bookmarkImage("library-lev-tolstoy-haci-murat"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-lev-tolstoy-kadinin-ruh",
		title: "Kadının Ruh",
		url: "https://www.kitapyurdu.com/kitap/kadinin-ruh-hali/384024.html",
		author: "Lev Tolstoy",
		imageUrl: bookmarkImage("library-lev-tolstoy-kadinin-ruh"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-lev-tolstoy-savas-ve-baris",
		title: "Savaş ve Barış",
		url: "https://www.kitapyurdu.com/kitap/savas-ve-baris/415411.html",
		author: "Lev Tolstoy",
		imageUrl: bookmarkImage("library-lev-tolstoy-savas-ve-baris"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-lev-tolstoy-itiraflarim",
		title: "İtiraflarım",
		url: "https://www.kitapyurdu.com/kitap/itiraflarim/586126.html",
		author: "Lev Tolstoy",
		imageUrl: bookmarkImage("library-lev-tolstoy-itiraflarim"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-lev-tolstoy-insan-ne-ile-yasar",
		title: "İnsan Ne ile Yaşar",
		url: "https://www.kitapyurdu.com/kitap/insan-ne-ile-yasar/421296.html",
		author: "Lev Tolstoy",
		imageUrl: bookmarkImage("library-lev-tolstoy-insan-ne-ile-yasar"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jane-austen-emma",
		title: "Emma",
		url: "https://www.kitapyurdu.com/kitap/emma-karton-kapak/552262.html",
		author: "Jane Austen",
		imageUrl: bookmarkImage("library-jane-austen-emma"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-jane-austen-gurur-ve-onyargi",
		title: "Gurur ve Önyargı",
		url: "https://www.kitapyurdu.com/kitap/gurur-ve-onyargi/585457.html",
		author: "Jane Austen",
		imageUrl: bookmarkImage("library-jane-austen-gurur-ve-onyargi"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-vladimir-bartol-alamut",
		title: "Alamut",
		url: "https://www.kitapyurdu.com/kitap/alamut-fedailerin-kalesi/48007.html",
		author: "Vladimir Bartol",
		imageUrl: bookmarkImage("library-vladimir-bartol-alamut"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Roman ve öykü"
	},
	{
		id: "library-alev-alatli-hafazanallah",
		title: "Hafazanallah",
		url: "https://www.kitapyurdu.com/kitap/all-american-heman-hafazanallah-nasihatname-ii/510545.html",
		author: "Alev Alatlı",
		imageUrl: bookmarkImage("library-alev-alatli-hafazanallah"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-ali-fuad-basgil-genclerle-basbasa",
		title: "Gençlerle Başbaşa",
		url: "https://www.kitapyurdu.com/kitap/genclerle-basbasa/148246.html",
		author: "Ali Fuad Başgil",
		imageUrl: bookmarkImage("library-ali-fuad-basgil-genclerle-basbasa"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel gelişim"
	},
	{
		id: "library-sadece-aptallar-8-saat-uyur-81650",
		title: "Sadece Aptallar 8 Saat Uyur",
		url: "https://www.kitapyurdu.com/kitap/sadece-aptallar-8-saat-uyur/81650.html",
		author: "Erdal Demirkıran",
		imageUrl: bookmarkImage("library-sadece-aptallar-8-saat-uyur-81650"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel gelişim"
	},
	{
		id: "library-faruk-ondag-bi-musaade-sinavim-var",
		title: "Bi' Müsaade Sınavım Var",
		url: "https://www.kitapyurdu.com/kitap/bi-musaade-sinavim-var/289860.html",
		author: "Faruk Öndağ",
		imageUrl: bookmarkImage("library-faruk-ondag-bi-musaade-sinavim-var"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel gelişim"
	},
	{
		id: "library-a-m-celal-sengor-senin-cahilligin-benim-yasamimi-etkiliyor",
		title: "Senin Cahilliğin Benim Yaşamımı Etkiliyor",
		url: "https://www.kitapyurdu.com/kitap/senin-cahilligin-benim-yasamimi-etkiliyor/654077.html",
		author: "Celâl Şengör",
		imageUrl: bookmarkImage("library-a-m-celal-sengor-senin-cahilligin-benim-yasamimi-etkiliyor"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-fabrika-ayari-528784",
		title: "Fabrika Ayarı",
		url: "https://www.kitapyurdu.com/kitap/fabrika-ayari/528784.html",
		author: ["Hayati İnanç", "Bekir Develi"],
		imageUrl: bookmarkImage("library-fabrika-ayari-528784"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-ilber-ortayli-bir-omur-nasil-yasanir",
		title: "Bir Ömür Nasıl Yaşanır?",
		url: "https://www.kitapyurdu.com/kitap/bir-omur-nasil-yasanir-hayatta-dogru-secimler-icin-oneriler/493305.html",
		author: "İlber Ortaylı",
		imageUrl: bookmarkImage("library-ilber-ortayli-bir-omur-nasil-yasanir"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel gelişim"
	},
	{
		id: "library-ilber-ortayli-insan-gelecegini-nasil-kurar",
		title: "İnsan Geleceğini Nasıl Kurar?",
		url: "https://www.kitapyurdu.com/kitap/insan-gelecegini-nasil-kurar-kendini-insa-etmenin-yollari/609007.html",
		author: "İlber Ortaylı",
		imageUrl: bookmarkImage("library-ilber-ortayli-insan-gelecegini-nasil-kurar"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel gelişim"
	},
	{
		id: "library-japonizm-ciltli-499470",
		title: "Japonizm",
		url: "https://www.kitapyurdu.com/kitap/japonizm-ciltli/499470.html",
		author: "Erin Niimi Longhurst",
		translator: "Sevinç Seyla Tezcan",
		imageUrl: bookmarkImage("library-japonizm-ciltli-499470"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-japon-savas-sanati-busido-396401",
		title: "Buşido: Japon Savaşçı Yolu",
		url: "https://www.kitapyurdu.com/kitap/japon-savas-sanati-busido/396401.html",
		author: "Inazo Nitobe",
		translator: "Doruk Akyüz",
		imageUrl: bookmarkImage("library-japon-savas-sanati-busido-396401"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-e-a-wallis-budge-antik-misir-edebiyati",
		title: "Antik Mısır Edebiyatı",
		url: "https://www.kitapyurdu.com/kitap/antik-misir-edebiyati-yazinsal-metinler/127717.html",
		author: "E. A. Wallis Budge",
		imageUrl: bookmarkImage("library-e-a-wallis-budge-antik-misir-edebiyati"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-donald-a-mackenzie-babil-ve-asur-mitleri",
		title: "Babil ve Asur Mitleri",
		url: "https://www.kitapyurdu.com/kitap/babil-ve-asur-efsaneleri-mitlerin-kokenine-yolculuk/685412.html",
		author: "Donald A. Mackenzie",
		imageUrl: bookmarkImage("library-donald-a-mackenzie-babil-ve-asur-mitleri"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-serdar-tuncer-sermayem-yok-derdimden-baska",
		title: "Sermayem Yok Derdimden Başka",
		url: "https://www.kitapyurdu.com/kitap/sermayem-yok-derdimden-baska/454096.html",
		author: "Serdar Tuncer",
		imageUrl: bookmarkImage("library-serdar-tuncer-sermayem-yok-derdimden-baska"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-serdar-tuncer-hicbir-zaman-hicbir-sey",
		title: "Hiçbir Zaman Hiçbir Şey",
		url: "https://www.kitapyurdu.com/kitap/hicbir-zaman-hicbir-sey/682179.html",
		author: "Serdar Tuncer",
		imageUrl: bookmarkImage("library-serdar-tuncer-hicbir-zaman-hicbir-sey"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-cenap-sahabettin-avrupa-mektuplari",
		title: "Avrupa Mektupları",
		url: "https://www.kitapyurdu.com/kitap/avrupa-mektuplari/593633.html",
		author: "Cenap Şahabettin",
		imageUrl: bookmarkImage("library-cenap-sahabettin-avrupa-mektuplari"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-yasamak-618603",
		title: "Yaşamak",
		url: "https://www.kitapyurdu.com/kitap/yasamak/618603.html",
		author: "Cahit Zarifoğlu",
		imageUrl: bookmarkImage("library-yasamak-618603"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-cahit-zarifoglu-konusmalar",
		title: "Konuşmalar",
		url: "https://www.kitapyurdu.com/kitap/konusmalar/1726.html",
		author: "Cahit Zarifoğlu",
		imageUrl: bookmarkImage("library-cahit-zarifoglu-konusmalar"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-ahmed-yuksel-ozemre-uskudarda-bir-attar-dukkani",
		title: "Üsküdar'da Bir Attar Dükkânı",
		url: "https://www.kitapyurdu.com/kitap/uskudarda-bir-attar-dukkani/27134.html",
		author: "Ahmed Yüksel Özemre",
		imageUrl: bookmarkImage("library-ahmed-yuksel-ozemre-uskudarda-bir-attar-dukkani"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-medeniyet-tasavvuru-futuhati-medeniyyeye-giris-607691",
		title: "Medeniyet Tasavvuru",
		url: "https://www.kitapyurdu.com/kitap/medeniyet-tasavvuru-futuhati-medeniyyeye-giris-/607691.html",
		author: "Yusuf Kaplan",
		imageUrl: bookmarkImage("library-medeniyet-tasavvuru-futuhati-medeniyyeye-giris-607691"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-okumak-nedir-663010",
		title: "Okumak Nedir?",
		url: "https://www.kitapyurdu.com/kitap/okumak-nedir/663010.html",
		author: "Yusuf Kaplan",
		imageUrl: bookmarkImage("library-okumak-nedir-663010"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-turkiyenin-maarif-davasi-4879",
		title: "Türkiye'nin Maarif Dâvası",
		url: "https://www.kitapyurdu.com/kitap/turkiyenin-maarif-davasi/4879.html",
		author: "Nurettin Topçu",
		imageUrl: bookmarkImage("library-turkiyenin-maarif-davasi-4879"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-kesintisiz-ogrenme-42711",
		title: "Kesintisiz Öğrenme",
		url: "https://www.kitapyurdu.com/kitap/kesintisiz-ogrenme/42711.html",
		author: "Mümin Sekman",
		imageUrl: bookmarkImage("library-kesintisiz-ogrenme-42711"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel gelişim"
	},
	{
		id: "library-marcel-proust-edebiyat-ve-sanat-yazilari",
		title: "Edebiyat ve Sanat Yazıları",
		url: "https://www.kitapyurdu.com/kitap/edebiyat-ve-sanat-yazilari/368334.html",
		author: "Marcel Proust",
		imageUrl: bookmarkImage("library-marcel-proust-edebiyat-ve-sanat-yazilari"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-jeremy-stangroom-einstein-bulmacasi-2",
		title: "Einstein Bulmacası 2",
		url: "https://www.kitapyurdu.com/kitap/einstein-bulmacasi-2-aklinizin-sinirlarini-zorlayacak-bulmaca-ve-paradokslar/343350.html",
		author: "Jeremy Stangroom",
		imageUrl: bookmarkImage("library-jeremy-stangroom-einstein-bulmacasi-2"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-jeremy-stangroom-einstein-bulmacasi",
		title: "Einstein Bulmacası",
		url: "https://www.kitapyurdu.com/kitap/einstein-bulmacasi-2-aklinizin-sinirlarini-zorlayacak-bulmaca-ve-paradokslar/343350.html",
		author: "Jeremy Stangroom",
		imageUrl: bookmarkImage("library-jeremy-stangroom-einstein-bulmacasi"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim"
	},
	{
		id: "library-ruh-adam-588450",
		title: "Ruh Adam",
		url: "https://www.kitapyurdu.com/kitap/ruh-adam-/588450.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-ruh-adam-588450"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-bozkurtlar-243385",
		title: "Bozkurtlar",
		url: "https://www.kitapyurdu.com/kitap/bozkurtlar/243385.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-bozkurtlar-243385"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-turk-ulkusu-251501",
		title: "Türk Ülküsü",
		url: "https://www.kitapyurdu.com/kitap/turk-ulkusu/251501.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-turk-ulkusu-251501"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-turancilik-milli-degerler-ve-genclik-251503",
		title: "Turancılık, Millî Değerler ve Gençlik",
		url: "https://www.kitapyurdu.com/kitap/turancilik-milli-degerler-ve-genclik/251503.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-turancilik-milli-degerler-ve-genclik-251503"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-turk-tarihinde-meseleler-246740",
		title: "Türk Tarihinde Meseleler",
		url: "https://www.kitapyurdu.com/kitap/turk-tarihinde-meseleler/246740.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-turk-tarihinde-meseleler-246740"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-deli-kurt-243383",
		title: "Deli Kurt",
		url: "https://www.kitapyurdu.com/kitap/deli-kurt/243383.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-deli-kurt-243383"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-yollarin-sonu-595418",
		title: "Yolların Sonu",
		url: "https://www.kitapyurdu.com/kitap/yollarin-sonu/595418.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-yollarin-sonu-595418"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-atsiz-hikayeler-452636",
		title: "Hikâyeler",
		url: "https://www.kitapyurdu.com/kitap/atsiz-hikayeler/452636.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-atsiz-hikayeler-452636"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-semsettin-sami-taassuk-i-talat-ve-fitnat",
		title: "Taaşşuk-ı Talat ve Fitnat",
		url: "https://www.kitapyurdu.com/kitap/taassuki-talat-ve-fitnat/569252.html",
		author: "Şemsettin Sami",
		imageUrl: bookmarkImage("library-semsettin-sami-taassuk-i-talat-ve-fitnat"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ahmet-mithat-efendi-felatun-bey-ile-rakim-efendi",
		title: "Felatun Bey ile Rakım Efendi",
		url: "https://www.kitapyurdu.com/kitap/felatun-bey-ile-rakim-efendi/580168.html",
		author: "Ahmet Mithat Efendi",
		imageUrl: bookmarkImage("library-ahmet-mithat-efendi-felatun-bey-ile-rakim-efendi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-namik-kemal-intibah",
		title: "İntibah",
		url: "https://www.kitapyurdu.com/kitap/intibah/600576.html",
		author: "Namık Kemal",
		imageUrl: bookmarkImage("library-namik-kemal-intibah"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-namik-kemal-vatan-yahut-silistre",
		title: "Vatan yahut Silistre",
		url: "https://www.kitapyurdu.com/kitap/vatan-yahut-silistre/579475.html",
		author: "Namık Kemal",
		imageUrl: bookmarkImage("library-namik-kemal-vatan-yahut-silistre"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Tiyatro"
	},
	{
		id: "library-omer-hayyam-dortlukler-rubailer",
		title: "Dörtlükler (Rubailer)",
		url: "https://www.kitapyurdu.com/kitap/dortluklerrubailer-cep-boy/243053.html",
		author: "Ömer Hayyam",
		imageUrl: bookmarkImage("library-omer-hayyam-dortlukler-rubailer"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-anonim-kerem-ile-asli-hikayesi",
		title: "Kerem ile Aslı Hikâyesi",
		url: "https://www.kitapyurdu.com/kitap/kerem-ile-asli-hikayesi-raif-yelkenci-yazmasi/581853.html",
		author: "Anonim",
		imageUrl: bookmarkImage("library-anonim-kerem-ile-asli-hikayesi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-yusuf-has-hacip-kutadgu-bilig",
		title: "Kutadgu Bilig",
		url: "https://www.kitapyurdu.com/kitap/kutadgu-bilig/270053.html",
		author: "Yusuf Has Hâcip",
		imageUrl: bookmarkImage("library-yusuf-has-hacip-kutadgu-bilig"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-feriduddin-attar-mantik-al-tayr",
		title: "Mantık Al-Tayr",
		url: "https://www.kitapyurdu.com/kitap/mantik-altayr-ciltsiz/87387.html",
		author: "Feridüddin Attâr",
		imageUrl: bookmarkImage("library-feriduddin-attar-mantik-al-tayr"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-tufan-gunduz-oguz-kagan-destani",
		title: "Oğuz Kağan Destanı",
		url: "https://www.kitapyurdu.com/kitap/oguz-kagan-destani/407264.html",
		author: "Tufan Gündüz",
		imageUrl: bookmarkImage("library-tufan-gunduz-oguz-kagan-destani"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-william-shakespeare-romeo-u-juliet",
		title: "Romeo ü Juliet",
		url: "https://www.kitapyurdu.com/kitap/romeo-ile-juliet/41729.html",
		author: "William Shakespeare",
		imageUrl: bookmarkImage("library-william-shakespeare-romeo-u-juliet"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-anonim-naksebi-tutiname",
		title: "Tûtînâme",
		url: "https://www.kitapyurdu.com/kitap/tutiname/497712.html",
		author: "Anonim",
		imageUrl: bookmarkImage("library-anonim-naksebi-tutiname"),
		categoryId: "library",
		tags: ["Dünya Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-yahya-kemal-beyatli-egil-daglar",
		title: "Eğil Dağlar",
		url: "https://www.kitapyurdu.com/kitap/egil-daglar/26898.html",
		author: "Yahya Kemal Beyatlı",
		imageUrl: bookmarkImage("library-yahya-kemal-beyatli-egil-daglar"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-serkan-ozel-sicak-ayaz",
		title: "Sıcak Ayaz",
		url: "https://www.kitapyurdu.com/kitap/sicak-ayaz/317618.html",
		author: "Serkan Özel",
		imageUrl: bookmarkImage("library-serkan-ozel-sicak-ayaz"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-sabahattin-ali-butun-siirleri",
		title: "Bütün Şiirleri",
		url: "https://www.kitapyurdu.com/kitap/butun-siirleri/719545.html",
		author: "Sabahattin Ali",
		imageUrl: bookmarkImage("library-sabahattin-ali-butun-siirleri"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-soyle-bana-hindiba-549240",
		title: "Söyle Bana Hindiba",
		url: "https://www.kitapyurdu.com/kitap/soyle-bana-hindiba/549240.html",
		author: "Nurullah Genç",
		imageUrl: bookmarkImage("library-soyle-bana-hindiba-549240"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-omuzlarimda-dunya-hikayem-hayatimdir-572093",
		title: "Omuzlarımda Dünya",
		url: "https://www.kitapyurdu.com/kitap/omuzlarimda-dunya-hikayem-hayatimdir/572093.html",
		author: "Nurullah Genç",
		imageUrl: bookmarkImage("library-omuzlarimda-dunya-hikayem-hayatimdir-572093"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-nazim-hikmet-henuz-vakit-varken-gulum",
		title: "Henüz Vakit Varken Gülüm",
		url: "https://www.kitapyurdu.com/kitap/henuz-vakit-varken-gulum/111602.html",
		author: "Nâzım Hikmet",
		imageUrl: bookmarkImage("library-nazim-hikmet-henuz-vakit-varken-gulum"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-murat-tas-anlam-ve-renk",
		title: "Anlam ve Renk",
		author: "Murat Taş",
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-ilhan-berk-bir-yeryuzu-tanigi",
		title: "Bir Yeryüzü Tanığı",
		url: "https://www.kitapyurdu.com/kitap/bir-yeryuzu-tanigi--secme-siirler/126853.html",
		author: "İlhan Berk",
		imageUrl: bookmarkImage("library-ilhan-berk-bir-yeryuzu-tanigi"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-faruk-nafiz-camlibel-han-duvarlari",
		title: "Han Duvarları",
		url: "https://www.kitapyurdu.com/kitap/han-duvarlari-4d49/31342.html",
		author: "Faruk Nafiz Çamlıbel",
		imageUrl: bookmarkImage("library-faruk-nafiz-camlibel-han-duvarlari"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-cemal-sureya-sevda-sozleri",
		title: "Sevda Sözleri",
		url: "https://www.kitapyurdu.com/kitap/sevda-sozleri/549743.html",
		author: "Cemal Süreya",
		imageUrl: bookmarkImage("library-cemal-sureya-sevda-sozleri"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-cahit-zarifoglu-yedi-guzel-adam",
		title: "Yedi Güzel Adam",
		url: "https://www.kitapyurdu.com/kitap/yedi-guzel-adam/618607.html",
		author: "Cahit Zarifoğlu",
		imageUrl: bookmarkImage("library-cahit-zarifoglu-yedi-guzel-adam"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-attila-ilhan-ben-sana-mecburum",
		title: "Ben Sana Mecburum",
		url: "https://www.kitapyurdu.com/kitap/ben-sana-mecburum/3763.html",
		author: "Attilâ İlhan",
		imageUrl: bookmarkImage("library-attila-ilhan-ben-sana-mecburum"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-ahmed-arif-hasretinden-prangalar-eskittim",
		title: "Hasretinden Prangalar Eskittim",
		url: "https://www.kitapyurdu.com/kitap/hasretinden-prangalar-eskittim/106688.html",
		author: "Ahmed Ârif",
		imageUrl: bookmarkImage("library-ahmed-arif-hasretinden-prangalar-eskittim"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Şiir"
	},
	{
		id: "library-seyh-galip-husn-u-ask",
		title: "Hüsn ü Aşk",
		url: "https://www.kitapyurdu.com/kitap/husn-u-ask-manzum-ceviri/695355.html",
		author: "Şeyh Galip",
		imageUrl: bookmarkImage("library-seyh-galip-husn-u-ask"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-james-clear-atomik-aliskanliklar",
		title: "Atomik Alışkanlıklar",
		url: "https://www.kitapyurdu.com/kitap/atomik-aliskanliklar/540793.html",
		author: "James Clear",
		imageUrl: bookmarkImage("library-james-clear-atomik-aliskanliklar"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel gelişim"
	},
	{
		id: "library-gelecegi-kesfedenler-dijital-cagin-biyografisi-416958",
		title: "Geleceği Keşfedenler",
		url: "https://www.kitapyurdu.com/kitap/gelecegi-kesfedenler-dijital-cagin-biyografisi/416958.html",
		author: "Walter Isaacson",
		translator: "Duygu Dalgakıran",
		imageUrl: bookmarkImage("library-gelecegi-kesfedenler-dijital-cagin-biyografisi-416958"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Biyografi"
	},
	{
		id: "library-pia-callesen-az-dusun-uzun-yasa",
		title: "Az Düşün Uzun Yaşa",
		url: "https://www.kitapyurdu.com/kitap/az-dusun-uzun-yasa/635216.html",
		author: "Pia Callesen",
		imageUrl: bookmarkImage("library-pia-callesen-az-dusun-uzun-yasa"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Güncel"
	},
	{
		id: "library-zeynep-cihangir-cankaya-serdar-cankaya-bir-aile-meselesi",
		title: "Bir Aile Meselesi",
		url: "https://www.kitapyurdu.com/kitap/bir-aile-meselesi/723556.html",
		author: ["Zeynep Cihangir Çankaya", "Serdar Çankaya"],
		imageUrl: bookmarkImage("library-zeynep-cihangir-cankaya-serdar-cankaya-bir-aile-meselesi"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Güncel"
	},
	{
		id: "library-karen-dolby-bir-nefeste-cinsellik-tarihi",
		title: "Bir Nefeste Cinsellik Tarihi",
		url: "https://www.kitapyurdu.com/kitap/bir-nefeste-cinsellik-tarihi/347426.html",
		author: "Karen Dolby",
		imageUrl: bookmarkImage("library-karen-dolby-bir-nefeste-cinsellik-tarihi"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Güncel"
	},
	{
		id: "library-dogan-cuceloglu-insan-insana",
		title: "İnsan İnsana",
		url: "https://www.kitapyurdu.com/kitap/insan-insana/600411.html",
		author: "Doğan Cüceloğlu",
		imageUrl: bookmarkImage("library-dogan-cuceloglu-insan-insana"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Güncel"
	},
	{
		id: "library-serkan-karaismailoglu-kadin-beyni-erkek-beyni",
		title: "Kadın Beyni Erkek Beyni",
		url: "https://www.kitapyurdu.com/kitap/kadin-beyni-erkek-beyni/367454.html",
		author: "Serkan Karaismailoğlu",
		imageUrl: bookmarkImage("library-serkan-karaismailoglu-kadin-beyni-erkek-beyni"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Güncel"
	},
	{
		id: "library-nevzat-tarhan-kadin-psikolojisi",
		title: "Kadın Psikolojisi",
		url: "https://www.kitapyurdu.com/kitap/kadin-psikolojisi/572096.html",
		author: "Nevzat Tarhan",
		imageUrl: bookmarkImage("library-nevzat-tarhan-kadin-psikolojisi"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Güncel"
	},
	{
		id: "library-suat-taser-konusma-egitimi",
		title: "Konuşma Eğitimi",
		url: "https://www.kitapyurdu.com/kitap/konusma-egitimi/137838.html",
		author: "Suat Taşer",
		imageUrl: bookmarkImage("library-suat-taser-konusma-egitimi"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel gelişim"
	},
	{
		id: "library-gregory-scott-brown-kendini-iyilestiren-zihin",
		title: "Kendini İyileştiren Zihin",
		url: "https://www.kitapyurdu.com/kitap/kendini-iyilestiren-zihin-anksiyete-depresyon-ve-tukenmislikten-ozgurlesmek/704927.html",
		author: "Gregory Scott Brown",
		imageUrl: bookmarkImage("library-gregory-scott-brown-kendini-iyilestiren-zihin"),
		categoryId: "library",
		tags: ["Psikoloji"],
		genre: "Güncel"
	},
	{
		id: "library-sait-faik-abasiyanik-son-kuslar",
		title: "Son Kuşlar",
		url: "https://www.kitapyurdu.com/kitap/son-kuslar/283572.html",
		author: "Sait Faik Abasıyanık",
		imageUrl: bookmarkImage("library-sait-faik-abasiyanik-son-kuslar"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-yoksulluk-icimizde-4775",
		title: "Yoksulluk İçimizde",
		url: "https://www.kitapyurdu.com/kitap/yoksulluk-icimizde/4775.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-yoksulluk-icimizde-4775"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-ya-tahammul-ya-sefer-4801",
		title: "Ya Tahammül Ya Sefer",
		url: "https://www.kitapyurdu.com/kitap/ya-tahammul-ya-sefer/4801.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-ya-tahammul-ya-sefer-4801"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-uzun-hikaye-19088",
		title: "Uzun Hikâye",
		url: "https://www.kitapyurdu.com/kitap/uzun-hikaye/19088.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-uzun-hikaye-19088"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-sir-4798",
		title: "Sır",
		url: "https://www.kitapyurdu.com/kitap/sir/4798.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-sir-4798"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-bu-boyledir-4776",
		title: "Bu Böyledir",
		url: "https://www.kitapyurdu.com/kitap/bu-boyledir/4776.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-bu-boyledir-4776"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Öykü"
	},
	{
		id: "library-fuzuli-leyla-ve-mecnun",
		title: "Leylâ ve Mecnun",
		url: "https://www.kitapyurdu.com/kitap/leyla-ve-mecnun/127240.html",
		author: "Fuzulî",
		imageUrl: bookmarkImage("library-fuzuli-leyla-ve-mecnun"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-huseyin-cahit-yalcin-mercandan-babialiye",
		title: "Mercan'dan Bâbıâli'ye",
		url: "https://www.kitapyurdu.com/kitap/mercandan-babialiye-maarif-ve-memuriyet-hatiralari/687612.html",
		author: "Hüseyin Cahit Yalçın",
		imageUrl: bookmarkImage("library-huseyin-cahit-yalcin-mercandan-babialiye"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-huseyin-cahit-yalcin-tanidiklarim",
		title: "Tanıdıklarım",
		url: "https://www.kitapyurdu.com/kitap/tanidiklarim/504986.html",
		author: "Hüseyin Cahit Yalçın",
		imageUrl: bookmarkImage("library-huseyin-cahit-yalcin-tanidiklarim"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-huseyin-cahit-yalcin-kavgalarim",
		title: "Kavgalarım",
		url: "https://www.kitapyurdu.com/kitap/kavgalarim/509780.html",
		author: "Hüseyin Cahit Yalçın",
		imageUrl: bookmarkImage("library-huseyin-cahit-yalcin-kavgalarim"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-bu-ulke-18263",
		title: "Bu Ülke",
		url: "https://www.kitapyurdu.com/kitap/bu-ulke/18263.html",
		author: "Cemil Meriç",
		imageUrl: bookmarkImage("library-bu-ulke-18263"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-turke-tapmak-sekuler-din-ve-iki-savas-arasi-kemalizm-471959",
		title: "Türk'e Tapmak",
		url: "https://www.kitapyurdu.com/kitap/turke-tapmak-sekuler-din-ve-iki-savas-arasi-kemalizm/471959.html",
		author: "Onur Atalay",
		imageUrl: bookmarkImage("library-turke-tapmak-sekuler-din-ve-iki-savas-arasi-kemalizm-471959"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-ahmet-mithat-efendi-turkluge-dair",
		title: "Türklüğe Dair",
		author: "Ahmet Mithat Efendi",
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-ziya-gokalp-turklesmek-islamlasmak-muasirlasmak",
		title: "Türkleşmek, İslâmlaşmak, Muasırlaşmak",
		url: "https://www.kitapyurdu.com/kitap/turklesmek-islamlasmak-muasirlasmak-gunumuz-turkcesiyle/577282.html",
		author: "Ziya Gökalp",
		imageUrl: bookmarkImage("library-ziya-gokalp-turklesmek-islamlasmak-muasirlasmak"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-ziya-gokalp-turkculugun-esaslari",
		title: "Türkçülüğün Esasları",
		url: "https://www.kitapyurdu.com/kitap/turkculugun-esaslari/569253.html",
		author: "Ziya Gökalp",
		imageUrl: bookmarkImage("library-ziya-gokalp-turkculugun-esaslari"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-yusuf-akcura-uc-tarz-i-siyaset",
		title: "Üç Tarz-ı Siyâset",
		url: "https://www.kitapyurdu.com/kitap/uc-tarzi-siyaset/580001.html",
		author: "Yusuf Akçura",
		imageUrl: bookmarkImage("library-yusuf-akcura-uc-tarz-i-siyaset"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve toplum"
	},
	{
		id: "library-yitik-cennet-6384",
		title: "Yitik Cennet",
		url: "https://www.kitapyurdu.com/kitap/yitik-cennet/6384.html",
		author: "Sezai Karakoç",
		imageUrl: bookmarkImage("library-yitik-cennet-6384"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-insanligin-dirilisi-6385",
		title: "İnsanlığın Dirilişi",
		url: "https://www.kitapyurdu.com/kitap/insanligin-dirilisi/6385.html",
		author: "Sezai Karakoç",
		imageUrl: bookmarkImage("library-insanligin-dirilisi-6385"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-dirilis-neslinin-amentusu-6522",
		title: "Diriliş Neslinin Âmentüsü",
		url: "https://www.kitapyurdu.com/kitap/dirilis-neslinin-amentusu/6522.html",
		author: "Sezai Karakoç",
		imageUrl: bookmarkImage("library-dirilis-neslinin-amentusu-6522"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-islamin-dirilisi-6514",
		title: "İslâmın Dirilişi",
		url: "https://www.kitapyurdu.com/kitap/islamin-dirilisi/6514.html",
		author: "Sezai Karakoç",
		imageUrl: bookmarkImage("library-islamin-dirilisi-6514"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-sezai-karakoc-islamin-vadettikleri",
		title: "İslâmın Vâdettikleri",
		url: "https://www.kitapyurdu.com/kitap/islamin-vadettikleri/467400.html",
		author: "Roger Garaudy",
		imageUrl: bookmarkImage("library-sezai-karakoc-islamin-vadettikleri"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-islam-dusuncesi-551964",
		title: "İslâm Düşüncesi",
		url: "https://www.kitapyurdu.com/kitap/islam-dusuncesi/551964.html",
		author: "Muhammed İkbal",
		imageUrl: bookmarkImage("library-islam-dusuncesi-551964"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-muslumanca-dusunme-uzerine-denemeler-727",
		title: "Müslümanca Düşünme Üzerine Denemeler",
		url: "https://www.kitapyurdu.com/kitap/muslumanca-dusunme-uzerine-denemeler/727.html",
		author: "Rasim Özdenören",
		imageUrl: bookmarkImage("library-muslumanca-dusunme-uzerine-denemeler-727"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-gul-yetistiren-adam-488",
		title: "Gül Yetiştiren Adam",
		url: "https://www.kitapyurdu.com/kitap/gul-yetistiren-adam/488.html",
		author: "Rasim Özdenören",
		imageUrl: bookmarkImage("library-gul-yetistiren-adam-488"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-m-yusuf-kadioglu-musluman-muhendisin-yol-haritasi",
		title: "Müslüman Mühendisin Yol Haritası",
		url: "https://www.kitapyurdu.com/kitap/musluman-muhendisin-yol-haritasi/654190.html",
		author: "M. Yusuf Kadıoğlu",
		imageUrl: bookmarkImage("library-m-yusuf-kadioglu-musluman-muhendisin-yol-haritasi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-insanligin-medeniyet-destani-461827",
		title: "İnsanlığın Medeniyet Destanı",
		url: "https://www.kitapyurdu.com/kitap/insanligin-medeniyet-destani/461827.html",
		author: "Roger Garaudy",
		translator: "Cemal Aydın",
		imageUrl: bookmarkImage("library-insanligin-medeniyet-destani-461827"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-allah-de-otesini-birak-311263",
		title: "Allah De Ötesini Bırak",
		url: "https://www.kitapyurdu.com/kitap/allah-de-otesini-birak/311263.html",
		author: "Uğur Koşar",
		imageUrl: bookmarkImage("library-allah-de-otesini-birak-311263"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-nihat-hatipoglu-buyuklerin-dualari",
		title: "Büyüklerin Duaları",
		url: "https://www.kitapyurdu.com/kitap/buyuklerin-dualari/136926.html",
		author: "Nihat Hatipoğlu",
		categoryId: "library",
		tags: ["İslam"],
		genre: "Kur'an, İlmihal ve Dua"
	},
	{
		id: "library-nihat-hatipoglu-gunluk-dualar",
		title: "Günlük Dualar",
		url: "https://www.kitapyurdu.com/kitap/gunluk-dualar-kitabi/744782.html",
		author: "Nihat Hatipoğlu",
		imageUrl: bookmarkImage("library-nihat-hatipoglu-gunluk-dualar"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Kur'an, İlmihal ve Dua"
	},
	{
		id: "library-hemdem-kalpten-kalbe-bir-yol-vardir-677801",
		title: "Hemdem",
		url: "https://www.kitapyurdu.com/kitap/hemdem-kalpten-kalbe-bir-yol-vardir/677801.html",
		author: "Sait Köşk",
		imageUrl: bookmarkImage("library-hemdem-kalpten-kalbe-bir-yol-vardir-677801"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Deneme"
	},
	{
		id: "library-askin-gozyaslari-1-sems-tebrizi-408363",
		title: "Aşkın Gözyaşları 1: Tebrizli Şems",
		url: "https://www.kitapyurdu.com/kitap/askin-gozyaslari-1-sems-tebrizi/408363.html",
		author: "Sinan Yağmur",
		imageUrl: bookmarkImage("library-askin-gozyaslari-1-sems-tebrizi-408363"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-askin-gozyaslari-2-hz-mevlana-408175",
		title: "Aşkın Gözyaşları 2: Hz. Mevlana",
		url: "https://www.kitapyurdu.com/kitap/askin-gozyaslari-2-hz-mevlana/408175.html",
		author: "Sinan Yağmur",
		imageUrl: bookmarkImage("library-askin-gozyaslari-2-hz-mevlana-408175"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-askin-gozyaslari-4-hamus-olumu-open-dervis-305588",
		title: "Aşkın Gözyaşları 4: Hamuş",
		url: "https://www.kitapyurdu.com/kitap/askin-gozyaslari-4-hamus-olumu-open-dervis/305588.html",
		author: "Sinan Yağmur",
		imageUrl: bookmarkImage("library-askin-gozyaslari-4-hamus-olumu-open-dervis-305588"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-tennure-ve-ates-hz-mevlana-karton-kapak-240852",
		title: "Tennure ve Ateş: Hz. Mevlana",
		url: "https://www.kitapyurdu.com/kitap/tennure-ve-ates-hz-mevlana-karton-kapak/240852.html",
		author: "Sinan Yağmur",
		imageUrl: bookmarkImage("library-tennure-ve-ates-hz-mevlana-karton-kapak-240852"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-besir-ayvazoglu-kugunun-son-sarkisi",
		title: "Kuğunun Son Şarkısı",
		url: "https://www.kitapyurdu.com/kitap/galib-kugunun-son-sarkisi/629295.html",
		author: "Beşir Ayvazoğlu",
		imageUrl: bookmarkImage("library-besir-ayvazoglu-kugunun-son-sarkisi"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Biyografi"
	},
	{
		id: "library-zakir-naik-kuran-ve-modern-bilim",
		title: "Kur'an ve Modern Bilim",
		url: "https://www.kitapyurdu.com/kitap/kuran-ve-modern-bilim-uyumlu-mu-uyumsuz-mu/588262.html",
		author: "Zâkir Naik",
		imageUrl: bookmarkImage("library-zakir-naik-kuran-ve-modern-bilim"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-zakir-naik-islami-bakisla-terorizm-ve-cihat",
		title: "İslami Bakışla Terörizm ve Cihat",
		url: "https://www.kitapyurdu.com/kitap/islami-bakisla-terorizm-ve-cihat/588263.html",
		author: "Zâkir Naik",
		imageUrl: bookmarkImage("library-zakir-naik-islami-bakisla-terorizm-ve-cihat"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-zakir-naik-genclerin-inanc-sorulari",
		title: "Gençlerin İnanç Soruları",
		url: "https://www.kitapyurdu.com/kitap/genclerin-inanc-sorulari/509834.html",
		author: "Zâkir Naik",
		imageUrl: bookmarkImage("library-zakir-naik-genclerin-inanc-sorulari"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-mel-thompson-budizmin-bilgeligi",
		title: "Budizm'in Bilgeliği",
		url: "https://www.kitapyurdu.com/kitap/budizmin-bilgeligi/62976.html",
		author: "Mel Thompson",
		imageUrl: bookmarkImage("library-mel-thompson-budizmin-bilgeligi"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa-701428",
		title: "Antik Mısır'ın Peygamberleri",
		url: "https://www.kitapyurdu.com/kitap/antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa/701428.html",
		author: "Bülent Şahin Erdeğer",
		imageUrl: bookmarkImage("library-antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa-701428"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-bektasilik-710982",
		title: "Bektaşilik",
		url: "https://www.kitapyurdu.com/kitap/bektasilik/710982.html",
		author: "Ahmet Yaşar Ocak",
		imageUrl: bookmarkImage("library-bektasilik-710982"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-dogu-bati-arasinda-islam-495562",
		title: "Doğu Batı Arasında İslam",
		url: "https://www.kitapyurdu.com/kitap/dogu-bati-arasinda-islam/495562.html",
		author: "Aliya İzzetbegoviç",
		translator: "Edina Nurikiç",
		imageUrl: bookmarkImage("library-dogu-bati-arasinda-islam-495562"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari-620987",
		title: "Uyur İdik Uyardılar",
		url: "https://www.kitapyurdu.com/kitap/uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari/620987.html",
		author: "Irene Melikoff",
		translator: "Başak Bıçak",
		imageUrl: bookmarkImage("library-uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari-620987"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-suleyman-uludag-islam-dusuncesinin-yapisi",
		title: "İslam Düşüncesinin Yapısı",
		url: "https://www.kitapyurdu.com/kitap/islam-dusuncesinin-yapisi/4821.html",
		author: "Süleyman Uludağ",
		imageUrl: bookmarkImage("library-suleyman-uludag-islam-dusuncesinin-yapisi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-azizuddin-nesefi-tasavvufta-insan-meselesi",
		title: "Tasavvufta İnsan Meselesi",
		url: "https://www.kitapyurdu.com/kitap/tasavvufta-insan-meselesi/4832.html",
		author: "Azizüddin Nesefi",
		imageUrl: bookmarkImage("library-azizuddin-nesefi-tasavvufta-insan-meselesi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-ibn-haldun-tasavvufun-mahiyeti",
		title: "Tasavvufun Mahiyeti",
		url: "https://www.kitapyurdu.com/kitap/tasavvufun-mahiyeti/4782.html",
		author: "İbn Haldun",
		imageUrl: bookmarkImage("library-ibn-haldun-tasavvufun-mahiyeti"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-fihi-ma-fih-mevlananin-konusma-ve-sohbetleri-461625",
		title: "Fîhi Mâ Fîh",
		url: "https://www.kitapyurdu.com/kitap/fihi-ma-fih-mevlananin-konusma-ve-sohbetleri/461625.html",
		author: "Mevlânâ Celâleddîn-i Rûmî",
		translator: "Cemal Aydın",
		imageUrl: bookmarkImage("library-fihi-ma-fih-mevlananin-konusma-ve-sohbetleri-461625"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-futuhul-gayb-alemlerin-kesfi-487377",
		title: "Fütûhül-Gayb",
		url: "https://www.kitapyurdu.com/kitap/futuhul-gayb-alemlerin-kesfi/487377.html",
		author: "Abdülkadir Geylânî",
		translator: "Mehmet Bilal Yamak",
		imageUrl: bookmarkImage("library-futuhul-gayb-alemlerin-kesfi-487377"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-bu-dunya-icin-yaratilmadin-641708",
		title: "Bu Dünya İçin Yaratılmadın",
		url: "https://www.kitapyurdu.com/kitap/bu-dunya-icin-yaratilmadin/641708.html",
		author: "Abdülkadir Geylânî",
		imageUrl: bookmarkImage("library-bu-dunya-icin-yaratilmadin-641708"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-gazali-hikmetler-kitabi",
		title: "Hikmetler Kitabı",
		url: "https://www.kitapyurdu.com/kitap/hikmetler-kitabi/91441.html",
		author: "Gazâlî",
		imageUrl: bookmarkImage("library-gazali-hikmetler-kitabi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-gazali-ahlak-kitabi",
		title: "Ahlâk Kitabı",
		url: "https://www.kitapyurdu.com/kitap/ahlak-kitabi/104640.html",
		author: "Gazâlî",
		imageUrl: bookmarkImage("library-gazali-ahlak-kitabi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-ideolocya-orgusu-kod36-1099",
		title: "İdeolocya Örgüsü",
		url: "https://www.kitapyurdu.com/kitap/ideolocya-orgusu-kod36/1099.html",
		author: "Necip Fazıl Kısakürek",
		imageUrl: bookmarkImage("library-ideolocya-orgusu-kod36-1099"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-cole-inen-nur-kod39-1102",
		title: "Çöle İnen Nur",
		url: "https://www.kitapyurdu.com/kitap/cole-inen-nur-kod39/1102.html",
		author: "Necip Fazıl Kısakürek",
		imageUrl: bookmarkImage("library-cole-inen-nur-kod39-1102"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Siyer"
	},
	{
		id: "library-seyda-muhammed-konyevi-saadet-rehberimiz-hz-muhammed",
		title: "Saadet Rehberimiz Hz. Muhammed",
		author: "Seydâ Muhammed Konyevî",
		categoryId: "library",
		tags: ["İslam"],
		genre: "Siyer"
	},
	{
		id: "library-40-pratik-sunnet-599358",
		title: "40 Pratik Sünnet",
		url: "https://www.kitapyurdu.com/kitap/40-pratik-sunnet/599358.html",
		author: "Ali Hammuda",
		translator: "İbrahim Eski",
		imageUrl: bookmarkImage("library-40-pratik-sunnet-599358"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Kur'an, İlmihal ve Dua"
	},
	{
		id: "library-komisyon-sevgi-peygamberi-hz-muhammed",
		title: "Sevgi Peygamberi Hz. Muhammed",
		url: "https://www.kitapyurdu.com/kitap/sevgi-peygamberi-hz-muhammed/81476.html",
		author: "Komisyon",
		imageUrl: bookmarkImage("library-komisyon-sevgi-peygamberi-hz-muhammed"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Siyer"
	},
	{
		id: "library-osman-keskioglu-siyer-i-nebi",
		title: "Siyer-i Nebî",
		subtitle: "Hazret-i Peygamber'in Hayatı",
		url: "https://www.kitapyurdu.com/kitap/siyeri-nebi-hazreti-peygamberin-hayati/440154.html",
		author: "Osman Keskioğlu",
		imageUrl: bookmarkImage("library-osman-keskioglu-siyer-i-nebi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Siyer"
	},
	{
		id: "library-halil-inalcik-osmanli-tarihinde-efsaneler-ve-gercekler",
		title: "Osmanlı Tarihinde Efsaneler ve Gerçekler",
		url: "https://www.kitapyurdu.com/kitap/osmanli-tarihinde-efsaneler-ve-gercekler/432787.html",
		author: "Halil İnalcık",
		imageUrl: bookmarkImage("library-halil-inalcik-osmanli-tarihinde-efsaneler-ve-gercekler"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-osmanlilar-kulturel-tarih-460636",
		title: "Osmanlılar Kültürel Tarih",
		url: "https://www.kitapyurdu.com/kitap/osmanlilar-kulturel-tarih/460636.html",
		author: "Suraiya Faroqhi",
		translator: "Çağdaş Sümer",
		imageUrl: bookmarkImage("library-osmanlilar-kulturel-tarih-460636"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-cemal-kafadar-kendine-ait-bir-roma",
		title: "Kendine Ait Bir Roma",
		url: "https://www.kitapyurdu.com/kitap/kendine-ait-bir-roma-diyari-rumda-kulturel-cografya-ve-kimlik-uzerine/426356.html",
		author: "Cemal Kafadar",
		imageUrl: bookmarkImage("library-cemal-kafadar-kendine-ait-bir-roma"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-cemal-kafadar-kim-var-imis-biz-burada-yog-iken",
		title: "Kim Var İmiş Biz Burada Yoğ İken",
		url: "https://www.kitapyurdu.com/kitap/kim-var-imis-biz-burada-yog-iken-dort-osmanli-yeniceri-tuccar-dervis-ve-hatun/137406.html",
		author: "Cemal Kafadar",
		imageUrl: bookmarkImage("library-cemal-kafadar-kim-var-imis-biz-burada-yog-iken"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-ilber-ortayli-osmanliyi-yeniden-kesfetmek",
		title: "Osmanlı'yı Yeniden Keşfetmek",
		url: "https://www.kitapyurdu.com/kitap/osmanliyi-yeniden-kesfetmek/636864.html",
		author: "İlber Ortaylı",
		imageUrl: bookmarkImage("library-ilber-ortayli-osmanliyi-yeniden-kesfetmek"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-cansu-canan-ozgen-turklerin-seruveni",
		title: "Türklerin Serüveni",
		url: "https://www.kitapyurdu.com/kitap/turklerin-seruveni-metehandan-attilaya-fatihten-ataturke/438994.html",
		author: "Cansu Canan Özgen",
		imageUrl: bookmarkImage("library-cansu-canan-ozgen-turklerin-seruveni"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-resad-ekrem-kocu-osmanli-tarihinin-panoramasi",
		title: "Osmanlı Tarihinin Panoraması",
		url: "https://www.kitapyurdu.com/kitap/osmanli-tarihinin-panoramasi/52659.html",
		author: "Reşad Ekrem Koçu",
		imageUrl: bookmarkImage("library-resad-ekrem-kocu-osmanli-tarihinin-panoramasi"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-resad-ekrem-kocu-topkapi-sarayi",
		title: "Topkapı Sarayı",
		url: "https://www.kitapyurdu.com/kitap/topkapi-sarayi/63602.html",
		author: "Reşad Ekrem Koçu",
		imageUrl: bookmarkImage("library-resad-ekrem-kocu-topkapi-sarayi"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-resad-ekrem-kocu-yeniceriler",
		title: "Yeniçeriler",
		url: "https://www.kitapyurdu.com/kitap/yeniceriler-resad-ekrem-kocu/57398.html",
		author: "Reşad Ekrem Koçu",
		imageUrl: bookmarkImage("library-resad-ekrem-kocu-yeniceriler"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-resad-ekrem-kocu-kizlaragasinin-pici",
		title: "Kızlarağasının Piçi",
		url: "https://www.kitapyurdu.com/kitap/kizlaragasinin-pici/48023.html",
		author: "Reşad Ekrem Koçu",
		imageUrl: bookmarkImage("library-resad-ekrem-kocu-kizlaragasinin-pici"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ayasofyanin-gizli-tarihi-386572",
		title: "Ayasofya'nın Gizli Tarihi",
		url: "https://www.kitapyurdu.com/kitap/ayasofyanin-gizli-tarihi/386572.html",
		author: ["Pelin Çift", "Erhan Altunay"],
		imageUrl: bookmarkImage("library-ayasofyanin-gizli-tarihi-386572"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-nazim-tektas-hurrem-sultan",
		title: "Hürrem Sultan",
		url: "https://www.kitapyurdu.com/kitap/hurrem-sultan/276069.html",
		author: "Nazım Tektaş",
		imageUrl: bookmarkImage("library-nazim-tektas-hurrem-sultan"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-dersaadette-bayram-sabahlari-509826",
		title: "Dersââdet'te Bayram Sabahları",
		url: "https://www.kitapyurdu.com/kitap/dersaadette-bayram-sabahlari/509826.html",
		author: "Dursun Gürlek",
		imageUrl: bookmarkImage("library-dersaadette-bayram-sabahlari-509826"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-itikadin-muhafizlari-osmanlilar-689752",
		title: "İtikadın Muhafızları Osmanlılar",
		url: "https://www.kitapyurdu.com/kitap/itikadin-muhafizlari-osmanlilar/689752.html",
		author: "Osman Doğan",
		imageUrl: bookmarkImage("library-itikadin-muhafizlari-osmanlilar-689752"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-sarikamisbeyaz-huzun-75913",
		title: "Sarıkamış",
		url: "https://www.kitapyurdu.com/kitap/sarikamisbeyaz-huzun/75913.html",
		author: "İsmail Bilgin",
		imageUrl: bookmarkImage("library-sarikamisbeyaz-huzun-75913"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-ismail-bilgin-57-alay-filistin",
		title: "57. Alay Filistin",
		url: "https://www.kitapyurdu.com/kitap/57-alay-filistin/250461.html",
		author: "İsmail Bilgin",
		imageUrl: bookmarkImage("library-ismail-bilgin-57-alay-filistin"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-ismail-bilgin-kutul-amare",
		title: "Kut'ül Amare",
		url: "https://www.kitapyurdu.com/kitap/kutul-amare-osmanlinin-son-tokadi/436691.html",
		author: "İsmail Bilgin",
		imageUrl: bookmarkImage("library-ismail-bilgin-kutul-amare"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-kutulamare-kahramani-halil-kut-pasanin-hatiralari-374330",
		title: "Kut'ül Amare Kahramanı Halil Kut Paşa'nın Hatıraları",
		url: "https://www.kitapyurdu.com/kitap/kutulamare-kahramani-halil-kut-pasanin-hatiralari/374330.html",
		author: "Erhan Çiftçi",
		imageUrl: bookmarkImage("library-kutulamare-kahramani-halil-kut-pasanin-hatiralari-374330"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-mehmet-yasar-ertac-kutul-amare-1916",
		title: "Kut'ül Amare 1916",
		url: "https://www.kitapyurdu.com/kitap/kutul-amare-1916-olaylar-hatiralar-raporlar/422079.html",
		author: "Mehmet Yaşar Ertaç",
		imageUrl: bookmarkImage("library-mehmet-yasar-ertac-kutul-amare-1916"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-medine-mudafaasi-col-kaplani-fahrettin-pasa-88173",
		title: "Medine Müdafaası",
		url: "https://www.kitapyurdu.com/kitap/medine-mudafaasi-col-kaplani-fahrettin-pasa/88173.html",
		author: "İsmail Bilgin",
		imageUrl: bookmarkImage("library-medine-mudafaasi-col-kaplani-fahrettin-pasa-88173"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-george-stitt-son-mekke-emiri-serif-ali-haydar-pasa-anlatiyor",
		title: "Son Mekke Emiri Şerif Ali Haydar Paşa Anlatıyor",
		url: "https://www.kitapyurdu.com/kitap/son-mekke-emiri-serif-ali-haydar-pasa-anlatiyor-osmanli-arabistani-nasil-kaybetti/464566.html",
		author: "George Stitt",
		imageUrl: bookmarkImage("library-george-stitt-son-mekke-emiri-serif-ali-haydar-pasa-anlatiyor"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-ismail-kose-serif-huseyin",
		title: "Şerif Hüseyin",
		url: "https://www.kitapyurdu.com/kitap/serif-huseyin-buyuk-oyunun-kucuk-aktoru/482531.html",
		author: "İsmail Köse",
		imageUrl: bookmarkImage("library-ismail-kose-serif-huseyin"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli-80245",
		title: "Biz Osmanlı'ya Neden İsyan Ettik?",
		url: "https://www.kitapyurdu.com/kitap/biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli/80245.html",
		author: "Kral Abdullah",
		translator: "Halit Özkan",
		imageUrl: bookmarkImage("library-biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli-80245"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-huseyin-cahit-yalcin-talat-pasa",
		title: "Talat Paşa",
		url: "https://www.kitapyurdu.com/kitap/talat-pasa-kod-6i7/490613.html",
		author: "Hüseyin Cahit Yalçın",
		imageUrl: bookmarkImage("library-huseyin-cahit-yalcin-talat-pasa"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-bir-darbenin-anatomisi-13641",
		title: "Bir Darbenin Anatomisi",
		url: "https://www.kitapyurdu.com/kitap/bir-darbenin-anatomisi/13641.html",
		author: "Yılmaz Öztuna",
		imageUrl: bookmarkImage("library-bir-darbenin-anatomisi-13641"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi-721477",
		title: "Son Osmanlı Sarayında Gördüklerim",
		url: "https://www.kitapyurdu.com/kitap/son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi/721477.html",
		author: "Lütfi Simavi",
		imageUrl: bookmarkImage("library-son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi-721477"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-yilmaz-oztuna-avrupa-turkiyesini-kaybimiz",
		title: "Avrupa Türkiye'sini Kaybımız",
		url: "https://www.kitapyurdu.com/kitap/93-ve-balkan-savaslari-avrupa-turkiyesini-kaybimiz-rumelinin-elden-cikisi/303957.html",
		author: "Yılmaz Öztuna",
		imageUrl: bookmarkImage("library-yilmaz-oztuna-avrupa-turkiyesini-kaybimiz"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-ismail-bilgin-elveda-balkanlar",
		title: "Elveda Balkanlar",
		url: "https://www.kitapyurdu.com/kitap/elveda-balkanlar-unutulan-vatan/101796.html",
		author: "İsmail Bilgin",
		imageUrl: bookmarkImage("library-ismail-bilgin-elveda-balkanlar"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-turgut-ozakman-dirilis-canakkale-1915",
		title: "Diriliş Çanakkale 1915",
		url: "https://www.kitapyurdu.com/kitap/dirilis-canakkale-1915/106263.html",
		author: "Turgut Özakman",
		imageUrl: bookmarkImage("library-turgut-ozakman-dirilis-canakkale-1915"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-zeytindagi-gunumuz-turkcesiyle-668164",
		title: "Zeytindağı",
		url: "https://www.kitapyurdu.com/kitap/zeytindagi-gunumuz-turkcesiyle/668164.html",
		author: "Falih Rıfkı Atay",
		imageUrl: bookmarkImage("library-zeytindagi-gunumuz-turkcesiyle-668164"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-ataturkun-hatiralari-524510",
		title: "Atatürk'ün Hatıraları",
		url: "https://www.kitapyurdu.com/kitap/ataturkun-hatiralari-/524510.html",
		author: "Falih Rıfkı Atay",
		imageUrl: bookmarkImage("library-ataturkun-hatiralari-524510"),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-ilber-ortayli-yakin-tarihin-gercekleri",
		title: "Yakın Tarihin Gerçekleri",
		url: "https://www.kitapyurdu.com/kitap/yakin-tarihin-gercekleri/576542.html",
		author: "İlber Ortaylı",
		imageUrl: bookmarkImage("library-ilber-ortayli-yakin-tarihin-gercekleri"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-turgut-ozakman-cumhuriyet-1922-1938",
		title: "Cumhuriyet 1922-1938",
		url: "https://www.kitapyurdu.com/kitap/cumhuriyet-turk-mucizesi/138622.html",
		author: "Turgut Özakman",
		imageUrl: bookmarkImage("library-turgut-ozakman-cumhuriyet-1922-1938"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-mustafa-naima-naima-tarihi",
		title: "Naima Tarihi",
		url: "https://www.kitapyurdu.com/kitap/gunumuz-turkcesiyle-naima-tarihi-6-kitap-takim/731472.html",
		author: "Mustafa Naima",
		imageUrl: bookmarkImage("library-mustafa-naima-naima-tarihi"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti-582119",
		title: "İmparator'un İmgesi",
		url: "https://www.kitapyurdu.com/kitap/imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti/582119.html",
		author: "Gizem Magemizoğlu",
		imageUrl: bookmarkImage("library-imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti-582119"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-sair-fatih-avni-150920",
		title: "Şair Fâtih: Avnî",
		url: "https://www.kitapyurdu.com/kitap/sair-fatih-avni/150920.html",
		author: "İskender Pala",
		imageUrl: bookmarkImage("library-sair-fatih-avni-150920"),
		categoryId: "library",
		tags: ["Dil ve Edebiyat"],
		genre: "Araştırma"
	},
	{
		id: "library-erhan-afyoncu-truvanin-intikami",
		title: "Truva'nın İntikamı",
		url: "https://www.kitapyurdu.com/kitap/truvanin-intikami/130803.html",
		author: "Erhan Afyoncu",
		imageUrl: bookmarkImage("library-erhan-afyoncu-truvanin-intikami"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-kusatma-1453-130135",
		title: "Kuşatma 1453",
		url: "https://www.kitapyurdu.com/kitap/kusatma-1453/130135.html",
		author: "Okay Tiryakioğlu",
		imageUrl: bookmarkImage("library-kusatma-1453-130135"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-715169",
		title: "Evrâk-ı Perîşan",
		url: "https://www.kitapyurdu.com/kitap/evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-/715169.html",
		author: "Namık Kemal",
		imageUrl: bookmarkImage("library-evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-715169"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-resad-ekrem-kocu-fatih-sultan-mehmed",
		title: "Fatih Sultan Mehmed",
		url: "https://www.kitapyurdu.com/kitap/fatih-sultan-mehmed/43902.html",
		author: "Reşad Ekrem Koçu",
		imageUrl: bookmarkImage("library-resad-ekrem-kocu-fatih-sultan-mehmed"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-fatih-sultan-mehmed-717193",
		title: "Fâtih Sultan Mehmed",
		url: "https://www.kitapyurdu.com/kitap/fatih-sultan-mehmed-/717193.html",
		author: "İlber Ortaylı",
		imageUrl: bookmarkImage("library-fatih-sultan-mehmed-717193"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-bir-cihan-hukumdari-fatih-sultan-mehmed-455566",
		title: "Bir Cihan Hükümdarı Fatih Sultan Mehmed",
		url: "https://www.kitapyurdu.com/kitap/bir-cihan-hukumdari-fatih-sultan-mehmed/455566.html",
		author: "Erhan Afyoncu",
		imageUrl: bookmarkImage("library-bir-cihan-hukumdari-fatih-sultan-mehmed-455566"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-fetih-ve-kiyamet-1453-595100",
		title: "Fetih ve Kıyamet 1453",
		url: "https://www.kitapyurdu.com/kitap/fetih-ve-kiyamet-1453/595100.html",
		author: "Feridun M. Emecen",
		imageUrl: bookmarkImage("library-fetih-ve-kiyamet-1453-595100"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-ahmed-ates-istanbulun-fethine-dair",
		title: "İstanbul'un Fethine Dair",
		url: "https://www.kitapyurdu.com/kitap/istanbulun-fethine-dair/618487.html",
		author: "Ahmed Ateş",
		imageUrl: bookmarkImage("library-ahmed-ates-istanbulun-fethine-dair"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-abdulkadir-ozcan-atam-dedem-kanunu",
		title: "Atam Dedem Kanunu: Kanunname-i Âl-i Osman",
		url: "https://www.kitapyurdu.com/kitap/atam-dedem-kanunu-kanunnamei-ali-osman/428718.html",
		author: "Abdülkadir Özcan",
		imageUrl: bookmarkImage("library-abdulkadir-ozcan-atam-dedem-kanunu"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-avrupanin-fethi-osmanli-cihana-nasil-hukmetti-701864",
		title: "Avrupa'nın Fethi",
		url: "https://www.kitapyurdu.com/kitap/avrupanin-fethi-osmanli-cihana-nasil-hukmetti/701864.html",
		author: "Gábor Ágoston",
		translator: "Kahraman Şakul",
		imageUrl: bookmarkImage("library-avrupanin-fethi-osmanli-cihana-nasil-hukmetti-701864"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-timur-yildizlarin-bahtina-hukmeden-son-cihangir-459664",
		title: "Timur",
		url: "https://www.kitapyurdu.com/kitap/timur-yildizlarin-bahtina-hukmeden-son-cihangir/459664.html",
		author: ["Cüneyt Kanat", "Mustafa Alican"],
		imageUrl: bookmarkImage("library-timur-yildizlarin-bahtina-hukmeden-son-cihangir-459664"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar-691634",
		title: "Sultanlar ve İmparatorlar: Bir Bizanslının Gözünden Osmanlılar",
		url: "https://www.kitapyurdu.com/kitap/sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar/691634.html",
		author: "Hüseyin Uçar",
		imageUrl: bookmarkImage("library-sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar-691634"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-necmettin-alkan-sultan-ii-abdulhamid",
		title: "Sultan II. Abdülhamid",
		url: "https://www.kitapyurdu.com/kitap/sultan-ii-abdulhamid-ve-jon-turkler-18891908-selanikin-yukselisi/735994.html",
		author: "Necmettin Alkan",
		imageUrl: bookmarkImage("library-necmettin-alkan-sultan-ii-abdulhamid"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-mustafa-armagan-abdulhamidin-kurtlarla-dansi",
		title: "Abdülhamid'in Kurtlarla Dansı",
		url: "https://www.kitapyurdu.com/kitap/abdulhamidin-kurtlarla-dansi-3/654421.html",
		author: "Mustafa Armağan",
		imageUrl: bookmarkImage("library-mustafa-armagan-abdulhamidin-kurtlarla-dansi"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-yavuz-bahadiroglu-sultan-abdulhamid-han",
		title: "Sultan Abdülhamid Han",
		url: "https://www.kitapyurdu.com/kitap/kudretli-sultan-ii-abdulhamid-han/422656.html",
		author: "Yavuz Bahadıroğlu",
		imageUrl: bookmarkImage("library-yavuz-bahadiroglu-sultan-abdulhamid-han"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-ii-abdulhamid-zamani-ve-sahsiyeti-311444",
		title: "II. Abdülhamid Zamanı ve Şahsiyeti",
		url: "https://www.kitapyurdu.com/kitap/ii-abdulhamid-zamani-ve-sahsiyeti/311444.html",
		author: "Yılmaz Öztuna",
		imageUrl: bookmarkImage("library-ii-abdulhamid-zamani-ve-sahsiyeti-311444"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-sultan-ii-mahmud-342725",
		title: "Sultan II. Mahmud",
		url: "https://www.kitapyurdu.com/kitap/sultan-ii-mahmud/342725.html",
		author: "Yılmaz Öztuna",
		imageUrl: bookmarkImage("library-sultan-ii-mahmud-342725"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-surname-bir-osmanli-macerasi-631391",
		title: "Surnâme",
		url: "https://www.kitapyurdu.com/kitap/surname-bir-osmanli-macerasi/631391.html",
		author: "İskender Pala",
		imageUrl: bookmarkImage("library-surname-bir-osmanli-macerasi-631391"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-okay-tiryakioglu-kanuni",
		title: "Kanuni",
		url: "https://www.kitapyurdu.com/kitap/kanuni-kilicin-yapamadigini-adalet-yapar/145953.html",
		author: "Okay Tiryakioğlu",
		imageUrl: bookmarkImage("library-okay-tiryakioglu-kanuni"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-ozlem-kumrular-muhtesem-suleyman",
		title: "Muhteşem Süleyman",
		url: "https://www.kitapyurdu.com/kitap/muhtesem-suleyman/415302.html",
		author: "Özlem Kumrular",
		imageUrl: bookmarkImage("library-ozlem-kumrular-muhtesem-suleyman"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-kanuni-sultan-suleyman-335517",
		title: "Kanuni Sultan Süleyman",
		url: "https://www.kitapyurdu.com/kitap/kanuni-sultan-suleyman/335517.html",
		author: "Yılmaz Öztuna",
		imageUrl: bookmarkImage("library-kanuni-sultan-suleyman-335517"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-okay-tiryakioglu-yavuz",
		title: "Yavuz",
		url: "https://www.kitapyurdu.com/kitap/yavuz/139914.html",
		author: "Okay Tiryakioğlu",
		imageUrl: bookmarkImage("library-okay-tiryakioglu-yavuz"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Roman"
	},
	{
		id: "library-yavuz-sultan-selim-324084",
		title: "Yavuz Sultan Selim Han",
		url: "https://www.kitapyurdu.com/kitap/yavuz-sultan-selim/324084.html",
		author: "Namık Kemal",
		imageUrl: bookmarkImage("library-yavuz-sultan-selim-324084"),
		categoryId: "library",
		tags: ["Türk Edebiyatı"],
		genre: "Klasik"
	},
	{
		id: "library-yavuz-sultan-selim-401713",
		title: "Yavuz Sultan Selim",
		url: "https://www.kitapyurdu.com/kitap/yavuz-sultan-selim/401713.html",
		author: "Feridun M. Emecen",
		imageUrl: bookmarkImage("library-yavuz-sultan-selim-401713"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-tufan-gunduz-kuran-ve-kilic",
		title: "Kur'an ve Kılıç: Türkler Nasıl Müslüman Oldu?",
		url: "https://www.kitapyurdu.com/kitap/kuran-ve-kilic-turkler-nasil-musluman-oldu/455565.html",
		author: "Tufan Gündüz",
		imageUrl: bookmarkImage("library-tufan-gunduz-kuran-ve-kilic"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-tufan-gunduz-kizilelma",
		title: "Kızılelma: Türk Cihan Hâkimiyeti Ülküsü",
		url: "https://www.kitapyurdu.com/kitap/kizilelma-turk-cihan-hakimiyeti-ulkusu/657930.html",
		author: "Tufan Gündüz",
		imageUrl: bookmarkImage("library-tufan-gunduz-kizilelma"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-erhan-afyoncu-askeri-isyanlar-ve-darbeler",
		title: "Askerî İsyanlar ve Darbeler",
		url: "https://www.kitapyurdu.com/kitap/osmanli-imparatorlugunda-askeri-isyanlar-ve-darbeler/142768.html",
		author: "Erhan Afyoncu",
		imageUrl: bookmarkImage("library-erhan-afyoncu-askeri-isyanlar-ve-darbeler"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-turkiye-tarihi-ve-uygarliklari-seti",
		title: "Türkiye Tarihi ve Uygarlıkları Seti",
		author: ["Mehmet Ali Kaya", "M. Ali Erdoğru", "Sabri Sürgevil"],
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-iskendersezar-paralel-hayatlar-karton-kapak-371513",
		title: "İskender-Sezar: Paralel Hayatlar",
		url: "https://www.kitapyurdu.com/kitap/iskendersezar-paralel-hayatlar-karton-kapak/371513.html",
		author: "Plutarkhos",
		translator: "İo Çokona",
		imageUrl: bookmarkImage("library-iskendersezar-paralel-hayatlar-karton-kapak-371513"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Roma"
	},
	{
		id: "library-spqr-antik-roma-tarihi-449296",
		title: "SPQR",
		url: "https://www.kitapyurdu.com/kitap/spqr-antik-roma-tarihi-/449296.html",
		author: "Mary Beard",
		translator: "İrem Sağlamer",
		imageUrl: bookmarkImage("library-spqr-antik-roma-tarihi-449296"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Roma"
	},
	{
		id: "library-yeni-roma-dogudaki-roma-imparatorlugu-395700-642279",
		title: "Yeni Roma",
		url: "https://www.kitapyurdu.com/kitap/yeni-roma-dogudaki-roma-imparatorlugu-395700/642279.html",
		author: "Paul Stephenson",
		translator: "Bahattin Bayram",
		imageUrl: bookmarkImage("library-yeni-roma-dogudaki-roma-imparatorlugu-395700-642279"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Roma"
	},
	{
		id: "library-buyuk-konstantin-yenilmez-imparator-705347",
		title: "Büyük Konstantin",
		url: "https://www.kitapyurdu.com/kitap/buyuk-konstantin-yenilmez-imparator/705347.html",
		author: "Paul Stephenson",
		translator: "Gürkan Ergin",
		imageUrl: bookmarkImage("library-buyuk-konstantin-yenilmez-imparator-705347"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Roma"
	},
	{
		id: "library-semavi-eyice-bizans-istanbulu",
		title: "Bizans İstanbul'u",
		url: "https://www.kitapyurdu.com/kitap/yabancilarin-gozuyle-bizans-istanbulu/426682.html",
		author: "Semavi Eyice",
		imageUrl: bookmarkImage("library-semavi-eyice-bizans-istanbulu"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Roma"
	},
	{
		id: "library-mevlana-mesnevi",
		title: "Mesnevî",
		url: "https://www.kitapyurdu.com/kitap/mesnevi-123-ciltli-kutulu-set/668026.html",
		author: "Mevlânâ Celâleddîn-i Rûmî",
		imageUrl: bookmarkImage("library-mevlana-mesnevi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-huseyin-hilmi-isik-tam-ilmihal-saadet-i-ebediyye",
		title: "Tam İlmihâl: Saâdet-i Ebediyye",
		author: "Hüseyin Hilmi Işık",
		categoryId: "library",
		tags: ["İslam"],
		genre: "Kur'an, İlmihal ve Dua"
	},
	{
		id: "library-anonim-mizrakli-ilmihal-tercumesi",
		title: "Mızraklı İlmihal",
		url: "https://www.ahiskayayinevi.com/mizrakli-ilmihal-tercumesi-fikih-kurulu",
		author: "İsmailağa Fıkıh Kurulu",
		imageUrl: bookmarkImage("library-anonim-mizrakli-ilmihal-tercumesi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Kur'an, İlmihal ve Dua"
	},
	{
		id: "library-hamid-aytac-kuran-i-kerim",
		title: "Kur'an-ı Kerim",
		url: "https://envarnesriyat.com/mushaf-rahle-boy-hamit-5-renk-klasik-kutulu-deri-yesil-1262-153-01-116",
		author: "Allah",
		imageUrl: bookmarkImage("library-hamid-aytac-kuran-i-kerim"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Kur'an, İlmihal ve Dua"
	}
]
