import { rest } from "msw"

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-auth", "true")
    return res(ctx.status(200))
  }),
  rest.get("/user", (req, res, ctx) => {
    const isAuth = Boolean(JSON.stringify(sessionStorage.getItem("is-auth"))) || false

    if (!isAuth) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    )
  }),

  rest.get("/joke", (req, res, ctx) => {
    return res(
      ctx.json({
        id: "id",
        joke: "joke",
        status: 200,
      })
    )
  }),
]
