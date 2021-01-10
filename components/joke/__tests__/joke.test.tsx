import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import { Joke } from "../joke"

beforeAll(() => {
  window.fetch = jest.fn(
    (): Promise<any> =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: "id",
            joke: "joke",
            status: 200,
          }),
      })
  )
})

// beforeEach(() => {
//   jest.clearAllMocks()
//   fetch.mockClear()
// })

// afterAll(() => {
//   jest.clearAllMocks()
// })

describe("<Joke/>", () => {
  test("should render as expected", async () => {
    render(<Joke />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i))

    expect(screen.getByAltText(/candy/i)).toBeInTheDocument()
    const refreshButton = screen.getByTestId("refresh-button")

    expect(screen.queryByText(/joke/i)).not.toBeInTheDocument()
    fireEvent.click(refreshButton)
    expect(screen.getByText(/joke/i)).toBeInTheDocument()

    screen.debug()
  })
})
