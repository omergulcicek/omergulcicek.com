export const LIBRARY_BOOK_CATEGORY_IDS = [
	"edebiyat",
	"felsefe-ve-dusunce",
	"islam",
	"tarih-ve-kultur",
	"bilim",
	"ani-ve-biyografi",
	"kisisel-gelisim"
] as const

export type LibraryBookCategoryId = (typeof LIBRARY_BOOK_CATEGORY_IDS)[number]

export const LIBRARY_BOOK_CATEGORY_TREE = {
	edebiyat: ["roman", "oyku", "siir", "deneme", "roman-ve-oyku"],
	"felsefe-ve-dusunce": ["felsefe", "siyaset-ve-toplum"],
	islam: ["dusunce", "tasavvuf", "siyer", "ilmihal-ve-dua"],
	"tarih-ve-kultur": ["tarih", "osmanli", "cumhuriyet", "roma", "kultur"],
	bilim: ["bilim-felsefesi", "bulmaca"],
	"ani-ve-biyografi": ["ani", "biyografi"],
	"kisisel-gelisim": ["kisisel-gelisim"]
} as const satisfies Record<LibraryBookCategoryId, readonly string[]>

export const LIBRARY_CATEGORY_LABELS: Record<LibraryBookCategoryId, string> = {
	edebiyat: "Edebiyat",
	"felsefe-ve-dusunce": "Felsefe ve Düşünce",
	islam: "İslam",
	"tarih-ve-kultur": "Tarih ve Kültür",
	bilim: "Bilim",
	"ani-ve-biyografi": "Anı ve Biyografi",
	"kisisel-gelisim": "Kişisel Gelişim"
}

export const LIBRARY_SUBCATEGORY_LABELS: Record<string, string> = {
	roman: "Roman",
	oyku: "Öykü",
	siir: "Şiir",
	deneme: "Deneme",
	"roman-ve-oyku": "Dünya Edebiyatı",
	felsefe: "Felsefe",
	"siyaset-ve-toplum": "Siyaset ve Toplum",
	dusunce: "Düşünce",
	tasavvuf: "Tasavvuf",
	siyer: "Siyer",
	"ilmihal-ve-dua": "İlmihal ve Dua",
	tarih: "Tarih",
	osmanli: "Osmanlı",
	cumhuriyet: "Cumhuriyet",
	roma: "Roma",
	kultur: "Kültür",
	"bilim-felsefesi": "Bilim Felsefesi",
	bulmaca: "Bulmaca",
	ani: "Anı",
	biyografi: "Biyografi",
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
	const categoryId = getLibraryBookCategoryIdByLabel(tag)

	if (!categoryId) {
		return false
	}

	const subcategoryIds = LIBRARY_BOOK_CATEGORY_TREE[categoryId]

	if (subcategoryIds.length !== 1) {
		return true
	}

	return subcategoryIds[0] !== categoryId
}

type LibraryCategoryChipTone = {
	idle: string
	active: string
}

export const LIBRARY_CATEGORY_CHIP_TONES = {
	edebiyat: {
		idle: "border-orange-100 bg-orange-50 text-orange-800 hover:border-orange-200 hover:bg-orange-100 dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-200 dark:hover:border-orange-800 dark:hover:bg-orange-900/50",
		active: "border-orange-200 bg-orange-100 text-orange-900 hover:border-orange-200 hover:bg-orange-100 dark:border-orange-800 dark:bg-orange-900/60 dark:text-orange-100 dark:hover:bg-orange-900/60"
	},
	"felsefe-ve-dusunce": {
		idle: "border-indigo-100 bg-indigo-50 text-indigo-800 hover:border-indigo-200 hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200 dark:hover:border-indigo-800 dark:hover:bg-indigo-900/50",
		active: "border-indigo-200 bg-indigo-100 text-indigo-900 hover:border-indigo-200 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-100 dark:hover:bg-indigo-900/60"
	},
	islam: {
		idle: "border-emerald-100 bg-emerald-50 text-emerald-800 hover:border-emerald-200 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 dark:hover:border-emerald-800 dark:hover:bg-emerald-900/50",
		active: "border-emerald-200 bg-emerald-100 text-emerald-900 hover:border-emerald-200 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-100 dark:hover:bg-emerald-900/60"
	},
	"tarih-ve-kultur": {
		idle: "border-amber-100 bg-amber-50 text-amber-800 hover:border-amber-200 hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:border-amber-800 dark:hover:bg-amber-900/50",
		active: "border-amber-200 bg-amber-100 text-amber-900 hover:border-amber-200 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/60 dark:text-amber-100 dark:hover:bg-amber-900/60"
	},
	bilim: {
		idle: "border-fuchsia-100 bg-fuchsia-50 text-fuchsia-800 hover:border-fuchsia-200 hover:bg-fuchsia-100 dark:border-fuchsia-900 dark:bg-fuchsia-950/40 dark:text-fuchsia-200 dark:hover:border-fuchsia-800 dark:hover:bg-fuchsia-900/50",
		active: "border-fuchsia-200 bg-fuchsia-100 text-fuchsia-900 hover:border-fuchsia-200 hover:bg-fuchsia-100 dark:border-fuchsia-800 dark:bg-fuchsia-900/60 dark:text-fuchsia-100 dark:hover:bg-fuchsia-900/60"
	},
	"ani-ve-biyografi": {
		idle: "border-zinc-100 bg-zinc-50 text-zinc-800 hover:border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60",
		active: "border-zinc-200 bg-zinc-100 text-zinc-900 hover:border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-100 dark:hover:bg-zinc-800/70"
	},
	"kisisel-gelisim": {
		idle: "border-lime-100 bg-lime-50 text-lime-800 hover:border-lime-200 hover:bg-lime-100 dark:border-lime-900 dark:bg-lime-950/40 dark:text-lime-200 dark:hover:border-lime-800 dark:hover:bg-lime-900/50",
		active: "border-lime-200 bg-lime-100 text-lime-900 hover:border-lime-200 hover:bg-lime-100 dark:border-lime-800 dark:bg-lime-900/60 dark:text-lime-100 dark:hover:bg-lime-900/60"
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
	edebiyat:
		"bg-orange-50 text-orange-800/60 dark:bg-orange-950/40 dark:text-orange-200/60",
	"felsefe-ve-dusunce":
		"bg-indigo-50 text-indigo-800/60 dark:bg-indigo-950/40 dark:text-indigo-200/60",
	islam: "bg-emerald-50 text-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200/60",
	"tarih-ve-kultur":
		"bg-amber-50 text-amber-800/60 dark:bg-amber-950/40 dark:text-amber-200/60",
	bilim: "bg-fuchsia-50 text-fuchsia-800/60 dark:bg-fuchsia-950/40 dark:text-fuchsia-200/60",
	"ani-ve-biyografi": "bg-zinc-50 text-zinc-800/60 dark:bg-zinc-900/40 dark:text-zinc-200/60",
	"kisisel-gelisim": "bg-lime-50 text-lime-800/60 dark:bg-lime-950/40 dark:text-lime-200/60"
} as const satisfies Record<LibraryBookCategoryId, string>

export function getLibraryCategoryPlaceholderClassName(tag: string) {
	const categoryId = getLibraryBookCategoryIdByLabel(tag)

	if (!categoryId) {
		return "bg-muted text-muted-foreground"
	}

	return LIBRARY_CATEGORY_PLACEHOLDER_CLASS_NAMES[categoryId]
}
