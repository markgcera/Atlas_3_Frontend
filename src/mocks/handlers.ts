//src/mocks/handlers.js

import { http, HttpResponse } from "msw"
import resolveURL from "../api/fetch.ts";


export const handlers = [
    http.get(resolveURL('/resource'), () => {
        return HttpResponse.json({
            result: "Hello World!"
        })
    })
]

