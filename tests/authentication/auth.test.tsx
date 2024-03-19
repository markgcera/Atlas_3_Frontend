import { describe, expect, test } from "vitest"
import Cookies from "js-cookie";

import {getCSRF, signIn, signOut} from "@/api/authentication.ts";
import { mockCSRFToken, mockUsername, mockPassword } from "@/mocks/authentication/auth_handlers";

describe("authentication helper functions", () => {

  test("should get csrf token", async () => {
    const response = await getCSRF()
    expect(response.status).toBe(200)
    expect(response.headers.has('Set-Cookie'))
    expect(response.headers.get('Set-Cookie')).contains(mockCSRFToken)
    expect(Cookies.get("csrftoken")).toBe(mockCSRFToken)
  })

  test("should be able to signIn", async () => {
    const response = await signIn(mockUsername, mockPassword)
    expect(response.status).toBe(200)
  })

  test("should be able to signOut and csrftoken cookie cleared", async () => {
    const response = await signOut()
    expect(response.status).toBe(200)
    expect(Cookies.get("csrftoken")).toBeUndefined()
  })
})