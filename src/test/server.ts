import { setupServer } from "msw/node"

/** Shared MSW server; add handlers per test with `server.use(...)`. */
export const server = setupServer()
