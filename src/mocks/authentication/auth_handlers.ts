//src/mocks/authentication/auth_handlers.ts

import { http, HttpResponse } from "msw"
import resolveURL from "../../api/fetch";

export const mockCSRFToken: string = "SUPERSECRETCSRFTOKEN"
export const mockUsername: string = "testuser"
export const mockPassword: string = "mockpassword"


type responseData = {
  username: string | undefined
  password: string | undefined
  csrfmiddlewaretoken: string | undefined
}


export const auth_handlers = [
  http.post(resolveURL("/auth/csrf"), () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': `csrftoken=${mockCSRFToken}; expires=Tue, 31 Dec 2024 23:59:59 GMT; Max-Age=31449600; Path=/; SameSite=Lax`
      }
    })
  }),

  http.post<object, responseData>(resolveURL("/auth/login"), async ({ request }) => {
    const data = await request.json()
    if (data.csrfmiddlewaretoken !== mockCSRFToken) return new HttpResponse(null, {status: 403})

    if (data.username !== mockUsername || data.password !== mockPassword) return new HttpResponse(null, {status: 403})

    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': `csrftoken=${mockCSRFToken}; expires=Tue, 31 Dec 2024 23:59:59 GMT; Max-Age=31449600; Path=/; SameSite=Lax`
      }
    })
  }),

  http.post<object, responseData>(resolveURL("/auth/logout"), async ({ request }) => {
    const data = await request.json()
    if (data.csrfmiddlewaretoken !== mockCSRFToken) return new HttpResponse(null, {status: 403})

    return new HttpResponse(null, { status: 200 })
  })
]