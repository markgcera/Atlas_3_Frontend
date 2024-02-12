//src/mocks/authentication/auth_handlers.ts

import { http, HttpResponse } from "msw"
import resolveURL from "../../api/fetch";


export const mockCSRFToken: string = "SUPERSECRETCSRFTOKEN"
export const mockUsername: string = "testuser"
export const mockPassword: string = "mockpassword"

export const auth_handlers = [
  http.post(resolveURL("/auth/csrf"), () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': mockCSRFToken
      }
    })
  }),

  http.post(resolveURL("/auth/login"), async ({ cookies, request }) => {
    if (!cookies.csrfmiddlewaretoken) return new HttpResponse(null, {status: 403})
    if (cookies.csrfmiddlewaretoken !== mockCSRFToken) return new HttpResponse(null, {status: 403})

    const data = await request.formData()
    if (data.get("username") !== mockUsername || data.get("password") !== mockPassword) return new HttpResponse(null, {status: 403})

    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': mockCSRFToken
      }
    })
  })
]