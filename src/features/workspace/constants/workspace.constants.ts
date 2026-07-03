import type { WorkspaceGearItem } from "@/features/workspace/types/workspace.types"

export const WORKSPACE_CONTENT = {
	pageTitle: "Çalışma Alanı",
	pageDescription:
		"Çalışma masamdaki donanım, mobilya ve aksesuarlar; kurulum ve tercihlerim.",
	deskPhoto: {
		src: "/workspace/calisma-masam.png",
		alt: "Ömer Gülçiçek — çalışma masası kurulumu",
		width: 1024,
		height: 559
	},
	tableColumns: {
		product: "Ürün",
		specs: "Özellikler",
		review: "İncele"
	},
	reviewLinkLabel: "İncele"
} as const

export const WORKSPACE_GEAR_ITEMS: readonly WorkspaceGearItem[] = [
	{
		product: "Apple Studio Display",
		specs: "27\" 5K Retina, P3, True Tone",
		href: "https://www.apple.com/tr/studio-display/"
	},
	{
		product: "Apple Mac Studio",
		specs: "Apple M4 Max, 14 çekirdek CPU",
		href: "https://www.apple.com/tr/mac-studio/"
	},
	{
		product: "Apple Magic Trackpad",
		specs: "Multi-Touch, kablosuz",
		href: "https://www.apple.com/tr/shop/product/MXKA3TU/A/magic-trackpad-beyaz-multi-touch-yüzey"
	},
	{
		product: "Logitech G513 Mekanik Klavye",
		specs: "Kablolu, Romer-G switch, RGB",
		href: "https://www.logitechg.com/en-us/shop/p/g513-backlit-mechanical-gaming-keyboard"
	},
	{
		product: "Logitech G703 Mouse",
		specs: "Kablosuz, HERO 25K sensör",
		href: "https://www.logitechg.com/en-us/shop/p/g703-hero-wireless-gaming-mouse.910-005638"
	},
	{
		product: "Nurus OTTO Yükselebilir Masa",
		specs: "70×140 cm, yükseklik ayarlı",
		href: "https://www.amazon.com.tr/nurus-Y%C3%BCkseklik-Sit-Stand-%C3%87al%C4%B1%C5%9Fma-Y%C3%B6netici/dp/B07HH6XWPP"
	},
	{
		product: "Herman Miller Embody Sandalyesi",
		specs: "Ergonomik, pixel destek, ayarlanabilir",
		href: "https://www.hermanmiller.com/products/seating/office-chairs/embody-chairs/"
	}
]
