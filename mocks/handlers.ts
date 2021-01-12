import { matchPattern, randomListValue } from "@utils/helpers"
import { rest } from "msw"
import { jokes } from "./jokes-data"

export const handlers = [
  rest.get("https://icanhazdadjoke.com", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "id",
        joke: randomListValue(jokes),
        status: 200,
      })
    )
  }),

  // https://icanhazdadjoke.com/search?term
  rest.get("https://icanhazdadjoke.com/search", (req, res, ctx) => {
    const term = req.url.searchParams.get("term")
    // console.log(req.url.searchParams)

    return res(ctx.status(200), ctx.json({ hello: "hello", term }))
  }),
  rest.get("/search", (req, res, ctx) => {
    const term = req.url.searchParams.get("term")

    const xs = matchPattern(jokes, term ? term : "")

    return res(ctx.status(200), ctx.json({ jokes: xs, term }))
  }),
]
