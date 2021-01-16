import { matchPattern, randomListValue } from "@utils/helpers"
import { rest } from "msw"
import { jokes as jokesData } from "./jokes-data"
import nanoid from "nanoid"

const BASE_URL = "https://icanhazdadjoke.com"
export const handlers = [
  rest.get(BASE_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "id",
        joke: randomListValue(jokesData),
        status: 200,
      })
    )
  }),

  // https://icanhazdadjoke.com/search?term
  rest.get(`${BASE_URL}/search`, (req, res, ctx) => {
    const term = req.url.searchParams.get("term")

    const jokes = matchPattern(jokesData, term ? term : "").map((joke) => ({
      id: nanoid.nanoid(),
      joke,
    }))

    return res(ctx.status(200), ctx.json({ jokes, status: "success" }))
  }),
]
