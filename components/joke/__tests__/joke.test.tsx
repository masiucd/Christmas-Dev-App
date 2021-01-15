// import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Joke as J } from "@utils/types"

import { Joke } from "../joke"

describe("<Joke/>", () => {
  test("should render as expected", async () => {
    const joke: J = { id: "id", joke: "joke", status: 200 }

    const refetchJoke = jest.fn()

    render(<Joke joke={joke} refetchJoke={refetchJoke} />)

    // expect(screen.getByText(/loading/i)).toBeInTheDocument()
    // await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()

    expect(screen.getByAltText(/candy/i)).toBeInTheDocument()
    const refreshButton = screen.getByTestId("refresh-button")

    expect(screen.queryByTestId("joke-text")).not.toBeInTheDocument()
    userEvent.click(refreshButton)
    expect(screen.getByTestId("joke-text")).toBeInTheDocument()
    expect(refetchJoke).toHaveBeenCalled()
  })
})
