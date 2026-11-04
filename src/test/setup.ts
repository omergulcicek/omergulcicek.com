import "@testing-library/jest-dom/vitest"

import { server } from "@/test/server"
import { cleanup } from "@testing-library/react"
import { afterAll, afterEach, beforeAll } from "vitest"

// A request without a handler fails the test instead of reaching the network.
beforeAll(() => server.listen({ onUnhandledFrame: "error" }))

afterEach(() => {
	cleanup()
	server.resetHandlers()
})

afterAll(() => server.close())

// jsdom has no layout engine, so components that measure themselves get a no-op observer.
if (typeof document !== "undefined" && !globalThis.ResizeObserver) {
	globalThis.ResizeObserver = class ResizeObserver {
		observe() {}
		unobserve() {}
		disconnect() {}
	}
}

// cmdk scrolls the active item into view, which jsdom does not implement.
if (typeof document !== "undefined") {
	Element.prototype.scrollIntoView ??= () => {}
	// The router restores scroll on navigation; jsdom only logs "not implemented".
	window.scrollTo = () => {}
}
