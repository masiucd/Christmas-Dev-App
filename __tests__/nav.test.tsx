import { fireEvent, screen } from "@testing-library/react"
import Nav from "@components/layout/nav"
import { render } from "@test-utils/render"

beforeAll(() => {
  jest.clearAllMocks()
})

afterAll(() => {
  jest.resetAllMocks()
})

describe("<Nav/>", () => {
  beforeEach(() => {
    const localStorageMock = (function () {
      let store: Partial<Record<string, string>> = {}
      return {
        getItem: jest.fn((key: string) => {
          return store[key] || null
        }),
        setItem: jest.fn((key: string, value: string) => {
          store[key] = value.toString()
        }),
        removeItem: jest.fn((key: string) => {
          delete store[key]
        }),
        clear: jest.fn(() => {
          store = {}
        }),
      }
    })()

    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    })

    window.localStorage.setItem("theme", "dark")
  })

  afterEach(() => {
    window.localStorage.clear()
  })

  test("should renders correctly", () => {
    const theme = "dark"

    const handleTheme = jest.fn()

    render(<Nav className="main-nav" theme={theme} handleTheme={handleTheme} />)
    expect(screen.getByText(/x-mas calendar/i)).toBeInTheDocument()
    const themeToggler = screen.getByTestId("theme-toggler")

    fireEvent.click(themeToggler)
    expect(handleTheme).toHaveBeenCalledTimes(1)

    expect(screen.getByTestId("main-styled-nav-list")).toBeInTheDocument()

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(window.localStorage.getItem("theme")).toBe(theme)
    expect(window.localStorage.getItem).toHaveBeenCalledWith("theme")
  })
})
