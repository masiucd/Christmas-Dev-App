import { screen, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { QueryClient, QueryClientProvider } from "react-query"
import { render } from "../test/testUtils"
import { SearchJokeWrapper } from "../components/joke/search-joke-wrapper"

const queryClient = new QueryClient()

describe("SearchJokeWrapper", () => {
  test("should render as expected ", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchJokeWrapper />
      </QueryClientProvider>
    )

    const searchTerm = "legs"
    let searchButton = screen.getByRole("button", { name: /search/i })
    expect(screen.queryByText(/Search for a joke/i)).not.toBeInTheDocument()

    userEvent.click(searchButton)
    expect(screen.getByText(/Search for a joke/i)).toBeInTheDocument()
    const searchInput = screen.getByTestId("search-input") as HTMLInputElement

    userEvent.type(searchInput, searchTerm)
    expect(searchInput.value).toBe(searchTerm)

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument()
    await waitForElementToBeRemoved(() => screen.getByTestId("loading-spinner"))
    expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()

    searchButton = screen.getByRole("button", { name: /close/i })
  })
})
