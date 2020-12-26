import { screen } from "@testing-library/react"
import Nav from "@components/layout/nav"
import { render } from "../../../test-utils/render"

describe("<Nav/>", () => {
  test("should renders correctly", () => {
    const theme = "dark"

    const handleTheme = jest.fn()

    render(<Nav className="main-nav" theme={theme} handleTheme={handleTheme} />)

    screen.debug()
  })
})
