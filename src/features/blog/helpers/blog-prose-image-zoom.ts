import mediumZoom, { type Zoom } from "medium-zoom"

const BLOG_PROSE_ZOOM_UNDERLAY_ID = "blog-prose-zoom-underlay"

const BLOG_PROSE_IMAGE_ZOOM_OPTIONS = {
	margin: 24,
	background: "transparent",
	scrollOffset: 0
} as const

type BlogProseImageZoomState = {
	zoom: Zoom | null
	container: HTMLElement | null
	configured: boolean
}

const blogProseImageZoomState: BlogProseImageZoomState = {
	zoom: null,
	container: null,
	configured: false
}

function ensureBlogProseZoomUnderlay() {
	let underlay = document.getElementById(BLOG_PROSE_ZOOM_UNDERLAY_ID)

	if (!underlay) {
		underlay = document.createElement("div")
		underlay.id = BLOG_PROSE_ZOOM_UNDERLAY_ID
		underlay.className = "blog-prose-zoom-underlay"
		underlay.setAttribute("aria-hidden", "true")
		document.body.appendChild(underlay)
	}

	return underlay
}

function styleMediumZoomOverlayTransparent() {
	const overlay = document.querySelector<HTMLElement>(".medium-zoom-overlay")

	if (!overlay) {
		return
	}

	overlay.style.setProperty("background-color", "transparent", "important")
}

function showBlogProseZoomUnderlay() {
	ensureBlogProseZoomUnderlay()
	document.body.classList.add("blog-prose-zoom-active")
	styleMediumZoomOverlayTransparent()
}

function hideBlogProseZoomUnderlay() {
	document.body.classList.remove("blog-prose-zoom-active")
}

function handleBlogProseZoomResize() {
	if (!document.body.classList.contains("medium-zoom--opened")) {
		return
	}

	styleMediumZoomOverlayTransparent()
}

function configureBlogProseImageZoom(zoom: Zoom) {
	if (blogProseImageZoomState.configured) {
		return
	}

	blogProseImageZoomState.configured = true
	zoom.on("open", showBlogProseZoomUnderlay)
	zoom.on("close", hideBlogProseZoomUnderlay)
	window.addEventListener("resize", handleBlogProseZoomResize, {
		passive: true
	})
}

function getOrCreateBlogProseImageZoom() {
	if (!blogProseImageZoomState.zoom) {
		const zoom = mediumZoom(BLOG_PROSE_IMAGE_ZOOM_OPTIONS)
		configureBlogProseImageZoom(zoom)
		blogProseImageZoomState.zoom = zoom
	}

	return blogProseImageZoomState.zoom
}

export function syncBlogProseImageZoom(
	container: HTMLElement,
	zoom: Zoom = getOrCreateBlogProseImageZoom()
) {
	const images = container.querySelectorAll<HTMLImageElement>(
		"img[data-zoomable]"
	)

	if (images.length === 0) {
		return
	}

	zoom.attach(...images)
}

export function ensureBlogProseImageZoom(
	zoomRef: { current: Zoom | null },
	container: HTMLElement
) {
	blogProseImageZoomState.container = container
	const zoom = getOrCreateBlogProseImageZoom()
	zoomRef.current = zoom
	syncBlogProseImageZoom(container, zoom)
}

export function registerBlogProseZoomableRoot(root: HTMLElement) {
	const container = root.closest<HTMLElement>(".blog-prose")

	if (!container) {
		return
	}

	blogProseImageZoomState.container = container
	syncBlogProseImageZoom(container)
}

export function openBlogProseImageZoom(image: HTMLImageElement) {
	const container = image.closest<HTMLElement>(".blog-prose")

	if (!container) {
		return
	}

	blogProseImageZoomState.container = container
	const zoom = getOrCreateBlogProseImageZoom()
	zoom.attach(image)
	void zoom.open({ target: image })
}

export function scheduleBlogProseImageZoomSync(
	container: HTMLElement,
	zoomRef: { current: Zoom | null }
) {
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			ensureBlogProseImageZoom(zoomRef, container)
		})
	})
}

export function teardownBlogProseImageZoom() {
	hideBlogProseZoomUnderlay()
	window.removeEventListener("resize", handleBlogProseZoomResize)
	blogProseImageZoomState.zoom?.detach()
	blogProseImageZoomState.zoom = null
	blogProseImageZoomState.container = null
	blogProseImageZoomState.configured = false

	const underlay = document.getElementById(BLOG_PROSE_ZOOM_UNDERLAY_ID)
	underlay?.remove()
}
