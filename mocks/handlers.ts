import { matchPattern, randomListValue } from "@utils/helpers"
import { rest } from "msw"
import { jokes } from "./jokes-data"
import nanoid from "nanoid"

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

    const xs = matchPattern(jokes, term ? term : "").map((joke) => ({
      id: nanoid.nanoid(),
      joke,
    }))

    return res(ctx.status(200), ctx.json({ jokes: xs, status: "success" }))
  }),
]
