import {beforeEach, describe, expect, test } from "vitest"
import {render, screen} from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TestPage from "@/routes/shared/TestPage"

const queryClient = new QueryClient()

describe("Test Page", () => {

  beforeEach(() => {
    render(<QueryClientProvider client={queryClient}><TestPage></TestPage></QueryClientProvider>)
  })

  test("Should show Hello World!", async () => {
    expect(await screen.findByText(/Hello World!/)).toBeDefined()
  })
})