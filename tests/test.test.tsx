import {beforeEach, describe, expect, test } from "vitest"
import {render, screen} from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "../src/App"

const queryClient = new QueryClient()

describe("Vitest Test", () => {

  beforeEach(() => {
    render(<QueryClientProvider client={queryClient}><App></App></QueryClientProvider>)
  })

  test("Should show Hello World!", async () => {
    expect(await screen.findByText(/Hello World!/)).toBeDefined()
  })
})