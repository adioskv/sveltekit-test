import { text } from "@sveltejs/kit"

export async function GET () {
  return text("GET endpoint response!")
}

export async function fallback({request}) {
  return text(`Caught ${request.method} method request`)
}