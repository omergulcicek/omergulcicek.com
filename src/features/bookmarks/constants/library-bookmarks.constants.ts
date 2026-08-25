export const LIBRARY_BOOK_CATEGORY_IDS = [
	"tarih-ve-kultur",
	"islam",
	"digerleri"
] as const

export type LibraryBookCategoryId = (typeof LIBRARY_BOOK_CATEGORY_IDS)[number]

export const LIBRARY_BOOK_CATEGORY_TREE = {
	"tarih-ve-kultur": [
		"genel-turk-tarihi",
		"osmanli-tarihi",
		"hatirat-ve-ani",
		"roma",
		"cumhuriyet",
		"sehir-tarihi",
		"kultur-mitoloji-ve-dunya-medeniyetleri"
	],
	islam: [
		"kuran-i-kerim-ve-meal",
		"tefsir",
		"akaid-ve-ilmihal",
		"hadis-ve-sunnet",
		"siyer",
		"ahlak-tasavvuf",
		"islam-dusuncesi"
	],
	digerleri: [
		"edebiyat",
		"felsefe-ve-dusunce",
		"bilim",
		"ani-ve-biyografi",
		"kisisel-gelisim"
	]
} as const satisfies Record<LibraryBookCategoryId, readonly string[]>

export const LIBRARY_CATEGORY_LABELS: Record<LibraryBookCategoryId, string> = {
	"tarih-ve-kultur": "Tarih",
	islam: "İslam",
	digerleri: "Diğerleri"
}

export const LIBRARY_SUBCATEGORY_LABELS: Record<string, string> = {
	"genel-turk-tarihi": "Genel Türk Tarihi",
	"osmanli-tarihi": "Osmanlı Tarihi",
	"hatirat-ve-ani": "Hatırat ve Anı",
	roma: "Roma",
	cumhuriyet: "Cumhuriyet",
	"sehir-tarihi": "Şehir Tarihi",
	"kultur-mitoloji-ve-dunya-medeniyetleri":
		"Kültür, Mitoloji ve Dünya Medeniyetleri",
	"kuran-i-kerim-ve-meal": "Kur'an-ı Kerim ve Meal",
	tefsir: "Tefsir",
	"akaid-ve-ilmihal": "Akaid ve İlmihal",
	"hadis-ve-sunnet": "Hadis ve Sünnet",
	siyer: "Siyer",
	"ahlak-tasavvuf": "Tasavvuf",
	"islam-dusuncesi": "İslam Düşüncesi",
	edebiyat: "Edebiyat",
	"felsefe-ve-dusunce": "Felsefe ve Düşünce",
	bilim: "Bilim",
	"ani-ve-biyografi": "Anı ve Biyografi",
	"kisisel-gelisim": "Kişisel Gelişim"
}

export const LIBRARY_BOOKMARK_TAG_ORDER = LIBRARY_BOOK_CATEGORY_IDS.map(
	(categoryId) => LIBRARY_CATEGORY_LABELS[categoryId]
)

const LIBRARY_CATEGORY_ID_BY_LABEL = Object.fromEntries(
	LIBRARY_BOOK_CATEGORY_IDS.map((categoryId) => [
		LIBRARY_CATEGORY_LABELS[categoryId],
		categoryId
	])
) as Record<string, LibraryBookCategoryId>

export function getLibraryBookCategoryIdByLabel(
	label: string
): LibraryBookCategoryId | null {
	return LIBRARY_CATEGORY_ID_BY_LABEL[label] ?? null
}

export function getLibrarySubcategoryLabelsForCategory(
	categoryId: LibraryBookCategoryId
): readonly string[] {
	return LIBRARY_BOOK_CATEGORY_TREE[categoryId].map(
		(subcategoryId) => LIBRARY_SUBCATEGORY_LABELS[subcategoryId]
	)
}

export function libraryCategoryHasVisibleGenres(tag: string): boolean {
	return getLibraryBookCategoryIdByLabel(tag) !== null
}

type LibraryCategoryChipTone = {
	idle: string
	active: string
}

export const LIBRARY_CATEGORY_CHIP_TONES = {
	"tarih-ve-kultur": {
		idle: "border-amber-100 bg-amber-50 text-amber-800 hover:border-amber-200 hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:border-amber-800 dark:hover:bg-amber-900/50",
		active: "border-amber-200 bg-amber-100 text-amber-900 hover:border-amber-200 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/60 dark:text-amber-100 dark:hover:bg-amber-900/60"
	},
	islam: {
		idle: "border-emerald-100 bg-emerald-50 text-emerald-800 hover:border-emerald-200 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 dark:hover:border-emerald-800 dark:hover:bg-emerald-900/50",
		active: "border-emerald-200 bg-emerald-100 text-emerald-900 hover:border-emerald-200 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-100 dark:hover:bg-emerald-900/60"
	},
	digerleri: {
		idle: "border-zinc-100 bg-zinc-50 text-zinc-800 hover:border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60",
		active: "border-zinc-200 bg-zinc-100 text-zinc-900 hover:border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-100 dark:hover:bg-zinc-800/70"
	}
} as const satisfies Record<LibraryBookCategoryId, LibraryCategoryChipTone>

export function getLibraryCategoryChipClassName(
	tag: string,
	isActive: boolean
): string | undefined {
	const categoryId = getLibraryBookCategoryIdByLabel(tag)

	if (!categoryId) {
		return undefined
	}

	const tone = LIBRARY_CATEGORY_CHIP_TONES[categoryId]

	return isActive ? tone.active : tone.idle
}

export const LIBRARY_CATEGORY_PLACEHOLDER_CLASS_NAMES = {
	"tarih-ve-kultur":
		"bg-amber-50 text-amber-800/60 dark:bg-amber-950/40 dark:text-amber-200/60",
	islam: "bg-emerald-50 text-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200/60",
	digerleri: "bg-zinc-50 text-zinc-800/60 dark:bg-zinc-900/40 dark:text-zinc-200/60"
} as const satisfies Record<LibraryBookCategoryId, string>

export function getLibraryCategoryPlaceholderClassName(tag: string) {
	const categoryId = getLibraryBookCategoryIdByLabel(tag)

	if (!categoryId) {
		return "bg-muted text-muted-foreground"
	}

	return LIBRARY_CATEGORY_PLACEHOLDER_CLASS_NAMES[categoryId]
}
