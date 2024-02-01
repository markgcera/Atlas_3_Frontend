//src/mocks/browser.js

import { setupWorker } from "msw/browser"
import { http, HttpResponse } from "msw"
import resolveURL from "../api/fetch.ts";


const handlers = [
    http.get(resolveURL('/resource'), () => {
        return HttpResponse.json({
            result: "Hello World!"
        })
    })
]

export const worker = setupWorker(...handlers)

worker.events.on("request:start", ({ request }) => {
    console.log('MSW intercepted: ', request.method, request.url)
})