import { render, screen } from "@testing-library/react"
import SearchTerm from "../search-term"

beforeEach(() => {
  window.localStorage.setItem("theme", "dark")
})

afterEach(() => {
  window.localStorage.clear()
})
describe("SearchTerm", () => {
  test("should render correctly with expected styles", () => {
    const term = "term"
    render(<SearchTerm term={term} />)
    expect(screen.getByText(term)).toBeInTheDocument()
    expect(screen.getByText(term)).toHaveStyle({
      marginBottom: "0.5em",
      padding: "1em 0.5em 0 0.5em",
      zIndex: 100,
    })
  })
})
