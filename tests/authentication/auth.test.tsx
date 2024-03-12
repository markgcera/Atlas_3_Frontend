import { describe, expect, test } from "vitest"
import { getCSRF, signIn, signOut } from "../../src/api/authentication";
import { mockCSRFToken, mockUsername, mockPassword } from "../../src/mocks/authentication/auth_handlers";

describe("authentication helper functions", () => {

  test("should get csrf token", async () => {
    const response: Response = await getCSRF()
    expect(response.headers.has('Set-Cookie'))
    expect(response.headers.get('Set-Cookie')).toBe(mockCSRFToken)
  })

  test("should be able to sign in", async () => {
    const response = await signIn(mockUsername, mockPassword)
    expect(response.status).toBe(200)
  })

  test("should be able to sign out", async () => {
    const response = await signOut()
    expect(response.status).toBe(200)
  })
})