import { randomListValue } from "@utils/helpers"
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
]
