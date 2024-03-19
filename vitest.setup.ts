import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from "./src/mocks/server"
import "@testing-library/jest-dom"

beforeAll(() => server.listen({ onUnhandledRequest: 'error' })) // test would throw error if calls to undefined endpoints are made
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
