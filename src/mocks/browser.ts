//src/mocks/browser.js

import { setupWorker } from "msw/browser"
import { http, HttpResponse } from "msw"

const handlers = [
    http.get('/resource', () => {
        return HttpResponse.text("Hello World!")
    })
]

export const worker = setupWorker(...handlers)

worker.events.on("request:start", ({ request }) => {
    console.log('MSW intercepted: ', request.method, request.url)
})