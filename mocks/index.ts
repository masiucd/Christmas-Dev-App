/* eslint-disable @typescript-eslint/no-var-requires */
export const init = () => {
  if (typeof window === "undefined") {
    const { server } = require("./server")
    server.listen()
  } else {
    const { worker } = require("./browser")
    worker.start()
  }
}
if (typeof window === "undefined") {
  const { server } = require("./server")
  server.listen()
} else {
  const { worker } = require("./browser")
  worker.start()
}
// init()
