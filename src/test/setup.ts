import "@testing-library/jest-dom/vitest"

import { cleanup } from "@testing-library/react"
import { afterAll, afterEach, beforeAll } from "vitest"

import { server } from "@/test/server"

// jsdom lacks the layout APIs cmdk and the dialogs call; nothing is measured in tests anyway.
if (typeof window !== "undefined") {
  if (!Reflect.has(window, "ResizeObserver")) {
    Reflect.set(
      window,
      "ResizeObserver",
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
      }
    )
  }
  if (!Reflect.has(Element.prototype, "scrollIntoView")) {
    Reflect.set(Element.prototype, "scrollIntoView", () => {})
  }
}

beforeAll(() => server.listen({ onUnhandledFrame: "error" }))

afterEach(() => {
  cleanup()
  server.resetHandlers()
})

afterAll(() => server.close())
