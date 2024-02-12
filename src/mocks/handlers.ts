//src/mocks/handlers.ts

import { http, HttpResponse } from "msw"
import resolveURL from "../api/fetch.ts";

import { auth_handlers } from "./authentication/auth_handlers.ts";


const default_handlers = [
    http.get(resolveURL('/resource'), () => {
        return HttpResponse.json({
            result: "Hello World!"
        })
    })
]


export const handlers = [
  ...default_handlers,
  ...auth_handlers
]
