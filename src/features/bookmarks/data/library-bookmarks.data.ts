import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"

function bookmarkImage(id: string) {
	return `/img/bookmarks/${id}.webp`
}

export const LIBRARY_BOOKMARKS: Bookmark[] = [
	{
		id: "library-sir-arthur-conan-doyle-suphe-asla-uyumaz",
		title: "Şüphe Asla Uyumaz",
		url: "https://www.kitapyurdu.com/kitap/suphe-asla-uyumaz/605893.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage("library-sir-arthur-conan-doyle-suphe-asla-uyumaz"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Dünya Edebiyatı"
	},
	{
		id: "library-sir-arthur-conan-doyle-suc-detayda-saklidir",
		title: "Suç Detayda Saklıdır",
		url: "https://www.kitapyurdu.com/kitap/suc-detayda-saklidir/605890.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage(
			"library-sir-arthur-conan-doyle-suc-detayda-saklidir"
		),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Dünya Edebiyatı"
	},
	{
		id: "library-sir-arthur-conan-doyle-gercekler-kanit-ister",
		title: "Gerçekler Kanıt İster",
		url: "https://www.kitapyurdu.com/kitap/gercekler-kanit-ister/605894.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage(
			"library-sir-arthur-conan-doyle-gercekler-kanit-ister"
		),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Dünya Edebiyatı"
	},
	{
		id: "library-sir-arthur-conan-doyle-aklin-suphesi-sucun-gercegidir",
		title: "Aklın Şüphesi Suçun Gerçeğidir",
		url: "https://www.kitapyurdu.com/kitap/aklin-suphesi-sucun-gercegidir/605892.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage(
			"library-sir-arthur-conan-doyle-aklin-suphesi-sucun-gercegidir"
		),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Dünya Edebiyatı"
	},
	{
		id: "library-sir-arthur-conan-doyle-akil-oyunlarinin-golgesinde",
		title: "Akıl Oyunlarının Gölgesinde",
		url: "https://www.kitapyurdu.com/kitap/akil-oyunlarinin-golgesinde/605891.html",
		author: "Sir Arthur Conan Doyle",
		imageUrl: bookmarkImage(
			"library-sir-arthur-conan-doyle-akil-oyunlarinin-golgesinde"
		),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Dünya Edebiyatı"
	},
	{
		id: "library-piyon-321683",
		title: "Piyon",
		url: "https://www.kitapyurdu.com/kitap/piyon/321683.html",
		author: "Michael Sikkofield",
		imageUrl: bookmarkImage("library-piyon-321683"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Roman"
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
		imageUrl: bookmarkImage(
			"library-ismail-hakki-aydin-yasam-5-0-kuantik-dusunce-sarmali"
		),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim Felsefesi"
	},
	{
		id: "library-ismail-hakki-aydin-homo-deyyus",
		title: "Homo Deyyus",
		url: "https://www.kitapyurdu.com/kitap/homo-deyyus-kiyamet-serisi-1/709752.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage("library-ismail-hakki-aydin-homo-deyyus"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim Felsefesi"
	},
	{
		id: "library-ismail-hakki-aydin-ve-tanri-beyni-yaratti",
		title: "ve Tanrı Beyni Yarattı",
		url: "https://www.kitapyurdu.com/kitap/ve-tanri-beyni-yaratti-bilim-felsefesi-serisi-1/614142.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage(
			"library-ismail-hakki-aydin-ve-tanri-beyni-yaratti"
		),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim Felsefesi"
	},
	{
		id: "library-ismail-hakki-aydin-frekansa-burundum-beyin-diye-gorundum",
		title: "Frekansa Büründüm Beyin Diye Göründüm",
		url: "https://www.kitapyurdu.com/kitap/frekansa-burundum-beyin-diye-gorundum/634222.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage(
			"library-ismail-hakki-aydin-frekansa-burundum-beyin-diye-gorundum"
		),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim Felsefesi"
	},
	{
		id: "library-ismail-hakki-aydin-frekanslar-aleminde-kainat-beyne-kucuk-noron-kainata-buyuk",
		title: "Frekanslar Âleminde Kâinat Beyne Küçük, Nöron Kâinata Büyük",
		url: "https://www.kitapyurdu.com/kitap/frekanslar-aleminde-kainat-beyne-kucuk-noron-kainata-buyuk/677390.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage(
			"library-ismail-hakki-aydin-frekanslar-aleminde-kainat-beyne-kucuk-noron-kainata-buyuk"
		),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim Felsefesi"
	},
	{
		id: "library-ismail-hakki-aydin-felsefe-karada-yuzme-denizde-yurume-sanatidir",
		title: "Felsefe Karada Yüzme Denizde Yürüme Sanatıdır",
		url: "https://www.kitapyurdu.com/kitap/felsefe-karada-yuzme-denizde-yurume-sanatidir/664622.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage(
			"library-ismail-hakki-aydin-felsefe-karada-yuzme-denizde-yurume-sanatidir"
		),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Felsefe"
	},
	{
		id: "library-ismail-hakki-aydin-insan-endiseli-bir-damla-hem-parcacik-hem-dalga",
		title: "İnsan Endişeli Bir Damla Hem Parçacık Hem Dalga",
		url: "https://www.kitapyurdu.com/kitap/insan-endiseli-bir-damla-hem-parcacik-hem-dalga/645542.html",
		author: "İsmail Hakkı Aydın",
		imageUrl: bookmarkImage(
			"library-ismail-hakki-aydin-insan-endiseli-bir-damla-hem-parcacik-hem-dalga"
		),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bilim Felsefesi"
	},
	{
		id: "library-pinar-ulgen-orta-cag-avrupasinda-ask-tutku-entrika-ve-romantizm",
		title: "Orta Çağ Avrupa'sında Aşk, Tutku, Entrika ve Romantizm",
		url: "https://www.kitapyurdu.com/kitap/orta-cag-avrupasinda-ask-tutku-entrika-ve-romantizm/657630.html",
		author: "Pınar Ülgen",
		imageUrl: bookmarkImage(
			"library-pinar-ulgen-orta-cag-avrupasinda-ask-tutku-entrika-ve-romantizm"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
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
		imageUrl: bookmarkImage(
			"library-ahmet-faik-ozbilge-fener-balat-ayvansaray"
		),
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
		imageUrl: bookmarkImage(
			"library-kolektif-ahmet-emre-bilgili-sehir-ve-kultur-istanbul"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
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
		id: "library-alev-alatli-hafazanallah",
		title: "Hafazanallah",
		url: "https://www.kitapyurdu.com/kitap/all-american-heman-hafazanallah-nasihatname-ii/510545.html",
		author: "Alev Alatlı",
		imageUrl: bookmarkImage("library-alev-alatli-hafazanallah"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve Toplum"
	},
	{
		id: "library-ali-fuad-basgil-genclerle-basbasa",
		title: "Gençlerle Başbaşa",
		url: "https://www.kitapyurdu.com/kitap/genclerle-basbasa/148246.html",
		author: "Ali Fuad Başgil",
		imageUrl: bookmarkImage("library-ali-fuad-basgil-genclerle-basbasa"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel Gelişim"
	},
	{
		id: "library-sadece-aptallar-8-saat-uyur-81650",
		title: "Sadece Aptallar 8 Saat Uyur",
		url: "https://www.kitapyurdu.com/kitap/sadece-aptallar-8-saat-uyur/81650.html",
		author: "Erdal Demirkıran",
		imageUrl: bookmarkImage("library-sadece-aptallar-8-saat-uyur-81650"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel Gelişim"
	},
	{
		id: "library-faruk-ondag-bi-musaade-sinavim-var",
		title: "Bi' Müsaade Sınavım Var",
		url: "https://www.kitapyurdu.com/kitap/bi-musaade-sinavim-var/289860.html",
		author: "Faruk Öndağ",
		imageUrl: bookmarkImage("library-faruk-ondag-bi-musaade-sinavim-var"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel Gelişim"
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
		genre: "Kişisel Gelişim"
	},
	{
		id: "library-ilber-ortayli-insan-gelecegini-nasil-kurar",
		title: "İnsan Geleceğini Nasıl Kurar?",
		url: "https://www.kitapyurdu.com/kitap/insan-gelecegini-nasil-kurar-kendini-insa-etmenin-yollari/609007.html",
		author: "İlber Ortaylı",
		imageUrl: bookmarkImage(
			"library-ilber-ortayli-insan-gelecegini-nasil-kurar"
		),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel Gelişim"
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
		imageUrl: bookmarkImage(
			"library-serdar-tuncer-sermayem-yok-derdimden-baska"
		),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Deneme"
	},
	{
		id: "library-serdar-tuncer-hicbir-zaman-hicbir-sey",
		title: "Hiçbir Zaman Hiçbir Şey",
		url: "https://www.kitapyurdu.com/kitap/hicbir-zaman-hicbir-sey/682179.html",
		author: "Serdar Tuncer",
		imageUrl: bookmarkImage("library-serdar-tuncer-hicbir-zaman-hicbir-sey"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Deneme"
	},
	{
		id: "library-ahmed-yuksel-ozemre-uskudarda-bir-attar-dukkani",
		title: "Üsküdar'da Bir Attar Dükkânı",
		url: "https://www.kitapyurdu.com/kitap/uskudarda-bir-attar-dukkani/27134.html",
		author: "Ahmed Yüksel Özemre",
		imageUrl: bookmarkImage(
			"library-ahmed-yuksel-ozemre-uskudarda-bir-attar-dukkani"
		),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-medeniyet-tasavvuru-futuhati-medeniyyeye-giris-607691",
		title: "Medeniyet Tasavvuru",
		url: "https://www.kitapyurdu.com/kitap/medeniyet-tasavvuru-futuhati-medeniyyeye-giris-/607691.html",
		author: "Yusuf Kaplan",
		imageUrl: bookmarkImage(
			"library-medeniyet-tasavvuru-futuhati-medeniyyeye-giris-607691"
		),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve Toplum"
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
		genre: "Siyaset ve Toplum"
	},
	{
		id: "library-kesintisiz-ogrenme-42711",
		title: "Kesintisiz Öğrenme",
		url: "https://www.kitapyurdu.com/kitap/kesintisiz-ogrenme/42711.html",
		author: "Mümin Sekman",
		imageUrl: bookmarkImage("library-kesintisiz-ogrenme-42711"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel Gelişim"
	},
	{
		id: "library-jeremy-stangroom-einstein-bulmacasi-2",
		title: "Einstein Bulmacası 2",
		url: "https://www.kitapyurdu.com/kitap/einstein-bulmacasi-2-aklinizin-sinirlarini-zorlayacak-bulmaca-ve-paradokslar/343350.html",
		author: "Jeremy Stangroom",
		imageUrl: bookmarkImage("library-jeremy-stangroom-einstein-bulmacasi-2"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bulmaca"
	},
	{
		id: "library-jeremy-stangroom-einstein-bulmacasi",
		title: "Einstein Bulmacası",
		url: "https://www.kitapyurdu.com/kitap/einstein-bulmacasi-2-aklinizin-sinirlarini-zorlayacak-bulmaca-ve-paradokslar/343350.html",
		author: "Jeremy Stangroom",
		imageUrl: bookmarkImage("library-jeremy-stangroom-einstein-bulmacasi"),
		categoryId: "library",
		tags: ["Bilim"],
		genre: "Bulmaca"
	},
	{
		id: "library-ruh-adam-588450",
		title: "Ruh Adam",
		url: "https://www.kitapyurdu.com/kitap/ruh-adam-/588450.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-ruh-adam-588450"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Roman"
	},
	{
		id: "library-bozkurtlar-243385",
		title: "Bozkurtlar",
		url: "https://www.kitapyurdu.com/kitap/bozkurtlar/243385.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-bozkurtlar-243385"),
		categoryId: "library",
		tags: ["Edebiyat"],
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
		genre: "Siyaset ve Toplum"
	},
	{
		id: "library-turancilik-milli-degerler-ve-genclik-251503",
		title: "Turancılık, Millî Değerler ve Gençlik",
		url: "https://www.kitapyurdu.com/kitap/turancilik-milli-degerler-ve-genclik/251503.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage(
			"library-turancilik-milli-degerler-ve-genclik-251503"
		),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve Toplum"
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
		tags: ["Edebiyat"],
		genre: "Roman"
	},
	{
		id: "library-yollarin-sonu-595418",
		title: "Yolların Sonu",
		url: "https://www.kitapyurdu.com/kitap/yollarin-sonu/595418.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-yollarin-sonu-595418"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Şiir"
	},
	{
		id: "library-atsiz-hikayeler-452636",
		title: "Hikâyeler",
		url: "https://www.kitapyurdu.com/kitap/atsiz-hikayeler/452636.html",
		author: "Hüseyin Nihal Atsız",
		imageUrl: bookmarkImage("library-atsiz-hikayeler-452636"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Öykü"
	},
	{
		id: "library-james-clear-atomik-aliskanliklar",
		title: "Atomik Alışkanlıklar",
		url: "https://www.kitapyurdu.com/kitap/atomik-aliskanliklar/540793.html",
		author: "James Clear",
		imageUrl: bookmarkImage("library-james-clear-atomik-aliskanliklar"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel Gelişim"
	},
	{
		id: "library-gelecegi-kesfedenler-dijital-cagin-biyografisi-416958",
		title: "Geleceği Keşfedenler",
		url: "https://www.kitapyurdu.com/kitap/gelecegi-kesfedenler-dijital-cagin-biyografisi/416958.html",
		author: "Walter Isaacson",
		translator: "Duygu Dalgakıran",
		imageUrl: bookmarkImage(
			"library-gelecegi-kesfedenler-dijital-cagin-biyografisi-416958"
		),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Biyografi"
	},
	{
		id: "library-suat-taser-konusma-egitimi",
		title: "Konuşma Eğitimi",
		url: "https://www.kitapyurdu.com/kitap/konusma-egitimi/137838.html",
		author: "Suat Taşer",
		imageUrl: bookmarkImage("library-suat-taser-konusma-egitimi"),
		categoryId: "library",
		tags: ["Kişisel Gelişim"],
		genre: "Kişisel Gelişim"
	},
	{
		id: "library-yoksulluk-icimizde-4775",
		title: "Yoksulluk İçimizde",
		url: "https://www.kitapyurdu.com/kitap/yoksulluk-icimizde/4775.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-yoksulluk-icimizde-4775"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Öykü"
	},
	{
		id: "library-ya-tahammul-ya-sefer-4801",
		title: "Ya Tahammül Ya Sefer",
		url: "https://www.kitapyurdu.com/kitap/ya-tahammul-ya-sefer/4801.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-ya-tahammul-ya-sefer-4801"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Öykü"
	},
	{
		id: "library-uzun-hikaye-19088",
		title: "Uzun Hikâye",
		url: "https://www.kitapyurdu.com/kitap/uzun-hikaye/19088.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-uzun-hikaye-19088"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Öykü"
	},
	{
		id: "library-sir-4798",
		title: "Sır",
		url: "https://www.kitapyurdu.com/kitap/sir/4798.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-sir-4798"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Öykü"
	},
	{
		id: "library-bu-boyledir-4776",
		title: "Bu Böyledir",
		url: "https://www.kitapyurdu.com/kitap/bu-boyledir/4776.html",
		author: "Mustafa Kutlu",
		imageUrl: bookmarkImage("library-bu-boyledir-4776"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Öykü"
	},
	{
		id: "library-bu-ulke-18263",
		title: "Bu Ülke",
		url: "https://www.kitapyurdu.com/kitap/bu-ulke/18263.html",
		author: "Cemil Meriç",
		imageUrl: bookmarkImage("library-bu-ulke-18263"),
		categoryId: "library",
		tags: ["Felsefe ve Düşünce"],
		genre: "Siyaset ve Toplum"
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
		tags: ["Edebiyat"],
		genre: "Roman"
	},
	{
		id: "library-m-yusuf-kadioglu-musluman-muhendisin-yol-haritasi",
		title: "Müslüman Mühendisin Yol Haritası",
		url: "https://www.kitapyurdu.com/kitap/musluman-muhendisin-yol-haritasi/654190.html",
		author: "M. Yusuf Kadıoğlu",
		imageUrl: bookmarkImage(
			"library-m-yusuf-kadioglu-musluman-muhendisin-yol-haritasi"
		),
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
		genre: "İlmihal ve Dua"
	},
	{
		id: "library-nihat-hatipoglu-gunluk-dualar",
		title: "Günlük Dualar",
		url: "https://www.kitapyurdu.com/kitap/gunluk-dualar-kitabi/744782.html",
		author: "Nihat Hatipoğlu",
		imageUrl: bookmarkImage("library-nihat-hatipoglu-gunluk-dualar"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "İlmihal ve Dua"
	},
	{
		id: "library-hemdem-kalpten-kalbe-bir-yol-vardir-677801",
		title: "Hemdem",
		url: "https://www.kitapyurdu.com/kitap/hemdem-kalpten-kalbe-bir-yol-vardir/677801.html",
		author: "Sait Köşk",
		imageUrl: bookmarkImage(
			"library-hemdem-kalpten-kalbe-bir-yol-vardir-677801"
		),
		categoryId: "library",
		tags: ["Edebiyat"],
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
		imageUrl: bookmarkImage(
			"library-askin-gozyaslari-4-hamus-olumu-open-dervis-305588"
		),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Tasavvuf"
	},
	{
		id: "library-tennure-ve-ates-hz-mevlana-karton-kapak-240852",
		title: "Tennure ve Ateş: Hz. Mevlana",
		url: "https://www.kitapyurdu.com/kitap/tennure-ve-ates-hz-mevlana-karton-kapak/240852.html",
		author: "Sinan Yağmur",
		imageUrl: bookmarkImage(
			"library-tennure-ve-ates-hz-mevlana-karton-kapak-240852"
		),
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
		imageUrl: bookmarkImage(
			"library-zakir-naik-islami-bakisla-terorizm-ve-cihat"
		),
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
		imageUrl: bookmarkImage(
			"library-antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa-701428"
		),
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
		imageUrl: bookmarkImage(
			"library-uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari-620987"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Kültür"
	},
	{
		id: "library-suleyman-uludag-islam-dusuncesinin-yapisi",
		title: "İslam Düşüncesinin Yapısı",
		url: "https://www.kitapyurdu.com/kitap/islam-dusuncesinin-yapisi/4821.html",
		author: "Süleyman Uludağ",
		imageUrl: bookmarkImage(
			"library-suleyman-uludag-islam-dusuncesinin-yapisi"
		),
		categoryId: "library",
		tags: ["İslam"],
		genre: "Düşünce"
	},
	{
		id: "library-azizuddin-nesefi-tasavvufta-insan-meselesi",
		title: "Tasavvufta İnsan Meselesi",
		url: "https://www.kitapyurdu.com/kitap/tasavvufta-insan-meselesi/4832.html",
		author: "Azizüddin Nesefi",
		imageUrl: bookmarkImage(
			"library-azizuddin-nesefi-tasavvufta-insan-meselesi"
		),
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
		imageUrl: bookmarkImage(
			"library-fihi-ma-fih-mevlananin-konusma-ve-sohbetleri-461625"
		),
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
		genre: "İlmihal ve Dua"
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
		imageUrl: bookmarkImage(
			"library-halil-inalcik-osmanli-tarihinde-efsaneler-ve-gercekler"
		),
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
		imageUrl: bookmarkImage(
			"library-cemal-kafadar-kim-var-imis-biz-burada-yog-iken"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-ilber-ortayli-osmanliyi-yeniden-kesfetmek",
		title: "Osmanlı'yı Yeniden Keşfetmek",
		url: "https://www.kitapyurdu.com/kitap/osmanliyi-yeniden-kesfetmek/636864.html",
		author: "İlber Ortaylı",
		imageUrl: bookmarkImage(
			"library-ilber-ortayli-osmanliyi-yeniden-kesfetmek"
		),
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
		imageUrl: bookmarkImage(
			"library-resad-ekrem-kocu-osmanli-tarihinin-panoramasi"
		),
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
		imageUrl: bookmarkImage(
			"library-kutulamare-kahramani-halil-kut-pasanin-hatiralari-374330"
		),
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
		imageUrl: bookmarkImage(
			"library-medine-mudafaasi-col-kaplani-fahrettin-pasa-88173"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-george-stitt-son-mekke-emiri-serif-ali-haydar-pasa-anlatiyor",
		title: "Son Mekke Emiri Şerif Ali Haydar Paşa Anlatıyor",
		url: "https://www.kitapyurdu.com/kitap/son-mekke-emiri-serif-ali-haydar-pasa-anlatiyor-osmanli-arabistani-nasil-kaybetti/464566.html",
		author: "George Stitt",
		imageUrl: bookmarkImage(
			"library-george-stitt-son-mekke-emiri-serif-ali-haydar-pasa-anlatiyor"
		),
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
		imageUrl: bookmarkImage(
			"library-biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli-80245"
		),
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
		imageUrl: bookmarkImage(
			"library-son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi-721477"
		),
		categoryId: "library",
		tags: ["Anı ve Biyografi"],
		genre: "Anı"
	},
	{
		id: "library-yilmaz-oztuna-avrupa-turkiyesini-kaybimiz",
		title: "Avrupa Türkiye'sini Kaybımız",
		url: "https://www.kitapyurdu.com/kitap/93-ve-balkan-savaslari-avrupa-turkiyesini-kaybimiz-rumelinin-elden-cikisi/303957.html",
		author: "Yılmaz Öztuna",
		imageUrl: bookmarkImage(
			"library-yilmaz-oztuna-avrupa-turkiyesini-kaybimiz"
		),
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
		tags: ["Tarih ve Kültür"],
		genre: "Cumhuriyet"
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
		tags: ["Tarih ve Kültür"],
		genre: "Cumhuriyet"
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
		imageUrl: bookmarkImage(
			"library-imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti-582119"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-sair-fatih-avni-150920",
		title: "Şair Fâtih: Avnî",
		url: "https://www.kitapyurdu.com/kitap/sair-fatih-avni/150920.html",
		author: "Prof. Dr. İskender Pala",
		imageUrl: bookmarkImage("library-sair-fatih-avni-150920"),
		categoryId: "library",
		tags: ["Edebiyat"],
		genre: "Şiir"
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
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-715169",
		title: "Evrâk-ı Perîşan",
		url: "https://www.kitapyurdu.com/kitap/evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-/715169.html",
		author: "Namık Kemal",
		imageUrl: bookmarkImage(
			"library-evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-715169"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
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
		imageUrl: bookmarkImage(
			"library-bir-cihan-hukumdari-fatih-sultan-mehmed-455566"
		),
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
		imageUrl: bookmarkImage(
			"library-avrupanin-fethi-osmanli-cihana-nasil-hukmetti-701864"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-timur-yildizlarin-bahtina-hukmeden-son-cihangir-459664",
		title: "Timur",
		url: "https://www.kitapyurdu.com/kitap/timur-yildizlarin-bahtina-hukmeden-son-cihangir/459664.html",
		author: ["Cüneyt Kanat", "Mustafa Alican"],
		imageUrl: bookmarkImage(
			"library-timur-yildizlarin-bahtina-hukmeden-son-cihangir-459664"
		),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Tarih"
	},
	{
		id: "library-sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar-691634",
		title: "Sultanlar ve İmparatorlar: Bir Bizanslının Gözünden Osmanlılar",
		url: "https://www.kitapyurdu.com/kitap/sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar/691634.html",
		author: "Hüseyin Uçar",
		imageUrl: bookmarkImage(
			"library-sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar-691634"
		),
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
		imageUrl: bookmarkImage(
			"library-mustafa-armagan-abdulhamidin-kurtlarla-dansi"
		),
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
		id: "library-okay-tiryakioglu-kanuni",
		title: "Kanuni",
		url: "https://www.kitapyurdu.com/kitap/kanuni-kilicin-yapamadigini-adalet-yapar/145953.html",
		author: "Okay Tiryakioğlu",
		imageUrl: bookmarkImage("library-okay-tiryakioglu-kanuni"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
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
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
	},
	{
		id: "library-yavuz-sultan-selim-324084",
		title: "Yavuz Sultan Selim Han",
		url: "https://www.kitapyurdu.com/kitap/yavuz-sultan-selim/324084.html",
		author: "Namık Kemal",
		imageUrl: bookmarkImage("library-yavuz-sultan-selim-324084"),
		categoryId: "library",
		tags: ["Tarih ve Kültür"],
		genre: "Osmanlı"
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
		imageUrl: bookmarkImage(
			"library-erhan-afyoncu-askeri-isyanlar-ve-darbeler"
		),
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
		imageUrl: bookmarkImage(
			"library-iskendersezar-paralel-hayatlar-karton-kapak-371513"
		),
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
		imageUrl: bookmarkImage(
			"library-yeni-roma-dogudaki-roma-imparatorlugu-395700-642279"
		),
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
		imageUrl: bookmarkImage(
			"library-buyuk-konstantin-yenilmez-imparator-705347"
		),
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
		genre: "İlmihal ve Dua"
	},
	{
		id: "library-anonim-mizrakli-ilmihal-tercumesi",
		title: "Mızraklı İlmihal",
		url: "https://www.ahiskayayinevi.com/mizrakli-ilmihal-tercumesi-fikih-kurulu",
		author: "İsmailağa Fıkıh Kurulu",
		imageUrl: bookmarkImage("library-anonim-mizrakli-ilmihal-tercumesi"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "İlmihal ve Dua"
	},
	{
		id: "library-hamid-aytac-kuran-i-kerim",
		title: "Kur'an-ı Kerim",
		url: "https://envarnesriyat.com/mushaf-rahle-boy-hamit-5-renk-klasik-kutulu-deri-yesil-1262-153-01-116",
		author: "Allah",
		imageUrl: bookmarkImage("library-hamid-aytac-kuran-i-kerim"),
		categoryId: "library",
		tags: ["İslam"],
		genre: "İlmihal ve Dua"
	}
]
