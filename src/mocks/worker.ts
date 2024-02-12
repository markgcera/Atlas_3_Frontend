import { setupWorker, SetupWorker } from "msw/browser"
import { handlers } from "./handlers.ts"

export const worker: SetupWorker = setupWorker(...handlers)

worker.events.on("request:start", ({ request }) => {
  console.log('MSW intercepted: ', request.method, request.url)
})