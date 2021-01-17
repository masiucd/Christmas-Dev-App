import { render, screen } from "@testing-library/react"
import Search from "../components/joke/search"

describe("Search", () => {
  test("list renders correctly after loading  ", () => {
    const termText = "termText"
    const handleChange = jest.fn()
    const jokes = [{ id: "id", joke: "simple joke" }]

    render(
      <Search
        isOpen
        termText={termText}
        isFetching={false}
        handleChange={handleChange}
        jokes={jokes}
      />
    )

    const searchInput = screen.getByRole("textbox", {
      name: /search for a joke/i,
    }) as HTMLInputElement
    expect(searchInput.value).toBe(termText)

    expect(screen.getByTestId("search-list")).toBeInTheDocument()
    expect(screen.getByText(jokes[0].joke)).toBeInTheDocument()
  })
  test("list does not render when loading  ", () => {
    const handleChange = jest.fn()
    const jokes = [{ id: "id", joke: "simple joke" }]

    render(
      <Search isOpen termText="" isFetching handleChange={handleChange} jokes={jokes} />
    )

    const searchInput = screen.getByRole("textbox", {
      name: /search for a joke/i,
    }) as HTMLInputElement

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument()
    expect(searchInput.value).toBe("")
    expect(screen.queryByTestId("search-list")).not.toBeInTheDocument()
  })
  test("when isOpen is set to false nothing gets rendered", () => {
    const handleChange = jest.fn()
    const jokes = [{ id: "id", joke: "simple joke" }]
    render(
      <Search
        isOpen={false}
        termText=""
        isFetching
        handleChange={handleChange}
        jokes={jokes}
      />
    )
    expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    expect(screen.queryByTestId("search-list")).not.toBeInTheDocument()
  })
})
